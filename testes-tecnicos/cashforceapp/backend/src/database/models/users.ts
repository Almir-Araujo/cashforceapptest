import db from '.';
import { Model, INTEGER, STRING, DATE } from 'sequelize';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  phoneNumber!: number;
  mobile!: string;
  departament!: string;
  verificationCode!: number;
  emailChecked!: number;
  createdAt!: Date;
  updatedAt!: Date;
  cashForceAdm!: number;
};

User.init({
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
  email:{
    type: STRING,
    allowNull: false,
  },
  phoneNumber:{
    type: INTEGER,
    allowNull: false,
  },
  mobile:{
    type: INTEGER,
    allowNull: false,
  },
  departament:{
    type: STRING,
    allowNull: false,
  },
  verificationCode:{
    type: INTEGER,
    allowNull: false,
  },
  emailChecked:{
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
  cashForceAdm:{
    type: STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: true,
});

export default User;