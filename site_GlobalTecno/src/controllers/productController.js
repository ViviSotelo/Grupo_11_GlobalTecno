const fs = require('fs');
const path = require('path');

const categories = require('../data/categories');
let products = require('../data/products.json');

module.exports = {
    cart: (req, res) => res.render('products/productCart'),

    getByCategory: (req, res) => {
        const { idCategory } = req.params;
        const { name, products } = categories.find(category => category.id === +idCategory)
        /*  return res.send(name) */
        return res.render('products/categories', {
            name,
            products
        })
    },

    detail: (req, res) => {
        const { idProducts } = req.params;

        /* console.log(idProducts) */
        const { product, img, name, price, priceDolar, description, category, ofertas, destacados, id } = products.find(product => product.id === +idProducts)

        return res.render('products/productDetail', {
            product,
            id,
            img,
            name,
            price,
            priceDolar,
            description,
            category,
            ofertas,
            destacados
        })
    },

    search: (req, res) => {
        const { keyword } = req.query;

        const result = products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase()));

        let namesCategoty = categories.map(category => {
            return {
                id: category.id,
                name: category.name
            }
        });

        return res.render('products/result', {
            products: result,
            keyword,
            namesCategoty
        })

    },

    carga: (req, res) => res.render('products/productCarga', { categories }),

    store: (req, res) => {

        const { product, img, name, price, priceDolar, description, category, ofertas, destacados } = req.body;

        let ultimoId = products[products.length - 1].id;

        let nuevoProducto = {
            id: ultimoId + 1,
            name,
            price: +price,
            priceDolar: +priceDolar,
            description,
            category: +category,
            img: "paper1.jpg",
            ofertas,
            destacados
        }

        products.push(nuevoProducto);

        fs.writeFileSync(path.resolve(__dirname, '..', 'data', 'products.json'), JSON.stringify(products, null, 3), 'utf-8')
        return res.redirect('/')

        res.send('guardando');
    },

    editar: (req, res) => {

        const { id } = req.params;

        const product = products.find(product => product.id === +id);


        res.render('products/productEditar', {
            categories,
            product
        })
    },
    modificar: (req, res) => {


        return res.send(req.body)

        res.redirect('/products/detail/:' + id)
    }
}