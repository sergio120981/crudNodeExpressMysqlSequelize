const router=require('express').Router();

const { Category }=require('../../db');

router.get('/', async (req, res)=>{
    const cats=await Category.findAll();
    res.json(cats);
});

router.post('/', async (req, res)=>{
    const CatObj=await Category.create(req.body);
    res.json(CatObj);
});

router.put('/:filmId', async (req, res)=>{
    const CatObj=await Category.update(req.body, {
        where: {id: req.params.filmId}
    });
    res.json({success: 'Se ha modificado'});
});

router.delete('/:filmId', async (req, res)=>{
    const CatObj=await Category.destroy({
        where: {id: req.params.filmId}
    });
    res.json({success: 'Se ha eliminado'});
});

module.exports=router; 