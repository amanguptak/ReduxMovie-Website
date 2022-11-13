import React from 'react'
import { useSelector } from 'react-redux'
import Slider from "react-slick";
import {getAllMovies,getAllShows} from "../../features/movies/movieSlice"
import MovieCard from "../MovieCard/MovieCard"
import "./MovieListing.scss"

const MovieListing = ()=>{
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  } ;
const movies =useSelector(getAllMovies)
const shows= useSelector(getAllShows)


// we should use {} symbol inside return above return not
let showMovies ,showShows = "";
showMovies = 
movies.Response === "True" ? (

  movies.Search.map((movie,index) => (
   <MovieCard  key ={index}  data ={movie}  />))

) : (
  <div className="movieError">
    <h1> {movies.Error}</h1>
  </div>

);
showShows=shows.Response === "True" ? (

  shows.Search.map((show,index) => (
   <MovieCard  key ={index}  data ={show}  />))

) : (
  <div className="movieError">
    <h1> {shows.Error}</h1>
  </div>

);
return (<div className="movieWrap">
  <div className="movie-list">
    <h2>MOvies</h2>
    <div className="movie-container">
      <Slider {...settings} >{showMovies}</Slider>
      
    </div>
</div>

<div className="show-list">
<h2> TV-Shows</h2>
    <div className="movie-container">
    <Slider {...settings} > {showShows}</Slider>
     
    </div>
</div>
</div>
)
}


export default MovieListing;