import React from "react";
import "./Dashboard.css";
import "../Form/Form";
import "../../components/form-components/FormStep4";
import formValues from "../../components/form-components/FormStep4";
import piechart from "../../Assets/Dashboard Images/Piechart.png";
import LineGraphh from "../../Assets/Dashboard Images/LineGraph.png";
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

var LineGraphss = 0; // this is the var that need to be moved to the linegraph and changed based on the linegraph
if (LineGraphss === 0) {
  var bar = "skills-bar savingRatings1";
  var percentage = "10%";
} else if (LineGraphss === 1) {
  var bar = "skills-bar savingRatings2";
  var percentage = "20%";
} else if (LineGraphss === 2) {
  var bar = "skills-bar savingRatings3";
  var percentage = "30%";
} else if (LineGraphss === 3) {
  var bar = "skills-bar savingRatings4";
  var percentage = "40%";
} else if (LineGraphss === 4) {
  var bar = "skills-bar savingRatings5";
  var percentage = "50%";
} else if (LineGraphss === 5) {
  var bar = "skills-bar savingRatings6";
  var percentage = "60%";
} else if (LineGraphss === 6) {
  var bar = "skills-bar savingRatings7";
  var percentage = "70%";
} else if (LineGraphss === 7) {
  var bar = "skills-bar savingRatings8";
  var percentage = "80%";
} else if (LineGraphss === 8) {
  var bar = "skills-bar savingRatings9";
  var percentage = "90%";
} else {
  var bar = "skills-bar savingRatings10";
  var percentage = "100%";
}

function Dashboard() {
  const [message, setMessage] = useState('');

// Handle form submission
const handleQ = async (e) => {
  e.preventDefault();

  const question = e.target.elements.question.value;

  try {
    // Send a POST request to the server with the user's question
    const response = await axios.post('http://localhost:5000/api/questions', { question });

    // If the question is successfully saved in the database, display a success message
    console.log(response.data.message);
  } catch (error) {
    // If the question cannot be saved in the database, display an error message
    console.error(error.response.data.message);
  }
};


  return (
    <>
      <div class="grid-container">
        <div class="section1 Form">
          <p> Account</p>
          <p> Username </p>
        </div>
        <div class="section2 Form">Overview: </div>
        <div class="section3">
          <div className="slide-right">
            <h2>Return Home</h2>

            <a href="/Home">
              <button className="Largebutton">Home</button>
            </a>
          </div>
        </div>
        <div class="section4">
          <button
            onClick={() =>
              document.querySelector(".slide-right").classList.toggle("visible")
            }
            className="slide-right-button"
          >
            Back
          </button>
          {/*information taken from forms_table SQL page to be displayed back to the user */}
          <div>Full Name: {formValues.fullname}</div>
          <div>Phonenumber: {formValues.Phonenumber}</div>
          <div>PostCode: {formValues.Postcode}</div>
          <div>EnergyCompany: {formValues.EnergyCompany}</div>
          <div>AverageCost: {formValues.AverageCost}</div>
          <div>
            {" "}
            Monday: {formValues.Monday} = {formValues.energy1}
          </div>
          <div>
            {" "}
            Tuesday: {formValues.Tuesday} = {formValues.energy2}
          </div>
          <div>
            {" "}
            Wednesday: {formValues.Wednesday} = {formValues.energy3}
          </div>
          <div>
            {" "}
            Thursday: {formValues.Thursday} = {formValues.energy4}
          </div>
          <div>
            {" "}
            Friday: {formValues.Friday} = {formValues.energy5}
          </div>
          <div>
            {" "}
            Saturday: {formValues.Saturday} = {formValues.energy6}
          </div>
          <div>
            {" "}
            Sunday: {formValues.Sunday} = {formValues.energy7}
          </div>
        </div>

        <div class="section5">
          <div class="container-skills">
            <div className={bar}>{percentage}</div>
          </div>
        </div>

        <div class="section6">
          {/*<LineGraph />*/}
          <img src={LineGraphh} alt="linegraph" />
        </div>

        <div class="section7">Api section</div>

        <div class="section8">
          <img src={piechart} alt="piechart" />
        </div>

          <div class="section11 question-container">
          <form onSubmit={handleQ}>
    <label htmlFor="question">Enter your question:</label>
    <input type="text" id="question" name="question" required />
    <button type="submit">Submit</button>
    </form>

          </div>
      </div>
    </>
  );
}

export default Dashboard;
