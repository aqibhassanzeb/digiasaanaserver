var express=require('express');
const router=express.Router();
const data=require('../controller/ChangePassword');
router.post('/changePassword',data.ChangePassord)
module.exports=router
