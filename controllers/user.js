const User = require("./../models/user");
const { body,validationResult } = require("express-validator");

exports.user_create_post = [
    // Validate and sanitise fields.
    body('email', 'email must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('password', 'password must not be empty.').trim().isLength({ min: 1 }).escape(),
    body('user_type', 'user type must not be empty.').trim().isLength({ min: 1 }).escape(),

    // Process request after validation and sanitization.
    async (req, res, next) => {
        try {
            // Extract the validation errors from a request.
            const errors = validationResult(req);

            // Create a Book object with escaped and trimmed data.
            if(!errors.isEmpty()) {
                // check that is the email existed?
                let foundUser = await User.findOne({'email': req.body.email});

                if(!foundUser) {
                    let user = new User({ 
                        email: req.body.email,
                        password: req.body.password,
                        user_type: req.body.user_type,
                    });
            
                    // Data from form is valid. Save user.
                    await user.save();
                    return res.status(201).send(user._id);
                } else {
                    return res.send("user existed! choose another name!");
                }
            }
            else {
                res.send("Something wrong");
            }
        } catch(e) {
            console.log(e);
        }
    } 
];
