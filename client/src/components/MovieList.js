import React from "react";
import MovieCard from "./MovieCard";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";

import "pure-react-carousel/dist/react-carousel.es.css";

const MovieList = ({ title, movies, searchMovie = false }) => {
  return (
    <div className="px-2">
      <h1
        className={`${
          searchMovie ? "text-black" : "text-white"
        } font-semibold text-4xl py-3 `}
      >
        {title}
      </h1>
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={3}
          >
            <Slider>
           
      <div className="flex overflow-x-auto relative no-scrollbar cursor-pointer  ">
        <div className="flex items-center ">
              {movies?.map((movie) => {
            return (
              <>
              <MovieCard
                    key={movie.id}
                    movieId={movie.id}
                    posterPath={movie.poster_path}
                    />
              </>
                  );
                })}
        </div>
      </div>
           
            </Slider>
                <ButtonBack className="hidden md:block bg-white absolute my-[-150px] p-3 opacity-30 rounded-full"><MdKeyboardArrowLeft className="text-2xl"/></ButtonBack>
                <ButtonNext className="hidden md:block absolute p-3 my-[-150px] opacity-30 bg-white rounded-full right-3 "><MdKeyboardArrowRight className=" text-2xl "/></ButtonNext>
          </CarouselProvider>
    </div>
  );
};

export default MovieList;
