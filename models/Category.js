const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    id: {
      //set the type for the id
      type: DataTypes.INTEGER,
      //prevent the id from being null
      allowNull: FALSE,
      //automatically increase with each added
      autoIncrement: true,
      //use as the primary key
      primaryKey: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
