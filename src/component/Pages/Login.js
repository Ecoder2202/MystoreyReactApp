import React from 'react'
import './login.css'
import Footer from '../Footer/Footer'
import { NavLink} from 'react-router-dom'
import { useState, useEffect } from "react";

const Login = () => {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };
  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);


  return (
    <div className='loginconbody'>
    <div className='logincontainer'>
      <h1 className='signintxt'>Welcome to Vasiti  </h1>
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className='singmessage'>Login successfully</span>
      )}
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label className='Emailinp'>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder='Email address'
            value={formValues.email}
            onChange={handleChange}
          />
          {formErrors.email && <span>{formErrors.email}</span>}
        </div>

        <div>
          <label className='passinput'>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder='password'
            value={formValues.password}
            onChange={handleChange}
          />
          {formErrors.password && <span>{formErrors.password}</span>}
        </div>

        <button className='submitlgn' type="submit">Sign In</button>
      </form>
     
      <div className='acctoptCon'>
<p>Already have an account? </p>
<NavLink className='signuplink' to='/signup'>Siginup</NavLink>
</div>
 </div>
 <Footer />
    </div>
  );
};

   


 
  
export default Login