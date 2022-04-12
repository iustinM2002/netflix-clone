import React from 'react';
// importing components
import Nav from '@/components/movies_series/Nav';
import MoviesFirst from '@/components/movies_series/movies_first';
import MoviesBody from '@/components/movies_series/movies_body';
import {MovieProvider} from 'contexts/MovieContext';
import Footer from '@/components/footer/footer';
const Movies = () => {
  
  return (
    <MovieProvider>
    <div className='bg-[#141414]' >
        <Nav/>
        <MoviesFirst/>
        <MoviesBody/>
        <Footer/>
    </div>
    </MovieProvider>
  )
}

export default Movies