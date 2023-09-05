import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookDetails = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/books/search`);
        setBooks(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (books.length === 0) {
    return <p>No books found</p>;
  }

  return (
    <div>
      {books.map((book) => (
        <div key={book._id}>
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Published Date: {book.publishedDate}</p>
          <p>Genre: {book.genre}</p>
          <p>ISBN: {book.isbn}</p>
        </div>
      ))}
    </div>
  );
};

export default BookDetails;
