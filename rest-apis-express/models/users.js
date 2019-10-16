
module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser
};
const { info } = require("../schema/Userprofile")
const users = [];
async function getUsers(req) {
  //console.log(ObjectId().getTimestamp())
  try{
    const id = req.headers._id
    console.log(req.headers);    
    const det=await info.find({});
    return det;
  }
  catch(err)
  {
    console.log(err);
  }
}

async function createUser(req, res) {
    let response;
    let body,details;
    body=req.body
    details= new info(body)
    console.log(details)
    try{
      response=await details.save()
      return response

    }
    catch(err)
    {
      response={error:err}
      return response
      }
    
}

async function updateUser(req, res) {
  const body = req.body;
  const _id = req.query.id;
  // console.log(id);
  console.log(body);
  await info.findByIdAndUpdate(_id,body)
  return({
    status: 200,
    statusText: "OK",
    message: "Client Updated!"
  });
}

async function deleteUser(req, res) {
  const id = req.query.email;
  console.log(id);
  await info.findOneAndDelete(id);

  res.send({
    status: 200,
    statusText: "OK",
    message: "Client deleted!"
  });

  // users.pop(id);

  // res.send({
  //   status: 200,
  //   statusText: "OK",
  //   message: "Client Deleted!"
  // });
}