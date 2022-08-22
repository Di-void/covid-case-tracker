import React from "react";
import styled from "styled-components";
import Totals from "./Totals";
import States from "./States";
import { useGlobalContext } from "../context";

const Body = () => {
  const { isLoading } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  }
  return (
    <Wrapper>
      <Totals />
      <States />
    </Wrapper>
  );
};

const Wrapper = styled.main`
  /* border: 1px solid black; */
  border-radius: 20px;
  width: 69vw;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template-columns: 50% 50%;
  box-shadow: 18px 20px 32px -3px rgba(0, 0, 0, 0.1);
`;
export default Body;
