require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
var session = require('express-session');

const login = require("./routes/login/login");
const logout = require("./routes/logout/logOut");
const dashboard = require("./routes/dashboard/dashboard");
const compagne = require("./routes/compagne/compagne")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json())

app.use(session({
  key: 'user_sid',
  secret: '[%(mqq5:$AKNkv]*',
  resave: false,
  saveUninitialized: false,
  cookie: {
      expires: 3600000 // 2 hours
  }
}));

app.use((req, res, next) => {
  if (req.cookies && !req.session.user) {
      res.clearCookie('user_sid');        
  }
  next();
});

var sessionChecker = (req, res, next) => {
  if (req.session.authentificated) {
    next();
  } else {
      res.redirect('/login');
  }    
};

app.get('/', function (req, res) {
    if (req.session.authentificated) {
    return res.redirect('/dashboard')
    } else {
    return res.render('login', { title: 'Authentification'});
    }
});
app.use('/login', login);
app.use(sessionChecker);
app.use('/dashboard', dashboard);
app.use('/compagne', compagne);
app.use('/logout', logout);

const port = process.env.APP_PORT || 3000;
app.listen(port , () => console.log('App listening on port ' + port));