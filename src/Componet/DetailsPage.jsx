import React from "react";
import DeatailsStyling from "styled-components";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import PlusOneIcon from "@mui/icons-material/PlusOne";
function DetailsPage() {
  return (
    <Continer>
      <img src="/pictures/spidermanposter1.jpeg" />
      <MovieDetails>
        <Title>The Amazing Spider-Man 3:Final War</Title>
        <PlayingButtons>
          <button id="playButton">
            <PlayCircleFilledWhiteIcon /> <span>Play</span>
          </button>
          <button id="trailerButton">
            <PlayCircleFilledWhiteIcon /> <span>Trailer</span>
          </button>
          <button id="addlist">
            <PlusOneIcon />
          </button>
          <button id="group">
            <Diversity3Icon />
          </button>
        </PlayingButtons>
        <Date>2025.1h:30m:30s.Science Fiction.Movie Of The Year</Date>
        <Description>
          A Tennager Has A Super Power Of Spider And After Years In Fighting The
          criminals Of Bother Super Powers And Normal Criminals The Last War
          Arrived And For Saving His Universe He Will Fight All The Anti Heros
          Of The Other Universes And Finaly He Will Meet The Other Universe
          Spider-Man So The Battle Will Be the Ultimate Battle.
        </Description>
      </MovieDetails>
    </Continer>
  );
}
export default DetailsPage;
const Continer = DeatailsStyling.div`
overflow:hidden;
img{
   width:100%;
   height:100%;
  position:absolute;
  z-index:-1;
  opacity:1;
  position:fixed;
  position:center;
  // object-fit:cover;
};
// color:red;
width:100%;
height:90vh;
position:relative;
// margin-top:60px;
// padding-top:50px
display:flex;
// align-items:center
`;
const MovieDetails = DeatailsStyling.div`
z-index=1;
// color:red;
// background:orange;
width:100%;
height:80%;
margin-top:90px;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-left:25px;
`;
const Title = DeatailsStyling.div`
z-index=1;
font-weight:bolder;
font-family:monospace;
font-size:30px;
color:red;
 `;
const PlayingButtons = DeatailsStyling.div`
z-index=1;
// background:red;
width:20%;
display:flex;
justify-content:space-between;
span{
}
button{
  display:flex;
  align-items:center;
  justify-content:center;
}
`;
const Date = DeatailsStyling.div`
z-index=1;
color:lightblue;
font-weight:bolder;
 `;
const Description = DeatailsStyling.div`
z-index=1;
width:50%;
font-weight:bolder;
font-family:monospace;
font-size:15px
 `;
