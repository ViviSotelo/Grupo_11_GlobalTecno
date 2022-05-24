const express = require('express');
const router = express.Router();


const {detail, cart, carga, editar, getByCategory} = require('../controllers/productController');

/* products */

router.get('/detail/:id', detail) ;
router.get('/cart', cart);

router.get('/category/:idCategory/:id?', getByCategory);
router.get('/carga', carga);


router.get('/editar', editar);

module.exports = router;