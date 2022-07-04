import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import "./intro.css";

const GlobalStyle = createGlobalStyle`
  body {
    background: black;
  }`;

const Menubar = styled.div`
  font-size : 16px;
  color : #DBE4EB;
  border : 1px solid #DBE4EB;
  height : 20px;
  width : 432px;
  overflow : hidden;
  padding-left : 8px;
  padding-top : 4px;
  padding-bottom : 4px;
  margin-left : 65%;
  margin-top : 1%;
`;

const FirstBlock = styled.div`
  color : gray();
  background-color: #DBE4EB;
  margin-top : 300px;
  padding-left : 2%;
  padding-right : 40%;
  padding-bottom : 1%;
  padding-top : 1%;
  
  .first
  {
    font-size : 40px;
  }
  
  .second
  {
    font-size : 40px;
  }

  .third
  {
    font-size : 40px;
  }
`;

const SecondBlock = styled.div`
  .intro
  {
    padding-top : 1%;
    padding-left : 2%;
    padding-bottom : 1%;
    font-size : 16px;
    color : #DBE4EB;
  }
`;

function Intro() {
    return(
        <>
            <Menubar>
                <a className = "intro" target = "_blank" href = "https://blog-project-5f635.web.app/">Site</a> /
                <a className = "intro" target = "_blank" href = "https://www.youtube.com/watch?v=DPEtmqvaKqY&ab_channel=%EA%B3%A0%EC%84%B8%EA%B5%ACGOSEGU"> Blog</a> /
                <a className = "intro" target = "_blank" href = "https://github.com/sonpring"> Github</a> /
                <a className = "intro" target = "_blank" href = "https://www.notion.so/62f43fd77a4442a087a02efbbe3b29ae?v=3fc2b959a56944e89143311144b72afc"> Notion</a> /
                <a className = "intro" target = "_blank" href = "https://www.facebook.com/profile.php?id=100005280990404"> Facebook</a> /
                <a className = "intro" target = "_blank" href = "https://www.instagram.com/sontothepring/"> Instagram</a> /
                <a className = "intro" target = "_blank" href = "https://www.youtube.com/watch?v=DPEtmqvaKqY&ab_channel=%EA%B3%A0%EC%84%B8%EA%B5%ACGOSEGU"> Kakao</a>
            </Menubar>
            <GlobalStyle/>
            <FirstBlock>
                <div className = "first">Practice</div>
                <div className = "second">Makes</div>
                <div className = "third">Perfect.</div>
            </FirstBlock>
            <SecondBlock>
                <div className = "intro">개발자를 꿈꾸는 사람입니다.</div>
            </SecondBlock>
        </>
        )
}

export default Intro;