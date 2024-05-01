const express = require('express');
const router = express.Router();
const cors = require('cors');
const {test, registerUser, loginUser} = require('../controller/auth_controller')

//middleware
router.use(
    cors({
        credentials: true,
        origin: 'http://localhost:8090'
    })
)

router.get('/', test)
router.post('/register', registerUser)
router.post('/login', loginUser)


module.exports = router