"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdenesESchema = exports.OrdenesPESchema = exports.OrdenesDSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schemaD = new mongoose_1.default.Schema({
    direccionRestaurante: String,
    direccionCliente: String,
    arregloPedidos: (Array),
    totalPedido: Number
});
const schemaPE = new mongoose_1.default.Schema({
    direccionRestaurante: String,
    direccionCliente: String,
    arregloPedidos: (Array),
    totalPedido: Number
});
const schemaE = new mongoose_1.default.Schema({
    direccionRestaurante: String,
    direccionCliente: String,
    arregloPedidos: (Array),
    totalPedido: Number
});
exports.OrdenesDSchema = mongoose_1.default.model('ordenes_disponibles', schemaD);
exports.OrdenesPESchema = mongoose_1.default.model('ordenes_por_entregar', schemaD);
exports.OrdenesESchema = mongoose_1.default.model('ordenes_entregadas', schemaD);
