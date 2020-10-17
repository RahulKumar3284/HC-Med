const express = require("express");
const router = express.Router();
const Patient = require("../models/patient");

router.get("/find/all/", async (req, res) => {
  try {
    const patients = await Patient.find();
    res.json(patients);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/find/visitorId/:visitor_id", async (req, res) => {
  try {
    const patient = await Patient.find({ visitor_id: req.params.visitor_id });
    res.json(patient);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/add/", async (req, res) => {
  const patient = new Patient({
    visitor_id: req.body.visitor_id,
    name: req.body.name,
    prel: req.body.prel,
    mid: req.body.mid,
    dose: req.body.dose,
    ndays: req.body.ndays,
    mqty: req.body.mqty,
    visit_date: req.body.visit_date,
    doc_id: req.body.doc_id,
    m_status: req.body.m_status,
    med_issued_by: req.body.med_issued_by,
    med_issued_on: req.body.med_issued_on,
    visit_no: req.body.visit_no,
    press_no: req.body.press_no,
    batch_no: req.body.batch_no,
  });

  try {
    const a1 = await patient.save();
    res.json(a1);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.patch("/update/:visitor_id", async (req, res) => {
  try {
    const patient = await Patient.find({ visitor_id: req.params.visitor_id });
    patient.dose = req.body.dose;
    const a1 = await patient.save();
    res.json(a1);
  } catch (err) {
    res.send("Error");
  }
});
router.delete("/delete/:visitor_id", async (req, res) => {
  try {
    const patient = await Patient.findOne({ visitor_id: req.params.visitor_id });
    if (!patient) {
      res.send("No such Visitor exists");
    } else {
      const a1 = await Patient.findByIdAndDelete({ _id: patient._id });
      res.json(a1);
    }
  } catch (err) {
    res.send("Error");
  }
});

module.exports = router;
