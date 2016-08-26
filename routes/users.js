var express = require('express');
var router = express.Router();
var indexmodule=require('./indexcontroller');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource USER');
});

router.get('/users/details/',indexmodule.indexcntrl);



module.exports = router;
