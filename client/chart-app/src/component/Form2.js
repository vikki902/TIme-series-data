import React, { useState, useContext } from "react";
import axios from "axios";
import { StateContext } from "../App";
import "../App.css";
import Swal from "sweetalert2";

function Form2() {
  const { state, setState } = useContext(StateContext);
  const [formData, setFormData] = useState({
    timestamp: "",
    variables: Array(10).fill(0), // Initialize an array of 10 variables
  });

  const handleChange = (event, index) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      variables: prevData.variables.map((v, i) =>
        i === index ? parseFloat(value) : v
      ),
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // await axios.post('http://localhost:3001/api/data', formData);

      await axios.post(
        "https://time-series-data.onrender.com/api/data",
        formData
      );
      console.log("Data saved successfully");
    } catch (error) {
      console.error("Error saving data:", error);
    }
    setState(state + 1);
    Swal.fire("Data saved successfully");
  };

  return (
    <div className="App">
      <h1>Enter Amount For Today's Sales </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Timestamp:
          <input
            type="datetime-local"
            name="timestamp"
            value={formData.timestamp}
            onChange={(event) =>
              setFormData({ ...formData, timestamp: event.target.value })
            }
          />
        </label>
        <br />
        {formData.variables.map((variable, index) => (
          <div key={index} className="input-field">
            <label>
              Amount {index + 1}:
              <input
                type="number"
                value={variable}
                className="nput-field"
                onChange={(event) => handleChange(event, index)}
              />
            </label>
            <br />
          </div>
        ))}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
      <h2 className="title-2"> Sales for Today</h2>
    </div>
  );
}

export default Form2;
