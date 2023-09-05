import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`/api/books?search=${searchTerm}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error searching for books', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a book"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {results.map((book) => (
        <div key={book._id}>
          <h2>
            <Link to={`/book/${book._id}`}>{book.title}</Link>
          </h2>
          <p>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Search;
