const categories = [
    {
        id : 1,
        name : "celulares"
    },
    {
        id : 2,
        name :"electronica"
    },
    {
        id : 3,
        name : "accesorios"
    }
]

module.exports ={
    cart : (req,res) => res.render('productCart'),
    getByCategory : (req,res) =>  {
        const {idCategory} = req.params;
        const category = categories.find(category => category.id === +idCategory)
        return res.render('products/categories', {
            category 
        })
    },
    
    detail : (req, res) => {
        const {id} = +req.params;

        res.render('products/productDetail',{
            numberImage : id
        })
    } ,
    carga : (req, res) => res.render('productCarga'),

    editar : (req, res) => res.render('productEditar'),
}