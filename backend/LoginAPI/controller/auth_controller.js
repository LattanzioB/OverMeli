const User = require('../model/user_model');

const test = (req, res) => {
    res.json('test is working')
}

const registerUser = async (req, res) => {
    try{
        const {userName, password} = req.body;
        // Check if name was entered
        if(!userName){
            return res.json({
                error: 'user name is required'
            })
        };
        // Check if password was entered
        if(!password | password.length < 6){
            return res.json({
                error: 'user password is required and at least 6 characters long'
            })    
        }

        const exist = await User.findOne({userName})
        if(exist) {
            return res.json({
                error: 'Email is taken already'
            })
        }

        const user = await User.create({
            userName, password
        })

        return res.json(user)

    } catch (error){
        console.log(error)
    }
}

module.exports = {
    test,
    registerUser
}