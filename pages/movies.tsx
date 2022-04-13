import React,{useContext} from 'react';
import { NextPage } from 'next';
// importing components
import Nav from '../components/movies_series/Nav';
import MoviesFirst from '../components/movies_series/movies_first';
import MoviesBody from '../components/movies_series/movies_body';
import Footer from '../components/footer/footer';
import Link from 'next/link';
// provider
import {MovieProvider} from 'contexts/MovieContext';
import { LoginContext } from 'contexts/loginContext';

const Movies:NextPage = (): JSX.Element => {
  const  [loginData,dispatch,isLogged,setIsLogged] = useContext(LoginContext);
   
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

// const loggin = JSON.parse(sessionStorage.getItem('logged') || '');
// : <div className='bg-[#141414] min-h-[100vh] w-full flex flex-col justify-center items-center text-white' >
//   <h1>You are not logged to have acces, please login or register. </h1>
  //   <Link href='/sign_in'>Sign In</Link>
  //  </div>}