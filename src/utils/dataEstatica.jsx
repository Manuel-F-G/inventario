import { v } from "../styles/variables";
import { AiOutlineHome, AiOutlineSetting } from "react-icons/ai";

export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: <v.iconoUser />,
    tipo: "miperfil",
  },
  {
    text: "Configuración",
    icono: <v.iconoSettings />,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: <v.iconoCerrarSesion />,
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
  {
    label: "Reportes",
    icon: <v.iconoreportes />,
    to: "/reportes",
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
    icono: "",
    descripcion: "light",
  },
  {
    icono: "🌚",
    descripcion: "dark",
  },
];
//data configuracion
export const DataModulosConfiguracion = [
  {
    title: "Productos",
    subtitle: "Registra productos",
    icono: "https://i.ibb.co/85zJ6yG/caja-del-paquete.png",
    link: "/configurar/productos",
  },
  {
    title: "Personal",
    subtitle: "Control de tu personal",
    icono: "https://i.ibb.co/5vgZ0fX/hombre.png",
    link: "/configurar/personal",
  },

  {
    title: "Tu empresa",
    subtitle: "Configurar opciones básicas",
    icono: "https://i.ibb.co/x7mHPgm/administracion-de-empresas.png",
    link: "/configurar/empresa",
  },
  {
    title: "Area de productos",
    subtitle: "Asigna un area a los productos",
    icono: "https://i.ibb.co/VYbMRLZ/categoria.png",
    link: "/configurar/categorias",
  },
  {
    title: "Marca de productos",
    subtitle: "Gestiona las marcas",
    icono: "https://i.ibb.co/1qsbCRb/piensa-fuera-de-la-caja.png",
    link: "/configurar/marca",
  },
];
//tipo usuario
export const TipouserData = [
  {
    descripcion: "empleado",
    icono: "🪖",
  },
  {
    descripcion: "administrador",
    icono: "👑",
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