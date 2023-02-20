const express = require('express');
const User = require('../models/User');
const router = express.Router(); 
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwt_secret= process.env.JWT_SECRET;
const fetchuser = require('../middleware/fetchuser');




// Route-1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser',[
    body('email', "Enter a valid email").isEmail(),
    body('name', 'Name should be more than 3 letters').isLength({ min: 3 }),
    // password must be at least 5 chars long
    body('password', 'Password should be more than 4 letters').isLength({ min: 5 }),
], async (req, res)=>{ 
    // if there are errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
        // check if email exists already 
        let user = await User.findOne({email: req.body.email})
        if(user){
            return res.status(400).json({error: 'Email already exists'})
        }
        const salt = await bcrypt.genSalt(10);
        const securePass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePass
        })
        const data = {
            user: {
             id: user.id
            }
        }
        const authToken = jwt.sign(data, jwt_secret);
        console.log(authToken);
        res.json({authToken})
    } 
    catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error')
    }

})

// Route-2: User login: POST "/api/auth/login". User try to login
router.post('/login',[
    body('email', "Enter a valid email").isEmail(),
    // password can't be blank
    body('password', 'Password can not be blank').exists(),
], async (req,res)=> {
    // if there are errors return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email})
        if(!user){
            return res.status(400).json({error:'Please try login with correct credentials'})
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if(!passwordCompare) {
            return res.status(400).json({error:'Please try login with correct credentials'})
        }
        const data = {
            user: {
                id: user.id
               }
        }
        const authToken = jwt.sign(data, jwt_secret);
        console.log(authToken);
        res.json({authToken})

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error')
    }

})

// Route-3: get logged in user detail: POST "/api/auth/getuser". login required
router.post('/getuser', fetchuser, async (req,res)=>{
    try {
        const userId = req.user.id
        const user = await User.findById(userId).select("-password");
        res.send(user)
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal Server Error')
    }
})


module.exports = router