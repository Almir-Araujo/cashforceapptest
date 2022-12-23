import db from '.';
import { Model, INTEGER, STRING, DATE } from 'sequelize';

class Cnpj extends Model {
  id!: number;
  cnpj!: number;
  companyType!: string;
  createdAt!: Date;
  updatedAt!: Date;
};

Cnpj.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  cnpj:{
    type: INTEGER,
    allowNull: false,
  },
  companyType:{
    type: STRING,
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
}, {
  sequelize: db,
  modelName: 'cnpjs',
  timestamps: true,
});

export default Cnpj;