const express=require("express");
const pool=require('../pool.js');
var router=express.Router();

//1.用户注册
//1.1 验证用户名是否被注册过
router.get("/v1/check_uname/:uname",(req,res)=>{
    var $uname=req.params.uname;
    // if(!$uname){res.send("用户名未接收到");return;}
    var sql="select uname from xz_user where uname=?";
    pool.query(sql,[$uname],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("0");
        }
    });
});
//1.2验证用户邮箱是否被注册
router.get("/v1/check_email/:email",(req,res)=>{
    var $email=req.params.email;
    // if(!$email){res.send("邮箱为空");return;}
    var sql="select email from xz_user where email=?";
    pool.query(sql,[$email],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("0");
        }else{res.send("1")}
    });
});
//1.3验证手机号是否被注册
router.get("/v1/check_phone/:phone",(req,res)=>{
    var $phone=req.params.phone;
    // if(!$phone){res.send("手机号未接收到");return;}
    var sql="select phone from xz_user where phone=?";
    pool.query(sql,[$phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("0");
        }
    });
});
//注册信息插入
router.post("/v1/reg",(req,res)=>{
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
    var $email=req.body.email;
    var $phone=req.body.phone;
    if(!$uname){
        res.send("uname未接收到");
        return;
    }
    if(!$upwd){
        res.send("upwd未接收到");
        return;
    }
    if(!$email){
        res.send("email未接收到");
        return;
    }
    if(!$phone){
        res.send("phone未接收到");
        return;
    }
    var sql="insert into xz_user set uname=?,upwd=?,email=?,phone=?";
    pool.query(sql,[$uname,$upwd,$email,$phone],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send("1");
        }else{
            res.send("0")
        }
    });
});
/*
router.post("/v1/reg",function(req,res){
    var obj=req.body;
    pool.query('INSERT INTO xz_user SET ?',[obj],function(err,resuolt){
        if(err) throw err;
        if(result.affectionRows>0){
            res.send("1");
        }else{
            res.send("0");
        }
    });
});
router.get('/login',(req,res)=>{
    var $uname=req.query.uname;
    var $upwd=req.query.upwd;
    if(!$uname){
        res.send({code:401,msg:'uname required'});
        return;
    }
    if(!$upwd){
        res.send({code:402,msg:'upwd required'});
        return;
    }
    pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
        if(err)throw err;
        console.log(result);
        if(result.length>0){
            res.send({code:200,msg:'login success'});
        }else{
            res.send({code:301,msg:'login error'});
        }
    });
});
*/






module.exports=router;