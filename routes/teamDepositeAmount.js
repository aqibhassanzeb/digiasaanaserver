var express=require('express');
const router=express.Router();
const data=require('../controller/teamDepositeAmount');

router.get('/teamDepositeAmount',data.GetIncomeDetail);
router.post('/add/teamDepositeAmount',data.teamDepositAmount);
router.patch('/update/teamDepositeAmount',data.patchteamDepositeAmount)
router.delete('/delete/teamDepositeAmount/:id',data.deleteTeamDepositeAmount)

module.exports=router
