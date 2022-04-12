import React,{useState,useContext} from 'react';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { MovieContext } from 'contexts/MovieContext';



const MovieSerie = ({movie_serie}:{movie_serie:any}) => {
    const {selectedMovies} = useContext(MovieContext);
    const [isSelected,setIsSelected,selectedMovie,setSelectedMovie] = selectedMovies;

    const selectMovieHandler = () =>{
       setIsSelected(true);
       setSelectedMovie(movie_serie)
    }
  return (
    <motion.div onDoubleClick={selectMovieHandler} className='movie w-[500px] min-h-[150px] bg-cover bg-center mx-[0.1rem] cursor-grab'  style={{backgroundImage: "url(\"https://image.tmdb.org/t/p/original" + movie_serie.backdrop_path + "\")"}} >
            
    </motion.div>
  )
}

export default MovieSerie