export interface ResumenViajeRequest{
    id_viaje:number;
    hora:string;
    fecha: Date;
    total:number;

    id_origen: number;
    id_destino: number;
    id_paq: number;

}