 
import mongoose from "mongoose";  
import { Motoristas } from "./motoristas.model"; 
import { Ordenes } from "./ordenes.model"; 
 
 
const schemaM = new mongoose.Schema<Motoristas>({  
    usuario:       String, 
    contrasena:    String, 
    direccion:     String, 
    ordenesPorEntregar:Array<Ordenes>, 
    ordenesEntregadas:Array<Ordenes> 
}); 
 
export const MotoristaSchema = mongoose.model('motoristas',schemaM);