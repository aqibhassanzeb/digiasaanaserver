var express=require('express');
const router=express.Router();
let Data=require('../controller/IncomeDetail');

router.get('/incomeDetail',Data.GetIncomeDetail);
router.post('/add/incomeDetail',Data.PostIncoeDetail);



module.exports=router;