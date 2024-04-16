import styled from "styled-components";
import {
   ContentFiltro, 
   Header, 
   RegistrarMarca, 
   Title,
   useMarcaStore,
   v,
   ReporteKardex, 
   useKardexStore} from "../../index";
import { useState } from "react";
import {PDFViewer} from "@react-pdf/renderer"
export function ReportesTemplate() {
  const [state, setState] = useState(false);
  const [dataSelect, setdataSelect] = useState([]);
  const [accion, setAccion] = useState("");
  const [openRegistro, SetopenRegistro] = useState(false);
  const { datakardex } = useKardexStore()
  const nuevoRegistro=()=>{
    SetopenRegistro(!openRegistro);
    setAccion("Nuevo")
    setdataSelect([])
  }
  const {setBuscador} = useMarcaStore()
  return (
    <Container>
      {
        openRegistro &&  <RegistrarMarca dataSelect={dataSelect} accion={accion} onClose={()=>SetopenRegistro(!openRegistro)}/>
      }
     
      <header className="header">
        <Header
          stateConfig={{ state: state, setState: () => setState(!state) }}
        />
      </header>
      <section className="area1">
        <ContentFiltro>
          <Title>
            Reportes
          </Title>
        </ContentFiltro>
      </section>
      <section className="main h-screen bg-red-400">
        <PDFViewer style={{width:"100%", height:"100%"}}>
        <ReporteKardex data={datakardex}/>
        </PDFViewer>
      </section>
    </Container>
  );
}
const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  padding: 15px;
  grid-template:
    "header" 100px
    "area1" 100px
    "main" auto;
  .header {
    grid-area: header;
    /* background-color: rgba(103, 93, 241, 0.14); */
    display: flex;
    align-items: center;
  }
  .area1 {
    grid-area: area1;
    /* background-color: rgba(229, 67, 26, 0.14); */
    display: flex;
    align-items: center;
  }
  .main {
    grid-area: main;
    /* background-color: rgba(179, 46, 241, 0.14); */
  }
`;
