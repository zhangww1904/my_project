var as=document.querySelectorAll("div.condition>div>a");
for(var a of as){
    a.onclick=function(){
      var a=this;
      if(a.className=="active"){
        a.className="";
      }else{
        var ac=document.querySelector("div.condition>div>a.active");
        ac!==null&&(ac.className="");
        a.className="active";
      }
    }
};
// 遍历第一个
var as=document.querySelectorAll("div.select_first ul.select_option>li>a");
for(var a of as){
  a.onclick=function(){
    var a=this;
    if(a.className=="bg_style"){
      a.className="";
    }else{
      var bg=document.querySelector("div.select_first ul.select_option>li>a.bg_style");
      bg!==null&&(bg.className="");
      a.className="bg_style";
    }
  }
}
//遍历第二个 
var bs=document.querySelectorAll("div.select_two ul.select_option>li>a");
console.log(bs)
for(var b of bs){
  b.onclick=function(){
    var b=this;
    if(b.className=="bg_style"){
      b.className="";
    }else{
      var bg=document.querySelector("div.select_two ul.select_option>li>a.bg_style");
      console.log(bg)
      bg!==null&&(bg.className="");
      b.className="bg_style";
    }
  }
}


