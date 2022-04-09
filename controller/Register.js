var { creatTokens } = require("./JWT");
const UserModal = require('../modals/Register');

const data = [
  {
    memeberId: "2222",
    parentId: "none",
    membername: "membername1",
    password: "password",
    teams: [],
    mobilenumber: "mobilenumber",
    email: "email",
    gender: "gender",
    joiningdate: "2022-04-12",
    district: "district",
    state: "state",
    pincode: "pincode",
    address: "address",
    nominename: "nominename",
    relation: "relation",
    bankname: "bankname",
    bankbranch: "bankbranch",
    accountnumber: "accountnumber",
    ifsccode: "ifsccode",
    pannumber: "pannumber",
    adharnumber: "adharnumber",

  },
  {
    memeberId: "22334",
    membername: "membername",
    password: "password",
    teams: [],
    mobilenumber: "mobilenumber",
    email: "email",
    gender: "gender",
    joiningdate: "2016-04-15",
    district: "district",
    state: "state",
    status: "status",
    pincode: "pincode",
    address: "address",
    nominename: "nominename",
    relation: "relation",
    bankname: "bankname",
    bankbranch: "bankbranch",
    accountnumber: "accountnumber",
    ifsccode: "ifsccode",
    pannumber: "pannumber",
    adharnumber: "adharnumber",
    parentId: "2222",
  },
];

module.exports.getSingleUser = async (req, res) => {
  try {
    let index = data.findIndex((x) => x.memeberId === req.params.id);
    const self = await UserModal.find({ memeberId: req.params.id });
    console.log(self)
    let datas = [data[index]];
    res.status(200).json({
      message: "datas",
      name: self[0].membername,
      joiningDate: self[0].joiningdate,
      mobilenumber: self[0].mobilenumber,

      data: self,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// change Profile
module.exports.ChangePassword = async (req, res) => {
  let index = data.findIndex((x) => x.memeberId === req.body.memeberId);
  data.splice(index, 1, req.body);
  console.log(req.body)
  UserModal.findOneAndUpdate(req.body.memeberId, req.body, { new: true }).then(
    (self) => {

      console.log(self, "dada");
      res.status(200).json({
        message: 'deposite has been updated'
      });

    }
  ).catch(error => {
    err => res.status(500).json({ message: err })
  })

};

// register new user and get users
module.exports.getAll = async (req, res) => {
  const self = await UserModal.find({});
  try {
    res.status(200).json({
      message: "datas",
      data: self,
    });
  } catch (err) {
    res.status(504).json({ message: err.message });
  }
};
module.exports.userStatus = async (req, res) => {
  const filter = { _id: req.body._id };
  const update = { status: req.body.status };
  try {

    const self = await UserModal.findOneAndUpdate(filter, update);
    res.status(200).json({ message: "status change", })

    console.log('this is updatafunction', self)
  } catch (error) {
    res.status(504).json({ message: error.message });
  }


  console.log(req.body)


};

module.exports.AddNewTeamMember = async (req, res) => {
  const self = await UserModal.find({ memeberId: req.body.parentId });

  let length = data.length;
  let memberId = length + 1200;
  req.body.memeberId = memberId.toString();
  req.body.id = length;
  // req.body.parentId='2222';
  req.body.teams = [];
  data.push(req.body);
  let index = data.findIndex((x) => x.memeberId === req.body.parentId);
  console.log(self)
  console.log(index);
  console.log(req.body.parentId);
  const selfed = new UserModal(req.body);
  try {
    await selfed.save();
    if (self[0].teams.length !== 0) {
      self[0].teams = [...self[0].teams, req.body];
      UserModal.findOneAndUpdate(req.body.parentId, self[0], { new: true }).then(
        (self) => {

          console.log(self, "dada");

          res.status(200).json({
            message: "user has been added",
            memeberId: memberId,
          });

        }
      ).catch(error => {
        err => res.status(500).json({ message: err })
      })
    } else {
      self[0].teams = [req.body];
      UserModal.findOneAndUpdate(req.body.parentId, self[0], { new: true }).then(
        (self) => {

          console.log(self, "dada");
          res.status(200).json({
            message: "user has been added",
            memeberId: memberId,
          });

        }
      ).catch(error => {
        err => res.status(500).json({ message: err })
      })
    }

  } catch (error) {
    res.status(500).json({
      message: error
    })
  }



};

module.exports.login = async (req, res) => {
  console.log(req.body);
  const self = await UserModal.find({ memeberId: req.body.userId });
  console.log("this is self", self)
  // if (!self) {
  //   console.log("this is self not found")
  //   return res.status(400).json({
  //     message: "user id or password doesnt exist",
  //   })

  // }
  console.log(self)
  let dated = data.findIndex((x) => x.memeberId === req.body.userId);
  console.log("this is dated", dated);
  if (self.length > -1) {
    if (
      self[0].memeberId === req.body.userId &&
      self[0].password === req.body.NewPassword
    ) {
      const accesstoken = creatTokens(req.body.userId);
      console.log(accesstoken);
      res.cookie("access-token", accesstoken, {
        maxAge: 60 * 60 * 24 * 30 * 1000,
      });
      res.status(200).json({
        message: "login sucess full",
        token: accesstoken,
        userId: req.body.userId,
      });
    } else {
      res.status(400).json({
        message: "user id and password doesnt match",
      });
    }
  } else {
    res.status(400).json({
      message: "user id or password doesnt exist",
    });
  }
};

// register new user
module.exports.Register = async (req, res) => {
  // console.log('thisi sfsaldfj', req.body);
  let length = data.length;
  let memberId = length + 1200;
  // console.log('this is member name', req.body.membername)
  req.body.memeberId = memberId.toString();
  console.log('sfsadfsadfas', req.body.memeberId)
  req.body.id = length;

  req.body.parentId = 'none';
  req.body.teams = [];
  const newdata = data.push(req.body);
  console.log('this is new data', newdata)
  const self = new UserModal(req.body);
  console.log('this is self', self)

  self.save().then(result => {
    console.log('this is res of save', result)

    console.log('data of register try', data)
    res.status(200).json({
      message: "user has been added",
      memeberId: memberId,
    });
  }).catch(
    (error) => {
      console.log('this is error', error)
      res.status(500).json({
        message: error
      })
    }

  )


}