var express = require('express');
var router = express.Router();

const theresiachintiaherawatiController =
require ("../controller/theresiachintiaherawatiController");

router.get('/',theresiachintiaherawatiController.createpariwisata);

router.get('/',theresiachintiaherawatiController.readpariwisata);

router.get('/:id',theresiachintiaherawatiController.deletepariwisata);

router.get('/:id',theresiachintiaherawatiController.updatepariwisata);

module.exports = router;