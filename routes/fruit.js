// A little function to check if we have an authorized user and continue on

// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

var express = require('express');
const fruit_controlers= require('../controllers/fruit');
var router = express.Router();
/* GET fruits */
router.get('/', fruit_controlers.fruit_view_all_Page );
router.get('/detail', secured,fruit_controlers.fruit_view_one_Page);
router.get('/create', secured, fruit_controlers.fruit_create_Page);
router.get('/update', secured, fruit_controlers.fruit_update_Page);
router.get('/delete', secured,fruit_controlers.fruit_delete_Page);

module.exports = router;