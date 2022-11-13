import React, { useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncDataDetails,
  getSelectedData,
  removeSelectedData
} from "../../features/movies/movieSlice";

import "./MovieDetail.scss"
export default function MovieDetail() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedData);
  console.log(data);
  useEffect(() => {
    dispatch(fetchAsyncDataDetails(imdbID));

    return ()=>{
   dispatch(removeSelectedData())  
    }
  }, [dispatch, imdbID]);

  return (
    <div className="movie-details">
      {Object.keys(data).length===0 ?(
          <div><Spinner animation="border" variant="warning" />Loading....</div>
      ):(
      <>
      <div className="left">
        <div className="movie-title">{data.title}</div>
        <div className="movie-rating">
          <span>
            IMDB Rating: <i className="fa fa-star">{data.imdbRating}</i>
          </span>
          <span>
            IMDB Vote: <i className="fa thumbsup">{data.imdbVotes}</i>
          </span>
          <span>
            Runtime: <i className="fa fa-film">{data.Runtime}</i>
          </span>
          <span>
            Year: <i className="fa fa-calendar">{data.Year}</i>
          </span>
        </div>
        <div className="plot">{data.Plot}</div>

        <div className="info">
          <div>
          <span>Director</span>
          <span>{data.Director}</span>
          </div>
          <div>
          <span>
            Actors
          </span>
          <span>{data.Actors}</span>
          </div>
          <div>
          <span>Generes</span>
          <span>{data.Generes}</span>
          </div>
          <div>
          <span>Language</span>
          <span>{data.Language}</span>
          </div>
          <div>
          <span>Awards</span>
          <span>{data.Awards}</span>
          </div>
          
        </div>
      </div>
      <div className="right">

        <img src={data.Poster} alt={data.Title} />
      </div>
      </>)}
    </div>
  );
}
