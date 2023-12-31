var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var fruit_controller = require('../controllers/fruit');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// fruit ROUTES ///
// POST request for creating a fruit.
router.post('/fruit', fruit_controller.fruit_create_post);
// DELETE request to delete fruit.
router.delete('/fruit/:id', fruit_controller.fruit_delete);
// PUT request to update fruit.
router.put('/fruit/:id', fruit_controller.fruit_update_put);
// GET request for one fruit.
router.get('/fruit/:id', fruit_controller.fruit_detail);
// GET request for list of all fruit items.
router.get('/fruit', fruit_controller.fruit_list);
module.exports = router;