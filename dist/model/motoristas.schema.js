"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoristaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaM = new mongoose_1.default.Schema({
    usuario: String,
    contrasena: String,
    direccion: String,
    ordenesPorEntregar: (Array),
    ordenesEntregadas: (Array)
});
exports.MotoristaSchema = mongoose_1.default.model('motoristas', schemaM);
