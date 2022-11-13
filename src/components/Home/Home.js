import React ,{useEffect}from 'react'


import MovieListing from "../MovielListing/MovieListing"

import { useDispatch } from 'react-redux'
import {fetchAsyncMovies,fetchAsyncShows } from "../../features/movies/movieSlice"

export default function Home() {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    const movieText= "Avengers";
    const showsText = "Friends"
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showsText));
  
// eslint-disable-next-line
  },[dispatch])

  return (
    <div>
      <div className="banner">
        <MovieListing/>
      </div>
    </div>
  )
}
