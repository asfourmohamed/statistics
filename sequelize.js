const Sequelize = require('sequelize');
const userModel = require('./models/users');
const campsModel = require('./models/camps');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});
const User = userModel(sequelize, Sequelize);
const Camps = campsModel(sequelize, Sequelize);



sequelize.sync()
.then(() => {
    console.log('tables has been successfully created, if one doesn\'t exist');
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash('test', salt, function(err, hash) {
            User.create({
                login: 'test',
                password: hash,
                enable: true
            }).catch(err => {
                //console.log("error")
                //console.log(err)
            })
        });
    });
{force: true}
})
.catch(error => console.log('This error occured', error));


module.exports = {
    User,
    Camps
  }