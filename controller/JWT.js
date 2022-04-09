const { sign, verify } = require("jsonwebtoken");
const creatTokens = (user) => {
  const accesstoken = sign({ username: user }, "kisan");
  return accesstoken;
};
const VerifyToken=(req,res,next)=>{
let datas=req.headers['authorization'];
console.log(datas)
try{
    const verifyed=verify(datas,"kisan")
    return verifyed.username

}catch(err){

}
}

module.exports={creatTokens,VerifyToken};
