import { v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";

export const DesplegableUser = [
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion/>,
    tipo: "cerrarsesion",
  },
];



//data SIDEBAR
export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Kardex",
    icon: <v.iconocategorias />,
    to: "/kardex",
  },
];
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },
];
//temas
export const TemasData = [
  {
    icono: "🌞",
    descripcion: "light",
  },
  {
    icono: "🌚",
    descripcion: "dark",
  },
];

//data configuracion
export const DataModulosConfiguracion =[
  {
    title:"Productos",
    subtitle:"Registra productos",
    icono:"https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link:"/configurar/productos",
  },
  {
    title:"Personal",
    subtitle:"Control de personal",
    icono:"https://i.ibb.co/5vgZ0fX/hombre.png",
    link:"/configurar/personal",
  },
  {
    title:"Categoria de productos",
    subtitle:"Asigna area a los productos",
    icono:"https://i.ibb.co/VYbMRLZ/categoria.png",
    link:"/configurar/categorias",
  },
  {
    title:"Marca de productos",
    subtitle:"Añade marcas",
    icono:"https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link:"/configurar/marca",
  },
]
//tipo usuario
export const TipouserData = [
  {
    descripcion: "Empleado",
    icono: "🪖",
  },
];
//tipodoc
export const TipoDocData = [
  {
    descripcion: "Dni",
    icono: "🪖",
  },
  {
    descripcion: "Libreta electoral",
    icono: "👑",
  },
  {
    descripcion: "Otros",
    icono: "👑",
  },
];