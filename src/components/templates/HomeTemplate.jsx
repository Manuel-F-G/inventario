import styled from "styled-components";
import {Header,Title,BannerEmpresa} from "../../index";
import {useState} from "react";
export function HomeTemplate() {
  const [state, setState] = useState(false);
  return (
    <Container>
      <header className="header">
        <Header
        stateConfig={{state: state, setState: () => setState (!state)}}
        />
      </header>
      <section className="area1">
        <Title>Tu empresa</Title>
      </section>
      <section className="area2"></section>
      <section className="main">
        <BannerEmpresa/>
      </section>
    </Container>
  );
}
const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${(props)=>props.theme.bgtotal};
    color: ${({theme})=>theme.text};
    display:grid;
    padding:15px;
    grid-template: 
    "header" 100px
    "area1" 100px
    "area2" 100px
    "main" auto;
    .header{
      grid-area: header;
      background-color: hsl(120, 100%, 50%);
      display: flex;
      align-items: center;
    }
    .area1{
      grid-area: area1; 
      background-color: hsl(120, 100%, 75%);
      display: flex;
      align-items: center;
      justify-content: end;
    }
    .area2{
      grid-area: area2;
      background-color: hsl(120, 100%, 25%);
      display: flex;
      align-items: center;
    }
    .main{
      grid-area: main;
      background-color: hsl(120, 60%, 70%);
      display: flex;
    }
`;
