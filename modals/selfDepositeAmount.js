const mongoose=require("mongoose");

const selfDepositeAmount=new mongoose.Schema({
    depositAmount:{
        type:String,
        required:true
    },
depositDate:{
    type:String,
    required:true
},
postedId:{
    type:String,
    required:true
}
});

const Self=mongoose.model("SelfDepositeAmount",selfDepositeAmount);
module.exports=Self;