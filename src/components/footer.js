import { FaDiscord, FaTwitter } from "react-icons/fa";
import styled from "styled-components";
import { Row } from "./element";

const Wrapper = styled(Row)`
  gap: 20px;
  font-size: 34px;
  padding: 20px;
  font-family: "digital-7";
`;
const Footer = () => {
  return (
    <Wrapper>
      <a href="https://discord.com/invite/aptosomerta">
        <FaDiscord />
      </a>
      <a href="https://twitter.com/AptosOmerta">
        <FaTwitter />
      </a>
    </Wrapper>
  );
};
export default Footer;
