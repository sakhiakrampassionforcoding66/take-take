import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LatestMovies from './components/Movies/LatestMovies';
import MovieDetails from './components/Movies/MovieDetails';
import MovieResults from './components/Movies/search/MovieResults';
import Navbar from './components/Navbar/Navbar';
import { SearchProvider } from './components/Movies/search/SearchContext';

function App() {
  return (
    <SearchProvider>
      <Router>
        <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<LatestMovies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} />
            <Route path="/search" element={<MovieResults />} />
          </Routes>
        </div>
      </Router>
    </SearchProvider>
  );
}

export default App;
