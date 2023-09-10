const mongooose = require("mongoose");
const { Schema } = mongooose;

const studentsSchema = new Schema({
  roll: String,
  stud_di: String,
  name: String,
  sex: String,
  class: String,
  division: String,
  mob_number: String,
  w_number: String,
});

  const studentsModel=mongooose.model("students",studentsSchema)

  module.exports=studentsModel;