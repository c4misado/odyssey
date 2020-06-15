const express = require("express");
const router = express.Router();
const connection = require('../../helpers/db');
const app = express();
const bodyParser = require("body-parser")



app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser)


router.post('/signup', function (req, res, next) {
    const data = req.body;
    connection.query('INSERT INTO users SET ?', data, (err, result) =>{
      if(err){
        res.status(500).send("Error signing up!");
      } else {
        res.status(200).send(result);
      }
    })
  });

module.exports = router;