import React from "react";
import LogStyling from "styled-components";
function LoginPage() {
  return (
    <LoginPageContainer>
      <LMC>
        <FirstLogo>
          <img src="/images/cta-logo-one.svg" />
        </FirstLogo>
        <button id="loginbutton">
          <a href="#">GET ALL THERE</a>
        </button>
        <BasicDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          animi inventore quas voluptas earum maxime eos, qui cumque.
        </BasicDescription>
        <SecondLogo>
          <img src="/images/cta-logo-two.png" />
        </SecondLogo>
      </LMC>
    </LoginPageContainer>
  );
}
export default LoginPage;
const LoginPageContainer = LogStyling.div`
color:black;
// background:red;
width:100%;
height:90vh;
position:relative;
display:flex;
align-items:center;
img{
  width:10%;
}
&:before {
  background:url("/images/login-background.jpg");
  background-repeat:non-repeat;
  background-attachment:fixed;
  content: "";
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index: -1;
  background-position:center;
};
`;
const LMC = LogStyling.div`
 
width:100%;
height:40%;
display:flex;
flex-direction:column;
align-items:center;
a{
  color:white;
  font-weight:bolder;
  font-size:15px
}
 `;
const FirstLogo = LogStyling.div`
 
img{
  width:100%;
  height:100%
};
width:100%;
height:40%
 `;
const SecondLogo = LogStyling.div`
// background:red;
margin-top:10px;
img{
  width:80%;
  height:40%
};
width:100%;
height:40%;
display:flex;
justify-content:center
 `;
const BasicDescription = LogStyling.div`
color:white;
text-align:center;
padding-top:5px
 `;
