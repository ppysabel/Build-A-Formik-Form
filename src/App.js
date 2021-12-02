import React from "react";
import { useFormik} from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''      
    },
    onSubmit: values =>{
      alert("Login Successful");
      console.log('form:',values);
    },
    validate: values =>{
      let errors = {};
      if (!values.email) errors.email = 'Field required';
      if (!values.password) errors.password = 'Field required';
      if (!validateEmail(values.email)) {
        errors.email = 'Username should be an email';
      }
      return errors;
    }
  });
  
  return (
    <div>
      <p>
        <form onSubmit={formik.handleSubmit}>
          <div>Email:</div>
          <input type="text" id="emailField" name="email" onChange={formik.handleChange} value={formik.values.email}/>
          {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}        
          <div>Password:</div>
          <input type="text" id="pswField" name="password" onChange={formik.handleChange} value={formik.values.password}/><br/>
          {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}                
          <button type="submit" id="submitBtn">Submit</button>
        </form>   
      </p>   
    </div>
  );
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

export default App;
