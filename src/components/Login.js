import React from 'react'
import styled from 'styled-components';

const Login = (props) => {
  return (
    <Container>
        <Content>
            <CTA>
              <CTALogoOne src='https://raw.githubusercontent.com/MayurMadhwani/demo-repo/2b5881eeae59e77aa0b6be80e7af717605a04744/cta-logo-one.svg' alt=''/>
              <SignUp>GET ALL THERE</SignUp>
              <Description>
                Get access to all the Content
              </Description>
              <CTALogoTwo src='https://raw.githubusercontent.com/MayurMadhwani/demo-repo/main/cta-logo-two.png'/>
            </CTA>
            <BgImage/>
        </Content>
    </Container>
  )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url("https://raw.githubusercontent.com/CleverProgrammers/cp-disney-plus-clone/master/public/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`

const CTA = styled.div`
   max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  min-height: 1px;
  display: block;
  width: 100%;
`

const SignUp = styled.a`
  font-weight: bold;
  color: #f9f9f9;
  background-color: #0063e5;
  margin-bottom: 12px;
  width: 95%;
  letter-spacing: 1.5px;
  font-size: 18px;
  padding:  16.5px 0;
  border :1px solid transparent;
  border-radius: 4px;
  
  &:hover{
    cursor:pointer;
    background-color: #0483ee;
  }
`

const Description = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 20px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;

`

const CTALogoTwo = styled.img`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: bottom;
`;

export default Login