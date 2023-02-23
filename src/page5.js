import React from 'react';
import styled from 'styled-components';
import "./page4.css";
import {HiOutlineChevronDoubleDown} from "react-icons/hi";

const Menubarspace = styled.div`
  height : 1vh;
  background-color : #212121;
`;

const Menubar = styled.div`
  border : 1px solid #DBE4EB;
  color : #DBE4EB;
  font-size : 18px;
  height : 20px;
  margin-top : 28px;
  margin-left: auto;
  margin-right : 4%;
  padding-top : 4px;
  padding-bottom : 8px;
  padding-left : 8px;
  width : 488px;
`;

const FirstBlock = styled.div`
  color : gray();
  width : 50%;
  margin : 0 auto;
  background-color: #DBE4EB;
  margin-top : 20%;
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
    padding-left : 6%;
    padding-bottom : 1%;
    font-size : 16px;
    color : #DBE4EB;
  }
`;

const Arrow = styled.div`
{
  width : 80px;
  height : 80px;
  border : 1.5px solid #DBE4EB;
  border-radius: 45px;
  color : #DBE4EB;
  font-size : 60px;
  margin-top : 7vh;
  margin-left : 45vw;
  display : flex;
  align-items: center;
  justify-content: center;
}
`;

function Page5() {
    return(
        <>
            <Menubarspace/>
            <Menubar>
                <a className = "intro" href = "https://blog-project-5f635.web.app/">Site</a> /
                <a className = "intro" target = "_blank" href = "https://www.youtube.com/watch?v=DPEtmqvaKqY&ab_channel=%EA%B3%A0%EC%84%B8%EA%B5%ACGOSEGU"> Blog</a> /
                <a className = "intro" target = "_blank" href = "https://github.com/sonpring"> Github</a> /
                <a className = "intro" target = "_blank" href = "https://www.notion.so/62f43fd77a4442a087a02efbbe3b29ae?v=3fc2b959a56944e89143311144b72afc"> Notion</a> /
                <a className = "intro" target = "_blank" href = "https://www.facebook.com/profile.php?id=100005280990404"> Facebook</a> /
                <a className = "intro" target = "_blank" href = "https://www.instagram.com/sontothepring/"> Instagram</a> /
                <a className = "intro" target = "_blank" href = "https://www.youtube.com/watch?v=DPEtmqvaKqY&ab_channel=%EA%B3%A0%EC%84%B8%EA%B5%ACGOSEGU"> Kakao</a>
            </Menubar>
            <Arrow>
                <HiOutlineChevronDoubleDown/>
            </Arrow>
        </>
    )
}

export default Page5;