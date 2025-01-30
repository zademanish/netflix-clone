import React, { useState } from 'react';
import axios from "axios";
import { SEARCH_MOVIE_URL, options } from '../utils/constant';
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from '../redux/searchSlice';
import { setLoading } from '../redux/userSlice';
import MovieList from './MovieList';

const SearchMovie = () => {
    const [searchMovie, setSearchMovie] = useState("");
    const dispatch = useDispatch();
    const isLoading = useSelector(store => store.app.isLoading);
    const { movieName, searchedMovie } = useSelector(store => store.searchMovie);
    
    const submitHandler = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        try {
            const res = await axios.get(`${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`, options);
            const movies = res?.data?.results;
            dispatch(setSearchMovieDetails({ searchMovie, movies }));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoading(false));
        }
        setSearchMovie("");
    }

    return (
        <>
            <div className='flex justify-center my-4 w-[100%]'>
                <form onSubmit={submitHandler} className='w-[95%] md:w-[50%] bg-white rounded-md'>
                    <div className='flex justify-between shadow-md border-2 px-2 py-1 md:p-2 border-black rounded-md w-[100%]'>
                        <input value={searchMovie} onChange={(e) => { setSearchMovie(e.target.value) }} className='md:w-full py-2 outline-none rounded-md text-[0.9rem] md:text-lg' type="text" placeholder='Search Movies...' />
                        <button className='bg-red-800 text-white font-semibold rounded-md px-3'>{isLoading ? "loading..." : "Search"}</button>
                    </div>
                </form>

            </div>
            {
                searchedMovie ? ( <MovieList title={movieName} searchMovie={true} movies={searchedMovie}/>) : (<h1 >Movie Not Found!!</h1>)
            }
           
        </>

    )
}

export default SearchMovie