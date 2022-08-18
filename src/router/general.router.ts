import express from "express"; 
import { addUser, getMotoristas, getOrdenenesD, getOrdenesE, getOrdenesPE } from "../controller/general.controller";


const router = express.Router(); 

router.get("/motoristas", getMotoristas); 
router.get("/od", getOrdenenesD); 
router.get("/ope", getOrdenesPE); 
router.get("/oe", getOrdenesE); 

router.post("/newuser", addUser)


export default router;