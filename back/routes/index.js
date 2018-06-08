let express = require("express");
let router = express.Router();


router.get("/", (req, res) => {
    res.send("youhou");
});

router.post("/auth", (req, res) => {
    console.log(hello);
})
module.exports = router;