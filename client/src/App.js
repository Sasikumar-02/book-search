import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Search from './components/Search';
import BookDetails from './components/bookDetails'; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/books/search" element={<BookDetails />} /> 
      </Routes>
    </Router>
  );
}
export default App;
