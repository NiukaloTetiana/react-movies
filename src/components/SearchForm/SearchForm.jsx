import { useState } from 'react';
import { HiMiniMagnifyingGlassCircle } from 'react-icons/hi2';
import { toast } from 'react-toastify';
import { Button, Form, Input } from './SearchForm.styled';

export const SearchForm = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ query });

    if (!query) {
      setSearchParams({});
      toast.info('No-no! You need to enter search word.');
      return;
    }
    setQuery('');
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    setQuery(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        type="text"
        placeholder="Search movies..."
        value={query}
      />

      <Button type="submit">
        <HiMiniMagnifyingGlassCircle size="28" />
      </Button>
    </Form>
  );
};

export default SearchForm;
