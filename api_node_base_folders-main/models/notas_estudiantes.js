'use strict'; 
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    class Notas extends Model {
      static associate(models) {
        // Definir asociaciones aquí si es necesario
      }
    }

    //Notas (id, estudiante_id, materia, nota1, nota2, nota3)
    Notas.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_estudiante: {
        type: DataTypes.STRING,
        allowNull: false
      },
      materia: {
        type: DataTypes.STRING,
        allowNull: false
      },
      nota1: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      nota2: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      nota3: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Notas',
      tableName: 'notas',
      timestamps: false
    });

    return Notas;
}