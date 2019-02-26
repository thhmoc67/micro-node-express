var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.json({
    name: 'Dayal',
    email: 'dayal.sharan@nestassist.com'
  });
});

module.exports = router;
