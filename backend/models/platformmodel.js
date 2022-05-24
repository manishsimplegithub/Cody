const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  description: String,
  type:  String,
  features: Array,
  plans:  Array,
  createdAt: { type: Date, default: new Date() },
});
const model = mongoose.model("user", schema);
module.exports = model;
