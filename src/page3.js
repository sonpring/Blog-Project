import React from 'react';
import styled from 'styled-components';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import "./page3.css";

const Menubar = styled.div`
  border : 1px solid #DBE4EB;
  color : #DBE4EB;
  background-color : none;
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

const P3body = styled.div`
  border : 1px solid #DBE4EB;
  height : 660%;
  width : 60%;
`

const Arrow = styled.div`
{
  width : 80px;
  height : 80px;
  border : 1.5px solid #DBE4EB;
  border-radius: 45px;
  color : #DBE4EB;
  font-size : 60px;
  margin-top : 7%;
  margin-left : 45%;
  display : flex;
  align-items: center;
  justify-content: center;
}
`;

function Page3() {
  return(
    <div className = "page3body">     
      <div className = "header">
        <Menubar>
          <a className = "page3" href = "https://blog-project-5f635.web.app/">Site</a> /
          <a className = "page3" target = "_blank" href = "https://blog.naver.com/sontothepring"> Blog</a> /
          <a className = "page3" target = "_blank" href = "https://github.com/sonpring"> Github</a> /
          <a className = "page3" target = "_blank" href = "https://www.notion.so/62f43fd77a4442a087a02efbbe3b29ae?v=3fc2b959a56944e89143311144b72afc"> Notion</a> /
          <a className = "page3" target = "_blank" href = "https://www.facebook.com/profile.php?id=100005280990404"> Facebook</a> /
          <a className = "page3" target = "_blank" href = "https://www.instagram.com/sontothepring/"> Instagram</a> /
          <a className = "page3" target = "_blank" href = "https://www.youtube.com/watch?v=DPEtmqvaKqY&ab_channel=%EA%B3%A0%EC%84%B8%EA%B5%ACGOSEGU"> Kakao</a>
        </Menubar>
      </div>
      <div className = "p3body">
        <P3body>

        </P3body>
      </div>
      <div className = "footer">
        <Arrow>
          <HiOutlineChevronDoubleDown/>
        </Arrow>
      </div> 
    </div>
  )
}

export default Page3;

