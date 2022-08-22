import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Totals = () => {
  // STATE VALUES
  const { appData, parseNum } = useGlobalContext();
  // FUNCTIONS AND SIDE EFFECTS
  // RETs
  return (
    <Wrapper>
      <header className="title">
        <h1>nigeria</h1>
      </header>

      <main className="section-center">
        <div className="box">
          <h2>Total samples Tested:</h2>
          <span className="val">{parseNum(appData.totalSamples)}</span>
        </div>
        <div className="box">
          <h2>Total Confirmed Cases:</h2>
          <span className="val">{parseNum(appData.totalConfirmed)}</span>
        </div>
        <div className="box">
          <h2>Total Active Cases:</h2>
          <span className="val">{parseNum(appData.totalActive)}</span>
        </div>
        <div className="box four">
          <h2>Discharged:</h2>
          <span className="val">{parseNum(appData.totalDischarged)}</span>
        </div>
      </main>

      <footer>
        <h2>
          Death: <span className="val">{parseNum(appData.totalDeaths)}</span>
        </h2>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border: transparent;
  border-radius: 20px 0px 0px 20px;
  background-color: var(--clr-primary-3);
  padding: 2rem 1.5rem;

  h2 {
    font-family: var(--ff-secondary);
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
  .box {
    display: flex;
    justify-content: space-between;
  }

  .val {
    font-family: var(--ff-primary);
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    margin-left: 10px;
  }
  header {
    margin-bottom: 30px;
    h1 {
      text-align: center;
      text-transform: uppercase;
    }
  }

  .section-center {
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    gap: 2em;
    .four {
      span {
        color: var(--clr-primary-1);
      }
    }
  }

  footer {
    margin-top: 15px;
    display: flex;
    justify-content: center;

    h2 {
      span {
        color: var(--clr-primary-2);
      }
    }
  }
`;
export default Totals;
