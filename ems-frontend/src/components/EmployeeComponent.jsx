import React, { useEffect, useState } from "react";
import { createEmployee, getEmployee, updateEmployee } from "../services/EmployeeService";
import {useNavigate,useParams} from "react-router-dom"

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");


  const {id} = useParams();

  
  const [errors,setErrors] = useState({
    firstName:"",
    lastName:"",
    email:""
  })


  const navigator = useNavigate();

  useEffect(() => {
    if(id){
        getEmployee(id).then((response)=>{
           setFirstName(response.data.firstName);
           setLastName(response.data.lastName);
           setEmail(response.data.email);     
        })
        .catch(err => {console.error(err)}
        )
    }
  },[id])  




  function saveOrUpdateEmployee(e) {
    e.preventDefault();

    if(validateForm()){
    const employee = { firstName, lastName, email };
    console.log(employee);

    if(id){
        updateEmployee(id,employee).then((response) => {
            console.log(response.data);
            navigator("/employees")  
        })
        .catch(err =>{console.error(err);
        })
    }
    else{
    createEmployee(employee).then((response) => {
        console.log(response.data);
        navigator("/employees")  
    })
    .catch(err =>{console.error(err);
    })
    }
  }
}

  function validateForm(){
    let valid = true;

    const errorCopy = {...errors}

    if(firstName.trim()){
        errorCopy.firstName = ''
    }
    else{
        errorCopy.firstName ="Firstname is required"
        valid = false;
    }

    if(lastName.trim()){
        errorCopy.lastName = ''
    }
    else{
        errorCopy.lastName ="Lastname is required"
        valid = false;
    }

    if(email.trim()){
        errorCopy.email = ''
    }
    else{
        errorCopy.email ="Email is required"
        valid = false;
    }
    setErrors(errorCopy);
    return valid;

  }

    function pageTitle(){
        if(id){
            return <h2 className="text-center">Update Employee</h2>
        }
        return <h2 className="text-center">Add Employee</h2>

    }


  return (
    <div className="container">
        <br/><br/>
      <div className="row">
        <div className="card col-md-6 offset-md-3">
          {pageTitle()}
          <div className="card-body">
        <form>
          <div className="form-group mb-2">
            <label className="form-label">firstName</label>
            <input
              type="text"
              placeholder="first name"
              value={firstName}
              className={`form-control ${errors.firstName?"is-invalid":""}`}
              onChange={(e) =>setFirstName(e.target.value)}
            />
            {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
          </div>

          <div className="form-group mb-2">
            <label className="form-label">lastName</label>
            <input
              type="text"
              placeholder="last name"
              value={lastName}
              className={`form-control ${errors.lastName?"is-invalid":""}`}
              onChange={(e) =>setLastName(e.target.value)}
            />
            {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
          </div>

          <div className="form-group mb-2">
            <label className="form-label">E-Mail</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              className={`form-control ${errors.email?"is-invalid":""}`}
              onChange={(e) =>setEmail(e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <button className="btn btn-success" onClick={saveOrUpdateEmployee}>
            Submit
          </button>
          </form>
        </div>
        </div> 
      </div>
    </div>
  );
};

export default EmployeeComponent;
