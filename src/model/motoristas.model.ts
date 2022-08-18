import { Ordenes } from "./ordenes.model"; 
 
export interface Motoristas{ 
    usuario: string, 
    contrasena:string, 
    direccion:     string, 
    ordenesPorEntregar:Array<Ordenes>, 
    ordenesEntregadas:Array<Ordenes> 
}