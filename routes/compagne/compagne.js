const express = require('express');
var router = express.Router();
var {iframe} = require('../../metabase');
const { Camps } = require("../../sequelize");
var {iframe} = require('../../metabase');

router.get('/', function(req, res){
    if (!req.query.operator || !req.query.marche) {
        return res.sendStatus(400);
    }
    let response = [];
    Camps.findAll({
        attributes: ['ID_Campagne'],
        where: {
            Telco: req.query.operator,
            marche: req.query.marche,
          }
    }).then(result => {
        for (index = 0; index < result.length; index++) {
            response[index] = {
                "label": result[index].dataValues.ID_Campagne,
                "value": result[index].dataValues.ID_Campagne
            } 
        }
        if (response.length == 0) {
            return res.json([{
                "label": "aucune compagne trouvé",
                "value": "aucune compagne trouvé"
            }])
        }
        console.log(response)
        return res.json(response)
    }).catch(() => {
        return res.sendStatus(500);
    });
    /*
    return res.json([
        {
            "label": "Item 1",
            "value": "1"
        },
        {
            "label": "Item 2",
            "value": "2",
            "selected": true
        }
    ])
    */
});

router.post('/', function(req, res){
    if(!req.body.compagneID) {
        return res.sendStatus(400);
    }
    let iframeUrl = "";
    iframeUrl = iframe(req.body.compagneID);
    return res.json({
        url : iframeUrl
    })
});

module.exports = router;