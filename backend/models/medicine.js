const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
  med_name: {
    type: String,
    required: true,
  },
  med_id: {
    type: String,
    required: true,
  },
  batch_no: {
    type: String,
    required: false,
    default: "NONE",
  },
  qty: {
    type: String,
    required: false,
    default: "0",
  },
  created_at: {
    type: String,
    required: false,
    default: "1 Jan 2000",
  },
});

module.exports = mongoose.model("Medicine", medicineSchema);
