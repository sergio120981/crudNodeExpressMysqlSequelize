const router=require('express').Router();

const catR=require('./api/categories');
const catM=require('./api/movies');

router.use('/categories', catR);
router.use('/movies', catM); 

module.exports=router;