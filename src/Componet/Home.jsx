import React from "react";
import HomeStyling from "styled-components";
import ImageSlider from "./ImageSlider";
import ImagesVideosHovering from "./ImagesVideosHovering";
import Movies from "./MoviesPart.jsx";
function Home() {
  return (
    <HomeContainer>
      <Spacing></Spacing>
      <ImageSlider />
      <ImagesVideosHovering />
      <Movies />
      <Spacing></Spacing>
      <Spacing></Spacing>
      <Spacing></Spacing>
      <Spacing></Spacing>
      <Spacing></Spacing>
      <Spacing></Spacing>
      <Spacing></Spacing>
      <Spacing></Spacing>
      <Spacing></Spacing>
    </HomeContainer>
  );
}
export default Home;
const HomeContainer = HomeStyling.div`
width:100%;
overflow:hidden;
position:relative;
min-height:90vh;
position:relative;
&:before {
  background:url("/images/home-background.png");
  background-repeat:non-repeat;
  background-attachment:fixed;
  content: "";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index: -1;
};
`;
const Spacing = HomeStyling.div`
width:100%;
height:1vh;`;
