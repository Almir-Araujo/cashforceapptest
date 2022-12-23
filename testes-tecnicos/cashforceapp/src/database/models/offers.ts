import db from '.';
import { Model, INTEGER, STRING, DATE } from 'sequelize';

class Offer extends Model {
  id!: number;
  orderNfId!: number;
  orderNumber!: number;
  orderPath!: string;
  orderFileName!: string;
  orderOriginalName!: string;
  emissionDate!: Date;
  pdfFile!: string;
  emitedTo!: number;
  nNf!: number;
  CTE!: string;
  value!: number;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId!: number;
  userId!: number;
  buyerId!: number;
  providerId!: number;
  orderStatusProvider!: number;
  deliveryReceipt!: string;
  cargoPackingList!: string;
  deliveryCtrc!: string;
};

Offer.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  orderNfId:{
    type: INTEGER,
    allowNull: false,
  },
  orderNumber:{
    type: INTEGER,
    allowNull: false,
  },
  orderPath:{
    type: STRING,
    allowNull: false,
  },
  orderFileName:{
    type: STRING,
    allowNull: false,
  },
  orderOriginalName:{
    type: STRING,
    allowNull: false,
  },
  emissionDate:{
    type: DATE,
    allowNull: false,
  },
  pdfFile:{
    type: STRING,
    allowNull: false,
  },
  emitedTo:{
    type: STRING,
    allowNull: false,
  },
  Nnf:{
    type: INTEGER,
    allowNull: false,
  },
  CTE:{
    type: INTEGER,
    allowNull: false,
  },
  value:{
    type: INTEGER,
    allowNull: false,
  },
  createdAt:{
    type: DATE,
    allowNull: false,
  },
  updatedAt:{
    type: DATE,
    allowNull: false,
  },
  cnpjId:{
    type: INTEGER,
    allowNull: false,
  },
  userId:{
    type: INTEGER,
    allowNull: false,
  },
  buyerId:{
    type: INTEGER,
    allowNull: false,
  },
  providerId:{
    type: INTEGER,
    allowNull: false,
  },
  orderStatusBuyer:{
    type: INTEGER,
    allowNull: true,
  },
  orderStatusProvider:{
    type: INTEGER,
    allowNull: false,
  },
  deliveryReceipt:{
    type: INTEGER,
    allowNull: true,
  },
  cargoPackingList:{
    type: STRING,
    allowNull: true,
  },
  deliveryCtrc:{
    type: STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'offers',
  timestamps: true,
});

export default Offer;