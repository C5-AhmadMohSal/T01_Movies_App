import React, { useState, useEffect } from "react";
// import "./style.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import axios from "axios";
import { AiOutlinePoweroff, AiOutlineSearch } from "react-icons/ai";

import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "../movies";
//   <Route path={"/movies"} element={<Movies />} />
import { useNavigate } from "react-router-dom";

const Navbarr = () => {
  const navigate = useNavigate();
  // https://api.themoviedb.org/3/movie/475557?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a
  const [result, setResult] = useState("");
  const [search, setSearch] = useState(false);
  const [searchtext, setSearchtext] = useState("");
  const [isOpen, setIsOpen] = useState("");
  const [isHover, setIsHover] = useState(false);
  const [message, setMessage] = useState("");

  const SearshGetAll = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/475557?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )

      .then((result) => {
        console.log(result, "search all product");
        setResult(result.data.result);
        //belongs_to_collection
        // setMessage("ALL Movies");
      })
      .catch((err) => {
        console.log(err);
        setMessage(err.response.data.message);
      });
  };
  useEffect(() => {
    SearshGetAll();
  }, []);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">TheMovieDB</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link
                href="/movies"
                // onClick={() => {
                //   navigate(`/movies`)
                // }}
              >
                Home
              </Nav.Link>
              <Nav.Link href="/favorites">favorites</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <div className="SEARCH-Container">
              <Form className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Search.."
                  className="me-2"
                  aria-label="Search"
                  name="search"
                  onChange={(e) => {
                    setSearchtext(e.target.value);
                    setSearch(true);
                  }}
                />
                {search && searchtext !== "" ? (
                  <div className="resultInSearch">
                    {result.length &&
                      result.map((element) => {
                        return (
                          <>
                            {element.title !== null &&
                            element.title
                              .toLowerCase()
                              .includes(searchtext.toLowerCase()) ? (
                              <div
                                className="title_photo_search"
                                onClick={() => {
                                  // navigate(`/oneProduct/${element.id}`);
                                  setSearchtext("");
                                }}
                              >
                                <div className="image-search">
                                  {/* <img src={element.productImage} /> */}
                                </div>
                                <div className="Title-search">
                                  {/* <p>{element.title}</p> */}
                                </div>
                              </div>
                            ) : (
                              ""
                            )}
                          </>
                        );
                      })}
                  </div>
                ) : (
                  ""
                )}
                <Button variant="outline-success">Search</Button>
              </Form>{" "}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbarr;
