const router = require('express').Router();
let User=require('../model/usermodel');

var jwt = require("jsonwebtoken");

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password=req.body.password;
    const numeComplet='Numele nu a fost adaugat';
    const Oras='Orasul nu a fost adaugat';
    const nrtelefon='nr_telefon nu a fost adaugat';
    const Judet='judetul nu a fost adaugat';
    const Strada='Strada nu a fost adaugata';
  
    const newUser = new User({username, password,numeComplet,Oras,nrtelefon,Judet,Strada});
  
    console.log(newUser);
    newUser.save()
      .then(() => res.json('User added!'))
      .catch(err => res.json('Error: ' + err));
  });

router.route('/login').post((req, res) => {
User.findOne({
    username: req.body.username
})
    // .populate("roles", "-__v")
    .exec((err, user) => {
    if (err) {
        res.json('User not found!');
        return;
    }

    if (!user) {
        return res.json('User not found!')
    }

    if (user.password!==req.body.password) {
        res.json('Invalid password!')
        return;
    }

    if((user.type=='admin')&&(user.password==req.body.password))
    {
        res.json("Valid admin!");
        return;
    }

    if((user.type=='user')&&(user.password==req.body.password))
    {
        res.json("Valid user!");
        return;
    }

    var token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // 24 hours
    });

    res.status(200).send({
      id: user._id,
      username: user.username,
      type: user.type,
      accessToken: token
    });

    });
});


router.route('/updateProfile').post((req, res) => {
    const username = req.body.username;
    const update = {
      numeComplet: req.body.numeComplet,
      Oras: req.body.Oras,
      nrtelefon: req.body.nrtelefon,
      Judet: req.body.Judet,
      Strada: req.body.Strada,
    };
  
    // const password = bcrypt.hashSync(req.body.password, 8)
  
    const filter = { username: username };
  
    User.findOneAndUpdate(filter, update)
      .exec((err, user) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        console.log(user);
  
        if (!user) {
          return res.json('User not found!');
        }
        res.json('User updated!')
      });
  });





module.exports = router;