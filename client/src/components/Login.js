import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { NavLink,Link,useLocation } from 'react-router-dom';


const Login = () => {

    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const navigate = useNavigate()
    
  
    const loginUser = async(e) =>{
      e.preventDefault();
  
      const res = await fetch('/signin',{
        method:"POST",
        headers:{
          "Content-Type":"application/json" },
          body:JSON.stringify({
          email,
          password
  
        })
      })
      const data = res.json();
      if(res.status===400 || !data){
        window.alert("Invalid Credentials")
      }
  
      else{
        window.alert("Login Successfully")
        navigate('/dashboard')
      }
    }
    return (
      <div className='form-container'>
      <h2>Login</h2>
      <form method='POST'>
          <label for="email">Email</label>
          <input className="field" type="email" id="email" name="email" value={email}
          onChange={(e)=>{setEmail(e.target.value) }} placeholder="Enter Your Email.." />
          <label for="password">Password</label>
          <input className="field" type="password" id="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value) }} placeholder="Enter Your Password.." />
          <input type="submit" value="Submit" onClick={loginUser}/>
      </form>
  </div>
    )
  }
  
  export default Login
// import {initializeApp} from 'firebase/app';
// import { firebaseConfig } from './firebaseConfig.js';
// import {getAuth,signInWithEmailAndPassword,createUserWithEmailAndPassword} from "firebase/auth";
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { NavLink,Link,useLocation } from 'react-router-dom';

// const Login = (props) => {
//     const app = initializeApp(firebaseConfig)
//     const navigate  = useNavigate();
//     const location  = useLocation();
//     const page = location.pathname === "/login" ? true:false;
//     const[email,setEmail] = useState("");
//     const[password,setPassword] = useState("");
//     const[isEmailUsed,setIsEmailUsed] = useState(false)
//     const[isUserExist,setIsUserExist] = useState(false)
//     const[emailValid,setEmailValid] = useState(true)
//     const[passwordValid,setPasswordValid] = useState(true)
//     const[error,setError] = useState("")
//     const auth  = getAuth();
//     console.log(auth)

    // const validation = (fieldName,value) =>{
    //     switch(fieldName){

    //         case 'email':
    //             return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    //         case 'password':
    //             return value.length >= 8;

    //         default:
    //             break;
    //     }
    // }

    // const ctaClickHandler  = (e) =>{
    //     e.preventDefault();
    //     setEmail("")
    //     setPassword("")

        // if(validation('email',email) || validation('password',password)){
        //     setEmailValid(validation('email',email))
        //     setPasswordValid(validation('password',password))
        //     return;
        // }
    //     if(page){
    //         signInWithEmailAndPassword(auth,email,password)
    //     .then(auth =>{
    //         if(auth){
    //             navigate('/dashboard')
    //         }
    //     })
    //     .catch(error=>{
    //         alert(error.message)
    //         setIsUserExist(true)
    //         setError(error.message)
    //  })
    //     }


    //     else{
    //         createUserWithEmailAndPassword(auth,email,password)
    //         .then(auth =>{
    //             if(auth){
    //                 navigate('/dashboard')
    //             }
    //         })
    //         .catch(error=>{
    //             alert(error.message)
    //             setIsUserExist(true)
    //             setError(error.message)
    //      } )
    //     }
    //     }
    //     useEffect(()=>{
    //         setIsUserExist(false)
    //         setEmailValid(false)

    //     },[location])
    
    // const emailOnChangeHandler = (e) =>{
    //     return setEmail(e.target.value)
    // }

    // const passwordOnChangeHandler = (e) =>{
    //     return setPassword(e.target.value)
    // }

    // return <>
    //     <div className="login">
    //         <div className="holder">
    //             <h1 className="text-white">{props.page} </h1>
    //             <br />
    //             <form>
    //                 <input
    //                     className="form-control"
    //                     type="email"
    //                     value={email}
    //                     name='email'
    //                     onChange={emailOnChangeHandler}
    //                     placeholder="Email" />
    //                     {emailValid && <p>Email is invalid/blank</p>}
    //                 <input
    //                     className="form-control"
    //                     type="password"
    //                     name='password'
    //                     value={password}
    //                     onChange={passwordOnChangeHandler}
    //                     placeholder="Password" />

    //                 {passwordValid  &&  <p className="text-danger">Password is invalid/blank</p>}
                    {/* <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label text-white" htmlFor="flexCheckDefault">
                            Remember Me
                        </label>
                    </div> */}
                //     <button className="btn btn-danger btn-block" onClick={ctaClickHandler}>
                //         {props.page}
                //     </button>
                //     <br />
                // </form>
                {/* <p className='error-msg'>{isUserExist?error.slice(22,-2):""}</p> */}
                
                {/* { isUserExist && <p className="text-danger">User does not exist | Go for Signup</p> }
        { isEmailUsed && <p className="text-danger">Email already in use | Go for Sign In</p> } */}
//                 <div className="login-form-other">
//                     <div className="login-signup-now">
//                         {props.already} <Link to={props.page=="register"?"/login":"/register"}>{props.page=="register"?"sign-in":"register"}</Link>
//                     </div>
//                 </div>
//             </div>
//             <div className="shadow"></div>
//             <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
//         </div>
//     </>
// }

// export default Login;


