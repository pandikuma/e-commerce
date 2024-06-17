import React, { useState } from "react";
import './Css/LoginSignup.css'

const LoginSignup = () => {

    const [state,setState] = useState("Login")
    const [formData,setFormData] = useState({
        username:"",
        password:"",
        email:""
    })

    const changehandler = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const Login = async ()=>{
        console.log("Login function executed",formData);
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:'post',
            headers:{
                Accept:'application/from-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData= data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/"); 
        }
        else{
            alert(responseData.errors)
        }
    } 

    const Signup = async ()=>{
        console.log("Signup function executed",formData);
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:'post',
            headers:{
                Accept:'application/from-data',
                'Content-Type':'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace("/"); 
        }
        else{
            alert(responseData.errors)
        }
        
    } 

    return(
        <div>
            <div className="loginsignup">
                <div className="loginsignup-container">
                    <h1>{state}</h1>
                    <div className="loginsignup-fields">
                        {state==="sign up"?<input name='username' value={formData.username} onChange={changehandler} type="text" placeholder="Your Name" />:<></>}
                        <input name='email' value={formData.email} onChange={changehandler} type="email" placeholder="Email Address" />
                        <input name="password" value={formData.password} onChange={changehandler} type="password" placeholder="password" />
                    </div>
                    <button onClick={()=>{state==="Login"?Login():Signup()}}>Continue</button>
                    {state==="sign up"
                    ?<p className="loginsignup-login">Already have an account?<span onClick={()=>{setState("Login")}}>Login here</span></p>
                    : <p className="loginsignup-login">Create an account?<span onClick={()=>{setState("sign up")}}>Click here</span></p>}    
                    <div className="loginsignup-agree">
                        <input type="checkbox" name='' id='' />
                        <p>By continuing, i agree to the terrms of use & privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup