const express = require("express");
const authRouter = express.Router();


authRouter.post('/signup', (req, res) => {
    res.send('I am in POST signup');
});



module.exports = authRouter;