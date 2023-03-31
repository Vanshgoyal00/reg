import "../../pages/Form/form.css";
import { useForm } from "react-hook-form";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // allows us to use the function to navigate to other pages within the react-router-dom
import axios from "axios";

function Step4({ setStep, formValues, setFormValues }) {
  const { register, handleSubmit } = useForm();

  const [fullname, setFullname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [postcode, setPostcode] = useState("");
  const [energyCompany, setEnergyCompany] = useState("");
  const [monthlyCost, setMonthlyCost] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    setFullname(formValues.fullname);
    setPhoneNumber(formValues.Phonenumber);
    setPostcode(formValues.Postcode);
    setEnergyCompany(formValues.EnergyCompany);
    setMonthlyCost(formValues.AverageCost);
  }, [formValues]);

  // functions when the button next/submit is pressed
  const onSubmit = async (e) => {
    // Update form values state
    setFormValues({ ...formValues });

    // Update form values state
    setStep(4);

    e.preventDefault(); // prevents default behaviour of the form which is to refresh the page

    console.log(fullname, phoneNumber, postcode, energyCompany, monthlyCost);

    try {
      const response = await axios.post("http://localhost:5000/api/form", {
        fullname,
        phoneNumber,
        postcode,
        energyCompany,
        monthlyCost,
      });

      setMessage(response.data.message);
      console.log(message);
      console.log("success");
    } catch (error) {
      // If the login fails, display an error message
      setMessage(error.response.data.message);
      console.log(message);
      console.log("failed");
    }

    navigate("/Home"); // this function happens when the submit button is pressed calling to the react-router-dom to send the user back to the main page
  };

  return (
    <>
      <form onSubmit={onSubmit} className="form.formS">
        <h1 className="Fheader">Thank you for completing the form.</h1>

        <h1>VALUES DISPLAYED:</h1>

        <p className="Fheader">page 1</p>
        
        <div>Full Name: {formValues.fullname}</div>

        <div>Phonenumber: {formValues.Phonenumber}</div>
        <div>PostCode: {formValues.Postcode}</div>

        <p className="Fheader">page 2</p>
        <div>EnergyCompany: {formValues.EnergyCompany}</div>
        <div>AverageCost: {formValues.AverageCost}</div>

        <p className="Fheader">page 3</p>
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

        {/* {Object.entries(formValues).map(([key, value]) => (
  <p key={key}>{key}: {value}</p>
))} */}

        <div className="formS">
          <button
            type="submit"
            id="btn"
            name="submitButton"
            defaultValue="Next"
          >
            submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Step4;

//form complete button returns user back to home page
// the place to make the link to sql
