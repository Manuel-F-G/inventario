import styled from "styled-components";
import { BtnCerrar } from "../atomos/BtnCerrar";
export function ListaGenerica({data, setState, funcion, scroll, bottom}){
    return (<container>
        <section className="contentClose">
            <BtnCerrar/>
        </section>
        <section className="contentItems">
            {data.map((item, index)=>{
                return(<ItemContainer>
                    
                </ItemContainer>)
            })}
        </section>
    </container>)
}
const container = styled.div`
`
const ItemContainer = styled.div`
`