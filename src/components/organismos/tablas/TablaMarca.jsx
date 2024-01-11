import { 
    useReactTable, 
    getCoreRowModel, 
    getFilteredRowModel, 
    getPaginationRowModel,
    getSortedRowModel, 
    
} from "@tanstack/react-table";
import styled from "styled-components";
export function TablaMarca ({data}){
    const columns=[
        {

        }
    ]
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });
    return (<Container>
        <h1>Componente de las tablas</h1>
    </Container>);
}
const Container = styled.div`
`