"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
const sequelize_1 = require("sequelize");
class Order extends sequelize_1.Model {
}
;
Order.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    orderNfId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    orderNumber: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    orderPath: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    orderFileName: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    orderOriginalName: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    emissionDate: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
    pdfFile: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    emitedTo: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    Nnf: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    CTE: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    value: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: sequelize_1.DATE,
        allowNull: false,
    },
    cnpjId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    buyerId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    providerId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    orderStatusBuyer: {
        type: sequelize_1.INTEGER,
        allowNull: true,
    },
    orderStatusProvider: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    deliveryReceipt: {
        type: sequelize_1.INTEGER,
        allowNull: true,
    },
    cargoPackingList: {
        type: sequelize_1.STRING,
        allowNull: true,
    },
    deliveryCtrc: {
        type: sequelize_1.STRING,
        allowNull: true,
    },
}, {
    sequelize: _1.default,
    modelName: 'orders',
    timestamps: true,
});
// Order.belongsTo(User, { foreignKey: 'userId', as: 'user' });
// Order.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });
// Order.belongsTo(Buyer, { foreignKey: 'buyerId', as: 'buyer' });
// Order.belongsTo(Provider, { foreignKey: 'providerId', as: 'provider' });
exports.default = Order;
