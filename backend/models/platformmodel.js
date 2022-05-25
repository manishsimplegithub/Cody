const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  description: String,
  type: String,
  features: Array,
  plans: Array,
  createdAt: { type: Date, default: new Date() },
});
const model = mongoose.model("platform", schema);
module.exports = model;
