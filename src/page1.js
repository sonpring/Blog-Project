import React from 'react';
import styled from 'styled-components';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import "./page1.css";
import "./introtexteffect";

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
  font-color : #212121;
  margin-top : 50vh;
  padding-left : 2%;
  padding-right : 40%;
  padding-bottom : 1%;
  padding-top : 1%;
  
  .first
  {
    font-size : 40px;
    color : #212121;
  }
  
  .second
  {
    font-size : 40px;
    color : #212121;

  }

  .third
  {
    font-size : 40px;
    color : #212121;
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

function Page1() {
  return(
    <div className = "page1body">     
      <div className = "header">
        <Menubar>
          <a className = "page1" href = "https://blog-project-5f635.web.app/">Site</a> /
          <a className = "page1" target = "_blank" href = "https://blog.naver.com/sontothepring"> Blog</a> /
          <a className = "page1" target = "_blank" href = "https://github.com/sonpring"> Github</a> /
          <a className = "page1" target = "_blank" href = "https://www.notion.so/62f43fd77a4442a087a02efbbe3b29ae?v=3fc2b959a56944e89143311144b72afc"> Notion</a> /
          <a className = "page1" target = "_blank" href = "https://www.facebook.com/profile.php?id=100005280990404"> Facebook</a> /
          <a className = "page1" target = "_blank" href = "https://www.instagram.com/sontothepring/"> Instagram</a> /
          <a className = "page1" target = "_blank" href = "https://www.youtube.com/watch?v=DPEtmqvaKqY&ab_channel=%EA%B3%A0%EC%84%B8%EA%B5%ACGOSEGU"> Kakao</a>
        </Menubar>
      </div>
      <div className = "p1body">
        <FirstBlock>
            <div className = "first">Practice</div>
            <div className = "second">Makes</div>
            <div className = "third">Perfect.</div>
        </FirstBlock>
        <SecondBlock>
            <div className = "intro">개발자를 꿈꾸는 사람입니다.</div>
        </SecondBlock>
      </div>
      <div className = "footer">
        <Arrow>
          <HiOutlineChevronDoubleDown/>
        </Arrow>
      </div> 
    </div>
  )
}

export default Page1;