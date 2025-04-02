const User = require("../model/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");




//=======================================//
//=========== Signup Handler =============//
//=======================================//

const signup = async (req, res) => {
   
    //fetch data from request body
    const { username, email, password } = req.body;
   
    try {
        //Check if user already exists
        let user = await User.findOne({ username });
        //validation
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            });
        }
        //Hashing password
        const securePassword = await bcrypt.hash(password, 10);

        //Create new user
        user = new User({
            username,
            email,
            password: securePassword,
            accountType: "buyer",
        });

        await user.save();

        return res.status(201).json({
            success: true,
            message: "User created successfully",
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
             success: false,
             error: error.message
            });
    }
};





//=======================================//
//=========== Login Handler =============//
//=======================================//

const login = async (req, res) => {};



module.exports = { login, signup };