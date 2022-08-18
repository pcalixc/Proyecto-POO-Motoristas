import { Request, Response} from "express";  
import { ObjectId } from "mongodb"; 
import mongoose from "mongoose"; 
import { MotoristaSchema} from "../model/motoristas.schema"; 
import { OrdenesDSchema, OrdenesESchema, OrdenesPESchema } from "../model/ordenes.schema"; 
 
 
export const getMotoristas=(req:Request, res:Response)=>{   
    MotoristaSchema.find({}).then(result=>{   
    res.send(result);   
    res.end();   
})   
    .catch(error=>console.log(error));    
}   
  
export const getOrdenenesD=(req:Request, res:Response)=>{   
    OrdenesDSchema.find({}).then(result=>{   
    res.send(result);   
    res.end();   
})   
    .catch(error=>console.log(error));    
}   
  
export const getOrdenesPE=(req:Request, res:Response)=>{   
    OrdenesPESchema.find({}).then(result=>{   
    res.send(result);   
    res.end();   
})   
    .catch(error=>console.log(error));    
}   
  
export const getOrdenesE=(req:Request, res:Response)=>{   
    OrdenesESchema.find({}).then(result=>{   
    res.send(result);   
    res.end();   
})   
    .catch(error=>console.log(error));    
}

export const addUser=(req:Request, res:Response)=>{ 
    
    const u = new MotoristaSchema(
        {
            usuario:       req.body.usuario,
            contrasena:    req.body.contrasena,
            ordenesPorEntregar: [],
            ordenesEntregadas: [] 
        });
        u.save().then(SaveResponse=>{
            res.send(SaveResponse);
            res.end();
        }).catch(error=>{
            res.send({error});
            res.end();
        })} 

        export const addOrder=(req:Request, res:Response)=>{
            MotoristaSchema.updateOne({_id: req.params.id},
                {
                    $push:{
                        ordenesPorEntregar:{
                            _id: new mongoose.Types.ObjectId(req.body.id) ,
                            direccionRestaurante: req.body.direccionRestaurante,  
                            direccioncliente:req.body.direccionCliente,  
                            arregloPedidos: req.body.arregloPedidos,  
                            totalPedido: req.body.totalPedido

                            
                        }
                    }
                }).then(result=>{
                    res.send(result);
                    res.end();
                }).catch(error=>{
                    res.send({error});
                    res.end();
                })
            }