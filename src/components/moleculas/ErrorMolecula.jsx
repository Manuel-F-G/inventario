import styled from "styled-components";
export function ErrorMolecula({mensaje}) {
    return (<Container>
        <span>Ha ocurrido un error {mensaje}</span>
        </Container>);
}
const Container = styled.div`
    color: ${({ theme }) => theme.text};
`