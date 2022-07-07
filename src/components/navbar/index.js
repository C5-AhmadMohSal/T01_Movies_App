import React, { useState, useEffect } from "react";
// import "./style.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import { MdOutlineFavoriteBorder } from "react-icons/md";

import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "../movies";

import { useNavigate } from "react-router-dom";

const Navbarr = ({ setIsSearched }) => {
  const navigate = useNavigate();
  // https://api.themoviedb.org/3/movie/475557?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a
  const [result, setResult] = useState("");
  const [search, setSearch] = useState(false);
  const [searchtext, setSearchtext] = useState("");

  const [message, setMessage] = useState("");

  const SearshGetAll = (searchtext) => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=1bfa430aada4409bfa6a3c5528128e8a&query=${searchtext}`
      )

      .then((result) => {
        console.log(result, "search all ");
        setResult(result.data.results);
        //belongs_to_collection
        // setMessage("ALL Movies");
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  };
  useEffect(() => {}, []);

  return (
    <>
        <div className="navvv">
      <Navbar bg="dark"  variant="dark" expand="lg" >
        <Container fluid>
          <Navbar.Brand href="/" style={{color:"wheat"}} >TheMovieDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="/"
                // onClick={() => {
                //   navigate(`/movies`)
                // }}
                style={{color:"wheat"}} >
                Home
              </Nav.Link>
              <Nav.Link href="/favorites" style={{color:"wheat"}} >favorites</Nav.Link>
            </Nav>
              <Form className="d-flex" style={{color:"wheat"}}>
                <Form.Control style={{color:" bold black"}}
                  type="text"
                  placeholder="Search.."
                  className="me-2"
                  aria-label="Search"
                  name="search"
                  onChange={(e) => {
                    setSearchtext(e.target.value);
                    setSearch(true);
                    SearshGetAll(searchtext);
                  }}
                />
                {search && searchtext !== "" ? (
                  <div className="resultInSearch">
                    <>
                      {result.original_title !== null &&
                      result.original_title ? (
                        <div
                          className="title_photo_search"
                          onClick={() => {
                            setSearchtext("");
                          }}
                        >
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  </div>
                ) : (
                  ""
                )}
              </Form>{" "}
          </Navbar.Collapse>
        </Container>
      </Navbar></div>

      {result &&
        result.map((element, i) => {
          return (
            <>
            <div className="allmovies">

              <div className="moviesCared" key={i} class="col-sm-3" 
              onClick={() => {
                        navigate(`/OneMovie/${element.id}`);      
                        window.location.reload();
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
                      <h4>  {element.release_date}</h4>
                      < br/>
                      <h4>IMDB Rating{element.vote_average}</h4>
                      <h3 style={{color:"wheat" ,cursor:"pointer"}} ><MdOutlineFavoriteBorder onClick={{
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
              
              </div>
            </>
          );
        })}
    </>
  );
};

export default Navbarr;
