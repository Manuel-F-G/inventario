import { supabase } from "../index";
import Swal from "sweetalert2";
export async function InsertarPersonal(p) {
  const { error } = await supabase.rpc("insertarPersonal", p);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
      footer: '<a href="">Agregue una nueva descripción</a>',
    });
  }
}

export async function MostrarPersonal(p) {
  const { data } = await supabase
    .from("personal")
    .select()
    .eq("id_empresa", p.id_empresa)
    .order("id", { ascending: true });
  return data;
}
export async function EliminarPersonal(p) {
  const { error } = await supabase.from("personal").delete().eq("id", p.id);
  if (error) {
    alert("Error al eliminar", error.message);
  }
}
export async function EditarPersonal(p) {
  const { error } = await supabase.from("personal").update(p).eq("id", p.id);
  if (error) {
    alert("Error al editar Personal", error.message);
  }
}
export async function BuscarPersonal(p) {
  const { data } = await supabase
    .from("personal")
    .select()
    .eq("id_empresa", p.id_empresa)
    .ilike("descripcion", "%" + p.descripcion + "%");
  return data;
}
