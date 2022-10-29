import Header from "../../components/header";
import PublicPage from "../../view/public";
import Footer from "../../components/footer";

import styled from "styled-components";
import { Column } from "../../components/element";

const Wrapper = styled(Column)`
  background-color: #a8893a;
  justify-content: space-between;
  height: 100vh;
  font-family: "Glacial Indifference Bold";
`;

const PublicLayout = () => {
  return (
    <Wrapper>
      {/* <Header /> */}
      <PublicPage />
      <Footer />
    </Wrapper>
  );
};
export default PublicLayout;
