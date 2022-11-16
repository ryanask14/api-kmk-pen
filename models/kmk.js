'use strict';
module.exports = (sequelize, DataTypes) => {
  const kmk = sequelize.define('kmk', {
    kode_bank: 
    {
      type: DataTypes.STRING,
      primaryKey: true
    }
  }, {
    timestamps: false,
    tableName: 't_penjaminan',
    ids: false
  });
  kmk.associate = function(models) {
    // associations can be defined here
  };
  return kmk;
};