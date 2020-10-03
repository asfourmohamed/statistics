// setup User model and its fields.
module.exports = (sequelize, types) => {
    return sequelize.define('users', {
    id: { 
        type: types.INTEGER, 
        unique: true,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
        },
    login: {
      type: types.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [1,32],
        not: ["[|; ]",'i']
      }
    },
    password: {
      type: types.STRING,
      allowNull: false,
      unique: 'custom_unique_constraint_login_pass_users'
    },
    enable: {
        type: types.BOOLEAN,
        allowNull: false,
        defaultValue: true
    }
  },{})};