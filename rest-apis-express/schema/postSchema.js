const mongoose = require('mongoose')
const User = new mongoose.Schema({
    _id: String,
    post: [{
        _id: String,
        subreddit: [{
            _id: String,
            postdata: [{
                post: String,
                time: {
                    type: Date,
                    default: Date.now()
                },
                comment_on_Post: [{
                    _id: String
                }]
            }]
        }]

    }]

});
const postModel = mongoose.model("userPostInfo", User);
module.exports = {
    postModel
}