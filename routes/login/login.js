const express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');

const {User} = require("../../sequelize");
const saltRounds = 10;

router.get('/', function(req, res){
    if (req.session.user_id) {
        return res.redirect('/dashboard');
    }
    return res.render('login', { title: 'Authentification'});
});

router.post('/', function(req, res){
    if (req.body.login == '' || req.body.password == ''){
        return res.render('login', { title: 'Authentification', message: 'Utilisateur ou mot de passe incorrecte'});
    }
    var login = req.body.login;
    var password = req.body.password;

    User.findOne({ where: { login: login } }).then(function (user) {
        if (!user) {
            return res.render('login', { title: 'Authentification', message: 'Utilisateur ou mot de passe incorrecte'});
        }
        else {
            if (user.dataValues.enable == false) {
                return res.render('login', { title: 'Authentification', message: 'utilisateur non active'});
            }
            bcrypt.compare(password, user.dataValues.password).then(function(result) {
                if (result == true) {
                    req.session.authentificated = true;
                    return res.redirect('/dashboard');
                }
                else {
                    return res.render('login', { title: 'Authentification', message: 'Utilisateur ou mot de passe incorrecte'});
                }
            });
            
        }
    }).catch(err => {
        return res.render('login', { title: 'Authentification', message: 'Internal server ERROR'})
    });
});


module.exports = router;