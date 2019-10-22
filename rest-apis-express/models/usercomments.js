module.exports = {
    getComments,
    createComments,
    updateComments,
    deleteComments
};
const { postCommentModel } = require("../schema/postComment");
const { decodeToken } = require("./users");

async function getComments(req) {
    debugger
    const id = req.query.post_id;
    const det = await postCommentModel.find({ "post_id": id }, (err) => {
        console.log(err);
    }); //TODO: Put where condition subreddit_user_id == headers.subreddit_user_id
    return det;
}

async function createComments(req) {

    const decoded = decodeToken(req);
    const json = {
        "user_id": decoded.id,
        "subreddit_user_id": req.headers.subreddit_user_id,
        "subreddit_id": req.headers.subreddit_id,
        "post_id": req.body.post_id,
        "comment_data": req.body.comment_data,
    }
    await postCommentModel.create(json).catch((err) => {
        console.log(err);
        return ({ "status": "409" })
    });
    return ({ "status": "200" })
}

async function updateComments(req, res) {
    const body = req.body;
    const _id = req.query.id;
   // console.log(body);
    await info.findByIdAndUpdate(_id, body)
    return ({
        status: 200,
        statusText: "OK",
        message: "Client Updated!"
    });
}

async function deleteComments(req, res) {
    const id = req.query.id;
    console.log(id);
    await info.findByIdAndDelete(id);

    res.send({
        status: 200,
        statusText: "OK",
        message: "Client deleted!"
    });

}