
let products = require('../data/products.json');

module.exports = {
    index : (req, res) => {

        const celulares = products.filter(products => products.category === 1)

        const electronica = products.filter(products => products.category === 2)

        const accesorios = products.filter(products => products.category === 3)

        const ofertas = products.filter(products => products.ofertas === true )

        const destacados = products.filter(products => products.destacados === true )
        
        
        return res.render('index', {
            celulares,
            electronica,
            accesorios,
            ofertas,
            destacados
        })
    }
}