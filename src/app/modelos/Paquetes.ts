import { Transporte } from "./Transporte";

export interface Paquetes{

    id_paq:number;

    descripcion: string;

    servicio_1: string;
    servicio_2: string;
    servicio_3: string;
    servicio_4: string;

    precio: number;

    id_transp:Transporte;

}