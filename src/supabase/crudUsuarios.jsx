import Swal from "sweetalert2";
import { ObtenerIdAuthSupabase, supabase } from "../index"
export const InsertarUsuarios =async(p)=>{
    const {data,error} = await supabase.from("usuarios").insert(p).select().maybeSingle();
        if (error){
            Swal.fire({
                icon: "error",
                title: "Chin...",
                text: "Ha ocurrido un error al registrar un usuario" + error.message
              });
        }
        if (data) return data;

}
export const MostrarUsuarios = async () =>  {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    const {error,data} = await supabase
    .from("usuarios")
    .select()
    .eq("idauth", idAuthSupabase)
    .maybeSingle();
    if(data){
        return data;
    }
};