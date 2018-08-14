const mongoose = require('mongoose');
const Cake = mongoose.model('Cake');
const Comment = mongoose.model('Comment');

module.exports = {
    all: function(req, res){
        Cake.find({}, function(err, tasks){
            if(err){
                console.log('Something went wrong when getting all cakes');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: tasks});
            }
        });
    },
    one: function(req, res){
        Cake.findOne({_id: req.params.id}, function(err, task){
            if(err){
                console.log('Something went wrong when getting a single cake');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: task});
            }
        });
    },
    create: function(req, res){
        Cake.create(req.body, function(err){
            if(err){
                console.log('Something went wrong when creating a cake, detail: ', err);
                res.redirect('/cakes');
            }else{
                res.redirect('/cakes');
            }
        });
    },
    update: function(req, res){
        Cake.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, function(err){
            if(err){
                console.log('Something went wrong when updating a cake, detail: ', err);
                res.redirect(303, '/cakes');
            }else{
                res.redirect(303, '/cakes');
            }
        });
    },
    remove: function(req, res){
        Cake.findOneAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.log('Something went wrong when updating a cake');
                res.json({message: 'Error', error: err});
            }else{
                Task.find({}, function(err, tasks){
                    if(err){
                        console.log('Something went wrong when getting all cakes');
                        res.json({message: 'Error', error: err});
                    }else{
                        res.json({message: 'Success', data: tasks});
                    }
                });
            }
        });
    },
    create_c: function(req, res){
        Comment.create(req.body, function(err, comment){
            if(err){
                console.log('Something went wrong when creating comments.', err);
                res.redirect('/cakes');
            }
            else{
                Cake.findByIdAndUpdate({_id: req.params.id}, {$push: {comments: comment}}, function(err){
                    if(err){
                        console.log('Something went wrong when adding a comment to a cake.');
                        res.redirect('/cakes');
                    }else{
                        res.redirect('/cakes');
                    }
                });
            }
        });
    }
};