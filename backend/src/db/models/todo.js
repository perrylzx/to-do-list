'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    value: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {});
  return Todo;
};