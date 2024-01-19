import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getCastMovie } from '../../services/movies';
import { toast } from 'react-toastify';
import { Img, Item, Text, List, Title, Span } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const defaultImg =
    'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIWFRUVFhUVEhUWFRYXFhUVFRUWFxUVFxUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EAD0QAAIBAgQDBQQIBAYDAAAAAAABAgMRBBIhMQVBUSJhcYGRBjKhsRMjQlJiwdHwkrLh8RUzU3KiwhRj0v/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD4aAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZ/4eqai6t3OSUo0o6NRaTjKpL7Ka2W9umh09lOFPFYqnSUVK7cmnomoJyab5J2t5nsOOTwmCnJzksRX7TlC29RvVzf2F+FcnbqB4/E0PoqKlJKM6j7EEtVBbzd9dejKrN+7HfiGNnWqSqVHeUnd9F0SXJIjAeheBjiMPTnTilUisk7aZpLbNyu47PnY88WXAuKvD1M1s0JLLUg/tR7ujXJkz2pwcMyxNHWjVb1tbLU1zRa68/UChAAAAAAAAAAAAAAAAAAAAAASsNgZzWbSMNnObyxvvZP7T7ld9x1lSw8N6kqj6U45I/wAc1f8A4gWHsu8kMTVvZqmqcXre9SSejXO0GUdV3bfeTI8QUYuEKaUZNOWaUpN5c1r2aX2uhHniW+UV4RivyuBwM2OksRN/afqayqSe7b82Bqen4NiFLDV8PK/ag5xXLPBZo+DureZ5hSfU6U8TOO05LwbA5AkQxb2cYSXfBL4xs/id4vDzeqlRfVP6SF7fdfaS85PUCADvjMJKlLLKz0TjJO8ZRe0ovmn/AEdmmjgAAAAAAAAAAAAAADMbX125mABK4hi3Ulf7K0px5QhyjFcl/cigAAAAAAAAAAAB2q1W4xje+W9u67vZd3PzZxAAAAAAAAAAAAAAAAAAAAAAAAAAGQgwMAAAAAAAAAAAAAAAAAAAAAAAAHWph5xjGcoSUZ3yScWlK1r5W9Ha626nsfZr2XjCjLHYuN4Qi50qL+20uzKf4b/Z589NHx9qKmfA4WU39bVqV68l+CTjShZcopUV2Vtm8QPHgGyQGEeh4jwKpKhha0IxcZ0moxUkpzlCc3UtB6yautrvVFBlPq2D4dTr+z0pSdqmGbr0Zc4tZU4+Eoxvpzy9APk7MHsuL8Op4qlTxFPs15xvUW0aklo3+GTa32fxPH1IOLaaaa3T3QGoAAAAAAAAAAAAAAAAOlCjKclGKcpSdklu2z2vBPYVaTxlTKv9KDWbwlPZeV/FAeKw9CU5KEIuUnpGMU22+5Lc997K+xrp3r4imqkoJShQvpfe8+Tf4fXoXuAx2HoXp4alCnmtHsr6yUdbZpu8nfX9sruK+0KVS1OejVpJJrtR/EBX+1ftDKrQnFxUMztk5rXc8njuJTq06EJPSjB04+GZyf8AMvQme0k25N2VnZu3VlEgMuJtE2crI1TV18QO2Ho5tXt8y4lx+pDCVMKvdqZbu+qSkpWXjaxDwsc7tdRildylpGKXhu+SS3bK7ESuwPS8OxOWjTXc38WcOIzhUfbXmveXg+ncyow+JaSXR6EmdWTWitfdgca/C5rWPbj1jv5x35kFol08XKOzaXOxIrYqM/fS2Xj6gVYO2IppPss4gAAAAAAAAADMbX1AsuGYj6GSl9p8/uq/LvepcYr2mbbd3zPLzndmgHrMFxHs5m7XXalfXswTdl3NSsV+P9patVOErSi2mr3TVvB8yJSlF0f8y0o3uvG9ktdSuAk1cU3DL33bu/JLuGCo52487Nry3I6OuGrOElJbr49V5oDWutdNuXgcy24ph8tChL7zqW71eNvmysoxvJJc2kvNgXFKlOlRd21TqJOa01cXeLV9nf52Kacru5fe02IThh4R/wBNSl3t6L5P1KR07Ac0dYNvds3pxtrZPxNnL8K8gI0jFzpV1OdgFwzAAAAAAAAAAAAAAABlIyo6XDACIijZICTicXKVKnTe1NzyvunldvJp+pDjJpprdaolOndNEVAdqd5O7bdjepul6kmjRtE5U6d5MDRaGTpVp2vfqrfmaOAHOSNai0O0oaHG2wGko7+hjKdpKy+JjKBHBtNamoAAAAAAAAAAygNtzNjFjKYCKO0YGkFoSYQ2A6UoHLDYa9R22T+JJlPJBvnsvF7EjhtGyS5sDapTSRyoULVLPnqTMVHVLvJP/j6rrGzv3P8AsBWVqKad+Sb8ER6VDT4JfmWlSndu3Pfpv+jR1p4WyAqJYZ/qQ6UO3boX+Ip2Tf7/AHqUVN2U5ePq3ZAcvel3I6TiZw9KyXfsjea1Ag1UczviUcAAAAAAAAZaAwZRtGJqwOkQ4GsHqb1G0BtTlyfqSobkei7p3N4VWou+vT8gO9Z5pJco6vxLPhkk5N8oopqDdn13bLXBySlbk1bxb/bAs6VC7Tlppma9GrdSV9F9I9NFpfvsa04OWstuS7u/9+paYWCAhYrDKMUlzfm+9msaRMxyvUjEjqp2nHoBU8Y7MfEoYq1Pxkvgm/yLjjs71Ix8/wAioxLSUU1p2n5q2/qB1wtN2c3z28DlPmdcE24tt7vQ51QIeKWiIxMxS0IYAAAAABlGyMRNkBiBie5lbiogNYs74lbM4HebvBdzsBrReptVd2orl8znCVnczSe7YE/DR5Fpw+gk8z1fLuKmhK2r8kWWGq6XYF9RqXLHDS2KTD1NUWWEq62A6uX1rfRFfTqJ1ZeLJNWpb6SXRFRhK6bkwIfEpXrPuiis4ntHrrp4vX5Eyq71JPy9CtxEs1S3T+4FlSjlgu4izep3nVukR5AcsUuyQSxrrssrgAAAAADeBsjWBvYDEhVQkje+gHA2T0a8zVhMAWuE4dOqrU0nkjmleUY6u1krvVt3siriS6eKlDWLlF2tK3TSwGIy11J9KpfQgLZaeRLw1KWjUW18fACdCv2oq/X5Ejh/Ee0m2rN23V9Ertq90tVraz16O0aph2qilGEnFxd1lejejTXl8TlTwjjqqdTxab8tEB6DE1UozfW/yKPAytmfLb4nadZuk1JNSTSs01dS0W5zhhVKGW+ml5XtryAjTdm33lZR99vx+ZNnBwvGW6fw5ELDx58wJ8YaX5cjjY2o0ZbvbkjpKlYDjW91laWNTZlcAAAAAygNo7nU5w3OjQCRh7GU+4S2YHAykYR0oRu0gMQhe/cr/FEuUNl1yL+b9CPHTNdPZrw13fcS6U8zSd17tnz7Kf8A9AWGDpxd1Zvlpa5aYXBRTvaev/rfzSsROH2b7bv0do/oes4bw/Naz0trpHT4ARsNQjpe/nF/oTo0YrqvJnepgqsbOLjPXbJZ26p5rXLGlhrpNS8mmvXUCkqShbab8KVR/wDUratKnK6+jlrpL6qolLpfspHouKVpUZUV2XGrJwbd+y8rcXvs2reZriMBOrpKSivwx136u4Hz/jeFhTjK0Mrtyvq9lfp5kLhmHbjzStd6aHqePcCjGDjFdppq/NtLMrvn7rPL4DGVPosnJO2u6AlYqWVWirvryREngqjWZuL57/0OkITd/C/U3o4hRgota8gK+pSsmVxa4oq2BgAADMTBtADaJ1OVzfUDoc6kro3ptrv8zfFPsrffYCIdKG6NDam9QLmjRy4q33oqS700r/JlfGVnF90fki4rY1KpCUqclKnrdaxcGtfyZV4aFOUrTm4LKrSWuvLR7ru3AtMBJXt0PXcIxrjG+97r00PAYarKnPNa6Wr8Otj2OBrx7Cd7NX3tvqB6KHGoX1fddd2/5kvDcQhJrVa7X58jx1SjSdL6aKcXFOTvdqS5oj8Jx3bjlyvXVTTvHtaKLv0tqB7XjzUqkKbSccrbTSa3VmSIztbplS9Cqx9XNin3U4f8m/0Jqn2etv6f1Aie0VS1J1Fq4Wm7dINOS/hzep4D/CpqVTK4uOd27WtnK8dPBr1PoUpRlG2jTufOeMzdFqOt12b33VNrI+/sun6ASVwrEJ+5bo7q25s+GNK9R+SKuhiJ1Gs82l3yaLatic0srlm62YFLjGr2Wy2KstcbSUXZFWwMAAAbQNTZAddDMYmF4G8X3AdqSOWOik1bzJNFI5cTp2ysCEb0tzRm9LdAej4kn9FGcZWeVp99o7FFQqtP99H+pc4p5sM/w2fgUUXqBOrSedW6JL9D0mDSlCnd5ZKPZfLTRxkvzPMrWxfYGr9Wn91tP5r5gduE4+UV9FUSyNWs1dNNWat4GOJ0YKEI042TqxWnO7Wt929CBTleMWt1bc68Tn9VbVapprk1zQHqHVbrTm+cYR9F/Un4ato0/wB8meJ4dxdvKqk23te3o3Y9Lh6/a/fMDrK0rqWmr0u0pddeeveeU9tIJSTX3l8Y2/6I9HdZnHW178t7K9+j3PO+1+sYf7kvhL9QK/hVOOe3ZkrPna/mm7FhiqEGvdatyiml/Fa79SDwOnKbcYqGdLsqUIyv4XaJuIlOGlWVnvlgqWy30Sb7wKXEvufx+ZXMscVWTnZarkyvnu/EDUAADdbGh0itANox6G9OT5msY22NogS6Jnicewn3mtFnXHK9J9zQFSbQNDeAF5SxEfoZqXOLSffbQpWtWifntTkuqIdT3wJeGgpq17S5Pl/QtOFzdpwas7XXfZWdv3yKXh6buuifyJXD55akXfnbyYG1DENJLkWFavQnBQk5PoktUynlKzyvwuSINxaa338gN8Ph8svD1PQ4Wrqimc769dydSna3dqBaY3Nq4tK3Tmt+a31KH2mnmhD/AHL+VljiqsWmmlspJZW7pKzta12rLmef4tiM0YaW10Wmyvrou9ASeD2bzJWlFatJvTq4r5lti5RnHtJac0suvJrV/oVXAJatq68N0y0ryhJ6qLlzabzPxV/mB5io4tyy233S0a5PZP4ECpuy6xeGhFvJ5lLU3YGoAAHWOxkAYTMwYAEqjuSsT/lSAApjaAAFhNfVvy+aOMJO8ujkk1ya15eSAA6cMgvpJLlkm/SLa+KMU/fXiABNxvuX/ERKk3mXLsR205IACbhnp5FpQjt4AAcOI7QfPa/hexS4l3nC/wB0ACx4LFZ5K2lo6fxIsMY9EABQYybW1vRFY2YAAAAf/9k=';

  useEffect(() => {
    setIsLoading(true);
    getCastMovie(movieId)
      .then(setCast)
      .catch(error => toast.error(`Oops...Something went wrong: ${error}`))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      {cast?.length > 0 ? (
        <List>
          {cast.map(({ id, name, character, profile_path }) => (
            <Item key={id}>
              <Img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : defaultImg
                }
                alt={name}
              />
              <Text>
                Actor: <Span>{name}</Span>
              </Text>
              <Text>
                Character: <Span>{character}</Span>
              </Text>
            </Item>
          ))}
        </List>
      ) : (
        <Title>No information about the actor this movie.</Title>
      )}
    </>
  );
};

export default Cast;
