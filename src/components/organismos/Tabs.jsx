import { useState } from "react";
import styled from "styled-components";
import { v } from "../../styles/variables";
import { Device } from "../../styles/breackpoints";
export function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const handleClick = (index) => {
    setActiveTab(index);
  };
  return (
    <Container className="container">
      <ul className="tabs">
        <li
          className={activeTab == 0 ? "active" : ""}
          onClick={() => handleClick(0)}
        >
          {<v.iconopie />}
          Kardex
        </li>
        <li
          className={activeTab == 1 ? "active" : ""}
          onClick={() => handleClick(1)}
        >
          {<v.iconopie />}
          Titulo 2
        </li>
        <span className="glider"></span>
      </ul>
      <div className="tab-content">
        {activeTab === 0 && <span>hola</span>}
        {activeTab === 1 && <span>holaz</span>}
        {activeTab === 2 && <span>holazz</span>}
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  border: 1px solid #6a6b6c;
  border-radius: 15px;
  height: 100%;
  .tabs {
    list-style: none;
    display: flex;
    position: relative;
    border-radius: 100px;
    justify-content: space-between;
    top: 0;
    left: 0;
    flex-direction: column;
    @media ${Device.tablet} {
      flex-direction: row;
    }
    li {
      gap: 8px;
      display: felx;
      align-items: center;
      justify-content: center;
      height: 54px;
      width: 180px;
      font-size: 1.25rem;
      font-weight: 500;
      border-radius: 99px;
    }
  }
`;
