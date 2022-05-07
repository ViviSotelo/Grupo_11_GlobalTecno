const express = require('express');
const router = express.Router();


const {detail, cart, carga, editar} = require('../controllers/productController');

/* products */

router.get('/detail/:id', detail) ;
router.get('/cart', cart);


router.get('/carga', carga);


router.get('/editar', editar);

module.exports = router;