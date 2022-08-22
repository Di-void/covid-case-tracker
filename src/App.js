import React from "react";
import Body from "./components/Body";
import styled from "styled-components";
import Logo from "./components/covid_tracker.png";
import { useGlobalContext } from "./context";

const App = () => {
  const { error } = useGlobalContext();
  return (
    <Wrapper>
      <header>
        <img src={Logo} className="logo" alt="logo"></img>
      </header>
      {error.status && (
        <p style={{ color: "red", fontSize: "25px", textAlign: "center" }}>
          There was an error. Try again later...
        </p>
      )}
      <Body />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;

  .logo {
    position: absolute;
    top: 5%;
    left: 5%;
  }
`;
export default App;
