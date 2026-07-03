import React, { useState } from "react";
import axios from "axios";

function StudentForm() {

  const [student, setStudent] = useState({
    name: "",
    email: ""
  });

  // Handle Input Change
  const handleChange = (e) => {

    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });

  };

  // Handle Form Submit
  const handleSubmit = async (e) => {

    e.preventDefault();

    // Validation
    if (
      student.name.trim() === "" ||
      student.email.trim() === ""
    ) {

      alert("Please fill all fields");

      return;

    }

    try {

      const response = await axios.post(
        "http://localhost:5000/students",
        student
      );

      alert(response.data);

      // Clear Form
      setStudent({
        name: "",
        email: ""
      });

    } catch (error) {

      console.log(error);

      alert("Error while inserting data");

    }

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>Student Form</h1> 

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={student.email}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

    </div>

  );

}

export default StudentForm;