import styled from "styled-components";
import { v } from "../../styles/variables"
import {CardDatosEmpresa} from "../moleculas/CardDatosEmpresa"
export function BannerEmpresa(){
    return (
        <Container>
            <div className="content-wrapper-context">
                <span className="titulo">
                    {<v.iconoempresa />}
                    Grupo base energeticos
                </span>
                <div className="content-text">
                    Aquí va un texto chidote
                </div>
                <ContentCards>
                    <CardDatosEmpresa titulo="Moneda" valor="Mxn"/>
                    <CardDatosEmpresa titulo="Usuarios" valor="9999"/>
                </ContentCards>
            </div>
            
        </Container>
    );
}
const Container = styled.div`
width: 100%;
height: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
border: 0 solid #6b6b6b;
background-size: contain;
background-position: center;
background-repeat: no-repeat, repeat;
border-radius: 14px;
overflow: hidden;
`;
const ContentCards = styled.div`
display: flex; 
gap: 10px;
padding-top: 15px;
cursor: pointer;
`;