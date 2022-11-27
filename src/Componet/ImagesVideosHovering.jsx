import React from "react";
import HoveringStyling from "styled-components";
function ImagesVideosHovering() {
  return (
    <HoveringContainer>
      <Wrap>
        <img src="/images/viewers-disney.png" />
        <video autoPlay={true} loop={true}>
          <source src="/videos/1564674844-disney.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
        <video autoPlay={true} loop={true}>
          <source src="/videos/1564676714-pixar.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
        <video autoPlay={true} loop={true}>
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
        <video autoPlay={true} loop={true}>
          <source src="/videos/1608229455-star-wars.mp4" type="video/mp4" />
        </video>
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
        <video autoPlay={true} loop={true}>
          <source
            src="/videos/1564676296-national-geographic.mp4"
            type="video/mp4"
          />
        </video>
      </Wrap>
    </HoveringContainer>
  );
}
export default ImagesVideosHovering;
const HoveringContainer = HoveringStyling.div`
width:100%;
// background:red;
height:20vh;
margin-top:70px;
display:flex;
justify-content:space-evenly;;
`;
const Wrap = HoveringStyling.div`
width:14%;
height:70%;
// background-golor:red;
border-radius:5px;
display:flex;
align-items:center;
border:solid 2px white;
position: relative;
transition:0.5s;
&:hover video{
  opacity:1;
};
&:hover{
  transform: scale(1.1);
  border:solid 5px white;
}
img{
  // background:red;
  width:100%;
  height:100%;
  position: relative;
  z-index:1;
  // padding-left:45px
};
video{
  width:100%;
  height:100%;
  position:absolute;
  object-fit:cover;
  z-index:0;
  opacity:0;
  transition:1s;
};
box-shadow:rgb(6 6 6) -1px 16px 13px 11px;;
`;
