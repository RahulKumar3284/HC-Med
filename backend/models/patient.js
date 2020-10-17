const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  visitor_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  prel: {
    type: String,
    required: false,
    default: "None",
  },
  mid: {
    type: String,
    required: false,
    default: "None",
  },
  dose: {
    type: String,
    required: false,
    default: "None",
  },
  ndays: {
    type: String,
    required: false,
    default: "None",
  },
  mqty: {
    type: String,
    required: false,
    default: "None",
  },
  visit_date: {
    type: String,
    required: false,
    default: "None",
  },
  doc_id: {
    type: String,
    required: false,
    default: "None",
  },
  m_status: {
    type: String,
    required: false,
    default: "None",
  },
  med_issued_by: {
    type: String,
    required: false,
    default: "None",
  },
  med_issued_on: {
    type: String,
    required: false,
    default: "None",
  },
  visit_no: {
    type: String,
    required: false,
    default: "None",
  },
  press_no: {
    type: String,
    required: false,
    default: "None",
  },
  batch_no: {
    type: String,
    required: false,
    default: "None",
  },
});

module.exports = mongoose.model("Patient", patientSchema);
