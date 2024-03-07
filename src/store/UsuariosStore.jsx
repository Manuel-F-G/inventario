import { create } from "zustand";
import { InsertarUsuarios, MostrarUsuarios, supabase } from "../index";

export const useUsuariosStore = create((set, get) => ({
  insertarUsuarioAdmin: async (p) => {
    const { data, error } = await supabase.auth.signUp({
      email: p.correo,
      password: p.pass,
    });

    console.log("data del registro del user auth", data);
    if (error) return;
    const datauser = await InsertarUsuarios({
      idauth: data.user.id,
      fecharegistro: new Date(),
      tipouser: "admin",
    });
    return datauser;
  },
  idusuario: 0,
  mostrarUsuarios: async () => {
    const response = await MostrarUsuarios();
    set({ idusuario: response.id });
    return response;
  },
  buscador: "",
  setBuscador: (p) => {
    set({ buscador: p });
  },
  datapersonal: [],
  personalItemSelect: [],
  parametros: {}, 
  mostrarpersonal: async (p) => {
    const response = await MostrarPersonal(p);
    set({ parametros: p });
    set({ datapersonal: response });
    set({ personalItemSelect: response[0] });
    return response;
  },
  selectpersonal: (p) => {
    set({ personalItemSelect: p });
  },
  insertarpersonal: async (p) => {
    await InsertarPersonal(p);
    const { mostrarpersonal } = get();
    const { parametros } = get();
    set(mostrarpersonal(parametros));
  },
  eliminarpersonal: async (p) => {
    await EliminarPersonal(p);
    const { mostrarpersonal } = get();
    const { parametros } = get();
    set(mostrarpersonal(parametros));
  },
  editarpersonal: async (p) => {
    await EditarPersonal(p);
    const { mostrarpersonal } = get();
    const { parametros } = get();
    set(mostrarpersonal(parametros));
  },
  buscarpersonal: async (p) => {
    const response = await BuscarPersonal(p);
    set({ datapersonal: response });
  },
}));