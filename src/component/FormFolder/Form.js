import React from 'react'
import { useState, useEffect } from 'react';
import './Form.css'   
import { NavLink} from 'react-router-dom'

function Form() {
const initialValues = {fullname: "", username: "", dob: "", month:"", year:"", email: "", password: "" };
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
 if (!values.fullname){
  errors.fullname = "Fullname is required!";
 }if (!values.username){
  errors.username = "Username is required!";
 }if (!values.dob){
  errors.dob = "dob is required!";
 }if (!values.month){
  errors.month = "Month is required!";
 }if (!values.year){
  errors.year = "Year is required!";
 }if (!values.email){
  errors.email = "Email is required!";
 }else if(!regex.test(values.email)){
  errors.email = "This is not a valid email!"
 }
 if (!values.password){
  errors.password = "Password is required!";
 }else if(values.password.length < 5){
  errors.password = "Password must be more than 5 characters!"
 }else if(values.password.length > 10){
  errors.password = "Password cannot exceed more than 10 characters!"
 }
 return errors; 
}



  return (
    <div className='container'>
{Object.keys(formErrors).length === 0 && isSubmit ? (<div className='signedMessage'>Signed in Successfully</div> ) :
(
  <pre>{JSON.stringify}</pre>
)};

    
    <form onSubmit={handlesubmit}>
<h1 className='createLogin'>Create Your Vasiti Account </h1>
<div className='secondCon'> </div>
<div className='formCon'>

<div className='field'>
<label className='labeltxtt'>FullName:</label>
<input
className='Email-inpt'
 type='text' 
name='fullname' 
placeholder='Fullname' 
value={formValues.fullname}
onChange={handlechange}
/>
</div>
<h5>{formErrors.fullname}</h5>


<div className='field'>
<label className='labeltxtt'>Username:</label>
<input 
className='Email-inpt'
type='text' 
name='username' 
placeholder='Username'
value={formValues.username}
onChange={handlechange}

/>
</div>
<h5> {formErrors.username}</h5>

<div className='field'>
<label className='dob-page'>Date of birth: </label>




<div>
<select className='days'
 name='dob' 
 value={formValues.dob}
 onChange={handlechange}> 
<option> 1 </option>
<option> 2 </option>
<option> 3 </option>
<option> 4 </option>
<option> 5 </option>
<option> 6 </option>
<option> 7 </option>
<option> 8 </option>
<option> 9 </option>
<option> 10 </option>
<option> 11 </option>
<option> 12 </option>
<option> 13 </option>
<option> 14 </option>
<option> 15 </option>
<option> 16 </option>
<option> 17 </option>
<option> 18 </option>
<option> 19 </option>
<option> 20 </option>
<option> 21 </option>
<option> 22 </option>
<option> 23 </option>
<option> 24 </option>
<option> 25 </option>
<option> 26 </option>
<option> 27 </option>
<option> 28 </option>
<option> 29 </option>
<option> 30 </option>
<option> 31 </option>
</select>
</div>
<h5>{setFormErrors.dob}</h5>

<div>
<select className='Months'
name='month' 
value={formValues.month}
 onChange={handlechange}>


<option>January </option>
<option> Febuary </option>
<option> March </option>
<option> April </option>
<option> May </option>
<option> June </option>
<option> July </option>
<option> August </option>
<option> September </option>
<option> October </option>
<option> November </option>
<option> December </option>
</select>
</div>
<h5>{formErrors.month}</h5>

<div>
<select className='year'
name='year' 
value={formValues.year}
 onChange={handlechange}> 

<option> 2022 </option>
<option> 2021 </option>
<option> 2020 </option>
<option> 2019 </option>
<option> 2018 </option>
<option> 2017</option>
<option> 2016 </option>
<option> 2015 </option>
<option> 2014 </option>
<option> 2013 </option>
<option> 2012</option>
<option> 2011 </option>
<option> 2010</option>
<option> 2009</option>
<option> 2008 </option>
<option> 2007 </option>
<option> 2006 </option>
<option> 2005 </option>
<option> 2004 </option>
<option> 2003 </option>
<option> 2002 </option>
<option> 2001 </option>
<option> 1999 </option>
<option> 1998 </option>
<option> 1997 </option>
<option> 1996 </option>
<option> 1995 </option>
<option> 1994 </option>
<option> 1993 </option>
<option> 1992 </option>
<option> 1991 </option>
<option> 1990 </option>
</select>
</div>
<h5>{formErrors.year}</h5>


</div>


<div className='field'>
<label className='labeltxtt'>Email: </label>
<input 
className='Email-inpttt' 
type='email' 
name='email' 
placeholder='Email'
 value={formValues.email}
 onChange={handlechange}
  />
</div>
<h5>{formErrors.email}</h5>



<div className='field'>
<label className='labeltxtt'>Password: </label>
<input 
className='Email-inpt'
type='password'
 name='password' 
 placeholder='Password' 
 value={formValues.password}
 onChange={handlechange}
  />
 
</div>
 <h5>{formErrors.password}</h5>


<button className='SigUpConBtn'>Submit</button>
<div className='acctoptCon'>
<p>Already have an account? </p>
<NavLink className='lgnlink' to='/login'>login</NavLink>

</div>
</div>



    </form>

    </div>
  )
}

export default Form