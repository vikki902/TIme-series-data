const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://nishadvikki1997:RtBSfmF42S9BN063@cluster0.fmzxzdd.mongodb.net/time_series_db?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// modal
const dataSchema = new mongoose.Schema({
  // timestamp: Date,
  // variable1: Number,

  timestamp: Date,
  variables: [Number],
});

const DataPoint = mongoose.model("DataPoint", dataSchema);

//Create API endpoint to receive and store data

app.post("/api/data", async (req, res) => {
  try {
    const newData = req.body;
    await DataPoint.create(newData);
    res.status(201).json({ message: "Data stored successfully" });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

//Create API endpoint to get data
app.get("/api/data", async (req, res) => {
  try {
    const data = await DataPoint.find(); // Retrieve the latest 10 records
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
