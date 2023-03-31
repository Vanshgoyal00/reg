
import '../../pages/Form/form.css'
import {useForm} from 'react-hook-form';
import { useState } from 'react';
import React from 'react';


 function Step3({ setStep, formValues, setFormValues }) {
    const { register, handleSubmit } = useForm();
    
    const onSubmit = (values) => {
      const energyUsage1 = values.energy1;
      const energyUsage2 = values.energy2;
      const energyUsage3 = values.energy3;
      const energyUsage4 = values.energy4;
      const energyUsage5 = values.energy5;
      const energyUsage6 = values.energy6;
      const energyUsage7 = values.energy7;

      if (!/^\d{1,4}\.\d{2}$/.test(energyUsage1)) {
         alert("Please enter your energy usage as a decimal number ending with two numbers after the decimal point.")
        return;
      }
      if (!/^\d{1,4}\.\d{2}$/.test(energyUsage2)) {
        alert("Please enter your energy usage as a decimal number ending with two numbers after the decimal point.")
        return;
      }
      if (!/^\d{1,4}\.\d{2}$/.test(energyUsage3)) {
        alert("Please enter your energy usage as a decimal number ending with two numbers after the decimal point.")
        return;
      }
      if (!/^\d{1,4}\.\d{2}$/.test(energyUsage4)) {
        alert("Please enter your energy usage as a decimal number ending with two numbers after the decimal point.")
        return;
      }
      if (!/^\d{1,4}\.\d{2}$/.test(energyUsage5)) {
        alert("Please enter your energy usage as a decimal number ending with two numbers after the decimal point.")
        return;
      }
      if (!/^\d{1,4}\.\d{2}$/.test(energyUsage6)) {
        alert("Please enter your energy usage as a decimal number ending with two numbers after the decimal point.")
        return;
      }
      if (!/^\d{1,4}\.\d{2}$/.test(energyUsage7)) {
        alert("Please enter your energy usage as a decimal number ending with two numbers after the decimal point.")
        return;
      }

      setFormValues (({ ...formValues, ...values, Monday:ukMondayDate, Tuesday:ukTuesdayDate, Wednesday:ukWensdayDate, Thursday:ukThursdayDate, Friday:ukFridayDate, Saturday:ukSaturdayDate, Sunday:ukSundayDate})); //adds the following values seperatley from the input values
      setStep(4)
    };
const currentDate = new Date();
const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
const currentDayOfWeek = currentDate.getDay(); // 0 is Sunday, 1 is Monday, etc.


const [numberweek, setNumberWeek] = useState(0);
const weekNumber = numberweek * 7;

const daysSinceMonday = currentDayOfWeek === 0 ? 1 : currentDayOfWeek + weekNumber +-1;
const mondayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - daysSinceMonday);
const ukMondayDate = mondayDate.toLocaleDateString(options);

const daysSinceTuesday = currentDayOfWeek === 0 ? 2 : currentDayOfWeek + weekNumber +-2;
const tuesdayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - daysSinceTuesday);
const ukTuesdayDate = tuesdayDate.toLocaleDateString(options);

const daysSinceWensday = currentDayOfWeek === 0 ? 3 : currentDayOfWeek + weekNumber +-3;
const wensdayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - daysSinceWensday);
const ukWensdayDate = wensdayDate.toLocaleDateString(options);

const daysSinceThursday = currentDayOfWeek === 0 ? 4 : currentDayOfWeek + weekNumber +-4;
const thursdayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - daysSinceThursday);
const ukThursdayDate = thursdayDate.toLocaleDateString(options);

const daysSinceFriday = currentDayOfWeek === 0 ? 5 : currentDayOfWeek + weekNumber +-5;
const FridayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - daysSinceFriday);
const ukFridayDate = FridayDate.toLocaleDateString(options);

const daysSinceSaturday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek + weekNumber +-6;
const saturdayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - daysSinceSaturday);
const ukSaturdayDate = saturdayDate.toLocaleDateString(options);

const daysSinceSunday = currentDayOfWeek === 0 ? 7 : currentDayOfWeek + weekNumber +-7;
const sundayDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - daysSinceSunday);
const ukSundayDate = sundayDate.toLocaleDateString(options);


return (

      <>
        <form onSubmit={handleSubmit(onSubmit)} className='form.formS'>
<div>Please enter your energy usage as a decimal number ending with two numbers after the decimal point.</div>

<input className="input-field" type="number" value={numberweek}
  onChange={(e) => setNumberWeek(parseInt(e.target.value))}/>


{/*monday */}
<div className="weeklyDate">
<input className="input-field" {...register("Monday", {})}
id="dof"  placeholder={ukMondayDate.toString()} />
</div>

<div className="energyUsage">
<input className="input-field" {...register("energy1", {})}
id="dof" type="text" placeholder="energy" />
<br /><br />
</div>

{/*tuesday */}
<div className="weeklyDate">
<input className="input-field" {...register("Tuesday", {})}
id="dof" placeholder={ukTuesdayDate.toString()}/>
</div>
<div className="energyUsage">
<input className="input-field" {...register("energy2", {})}
id="dof" type="text" placeholder="energy"/>
<br /><br />
</div>

{/*wednesday */}
<div className="weeklyDate">
<input className="input-field" {...register("Wednesday", {})}
id="dof" placeholder={ukWensdayDate.toString()}/>
</div>
<div className="energyUsage">
<input className="input-field" {...register("energy3", {})}
id="dof" type="text" placeholder="energy"/>
<br /><br />
</div>

{/*thursday */}
<div className="weeklyDate">
<input className="input-field" {...register("Thursday", {})}
id="dof" placeholder={ukThursdayDate.toString()}/>
</div>
<div className="energyUsage">
<input className="input-field" {...register("energy4", {})}
id="dof" type="text" placeholder="energy"/>
<br /><br />
</div>

{/*friday */}
<div className="weeklyDate">
<input className="input-field" {...register("Friday", {})}
id="dof" placeholder={ukFridayDate.toString()}/>
</div>
<div className="energyUsage">
<input className="input-field" {...register("energy5", { })}
id="dof" type="text" placeholder="energy"/>
<br /><br />
</div>

{/*saturday */}
<div className="weeklyDate">
<input className="input-field" {...register("Saturday", {})}
id="dof" placeholder={ukSaturdayDate.toString()}/>
</div>
<div className="energyUsage">
<input className="input-field" {...register("energy6", {})}
id="dof" type="text" placeholder="energy"/>
<br /><br />
</div>  

{/*sunday*/}
<div className="weeklyDate">
<input className="input-field" {...register("Sunday", {})}
id="dof" placeholder={ukSundayDate.toString()}/>
</div>
<div className="energyUsage">
<input className="input-field" {...register("energy7", {})}
id="dof" type="text" placeholder="energy"/>
<br /><br />
</div>





<div className='formS'>
    <button type="submit" id="btn" name="submitButton" defaultValue="Next">
        submit
    </button>
</div>
</form>
</>
);
}

export default Step3;