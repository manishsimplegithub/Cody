const mongooes = require("mongoose");
const url =
  "mongodb+srv://manish:manishsri@cluster0.su4v9.mongodb.net/cody?retryWrites=true&w=majority";

mongooes
  .connect(url)
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = mongooes;
