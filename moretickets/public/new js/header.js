$(function(){
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(result){
      $(result).replaceAll("#header");
      $(`<link rel="stylesheet" href="../new css/header.css">`)
      .appendTo("head");
    }
  })
})