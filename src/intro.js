import React from 'react';
import styled from 'styled-components';

const FristBlock = styled.div`
  color : gray();
  background-color: lightgray;
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
    padding-top : 2%;
    font-size : 16px;
  }
`;

function Intro() {
    return(
        <>
            <FristBlock>
                <div className = "first">Practice</div>
                <div className = "second">Makes</div>
                <div className = "third">Perfect.</div>
            </FristBlock>
            <SecondBlock>
                <div className = "intro">개발자를 꿈꾸는 사람입니다.</div>
            </SecondBlock>
        </>
        )
}

export default Intro;