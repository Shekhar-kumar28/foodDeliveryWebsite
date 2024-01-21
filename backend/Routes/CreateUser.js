const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post("/createuser", [
  body('email').isEmail(),
  body('name').isLength({ min: 5 }),
  body('password', 'Password should be at least 5 characters').isLength({ min: 5 })
],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const newUser = new User({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location
      });

      await newUser.save();
      res.json({ success: true });
    } catch (error) {
      console.error(error);

      if (error.name === 'MongoError' && error.code === 11000) {
        return res.status(400).json({ errors: [{ msg: 'Email already exists' }] });
      }

      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });


module.exports = router;














// const express = require('express')
// const router = express.Router()
// const User = require('../models/User')

// const { body, validationResult } = require('express-validator');

// router.post("/createuser", [
//     body('email').isEmail(),
//     body('name').isLength({ min: 5 }),
//     body('password','Incorrect Password').isLength({ min: 5 })
// ],
//     async (req, res) => {

//         const error = validationResult(req);
//         if(!error.isEmpty()){
//             return res.status(400).json({ errors: error.array() });
//         }



//         try {
//             await User.create({
//                 name: req.body.name,
//                 password: req.body.password,
//                 email: req.body.email,
//                 location: req.body.location
//             })
//             res.json({ success: true });
//         }
//         catch (error) {
//             console.log(error)
//             res.json({ success: false });
//         }
//     })

// module.exports = router;

// Routes/CreateUser.js