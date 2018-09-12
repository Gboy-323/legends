var express = require('express');
var router = express.Router();

//console.log("arasdfadfadf",router);
router.get('/name',function(req,res,next){
    next()
    //res.send("the id you sent is " + req.params.id)
},function(req,res){
    res.send("sent from middleware" )
});



module.exports = router;