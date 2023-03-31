
import '../../pages/Form/form.css'
import {useForm} from 'react-hook-form';
import React from 'react';
//imports 

function Step2({ setStep, formValues, setFormValues }) {
    const { register, handleSubmit} = useForm();
    
    const onSubmit = (values) => {
    const avgCost = values.AverageCost;

      // validation for the average cost if incorrectly inputted
    if (!/^\d+(\.\d{1,2})?$/.test(avgCost)) {
      alert("Please enter a valid average monthly cost.")
      return;
    }

    const avgCost2 = "£" + values.avgCost;

      setFormValues (({ ...formValues, ...values, AverageCost: avgCost }));
    // Update form values state
      setStep(3);
    };

 
  
  

  // usages on those 7 days (kilowats per hour on 12 of the march, 13th of march etc..)
  // 
  
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)} className='formS'>

<input className="input-field"
{...register("EnergyCompany",)}  
id="ECompany" 
type="text" 
placeholder="Energy provider name" 
required />
    <br /><br />

<input className="input-field"
{...register("AverageCost",)}   
id="avgCost" 
type="decimal" 
placeholder="Avg monthly cost" required />
    <br /><br />

          <div className='formS'>
            <button type="submit" id="btn" name="submitButton" defaultValue="Next">
              Next
            </button>
          </div>
        </form>
      </>
    );
  }


  export default Step2;

   
   
    
