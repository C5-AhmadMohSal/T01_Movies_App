import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Movies = () => {
  const [movies, setMovies] = useState("");
  const [id, setId] = useState("");
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [overview, SetOverview] = useState();
  const [rate, setRate] = useState("");
  const [releasedate, setReleasedate] = useState("");
  const [clickNext, setClickNext] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [message, setMessage] = useState("");


  const nextPage = (page) => {
    
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a&page=${page}`)
      .then((result) => {
        setMovies(result.data.results);
      })
      .catch((error) => {
        setMessage(error.response.data.message);
      });
  };
  useEffect(() => {
    nextPage();
  }, []);

  return (
    <>
<div className="allmovies">
{movies &&
        movies.map((element, i) => {
          return (
            <>
              <div className="moviesCared" key={i}  class="col-sm-6"  onClick={() => {
                        navigate(`/OneMovie/${element.id}`);
                        
                      }}>
                        
                <div className="movie_card" id="bright">
                  <div className="info_section">
                    <div className="movie_header">
                      
                      <img
                        className="locandina"
                        src={`https://image.tmdb.org/t/p/w500/${element.poster_path} `}
                      />
                      <h1>{element.title}</h1>
                      <br/>
                      <h4>IMDB Rating{element.vote_average}</h4>
                      <h3 style={{color:"wheat" ,cursor:"pointer"}} ><MdOutlineFavoriteBorder onClick={{
                        // add to fav icon
                      }}/></h3>
                    </div>

                  </div>
                  <div
                    className="blur_back bright_back"
                    style={{
                      backgroundImage: `url("https://image.tmdb.org/t/p/w500/${element.poster_path} ")`,
                    }}
                  >
                    <img 
                      className="locandina"
                      src={`https://image.tmdb.org/t/p/w500/${element.poster_path} `}
                    />
                    
                  </div>
                </div>
              </div>
            </>

          );
        })}

<div className="nextback">
      {clickNext ? (
        <span
          className="backButton"
          onClick={() => {
            setPage(page - 1);
            nextPage(page - 1);
          }}
        >
          <FcPrevious/>
        </span>
      ) : (
        ""
      )}
      <span
        className="nextButton"
        onClick={() => {
          setPage(page + 1);
          nextPage(page + 1);
          setClickNext(true);
        }}
      >
       <FcNext/>
      </span>
    </div>
  </div>
    </>
  );
};

export default Movies;
