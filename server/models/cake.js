module.exports = function(mongoose){
    const CommentSchema = new mongoose.Schema({
        content: {type: String, default: '', required: [true, 'Comment cannot be blank!']},
        stars: {type: Number, default: '', required: [true, 'Rating cannot be blank!']},
    }, {timestamps: true});
    mongoose.model('Comment', CommentSchema);

    const CakeSchema = new mongoose.Schema({
        baker: {type: String, default: '', required: [true, 'Baker name cannot be blank!']},
        pic: {type: String, default: '', required: [true, 'Url cannot be blank!']},
        comments: [CommentSchema]
    }, {timestamps: true});
    mongoose.model('Cake', CakeSchema);
};