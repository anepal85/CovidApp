import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(country);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter country name"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;