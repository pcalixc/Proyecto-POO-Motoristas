"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const general_controller_1 = require("../controller/general.controller");
const router = express_1.default.Router();
router.get("/motoristas", general_controller_1.getMotoristas);
router.get("/od", general_controller_1.getOrdenenesD);
router.get("/ope", general_controller_1.getOrdenesPE);
router.get("/oe", general_controller_1.getOrdenesE);
router.post("/newuser", general_controller_1.addUser);
exports.default = router;
