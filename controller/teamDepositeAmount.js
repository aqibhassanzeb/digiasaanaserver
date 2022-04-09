const TeamModal=require('../modals/teamDepositeAmount');

const data=[
    {
        id: 1,
        teamDepositAmount: "4353",
        selfDepositAmount: "4353",
        memberName: "Aript Srivastava : 9 %",
        memberId: "179144353",
      }
]


module.exports.GetIncomeDetail = async (req, res) => {
  const team=await TeamModal.find({});
  console.log('team', team);

    try {
      res.status(200).json({
        message: "datas",
        data: team,
      });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  module.exports.teamDepositAmount=async(req,res)=>{
    const{ teamDepositAmount,memberName,memberId} =req.body;
    let length=data.length;
    let datas={};
    datas.id=length;
    datas. teamDepositAmount= teamDepositAmount;
    datas.memberName=memberName;
    datas.memberId=memberId;
    data.push(datas);
    const team = new TeamModal(datas);
      try{
        await team.save();
        res.status(200).json({
          message:'deposite has been added'
      });


      }catch(error){
        res.status(500).json({
          message:error
        })
      }
    
  }

  module.exports.patchteamDepositeAmount=async(req,res)=>{
    const{teamDepositAmount,memberName,memberId,id} =req.body;
    let length=data.length;
    let datas={};
  let i = data.findIndex((x) => x.id === id);
    datas.id=id;
    datas.teamDepositAmount=teamDepositAmount;
    datas.memberName=memberName;
    datas.memberId=memberId;
    data.splice(i,1,datas);
    TeamModal.findByIdAndUpdate(id,datas,{new:true}).then(
      (self)=>{
        
        res.status(200).json({
          message:'deposite has been updated'
      });
      
      }
    ).catch(error=>{
      err=>res.status(500).json({message:err})
    })
    
}

  module.exports.deleteTeamDepositeAmount=async(req,res,next)=>{
   TeamModal.findOneAndDelete(req.params.id).then(
      res.status(200).json({
        message:'requested data has been deleted'
    })
    ).catch(
      err=>res.status(500).json({message:err})
    )
      
}