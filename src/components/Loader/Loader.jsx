import { ThreeCircles } from 'react-loader-spinner';
import { LoderBeckdrop } from './Loader.slyled';

export const Loader = () => {
  return (
    <LoderBeckdrop>
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#ffc700"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoderBeckdrop>
  );
};

export default Loader;
