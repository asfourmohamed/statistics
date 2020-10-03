// setup User model and its fields.
module.exports = (sequelize, types) => {
    return sequelize.define('Camps', {
    ID_Campagne: { 
        type: types.STRING, 
        },
    Numero: { 
        type: types.INTEGER, 
        },
    Date_Debut: { 
        type: types.DATE, 
        },
    Date_Fin: { 
        type: types.DATE, 
        },
    Telco: { 
        type: types.STRING, 
        },
    Marche: { 
        type: types.STRING, 
        },
    
  },{})};