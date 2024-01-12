import { create } from "zustand";
import { InsertarMarca, MostrarMarca } from "../index"
export const useMarcaStore = create ((set,get)=>({
    buscador:"",
    setBuscador:(p)=>{
        set({buscador:p})
    }, 
    datamarca:[],
    marcaItemSelect: [],
    parametros: {},
    mostrarMarca: async (p) => {
        const response = await MostrarMarca(p);
        set({parametros:p})
        set({datamarca:response})
        set({marcaItemSelect: response[0]})
        return response;
    },
    selectMarca:(p)=>{
        set({marcaItemSelect:p})
    },
    insertarMarca:async (p)=>{
        await InsertarMarca(p)
        const {mostrarMarca} = get();
        const {parametros}= get();
        set(mostrarMarca(parametros))
    },
    eliminarMarca: async (p) => {
        await EliminarMarca();
        const {mostrarMarca} = get();
        const {parametros}= get();
        set(mostrarMarca(parametros));
    },
    editarMarca: async (p) => {
        await EditarMarca();
        const {mostrarMarca} = get();
        const {parametros}= get();
        set(mostrarMarca(parametros));
    },
    buscarMarca: async (p) => {
        response = await buscarMarca(p);
        set({datamarca:response})
    }
}));