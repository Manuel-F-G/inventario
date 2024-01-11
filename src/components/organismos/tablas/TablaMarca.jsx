import { 
    useReactTable, 
    getCoreRowModel, 
    getFilteredRowModel, 
    getPaginationRowModel,
    getSortedRowModel,     
} from "@tanstack/react-table";
import styled from "styled-components";
export function TablaMarca ({data}){
    const columns=[{
        accessorKey: "descripcion",
        header: "Descripción"
    }];
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),

    });
    return (
    <Container>
        <table>
            <thead>
                {
                    table.getHeaderGroups().map((headerGroup)=>(
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header)=>(
                                <th key={header.id}></th>
                            ))}
                        </tr>
                    ))
                }
            
            </thead>
            <tbody>
                <tr>
                    <td>
                        $.01
                    </td>
                    <td>
                        10
                    </td>
                    <td>
                        10
                    </td>
                </tr>
            </tbody>
        </table>
    </Container>);
}
const Container = styled.div`
`