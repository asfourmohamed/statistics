var jwt = require("jsonwebtoken");

var METABASE_SITE_URL = "http://localhost:3000";
var METABASE_SECRET_KEY = "4953cf08e8c28f1343ede6ebbad61b81157ef06b9981f7435e16df21496211ff";


function iframe(compagne){
  compagne =compagne.replace(/\s/g, '');
  var payload = {
    resource: {dashboard: 1},
    params: {
      "compagneid": `%${compagne}%`
    },
    exp: Math.round(Date.now() / 1000) + (100 * 60) // 10 minute expiration
  };
  var token = jwt.sign(payload, METABASE_SECRET_KEY);
  return (METABASE_SITE_URL + "/embed/dashboard/" + token + "#bordered=true&titled=true")
}

module.exports = {
    iframe
}