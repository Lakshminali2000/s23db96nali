var fruit = require("../models/fruit");
// List of all fruit
// List of all fruits
exports.fruit_list = async function(req, res) {
try{
thefruits = await fruit.find();
console.log("thefruits",thefruits);
res.send(thefruits);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// for a specific fruit.
exports.fruit_detail = function(req, res) {
res.send('NOT IMPLEMENTED: fruit detail: ' + req.params.id);
};

// Handle fruit delete form on DELETE.
exports.fruit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: fruit delete DELETE ' + req.params.id);
};
// Handle fruit update form on PUT.
exports.fruit_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: fruit update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.fruit_view_all_Page = async function(req, res) {
    try{
    thefruits = await fruit.find();
    console.log("fruits: " + thefruits);
    res.render('fruit', { title: 'fruit Search results', results: thefruits });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
/*exports.fruit_list = async function(req, res) {
        try{
        thefruits = await fruit.find();
        res.render('fruit', { title: 'fruit Search Results', results: thefruits });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
        };*/


        // Handle Costume create on POST.
exports.fruit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new fruit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.NAME = req.body.NAME;
    document.CALORIES = req.body.CALORIES;
    document.COLOR = req.body.COLOR;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    