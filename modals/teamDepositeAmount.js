const mongoose=require("mongoose");

const teamDepositeAmount=new mongoose.Schema({
    teamDepositAmount:{
        type:String,
        required:true,
    },
    selfDepositeAmount:{
        type:String,
        required:false
    },
    memberName:{
        type:String,
        required:true
    },
    memberId:{
        type:String,
        required:true
    }
});

const Team=mongoose.model('teamDepositeAmount',teamDepositeAmount);
module.exports=Team;