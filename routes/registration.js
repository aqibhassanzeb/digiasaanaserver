var express = require('express');
const UserModal = require('../modals/Register')
const router = express.Router();
const data = require('../controller/Register');
router.get('/getUser/:id', data.getSingleUser)
router.patch('/update/getUser', data.ChangePassword)
router.get('/users', data.getAll);
router.post('/userstatus', data.userStatus);

router.post('/directTeam', data.AddNewTeamMember)
router.post('/login', data.login);
router.post('/register', data.Register);
module.exports = router;