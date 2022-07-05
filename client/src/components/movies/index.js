import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import Container from 'react-bootstrap/Container';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Movies = () => {
//{`https://image.tmdb.org/t/p/w500/${element.poster_path} `}

const [movies, setMovies] = useState("");
const [id, setId] = useState("")

  const [title, setTitle] = useState("");
  const [poster, setPoster] = useState("");
  const [overview, SetOverview] = useState();
  const [rate, setRate] = useState("");
  const [releasedate, setReleasedate] = useState("");

  const GeatAllMovies = () => {
    axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=1bfa430aada4409bfa6a3c5528128e8a")
      .then((result) => {
        console.log(result.data.results);
        setMovies(result.data.results);
      })
      //.title
      //.poster_path
      //.vote_average
      //.overview
      //.release_date
      
      .catch((err) => {});
  };
  useEffect(() => {
    GeatAllMovies();
  }, []);





  
  return (
    <>
      <div>movies</div>

{movies&&movies.map((element,i)=>{ 
  //  setPoster(element.poster_path);
  return(



<>

<div className="moviesCared" key={i}>
<div className="movie_card" id="bright">
  <div className="info_section">
    <div className="movie_header">
      <img className="locandina" src={`https://image.tmdb.org/t/p/w500/${element.poster_path} `}/>
      <h1>{element.title}</h1>
      <h4>{element.release_date}</h4>
      {/* <span className="minutes">117 min</span> */}
      {/* <p className="type">Action, Crime, Fantasy</p> */}
    </div>
    <div className="movie_desc">
      {/* <p className="text"> */}
      {/* {element.overview}      </p> */}
    </div>
  </div>
  <div className="blur_back bright_back" style={{ 
      backgroundImage: `url("https://image.tmdb.org/t/p/w500/${element.poster_path} ")` 
    }}>
       <img className="locandina" src={`https://image.tmdb.org/t/p/w500/${element.poster_path} `}/></div>
</div>
  </div>

  
</>
// how can i make gride in 

//   <Row xs={1} md={4} className="g-4">
//   { => (
//     <Col >
//       <Card className="text-center" >
        
//         <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${element.poster_path} `}/>
//         <Card.Body>
//           <Card.Title>{element.title}</Card.Title>
//           <Card.Text>
//           {element.overview}
//           </Card.Text>
//         </Card.Body>
//         <Card.Footer className="text-muted">movie release_date {element.release_date}</Card.Footer>
//       </Card>
//     </Col>
//    ))} 
// </Row>
   


  );
})}

    

    </>
  );
};

export default Movies;
