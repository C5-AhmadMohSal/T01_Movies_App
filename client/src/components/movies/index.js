import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
//https://codepen.io/simoberny/pen/qxxOqj
// https://codepen.io/simoberny/pen/qxxOqj
//https://codepen.io/drehimself/pen/azBmdK
// https://codepen.io/ryanparag/pen/oWrLPr
const Movies = () => {
  //{`https://image.tmdb.org/t/p/w500/${element.poster_path} `}

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
      {/* <Row xs={1} md={4} className="g-4">
        {movies &&
          movies.map((element, i) => (
            <Col key={i}>
              <Card className="text-center">
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${element.poster_path} `}
                />
                <Card.Body>
                  <Card.Title>{element.title}</Card.Title>
                  <Card.Text>{element.overview}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">
                  movie release_date {element.release_date}
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row> */}


{movies &&
        movies.map((element, i) => {
          //  setPoster(element.poster_path);
          return (
            <>
              <div className="moviesCared" key={i} >
                <div className="movie_card" id="bright">
                  <div className="info_section">
                    <div className="movie_header">
                      <img
                        className="locandina"
                        src={`https://image.tmdb.org/t/p/w500/${element.poster_path} `}
                      />
                      <h1>{element.title}</h1>
                      <h4>{element.release_date}</h4>
                      {/* <span className="minutes">117 min</span> */}
                      {/* <p className="type">Action, Crime, Fantasy</p> */}
                    </div>
                    <div className="movie_desc">
                      {/* <p className="text"> */}
                      {/* {element.overview}      </p> */}
                    </div>{" "}
                    <button
                      className="Show-More"
                      onClick={() => {
                        navigate(`/OneMovie/${element.id}`);
                      }}
                    >
                      Show More
                    </button>
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
            setLimit(12);
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
          setLimit(12);
          nextPage(page + 1);
          setClickNext(true);
        }}
      >
        
       <FcNext/>
      </span>
    </div>
  
    </>
  );
};

export default Movies;
