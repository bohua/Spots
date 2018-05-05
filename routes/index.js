var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {
    res.render('login');
});

/* GET spot list page. */
router.get('/selectSpot', function(req, res, next) {
    const spotList = [
        {
            title: "Cars",
            subtitle: "Find your favorite ride",
            img: "../images/car.png"
        },

        {
            title: "Real Estate",
            subtitle: "What about a new life in bigger house",
            img: "../images/house.png"
        },

        {
            title: "Bikes",
            subtitle: "Get a flexible way to roll out",
            img: "../images/bike.png"
        },

        {
            title: "Travels",
            subtitle: "Have a great trip and souvenirs",
            img: "../images/suitcase.png"
        },

        {
            title: "Motor Bikes",
            subtitle: "Pretty cool, isn't it",
            img: "../images/motor.png"
        }
    ];

    res.render('select-spot', {data: spotList});
});

/* GET Spot page. */
router.get('/spot', async function (req, res, next) {
    res.render('spot');
});

module.exports = router;
