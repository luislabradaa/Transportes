import { Origen } from "./Origen";
import { Destino } from "./Destino";
import { Paquetes } from "./Paquetes";

export interface ResumenViaje{

    id_viaje: number;
    hora:string;
    fecha: Date;
    total:number;
    id_origen: Origen;
    id_destino: Destino;
    id_paq: Paquetes;


}