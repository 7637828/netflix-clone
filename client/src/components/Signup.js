import React, { useState } from 'react'
import { Form } from 'react-router-dom'


const Signup = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        password:"",
        cpassword:""
    })
    let name;
    let value;

    const handleInputs = (e) =>{
        name = e.target.name;
        value = e.target.value;
        setUser({...user,[name]:value})
    }

    const PostData = async(e) =>{
        e.preventDefault();

        const{name,email,password,cpassword} = user;
        const res = await fetch("/register", {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                name,email,password,cpassword
            })
        })

        const data  = await res.json();
        if(data.status === 422 || !data){
            window.alert("Invalid Registration")
        }
        else{
            window.alert("Registration Successfully")
            

        }

    }


    return (
            <div className='form-container'>
                <h2>Signup</h2>
                <form method='POST'>
                    <label for="name">Name</label>
                    <input className="field" type="text" id="name" name="name" value={user.name}  onChange = {handleInputs} placeholder="Your name.." autoComplete='off' />
                    <label for="email">Email</label>
                    <input className="field" type="email" id="email" name="email" value={user.email} onChange = {handleInputs} autoComplete='off' placeholder="Enter Your Email.."  />
                   
                    <label for="password">Password</label>
                    <input className="field" type="password" id="password" name="password" value={user.password} autoComplete='off' onChange = {handleInputs} placeholder="Enter Your Password.." />
                    <label for="cpassword">Confirn Password</label>
                    <input className="field" type="password" id="cpassword" name="cpassword"  value={user.cpassword}  autoComplete='off'onChange = {handleInputs}placeholder="Enter Your Confirm Password.." />
                    <input type="submit" value="Submit" onClick={PostData}/>
                </form>
            </div>
    )
}

export default Signup