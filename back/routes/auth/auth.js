const express = require("express");
const connection = require('../../helpers/db.js');
const authRouter = express.Router();

authRouter.post('/signup', (req, res) => {console.log(req.body);
    const user =
        {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            lastname: req.body.lastname
        }
        
    const query = connection.query("INSERT INTO users SET ?", user, (error, results, fields) => {
        if (error)
            res.status(500).end();
        res.end()
    })
});

module.exports = authRouter;

//attention, bien sélèctionner "JSON(application/json) dans Postman , à côté de binary"