import React, { useState } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const States = () => {
  // STATE VALUES
  const { appData, parseNum } = useGlobalContext();
  const { states } = appData;
  const [locState, setLocState] = useState(appData.states[0]);
  const { confirmedCases, casesOnAdmission, discharged, death } = locState;
  // FUNCTIONS AND SIDE EFFECTS
  const findDynamic = (e) => {
    const elem = e.target;
    const child = elem.querySelector(`.${e.target.value}`);
    const id = child.dataset.id;
    const state = states.find((item) => item._id === id);
    // console.log("hello world");
    setLocState(state);
  };
  // RETs
  return (
    <Wrapper>
      <header>
        <h2>State: </h2>
        <select className="drop" onChange={(e) => findDynamic(e)}>
          {states.map((item) => {
            const { state, _id: id } = item;
            return (
              <option
                value={state}
                key={id}
                data-id={id}
                className={`${state}`}
              >
                {state}
              </option>
            );
          })}
        </select>
      </header>

      <main className="section-center">
        <div>
          <h2>Confirmed Cases:</h2>
          <h1 className="val">{parseNum(confirmedCases)}</h1>
        </div>
        <div>
          <h2>Cases on Admission:</h2>
          <h1 className="val">{parseNum(casesOnAdmission)}</h1>
        </div>
        <div>
          <h2>Discharged:</h2>
          <h1 className="val">{parseNum(discharged)}</h1>
        </div>
      </main>

      <footer>
        <h2>
          Death: <span className="val">{parseNum(death)}</span>
        </h2>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  border: transparent;
  border-radius: 0px 20px 20px 0px;
  background: #f8f9fb;
  padding: 2rem 1.5rem;

  h2 {
    font-family: var(--ff-secondary);
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }

  .val {
    font-family: var(--ff-primary);
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    margin-left: 10px;
  }
  header {
    display: flex;
    justify-content: center;
    align-items: center;

    .drop {
      /* border-radius: 5px; */
      border: transparent;
      outline: none;
      background-color: #f8f9fb;
      font-family: var(--ff-primary);
      font-weight: 700;
      font-size: 25px;
      padding: 0.2rem;

      option {
        font-size: 16px;
      }
    }
  }

  .section-center {
    margin-top: 20px;
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    gap: 1em;
    div {
      h1,
      h2 {
        text-align: center;
      }

      h1 {
        margin-top: 10px;
      }
    }

    & :nth-child(3) {
      h1 {
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
export default States;
