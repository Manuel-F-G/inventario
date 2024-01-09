import {supabase} from "../index";
import Swal from "sweetalert2";
export async function InsertarMarca (p) {
    const {error} = await supabase.rpc("insertarmarca",p)
    if(error){
        Swal.fire({
            icon: "error",
            title: "Chin...",
            text: error.message, footer: '<a href=" ">Agregue una nueva descripción</a>',
          });
    }
}

