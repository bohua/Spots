var express = require('express');
var router = express.Router();

var DbConnection = require('./db');

const find = async () => {
    try {
        let client = await DbConnection.Get();

        let result = await client.db("Spot").collection("User").find({});

        return result;
    } catch (e) {
        return e;
    }
};

/* GET users listing. */
router.get('/', async (req, res, next) => {

  let result = await find();
  let arr = await result.toArray();

  res.json(arr);
});

module.exports = router;
