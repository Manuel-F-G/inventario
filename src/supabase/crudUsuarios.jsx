import Swal from "sweetalert2";
import { ObtenerIdAuthSupabase, supabase } from "../index";
export const InsertarUsuarios = async (p) => {
  const { data, error } = await supabase
    .from("usuarios")
    .insert(p)
    .select()
    .maybeSingle();
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Error al insertar usuario " + error.message,
    });
  }
  if (data) return data;
};
export const MostrarUsuarios = async () => {
  const idAuthSupabase = await ObtenerIdAuthSupabase();
  const { error, data } = await supabase
    .from("usuarios")
    .select()
    .eq("idauth", idAuthSupabase)
    .maybeSingle();

  if (data) {
    return data;
  }
};
export const MostrarUsuariosTodos = async (p) => {
  const { error, data } = await supabase.rpc("mostrarpersonal",p)
  if (data) {
    return data;
  }
};
export async function EliminarUsuarios(p) {
  const { error } = await supabase.from("Usuarios").delete().eq("id", p.id);
  if (error) {
    alert("Error al eliminar", error.message);
  }
}
export async function EditarUsuarios(p) {
  const { error } = await supabase.from("Usuarios").update(p).eq("id", p.id);
  if (error) {
    alert("Error al editar Usuarios", error.message);
  }
}
export async function BuscarUsuarios(p) {
  const { data } = await supabase
    .from("Usuarios")
    .select()
    .eq("id_empresa", p.id_empresa)
    .ilike("descripcion", "%" + p.descripcion + "%");
  return data;
}