import React from 'react';
import Nav from '../components/movies_series/Nav';
import MovieTableBody from '../components/tables/movie_table_body';
import Footer from '../components/footer/footer';
import { MovieProvider } from '../contexts/MovieContext';
const MovieTable = () => {
  return (
    <MovieProvider>
    <div>
        <Nav/>
        <MovieTableBody/>
        <Footer/>
    </div>
    </MovieProvider>
  )
}

export default MovieTable