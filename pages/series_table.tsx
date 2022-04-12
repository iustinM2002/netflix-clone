import React from 'react';
import Nav from '../components/movies_series/Nav';
import SeriesTableBody from '@/components/tables/series_table_body';
import Footer from '../components/footer/footer';
import { MovieProvider } from '../contexts/MovieContext';
const SeriesTable = () => {
  return (
    <MovieProvider>
    <div>
        <Nav/>
        <SeriesTableBody/>
        <Footer/>
    </div>
    </MovieProvider>
  )
}

export default SeriesTable