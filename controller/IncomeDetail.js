var { creatTokens,VerifyToken } = require("./JWT");
const IncomeModal=require('../modals/IncomeDetail');

const data = [
  {
    postedId:'6666',
    paymentDate: "16/11/2020",
    selfDeposite: "200",
    teamDeposite: "400",
    totalAmt: "600",
    tds: "3",
    procesing: "4",
    payAmt: "600",
    detail: "mnbdfbdjfbdbfhdhfhdhhd bjhbh jbhjhjkfdjkfdhjfd",
  },
  {
    postedId:'6666',
    paymentDate: "16/11/2020",
    selfDeposite: "200",
    teamDeposite: "400",
    totalAmt: "600",
    tds: "3",
    procesing: "4",
    payAmt: "600",
    detail: "mnbdfbdjfbdbfhdhfhdhhd bjhbh jbhjhjkfdjkfdhjfd",
  },
  { postedId:'1212',
    paymentDate: "16/11/2020",
    selfDeposite: "200",
    teamDeposite: "400",
    totalAmt: "600",
    tds: "3",
    procesing: "4",
    payAmt: "600",
    detail: "mnbdfbdjfbdbfhdhfhdhhd bjhbh jbhjhjkfdjkfdhjfd",
  },
];

module.exports.GetIncomeDetail = async (req, res) => {
  console.log(req.headers['authorization'])
  const Income=await IncomeModal.find({});


  try {
    res.status(200).json({
      message: "datas",
      data: Income,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

// post
module.exports.PostIncoeDetail=async(req,res)=>{
    const {paymentDate,selfDeposite,teamDeposite,totalAmt,tds,procesing,payAmt,detail}=req.body;
    let datas={};
    let dataed=VerifyToken(req);
    console.log(dataed)
    datas.postedId=dataed;
    datas.paymentDate=paymentDate;
    datas.selfDeposite=selfDeposite;
    datas.teamDeposite=teamDeposite;
    datas.totalAmt=totalAmt;
    datas.tds=tds;
    datas.procesing=procesing;
    datas.payAmt=payAmt;
    datas.detail=detail;
    data.push(datas);
    const Income = new IncomeModal(datas);
    try{
      await Income.save();
      res.status(200).json({
        message:'payment has been added'
    })

    }catch(error){
      res.status(500).json({
        message:error
      })
    }
    
}