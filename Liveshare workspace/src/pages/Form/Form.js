import { useState } from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import Step1 from "../../components/form-components/FormStep1";
import Step2 from "../../components/form-components/FormStep2";
import Step3 from "../../components/form-components/FormStep3";
import Step4 from "../../components/form-components/FormStep4";


function Forms() {
  const { register, handleSubmit, errors } = useForm();
  const [step, setStep] = useState(1);
  //const [formValues, setFormValues] = useState({});
  const [formValues, setFormValues] = useState({});
  return (
    <div>
      <div className="containerForm">
        <div className="Form_box">
          <p className="Fheader" id="Form">
            <strong>Form</strong>
          </p>
          <p className="Fheader">Add your details below</p>
          <p className="Fheader">Page {step} of 4</p>

          {step === 1 && (
            <Step1
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}

          {step === 2 && (
            <Step2
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}

          {step === 3 && (
            <Step3
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}

          {step === 4 && (
            <Step4
              setStep={setStep}
              formValues={formValues}
              setFormValues={setFormValues}
            />
          )}

        </div>
      </div>
    </div>
  );
}

export default Forms;
