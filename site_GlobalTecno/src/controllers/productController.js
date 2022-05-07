module.exports ={
    cart : (req,res) => res.render('productCart'),
    
    detail : (req, res) => {
        const {id} = req.params;

        res.render('productDetail',{
            numberImage : id
        })
    } ,
    carga : (req, res) => res.render('productCarga'),

    editar : (req, res) => res.render('productEditar'),
}