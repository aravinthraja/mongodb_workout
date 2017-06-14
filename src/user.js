const mongoose       = require("mongoose");
const PostSchema     = require("./post");
const Schema           = mongoose.Schema;

const userSchema     = new Schema({
    name        : {
        type : String,
        validate  : {
            validator   :   (name) =>   name.length > 2,
            message     :   'length required more than'
        },
        required:[true,'Name is required']
    },
    postCount   : Number,
    post       : [PostSchema]
});

const User = mongoose.model('user', userSchema);


module.exports = User;