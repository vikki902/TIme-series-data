import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {

    const [formData, setFormData] = useState({

        variable1: {
         timestamp1: '',
          variable1: 0
        },
       
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          await axios.post('http://localhost:3001/api/data', formData);
          console.log('Data saved successfully');
        } catch (error) {
          console.error('Error saving data:', error);
        }
      };
    
  return (
    <div >
    <h1>Time Series Data Input</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Timestamp:
        <input
          type="datetime-local"
          name="timestamp1"
          value={formData.timestamp1}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Variable 1:
        <input
          type="number"
          name="variable1"
          value={formData.variable1}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Timestamp:
        <input
          type="datetime-local"
          name="timestamp2"
          value={formData.timestamp2}
          onChange={handleChange}
        />
      </label>
      <br/>
      <label>
        Variable 2:
        <input
          type="number"
          name="variable2"
          value={formData.variable2}
          onChange={handleChange}
        />
      </label>
      {/* ... create input fields for variable3 to variable10 */}
{/* 
      <br />
      <label>
        Variable 3:
        <input
          type="number"
          name="variable3"
          value={formData.variable3}
          onChange={handleChange}
        />
      </label>

      <br />
      <label>
        Variable 4:
        <input
          type="number"
          name="variable4"
          value={formData.variable4}
          onChange={handleChange}
        />
      </label>


      <br />
      <label>
        Variable 5:
        <input
          type="number"
          name="variable5"
          value={formData.variable5}
          onChange={handleChange}
        />
      </label>

      <br />
      <label>
        Variable 6:
        <input
          type="number"
          name="variable6"
          value={formData.variable6}
          onChange={handleChange}
        />
      </label>

      <br />
      <label>
        Variable 7:
        <input
          type="number"
          name="variable7"
          value={formData.variable7}
          onChange={handleChange}
        />
      </label>


      <br />
      <label>
        Variable 8:
        <input
          type="number"
          name="variable8"
          value={formData.variable8}
          onChange={handleChange}
        />
      </label>

      <br />
      <label>
        Variable 9:
        <input
          type="number"
          name="variable9"
          value={formData.variable9}
          onChange={handleChange}
        />
      </label>


      <br />
      <label>
        Variable 10:
        <input
          type="number"
          name="variable10"
          value={formData.variable10}
          onChange={handleChange}
        />
      </label> */}
      <br />
      <button type="submit">Submit</button>
    </form>

  </div>
  )
}

export default Form
