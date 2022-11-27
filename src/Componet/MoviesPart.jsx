import React from "react";
import MoviesPartStyling from "styled-components";
function MoviesPart() {
  return (
    <Container>
      <RecomandsPart>
        <h3>Recomand Movies :</h3>
        <MoviesList>
          <Poster>
            <img src="/pictures/avengersinfinity.jpg" />
          </Poster>
          <Poster>
            <img src="/pictures/avatarpro.jpeg" />
          </Poster>
          <Poster>
            <img src="/pictures/amazingspid.jfif" />
          </Poster>
          <Poster>
            <img src="/pictures/Captain America Poster.jpeg" />
          </Poster>
        </MoviesList>
      </RecomandsPart>
      <RecomandsPart>
        <h3>Top Trensing :</h3>
        <MoviesList>
          <Poster>
            <img src="/pictures/80yearsposter.jpeg" />
          </Poster>
          <Poster>
            <img src="/pictures/Spider-manPoster2.jpeg" />
          </Poster>
          <Poster>
            <img src="/pictures/proile-pic.jpg" />
          </Poster>
          <Poster>
            <img src="/pictures/face2 poster.jpeg" />
          </Poster>
        </MoviesList>
      </RecomandsPart>
      <RecomandsPart>
        <h3>Upcoming:</h3>
        <MoviesList>
          <Poster>
            <img src="/pictures/batmansuperman.jpeg" />
          </Poster>
          <Poster>
            <img src="/pictures/dredd (1).jpeg" />
          </Poster>
          <Poster>
            <img src="/pictures/Boat.jpg" />
          </Poster>
          <Poster>
            <img src="/pictures/punisher.jpg" />
          </Poster>
        </MoviesList>
      </RecomandsPart>
    </Container>
  );
}
export default MoviesPart;
const Container = MoviesPartStyling.div`
// background:red;
width:100%;
min-height:40vh;
margin-top:30px;
`;
const RecomandsPart = MoviesPartStyling.div`
width:100%;
height:40vh;
// background:green;
h3{
  height:20%;
  width:100%;
  // background:yellow;
}
margin:30px 0px;
`;
const MoviesList = MoviesPartStyling.div`
height:80%;
width:100%;
// background:orange;
display:flex;
justify-content:space-evenly;
`;
const Poster = MoviesPartStyling.div`
width:20%;
height:100%;
transition:0.5s;
img{
  width:100%;
  height:100%;
  object-fit:cover;
  border-radius:10px;
  border:solid lightblue 3px;
};
&:hover{
  transform: scale(1.1);
  border-bottom:solid 5px lightgreen;
}
`;
