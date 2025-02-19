import {
  ventilationPage,
  heatingPage,
  plumbingPage,
  otherProductsPage,
  PageConfig,
} from "../../[...slug]/productosPagesConfig";

export interface NavbarItem {
  id: number;
  order: number;
  level: number;
  description: string;
  url: string;
  parentId?: number;
  config?: PageConfig;
  isHidden?: boolean
}

export const navbarConfig: NavbarItem[] = [
  {
    id: 0,
    order: 0,
    level: 1,
    description: "Inicio",
    url: "/",
    isHidden: true
  },
  {
    id: 1,
    order: 1,
    level: 1,
    description: "Quienes somos",
    url: "/quienes-somos",
  },
  {
    id: 2,
    order: 2,
    level: 1,
    description: "Servicios",
    url: "/servicios",
  },
  {
    id: 3,
    order: 3,
    level: 1,
    description: "Productos",
    url: "/productos",
  },
  {
    id: 4,
    order: 1,
    level: 2,
    description: "Ventilación y Climatización",
    url: "/productos/ventilacion-y-climatizacion",
    parentId: 3,
    config: ventilationPage,
  },
  {
    id: 5,
    order: 2,
    level: 2,
    description: "Fontanería",
    url: "/productos/fontaneria",
    parentId: 3,
    config: plumbingPage,
  },
  {
    id: 6,
    order: 3,
    level: 2,
    description: "Calefacción",
    url: "/productos/calefaccion",
    parentId: 3,
    config: heatingPage,
  },
  {
    id: 7,
    order: 4,
    level: 2,
    description: "Otros Productos",
    url: "/productos/otros-productos",
    parentId: 3,
    config: otherProductsPage,
  },
];
