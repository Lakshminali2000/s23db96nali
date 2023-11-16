var express = require('express');
const fruit_controlers= require('../controllers/fruit');
var router = express.Router();
/* GET fruits */
router.get('/', fruit_controlers.fruit_view_all_Page );
router.get('/detail', fruit_controlers.fruit_view_one_Page);
router.get('/create', fruit_controlers.fruit_create_Page);
router.get('/update', fruit_controlers.fruit_update_Page);
router.get('/delete', fruit_controlers.fruit_delete_Page);

module.exports = router;