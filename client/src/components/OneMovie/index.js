// OneMovie
import "./style.css";

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
  // original_language
  //original_title
  //overview
  //vote_average
  //production_companies
  return (
    <>
<section className="section about-section gray-bg" id="about">
        <div className="container">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-lg-6">
              <div className="about-text go-to">
                <h3 className="dark-color">{onemovie.title}</h3>
          
                <p>
                  the  <mark> {onemovie.title} is  </mark>
                  {onemovie.overview}                 </p>
                <div className="row about-list">
                  <div className="col-md-6">
                    <div className="media">
                      <label>rating</label>
                      <label>{onemovie.vote_average} </label>
                    </div>
                    <div className="media">
                      <label>release_date</label>
                      <p>{onemovie.release_date}</p>
                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="media">
                      <label>E-mail</label>
                      <p>ahmad.moh.sal@gmail.com</p>
                    </div>
                    <div className="media">
                      <label>Phone</label> <p>962-790-</p>
               
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-avatar">
              <img
                      src={`https://image.tmdb.org/t/p/w500/${onemovie.poster_path} `}
                    />
              </div>
            </div>
          </div>
          </div>
      </section>




    
    </>
  );
};

export default OneMovie;
