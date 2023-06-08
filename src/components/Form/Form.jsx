import { useState } from "react";
import validation from "../../validation";

export default function Form({login}) {

    const [userData, setUserData] = useState({
        email:'',
        password:''
    })

    const handleChange = (event) =>{
        setErrors(validation({...userData,[event.target.name]: event.target.value}))
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
    }

    const[errors, setErrors] = useState({})

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }

return (
    <form>
        <div>
          <label htmlFor = 'email'>EMAIL</label>
          <input onChange = {handleChange} value = {userData.email}name = 'email' type ='text'/>
          {errors.e1 ? (<p>{errors.e1}</p>) : errors.e2 ? (<p>{errors.e2}</p>) : errors.e3 }
        </div>
        <div>
            <label for = 'password'>PASSWORD</label>
            <input onChange = {handleChange}value = {userData.password} name = 'password' type ='text'/>
            {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}
        </div>
        <button onClick = {handleSubmit} type = 'submit'>SUBMIT</button>
    </form>
)}