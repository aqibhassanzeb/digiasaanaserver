var { VerifyToken } = require("./JWT");
var  selfDepositeAmountModal=require("../modals/selfDepositeAmount");

const data=[
    {
        id: 1,
        depositAmount: "1791",
        depositDate: "16/11/2020",
        postedId:'6666'
      },
      {
        id: 2,
        depositAmount: "17914",
        depositDate: "16/11/2020",
        postedId:'6666'
      },{
        id: 3,
        depositAmount: "4353",
        depositDate: "16/11/2020",
        postedId:'2222'
      },
];

module.exports.getselfDepositeAmount = async (req, res) => {
  const self=await selfDepositeAmountModal.find({});

    try {
      res.status(200).json({
        message: "datas",
        data: self,
      });
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };

  module.exports.postselfDepositeAmount=async(req,res)=>{

      const{depositAmount,depositDate,postedId} =req.body;
      let length=data.length;
      let datas={};
      datas.id=length;
    let dataed=VerifyToken(req);
      console.log(dataed)
      datas.depositAmount=depositAmount;
      datas.depositDate=depositDate;
      datas.postedId=postedId;

      data.push(datas);
      const self = new selfDepositeAmountModal(datas);
      try{
        await self.save();
        res.status(200).json({
            message:'deposite has been added'
        });


      }catch(error){
        res.status(500).json({
          message:error
        })
      }
  }

  module.exports.patchselfDepositeAmount=async(req,res)=>{
    const{depositAmount,depositDate,id,postedId} =req.body;
    let length=data.length;
    let datas={};
  let i = data.findIndex((x) => x.id === id);
    datas.id=id;
    datas.depositAmount=depositAmount;
    datas.depositDate=depositDate;
    datas.postedId=postedId;

    selfDepositeAmountModal.findByIdAndUpdate(id,datas,{new:true}).then(
      (self)=>{
        
        console.log(self,"dada");
        res.status(200).json({
        message:'deposite has been updated'
    });
      
      }
    ).catch(error=>{
      err=>res.status(500).json({message:err})
    })
    // data.splice(i,1,datas);
    // res.status(200).json({
    //     message:'deposite has been updated'
    // });
}

module.exports.deleteselfDepositeAmount=async(req,res,next)=>{
  selfDepositeAmountModal.findByIdAndDelete(req.params.id).then(
    res.status(200).json({
      message:'requested data has been deleted'
  })
  ).catch(
    err=>res.status(500).json({message:err})
  )
    
}