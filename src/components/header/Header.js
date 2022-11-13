import React from 'react'
import {Link} from "react-router-dom"
import { useDispatch } from "react-redux";
import {fetchAsyncMovies,fetchAsyncShows } from "../../features/movies/movieSlice"
import "./header.scss"
import movie from "../../images/movielogo.jpg"

export default function Header() {
  const [data,setData] =React.useState("")
  const dispatch=useDispatch();
  const submitHandler=(e)=>{
    
    e.preventDefault();
    if(data==="") return alert("Please search Movie Or SHOWS");
    dispatch(fetchAsyncMovies(data));
    dispatch(fetchAsyncShows(data));
    setData("");

  }
  return (
    <div className="header">
    
      <div className="logo"> <Link to="/"> <img src={movie} alt="user" /></Link></div>

      <div className="searchBox">
        <form onSubmit={submitHandler}>
          <input type="text" value={data}placeholder="Search Movies Or Shows" onChange={(e)=>setData(e.target.value)}/>
          <button type="submit" className=""><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="heading">
        <h3>Movie App</h3>
      </div>
    </div>
  )
}
