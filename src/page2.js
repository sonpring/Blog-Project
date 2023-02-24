import React from 'react';
import styled from 'styled-components';
import "./page2.css";
import {HiOutlineChevronDoubleDown} from "react-icons/hi";

const Menubar = styled.div`
  border : 2px solid #212121;
  color : #212121;
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

const P2body = styled.div`
  &,
  & * {
    box-sizing: border-box;
  }
`

const Whoami = styled.div`
  margin-left : 120px;
  margin-top : 8%;
  width : 12%;
  float : left;
  border-top : 1px solid black;
  border-left : 1px solid black;
  border-right : 1px solid black;
  font-size : 80px;
  padding-right : 20px;
  padding-bottom : 20px;

`


const Desk = styled.div`
  margin-top : 8%;
  width : 28%;
  padding-right : 68px;
  border-top : 1px solid black;
  border-bottom : 1px solid black;
  border-right : 1px solid black;
  height : 100px;
  font-size : 16px;
  float : left;
  padding-top : 30px;
  padding-left : 20px;
`;

const Resume = styled.div`
  height : 400px;
  width : 40%;
  border : 1px solid #212121;
  margin-left : 120px;
  padding-left : 20px;
  padding-top : 20px;
  font-size : 24px;
`;

const Arrow = styled.div`
{
  width : 80px;
  height : 80px;
  border : 1.5px solid #212121;
  border-radius: 45px;
  color : #212121;
  font-size : 60px;
  margin-top : 5%;
  margin-left : 45%;
  display : flex;
  align-items: center;
  justify-content: center;
}
`;



function Page2() {
    return(
        <div className = "page2body"> 
          <div className = "header">
            <Menubar>
              <a href = "https://blog-project-5f635.web.app/">Site</a> /
              <a target = "_blank" href = "https://blog.naver.com/sontothepring"> Blog</a> /
              <a target = "_blank" href = "https://github.com/sonpring"> Github</a> /
              <a target = "_blank" href = "https://www.notion.so/62f43fd77a4442a087a02efbbe3b29ae?v=3fc2b959a56944e89143311144b72afc"> Notion</a> /
              <a target = "_blank" href = "https://www.facebook.com/profile.php?id=100005280990404"> Facebook</a> /
              <a target = "_blank" href = "https://www.instagram.com/sontothepring/"> Instagram</a> /
              <a target = "_blank" href = "https://www.youtube.com/watch?v=DPEtmqvaKqY&ab_channel=%EA%B3%A0%EC%84%B8%EA%B5%ACGOSEGU"> Kakao</a>
            </Menubar>
          </div>
          <P2body>
            <Whoami>
              <div align = "right" className = "first">Who</div>
              <div align = "right"className = "second">Am</div>
              <div align = "right"className = "third">I?</div>
            </Whoami>
            <Desk>
                <div>뭐하는 사람인지는 저도 아직 모르긴 한데요,</div>
                <div>아무튼 열심히 합니다.</div>
            </Desk>
          </P2body>
          <div>
            </div>
            <Resume>
                <div className = "period1">2016.03 ~ 2019.02 </div>
                <div className = "career">부산일과학고등학교 5기</div>
                <div className = "period2">2019.03 ~ </div>
                <div className = "career">UNIST Computer Science Engineering</div>
                <div className = "TBC">To Be Continued ...</div>
            </Resume>
            <Arrow>
                <HiOutlineChevronDoubleDown/>
            </Arrow>
        </div>
    )
}

export default Page2;