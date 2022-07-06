// OneMovie

import React, { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

const OneMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [onemovie, setOnemovie] = useState("");

  const getOneMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((result) => {
        // console.log(result.data);
        setOnemovie(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getOneMovie();
  }, [id]);
  const sectionStyle = {
    // width: "100%",
    // height: "400px",
    backgroundImage: `url("https://image.tmdb.org/t/p/w500/${onemovie.poster_path}")`
  };
  return (
    <>
      <div
        style={{
          // backgroundImage: `,
        }}
      >
        {/* {onemovie && */}
        {/* // onemovie.map((element, i) => { */}
        {/* //  setPoster(element.poster_path); */}
        {/* return ( */}
        <>
          <div className="moviesCared"        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w500/${onemovie.poster_path} ")`,}}>
            <div className="movie_card" id="bright">
              <div className="info_section">
                <div className="movie_header">
                  <img
                    className="locandina"
                    src={`https://image.tmdb.org/t/p/w500/${onemovie.poster_path} `}
                  />
                  <h1>{onemovie.title}</h1>
                  <h4>{onemovie.release_date}</h4>
                  {/* <span className="minutes">117 min</span> */}
                  {/* <p className="type">Action, Crime, Fantasy</p> */}
                </div>
                <div className="movie_desc">
                  <p className="text">{onemovie.overview} </p>
                </div>{" "}
                {/* <button
                      className="Show-More"
                      onClick={() => {
                        navigate(`/OneMovie/${element.id}`);
                      }}
                    >
                      Show More
                    </button> */}
              </div>

              <div
                className="blur_back bright_back"
                style={{
                  backgroundImage: `url("https://image.tmdb.org/t/p/w500/${onemovie.poster_path} ")`,
                }}
              >
                <img
                  className="locandina"
                  src={`https://image.tmdb.org/t/p/w500/${onemovie.poster_path} `}
                />
              </div>
            </div>
          </div>
        </>
        {/* ); */}
        {/* // })} */}
      </div>
    </>
  );
};

export default OneMovie;
