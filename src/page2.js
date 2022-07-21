import React from 'react';
import styled from 'styled-components';
import "./page2.css";
import {HiOutlineChevronDoubleDown} from "react-icons/hi";

const Menubarspace = styled.div`
  height : 1vh;
  background-color : beige;
`;

const Menubar = styled.div`
  font-size : 16px;
  color : #212121;
  border : 1px solid #212121;
  height : 20px;
  width : 432px;
  margin-left: auto;
  margin-right : 4%;
  padding-left : 8px;
  padding-top : 4px;
  padding-bottom : 4px;
  margin-top : 1%;
`;

const Whoami = styled.div`
  margin-top : 64px;
  margin-left : 120px;
  padding-top : 20px;
  padding-bottom : 16px;
  width : 200px;
  height : 160px;
  border-top : 1px solid #212121;
  border-left : 1px solid #212121;
  border-right : 1px solid #212121;

  .first
  {
    font-size : 40px;
    padding-left : 100px;
  }
  
  .second
  {
    font-size : 40px;
    padding-left : 124px;
  }

  .third
  {
    font-size : 40px;
    padding-left : 152px;
  }
`;

const Desk = styled.div `
  margin-top : 64px;
  width : 379px;
  border-bottom : 1px solid #212121;
  border-top : 1px solid #212121;
  border-right : 1px solid #212121;
  height : 100px;
  font-size : 16px;
  padding-top : 30px;
  padding-left : 20px;
`;

const Resume = styled.div`
  height : 160px;
  width : 560px;
  border : 1px solid #212121;
  margin-left : 120px;
  padding : 20px;
`;

const Arrow = styled.div`
{
  width : 80px;
  height : 80px;
  border : 1.5px solid #212121;
  border-radius: 45px;
  color : #212121;
  font-size : 60px;
  margin-top : 11vh;
  margin-left : 45vw;
  display : flex;
  align-items: center;
  justify-content: center;
}
`;



function Page2() {
    return(
        <>
            <Menubarspace/>
            <Menubar>
                <a className = "page2" href = "https://blog-project-5f635.web.app/">Site</a> /
                <a className = "page2" target = "_blank" href = "https://blog.naver.com/sontothepring"> Blog</a> /
                <a className = "page2" target = "_blank" href = "https://github.com/sonpring"> Github</a> /
                <a className = "page2" target = "_blank" href = "https://www.notion.so/62f43fd77a4442a087a02efbbe3b29ae?v=3fc2b959a56944e89143311144b72afc"> Notion</a> /
                <a className = "page2" target = "_blank" href = "https://www.facebook.com/profile.php?id=100005280990404"> Facebook</a> /
                <a className = "page2" target = "_blank" href = "https://www.instagram.com/sontothepring/"> Instagram</a> /
                <a className = "page2" target = "_blank" href = "https://www.youtube.com/watch?v=DPEtmqvaKqY&ab_channel=%EA%B3%A0%EC%84%B8%EA%B5%ACGOSEGU"> Kakao</a>
            </Menubar>

            <div className = "one">
                <Whoami>
                    <div className = "first">Who</div>
                    <div className = "second">Am</div>
                    <div className = "third">I?</div>
                </Whoami>
                <Desk>
                    <div>뭐하는지는 저도 모르겠고요</div>
                    <div>시키면 열심히 하겠습니다.</div>
                </Desk>
            </div>
            <Resume>
                <div>수상기록</div>
                <div>엄청납니다.</div>
            </Resume>
            <Arrow>
                <HiOutlineChevronDoubleDown/>
            </Arrow>
        </>
    )
}

export default Page2;