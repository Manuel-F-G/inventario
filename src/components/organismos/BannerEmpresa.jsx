import styled from "styled-components";
import { v } from "../../styles/variables"
export function BannerEmpresa() {
    return (<Container>
        <div className="content-wrapper-context">
            <span className="titulo">
                {<v.iconoempresa/>}
                Nombre de la emprezzza
            </span>
            <div className="content-text">
                No se que poner, pero aqui va algo chidote
            </div>
            <contentCards>

            </contentCards>
        </div>
    </Container>);
} 
const Container =styled.div``
const ContentCards =styled.div``