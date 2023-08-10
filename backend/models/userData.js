
const Sequelize = require('sequelize');
const sequelize = require('../util/database')


const User_details  = sequelize.define('user_details',
{
 id:{
  type:Sequelize.INTEGER,
  primaryKey:true,
  autoIncrement:true ,
  allowNull:false
 },
 Name:Sequelize.STRING,
 Email:{
  type:Sequelize.STRING,
  allowNull:false
 },
 Phone_number:{
  type:Sequelize.STRING,
  allowNull:false
 }
});



module.exports = User_details;