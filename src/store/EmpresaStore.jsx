import { create } from "zustand";
import { ContarUsuariosXempresa, MostrarEmpresa, supabase } from "../index";     

export const useEmpresaStore = create((set,get)=>({
    contadorusuarios:0,
    dataempresa:[],
    mostrarEmpresa: async (p) => {
        const response = await MostrarEmpresa(p);
        set({ dataempresa: response.empresa }); //aqui le pase el objeto empresa para que ahora el acceso sea directo 
        return response.empresa; 
    },
    contarusuariosXempresa: async (p)=>{
        const response = await ContarUsuariosXempresa(p);
        set({contadorusuarios:response});
        return response;
    }
}));