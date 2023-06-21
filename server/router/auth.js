const express = require("express");
const router =  express.Router();
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const authenticate = require("../middleware/authenticate")



require('../db/conn');

const User = require("../models/userSchema");
const { default: mongoose } = require("mongoose");

router.get('/', (req,res)=>{
    res.send('hello world from the server router.js');
})


router.post('/register',async(req,res)=>{
    const{name,email,password,cpassword} = req.body;
    if(!name || !email ||  !password || !cpassword){
         return res.status(422).json({error:"plzz filled the field properly"})
    }
    try{
       const userExist = await  User.findOne({email:email})
       console.log(userExist)

       if(userExist){
        return res.status(422).json({error:"email already exist"})
       }

       else if (password!==cpassword){
        return res.status(422).json({error:"password is not matching"})
       }

       else if (password.length<8){
        return res.status(422).json({error:"password alteast 8 characters"})
       }

       else{
        const user = new User({name,email,password,cpassword}) 
         await user.save();
         res.status(201).json({message:"user registered successfully"})
       }

        }catch(err){
            console.log(err)
        }
    });


router.post('/signin', async(req,res)=>{
    // console.log(req.body)
    // res.json({message:"awesome"})

    try{
        const{email,password} = req.body

        if(!email || !password){
            console.log("data is empty")
            return res.status(400).json({message:"field is empty"})
        }
        const userLogin = await User.findOne({email:email})
        console.log(userLogin)
        // if(!userLogin){
        //     res.status(400).json({error:"user error successfully"})
        // }
        if(userLogin){
            const isMatch = await bcrypt.compare(password,userLogin.password)
            const Newtoken =await userLogin.generateAuthToken();
            console.log(Newtoken)
            console.log(userLogin)
            res.cookie("jwtoken",Newtoken,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })
            if(!isMatch){
                res.status(400).json({error:"Invalid Credentails"})
            }
            else{
                res.json({message:"user Signin SSuccessfully"})
            }
            
        }
        else{
            res.status(400).json({error:"Invalid Credentials"})
        }

    }
    catch(err){
        console.log(err)
    }
})

router.get('/about', authenticate, (req,res)=>{
    res.send(req.rootUser);
})

router.get('/getdata', authenticate, (req,res)=>{
    res.send(req.rootUser);
})

router.post('/contact', authenticate,async (req,res)=>{
    try{
        const{name,email,message} = req.body;
        if(!name || !email || !message){
            return res.status(402).json({error:"plzz filled proper form"})
        }
        const userContact = await User.findOne({_id:req.userID})
        if(userContact){
            const userMessage = await userContact.addMessage(name,email,message);
            await userContact.save();
        }
    }

    
    catch (err) {
        console.log(err)
    }
})


router.get('/logout', authenticate, (req,res)=>{
    req.rootUser.tokens= []
    res.clearCookie('jwtoken',{path:'/'})
    res.status(200).send('User logout')
    req.rootUser.save()
})

module.exports = router;