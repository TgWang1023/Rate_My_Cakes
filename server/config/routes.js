const cakes = require('../controllers/cakes.js');

module.exports = function(app){
    app.get('/cakes', function(req, res){
        cakes.all(req, res);
    });
    app.get('/cakes/:id', function(req, res){
        cakes.one(req, res);
    });
    app.post('/cakes', function(req, res){
        cakes.create(req, res);
    });
    app.put('/cakes/:id', function(req, res){
        cakes.update(req, res);
    });
    app.delete('/cakes/:id', function(req, res){
        cakes.remove(req, res);
    });
    app.post('/comments/:id', function(req, res){
        cakes.create_c(req, res);
    });
};