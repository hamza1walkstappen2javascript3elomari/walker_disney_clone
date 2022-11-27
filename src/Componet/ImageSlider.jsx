import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Styles from "styled-components";
function ImageSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScrool: 1,
    autoplay: true
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
        <img src="images/slider-scales.jpg" />
      </Wrap>
    </Carousel>
  );
}
export default ImageSlider;
const Carousel = Styles(Slider)`
margin-top:20px;
box-shadow{
  red 30px 45px 50px 55px
};
.slick-list{
  overflow:visible;
};
.slick-dots li button:before{
  font-size:20px;
  color:yellow;
  z-index:1;
};
.slick-dots li.slick-active button:before{
  color:white;
  font-weight:bolder;
  height:100%;
  font-size:30px;
  z-index:1;
};
button{
  z-index:1;
  color: white;
  font-size: 20px;
  // background: red;
  width: 20%;
  
}
`;
const Wrap = Styles.div`
// width:50%;
// height:100%;
img{
  width:100%;
  height:100%;
  box-shadow:rgb(220, 220, 220) 0px 5px 10px 10px;
}
// box-shadow{
//   red 10px 10px 50px 55px
// };
`;
