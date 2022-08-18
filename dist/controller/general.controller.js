"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addOrder = exports.addUser = exports.getOrdenesE = exports.getOrdenesPE = exports.getOrdenenesD = exports.getMotoristas = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const motoristas_schema_1 = require("../model/motoristas.schema");
const ordenes_schema_1 = require("../model/ordenes.schema");
const getMotoristas = (req, res) => {
    motoristas_schema_1.MotoristaSchema.find({}).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.log(error));
};
exports.getMotoristas = getMotoristas;
const getOrdenenesD = (req, res) => {
    ordenes_schema_1.OrdenesDSchema.find({}).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.log(error));
};
exports.getOrdenenesD = getOrdenenesD;
const getOrdenesPE = (req, res) => {
    ordenes_schema_1.OrdenesPESchema.find({}).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.log(error));
};
exports.getOrdenesPE = getOrdenesPE;
const getOrdenesE = (req, res) => {
    ordenes_schema_1.OrdenesESchema.find({}).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.log(error));
};
exports.getOrdenesE = getOrdenesE;
const addUser = (req, res) => {
    const u = new motoristas_schema_1.MotoristaSchema({
        usuario: req.body.usuario,
        contrasena: req.body.contrasena,
        ordenesPorEntregar: [],
        ordenesEntregadas: []
    });
    u.save().then(SaveResponse => {
        res.send(SaveResponse);
        res.end();
    }).catch(error => {
        res.send({ error });
        res.end();
    });
};
exports.addUser = addUser;
const addOrder = (req, res) => {
    motoristas_schema_1.MotoristaSchema.updateOne({ _id: req.params.id }, {
        $push: {
            ordenesPorEntregar: {
                _id: new mongoose_1.default.Types.ObjectId(req.body.id),
                direccionRestaurante: req.body.direccionRestaurante,
                direccioncliente: req.body.direccionCliente,
                arregloPedidos: req.body.arregloPedidos,
                totalPedido: req.body.totalPedido
            }
        }
    }).then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send({ error });
        res.end();
    });
};
exports.addOrder = addOrder;
