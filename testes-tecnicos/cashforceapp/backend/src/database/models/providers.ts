import db from '.';
import { Model, INTEGER, STRING, DATE } from 'sequelize';
import Cnpj from './cnpjs';

class Provider extends Model {
  id!: number;
  name!: string;
  tradingName!: number;
  cashForceTax!: string;
  responsibleName!: string;
  responsibleEmail!: string;
  responsiblePosition!: Date;
  responsiblePhone!: string;
  responsibleMobile!: number;
  postalCode!: string;
  address!: number;
  number!: number;
  complement!: string;
  neighborhood!: string;
  city!: string;
  state!: string;
  bank!: string;
  bankAgency!: string;
  account!: number;
  documents!: string;
  phoneNumber!: number;
  situation!: string;
  situationDate!: string;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId!: number;
  email!: string;
};

Provider.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type: STRING,
    allowNull: false,
  },
  tradingName:{
    type: INTEGER,
    allowNull: false,
  },
  cashForceTax:{
    type: INTEGER,
    allowNull: false,
  },
  responsibleName:{
    type: STRING,
    allowNull: false,
  },
  responsibleEmail:{
    type: STRING,
    allowNull: false,
  },
  responsiblePosition:{
    type: DATE,
    allowNull: false,
  },
  responsiblePhone:{
    type: STRING,
    allowNull: false,
  },
  responsibleMobile:{
    type: STRING,
    allowNull: false,
  },
  website:{
    type: STRING,
    allowNull: false,
  },
  postalCode:{
    type: INTEGER,
    allowNull: false,
  },
  address:{
    type: STRING,
    allowNull: false,
  },
  number:{
    type: INTEGER,
    allowNull: false,
  },
  complement:{
    type: STRING,
    allowNull: false,
  },
  neighborhood:{
    type: INTEGER,
    allowNull: false,
  },
  city:{
    type: STRING,
    allowNull: false,
  },
  state:{
    type: INTEGER,
    allowNull: true,
  },
  bank:{
    type: STRING,
    allowNull: true,
  },
  bankAgency: {
    type: INTEGER,
    allowNull: false,
  },
  account: {
    type: INTEGER,
    allowNull: false,
  },
  documents: {
    type: INTEGER,
    allowNull: false,
  },
  phoneNumber: {
    type: INTEGER,
    allowNull: false,
  },
  situation: {
    type: INTEGER,
    allowNull: false,
  },
  situationDate: {
    type: DATE,
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
    allowNull: true,
  },
  email:{
    type: STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'providers',
  timestamps: true,
});

Provider.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });

export default Provider;