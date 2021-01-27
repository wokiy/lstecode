const express = require('express');
const router = express.Router();

router.get('/info',function(req,res,next) {
    res.json({
        mes:'hello user info'
    })
})

module.exports = router;

