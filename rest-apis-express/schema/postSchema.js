const { mongoose } = require('../mongoose')
const User = new mongoose.Schema({
    _id: String,
    post: [{
        _id: String,
        subreddit: [{
            _id: String,
            postdata: [{
                post: String,
                time: String,
                comment_on_Post: [{
                    _id: String
                }]
            }]
        }]

    }]

});

module.exports = mongoose.model("userPostInfo", User);