
import mongoose from "mongoose"; 
 
 
import { Ordenes} from "./ordenes.model";  
 
const schemaD = new mongoose.Schema<Ordenes>({   
    direccionRestaurante:String,  
    direccionCliente:String,  
    arregloPedidos:Array<string>,  
    totalPedido: Number  
})  
  
const schemaPE = new mongoose.Schema<Ordenes>({   
    direccionRestaurante:String,  
    direccionCliente:String,  
    arregloPedidos:Array<string>,  
    totalPedido: Number  
})  
  
const schemaE = new mongoose.Schema<Ordenes>({   
    direccionRestaurante:String,  
    direccionCliente:String,  
    arregloPedidos:Array<string>,  
    totalPedido: Number  
})  
export const OrdenesDSchema = mongoose.model('ordenes_disponibles',schemaD);  
export const OrdenesPESchema= mongoose.model('ordenes_por_entregar',schemaD);  
export const OrdenesESchema= mongoose.model('ordenes_entregadas',schemaD);