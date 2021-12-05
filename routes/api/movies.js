const router=require('express').Router();

router.get('/', (req, res)=>{
    res.send("Hola correcta a Movies");
})

module.exports=router;