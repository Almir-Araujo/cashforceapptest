import db from '.';
import { Model, INTEGER, STRING, DATE } from 'sequelize';

class Buyer extends Model {
  id!: number;
  name!: string;
  tradingName!: string;
  responsibleName!: string;
  responsibleEmail!: string;
  responsiblePosition!: string;
  responsiblePhone!: number;
  responsibleMobile!: number;
  website!: string;
  postalCode!: number;
  address!: string;
  number!: number;
  complement!: string;
  neighborhood!: string;
  city!: string;
  state!: string;
  phoneNumber!: number;
  situation!: string;
  situationDate!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  cnpjId!: number;
  confirm!: string;
  email!: string;
};

Buyer.init({
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
    type: STRING,
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
    type: STRING,
    allowNull: false,
  },
  responsiblePhone:{
    type: INTEGER,
    allowNull: false,
  },
  responsibleMobile:{
    type: INTEGER,
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
    type: STRING,
    allowNull: false,
  },
  city:{
    type: STRING,
    allowNull: false,
  },
  state:{
    type: STRING,
    allowNull: false,
  },
  phoneNumber:{
    type: INTEGER,
    allowNull: false,
  },
  situation:{
    type: STRING,
    allowNull: false,
  },
  situationDate:{
    type: DATE,
    allowNull: true,
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
  confirm:{
    type: STRING,
    allowNull: true,
  },
  email:{
    type: STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'buyers',
  timestamps: true,
});

// Order.belongsTo(Cnpj, { foreignKey: 'cnpjId', as: 'cnpj' });

export default Buyer;