import styled from "styled-components";
import { Column, Row } from "./element";
import Logo from "../assets/image/logo.png";
import Countdown, { zeroPad } from "react-countdown";
import Backgroundwatch from "../assets/image/backgroundwatch.png";
// Random component

const Completionist = () => <span>You are good!</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <ClockContain>
        <ClockItem>{zeroPad(days)}</ClockItem>:
        <ClockItem>{zeroPad(hours)}</ClockItem>:
        <ClockItem>{zeroPad(minutes)}</ClockItem>:
        <ClockItem>{zeroPad(seconds)}</ClockItem>
      </ClockContain>
    );
  }
};

const Coming = () => {
  return (
    <Wrapper>
      <LogoImage src={Logo} />
      <Title>OMERTA</Title>
      <TEXT>on Aptos</TEXT>
      <Clock>
        <Countdown
          date={Date.now() + 604800000}
          renderer={renderer}
        />
      </Clock>
    </Wrapper>
  );
};
const Wrapper = styled(Column)`
  justify-content: center;
  gap: 20px;
  height: 100%;
`;
const LogoImage = styled.img`
  max-width: 100%;
  height: auto;
`;
const Title = styled.div`
  font-size: 40px;
  line-height: 48px;
  letter-spacing: 0.22em;
`;
const TEXT = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.2em;
`;
const Clock = styled(Row)`
  background: url(${Backgroundwatch});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding: 30px;
  gap: 20px;
`;
const ClockContain = styled(Row)`
  gap: 10px;
  font-size: 26px;
  font-family: "digital-7";
`;
const ClockItem = styled.div`
  border: 2px solid black;
`;
export default Coming;
