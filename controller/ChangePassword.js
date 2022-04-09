const data=[
    {password:'Digitalassana2026'}
]
const UserModal=require('../modals/Register');

module.exports.ChangePassord=async(req,res)=>{
    console.log(req.body)
    let i = data.findIndex((x) => x.password === req.body.OldPassword);
    let user=await UserModal.find({memeberId:req.body.id});
    console.log(user.length)
    console.log(req.body)
    if(user.length && user[0].password===req.body.OldPassword){
        user[0].password=req.body.NewPassword
    }
    UserModal.findOneAndUpdate(req.body.memeberId,user[0],{new:true}).then(
        (self)=>{
          
          console.log(self,"dada");
          res.status(200).json({
          message:'password has been updated'
      });
        
        }
      ).catch(error=>{
        err=>res.status(500).json({message:err})
      })
    // console.log(req.body.OldPassword.length)
    // console.log(i)
    // if(i>-1 && req.body.OldPassword.length!==0){
    //     data[i].password=req.body.NewPassword;
    //     res.status(200).json({
    //         message:'password has been changed'
    //     })
    // }else{
    //     res.status(400).json({
    //         mesage:'Password doesnt match'
    //     })
    // }

}