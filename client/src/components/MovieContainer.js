import React from 'react'
import MovieList from './MovieList';
import {useSelector} from "react-redux";

const MovieContainer = () => {
  const movie = useSelector(store=>store.movie);
  
  return (
    <div className='bg-black'>
      <div className=' relative z-10 pb-32 md:pb-4' >
        <MovieList title={"Popular Movies"} movies={movie.popularMovie}/>
        <MovieList title={"Now Playing Movies"} movies={movie.nowPlayingMovies}/>
        <MovieList title={"Top Tated Movies"} movies={movie.topRatedMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movie.upcomingMovies}/>
      </div>
    </div>
  )
}

export default MovieContainer