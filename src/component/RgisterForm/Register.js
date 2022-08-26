import React from 'react'
import { useState, useEffect } from 'react';
import './Register.css'   
import { NavLink} from 'react-router-dom'




function Register() {
const initialValues = {firstname: "", lastname: "", phoneNo: "", email:"", center:"", course: "", mode: "" };
const[formValues, setFormValues] = useState(initialValues); 
const[formErrors, setFormErrors] = useState({}); 
const [isSubmit, setIsSubmit]= useState(false);

const handlechange = (e) =>{
  const {name, value} = e.target;
  setFormValues({...formValues, [name]: value});
  console.log(formValues);
}
const handlesubmit =(e) =>{
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

useEffect(()=>{
  console.log(formErrors)
  if(Object.keys(formErrors).length === 0 && isSubmit){
   
  }

},[formErrors])





const validate = (values) =>{
const errors = {}
 const regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if (!values.firstname){
  errors.firstname = "FirstName is required!";
 }if (!values.lastname){
  errors.lastname = "LastName is required!";
 }if (!values.center){
  errors.center = "Center is required!";
 }if (!values.course){
  errors.course = "Course is required!";
 }if (!values.mode){
  errors.mode = "Mode is required!";
 }if (!values.email){
  errors.email = "Email is required!";
 }else if(!regex.test(values.email)){
  errors.email = "This is not a valid email!"
 }
 if (!values.phoneNo){
  errors.phoneNo = "Phone is required!";
 }else if(values.phoneNo.length < 10){
  errors.phoneNo = "Phone nunber not valid!"
 }else if(values.phoneNo.length > 15){
  errors.phoneNo = "Phone number cannot exceed more than 15 characters!"
 }
 return errors; 
}



return (
    <div className='regcontainer'>
{Object.keys(formErrors).length === 0 && isSubmit ? (<div className='RegMessage'>Form Submitted</div> ) :
(
  <pre>{JSON.stringify}</pre>
)};

    
    <form onSubmit={handlesubmit}>
<h1 className='RegTxxt'>Register Your Vasiti Account </h1>
<div className='secondCon'> </div>
<div className='formCon'>

<div className='field'>

<input
className='Regfirstn-inpt'
type='text' 
name='firstname' 
placeholder='First Name' 
value={formValues.firstname}
onChange={handlechange}
/>
</div>
<h5>{formErrors.firstname}</h5>


<div className='Regfield'>
<input 
className='Reglastn-inpt'
type='text' 
name='lastname' 
placeholder='Last Name'
value={formValues.lastname}
onChange={handlechange}

/>
</div>
<h5> {formErrors.lastname}</h5>





</div>


<div className='Regfield'>
<input 
className='RegPhon-inpt' 
type='text' 
name='phoneNo' 
placeholder='Phone Number'
 value={formValues.phoneNo}
 onChange={handlechange}
  />
</div>
<h5>{formErrors.phoneNo}</h5>



<div className='field'>
<input 
className='RegEmail-inpt'
type='email'
 name='email' 
 placeholder='Email Address' 
 value={formValues.email}
 onChange={handlechange}
  />
 
</div>
 <h5>{formErrors.email}</h5>

 <div>
<select className='Regcenter'
 name='center' 
 value={formValues.center}
 onChange={handlechange}> 
<option> Select a desire center</option>
<option> Ogba </option>
<option> Ikeja </option>
<option> Ojodu-Berger </option>
<option> Ajah </option>
</select>
</div>
<h5>{setFormErrors.center}</h5>

<div className='Regfield'>






<select className='Reg-course'
name='course' 
value={formValues.course}
 onChange={handlechange}>


<option> Select a course </option>
<option> FrontEnd </option>
<option> BackEnd </option>
<option> Full stack </option>
<option> UI/UX Course </option>
<option> Data Science & AI </option>
</select>
</div>
<h5>{formErrors.course}</h5>

<div>
<select className='Reg-mode'
name='mode' 
value={formValues.mode}
onChange={handlechange}> 
<option> Select a study mode </option>
<option> Weekday </option>
<option> Weekend </option>
</select>
</div>
<h5>{formErrors.mode}</h5>


<div>


<button className='RegConBtn'>Register</button>
<div className='acctoptCon'>
<p className='Regtermsandcon'>I have read and accepted the terms and conditions </p>
<NavLink className='Reglgnlink' to='/about'>terms and conditions</NavLink>

</div>
</div>



    </form>

    </div>
  )
}

export default Register