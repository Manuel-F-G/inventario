import { 
    useReactTable, 
    getCoreRowModel, 
    getFilteredRowModel, 
    getPaginationRowModel,
    getSortedRowModel,
    flexRender,     
} from "@tanstack/react-table";
import styled from "styled-components";
import {ContentAccionesTabla, useMarcaStore} from "../../../index"
import Swal from "sweetalert2";
export function TablaMarca ({data}){
    const {eliminarMarca} = useMarcaStore()
    const editar = () => {

    }
    const eliminar = (p) => {
        if(p.descripcion==="Generica"){
            Swal.fire({
                icon: "error",
                title: "Chin...",
                text: "No puedes eliminar este registro ya que es un valor por defecto",
            });
            return;
        }
        Swal.fire({
            title: "¿Estas seguro?",
            text: "No podras revertir esta acción",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, !Eliminar!",
        }).then(async(result) => {
            if (result.isConfirmed) {
                    await eliminarMarca({id:p.id})
            }
        });    
    };
    const columns=[{
        accessorKey: "descripcion",
        header: "Descripción",
        cell:(info)=><span>{info.getValue()}</span>
    },
    {
        accessorKey: "acciones",
        header: "Acciones",
        cell:(info)=>(
        <td>
            <ContentAccionesTabla 
            funcionEditar={()=>editar(info.row.original)}
            funcionEliminar={()=>eliminar(info.row.original)}
            />
        </td>
        ),
    },
];
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
                                <th key={header.id}>
                                    {header.column.columnDef.header}
                                </th>
                            ))}
                        </tr>
                    ))
                }
            
            </thead>
            <tbody>
                {table.getRowModel().rows.map((item)=>(
                    <tr key={item.id}>
                        {
                            item.getVisibleCells().map((cell)=>(
                                <td key={cell.id}>
                                    {
                                        flexRender(cell.column.columnDef.cell,cell.getContext())
                                    }
                                </td>
                            ))
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    </Container>);
}


const Container = styled.div`
`
