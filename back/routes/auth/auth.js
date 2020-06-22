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
  connection.query('INSERT INTO users SET ?', data, (error, result) => {
    if (error)
      res.status(500).json({ flash: error.message });
    else
      res.status(200).json({ flash: "User has been signed up!" });
  })
});

module.exports = router;