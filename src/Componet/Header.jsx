import React from "react";
import HeaderStyling from "styled-components";
function Header() {
  return (
    <HeaderContiner>
      <Logo>
        <img src="/images/logo.svg" />
      </Logo>
      <Nav>
        <a>
          <img src="/images/home-icon.svg" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WatchList</span>
        </a>
        <a>
          <img src="/images/original-icon.svg" />
          <span>Originals</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>Movies</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>Series</span>
        </a>
      </Nav>
      <Profile>
        <img src="/images/walk.png" />
      </Profile>
    </HeaderContiner>
  );
}
export default Header;
const HeaderContiner = HeaderStyling.div`
width:100%;
overflow:hidden;
height:10vh;
background-color:#090b13; 
display:flex;
text-transform:uppercase
`;
const Logo = HeaderStyling.div`
// background:red;
width:10%;
// display:felx;
// align-items:center;
// padding-left:5px;
img{
  width:100%;
  height:100%;
  // background:green;
}
`;
const Nav = HeaderStyling.div`
width:60%;
display:flex;
align-items:center;
margin-left:30px;
a{
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  width:16%;
  margin-left:10px;
  img{
    width:18%
  };
  transition:0.5s
}
a:hover{
  border-bottom:5px solid white;
};
cursor:pointer;
font-size:12px;
`;
const Profile = HeaderStyling.div`
width:27%;
display:flex;
justify-content:flex-end;
padding-right:10px;
padding-top:15px;
img{
  width:20%;
  height:90%;
  border-radius:50%;
  border:solid 0.5px white;
}
`;
