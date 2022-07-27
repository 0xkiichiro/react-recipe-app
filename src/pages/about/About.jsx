import { AboutContainer, InfoContainer, StyledImage } from "./About.style";

import codingSvg from "../../assets/coding.svg";

const About = () => {
  return (
    <AboutContainer wrap="wrap">
      <StyledImage src={codingSvg} />
      <div>
        <h1>
          About Software Developer <span>0xkiichiro</span>
        </h1>
      </div>
      <InfoContainer>
        <h2>Hi, I'am kiichiro</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h4>I already know JS, ReactJS, ReactNative, NodeJS, Python..</h4>
        <h2>
          <a href="mailto:0xkiichiro@proton.me">Send email</a> :
          0xkiichiro@proton.me
        </h2>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
