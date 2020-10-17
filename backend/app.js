const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb+srv://ashwani:ashu@cluster0.lohs2.mongodb.net/db_ashwani?retryWrites=true&w=majority";
const app = express();

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.json());

// const alienRouter = require("./routes/aliens");
// app.use("/aliens", alienRouter);

const patientRouter = require("./routes/patients");
app.use("/patients", patientRouter);

const medicineRouter = require("./routes/medicines");
app.use("/medicines", medicineRouter);

app.listen(9000, () => {
  console.log("Server started");
});
