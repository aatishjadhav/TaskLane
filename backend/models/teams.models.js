const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, 
  description: { type: String }, 
  members: [{type: mongoose.Schema.Types.ObjectId, ref: 'WorkUser' }]
});

const Teams = mongoose.model("Team", teamSchema);

module.exports = Teams;
