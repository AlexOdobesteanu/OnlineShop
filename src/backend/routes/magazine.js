const router = require('express').Router();
let Magazin=require('../model/magazinmodel');



router.route('/').get((req, res) => {
    Magazin.find()
      .then(magazin => res.json(magazin))
      .catch(err => res.status(400).json('Error: ' + err));
  });





module.exports = router;