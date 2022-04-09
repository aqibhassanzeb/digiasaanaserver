var express=require('express');
const router=express.Router();
let Data=require('../controller/selfDepositeAmount');

router.get('/selfDepositeAmount',Data.getselfDepositeAmount)
router.post('/add/selfDepositeAmount',Data.postselfDepositeAmount);
router.patch('/update/selfDepositeAmount',Data.patchselfDepositeAmount);
router.delete('/delete/selfDepositeAmount/:id',Data.deleteselfDepositeAmount)



module.exports=router