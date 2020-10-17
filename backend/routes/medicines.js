const express = require("express");
const router = express.Router();
const Medicine = require("../models/medicine");

router.get("/find/all/", async (req, res) => {
  try {
    const medicines = await Medicine.find();
    res.json(medicines);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.get("/find/medicineName/:med_name", async (req, res) => {
  try {
    const medicine = await Medicine.find({ med_name: req.params.med_name });
    res.json(medicine);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.get("/find/medicineId/:med_id", async (req, res) => {
  try {
    const medicine = await Medicine.find({ med_id: req.params.med_id });
    res.json(medicine);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/add/", async (req, res) => {
  const medicine = new Medicine({
    med_name: req.body.med_name,
    med_id: req.body.med_id,
    batch_no: req.body.batch_no,
    qty: req.body.qty,
    created_at: req.body.created_at,
  });

  try {
    const a1 = await medicine.save();
    res.json(a1);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id);
    medicine.sub = req.body.sub;
    const a1 = await medicine.save();
    res.json(a1);
  } catch (err) {
    res.send("Error " + err);
  }
});
router.delete("/delete/:med_id", async (req, res) => {
  try {
    const medicine = await Medicine.findOne({ med_id: req.params.med_id });
    console.log(medicine);
    if (!medicine) {
      res.send("No such Medicine exists");
    } else {
      const a1 = await Medicine.findByIdAndDelete({ _id: medicine._id });
      res.json(a1);
    }
  } catch (err) {
    res.send("Error " + err);
  }
});

module.exports = router;
