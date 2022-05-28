const express = require('express');
const router = express.Router();


const {detail, cart, carga, modificar,editar, getByCategory, search,store} = require('../controllers/productController');

/* products */

router
    .get('/detail/:idProducts', detail)
    .get('/cart', cart)
    .get('/category/:idCategory/:id?', getByCategory)
    .get('/carga', carga)
    .post('/carga', store)
    .get('/editar/:id', editar)
    .put('/modificar/:id', modificar)
    .get('/search', search)

module.exports = router;