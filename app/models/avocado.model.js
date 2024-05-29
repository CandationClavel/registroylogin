import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Avocado = sequelize.define('avocado_prices', {
  Id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  AveragePrice: {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  'Total Volume': {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  '4046': {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  '4225': {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  '4770': {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  'Total Bags': {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  'Small Bags': {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  'Large Bags': {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  'XLarge Bags': {
    type: DataTypes.FLOAT,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  region: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'avocado_prices',
  timestamps: false // Disable the automatic createdAt and updatedAt columns
});

export default Avocado;
