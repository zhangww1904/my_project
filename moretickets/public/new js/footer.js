$(function(){
  $.ajax({
    url:"footer.html",
    type:"get",
    success:function(result){
      $(result).replaceAll("#footer");
      $(`<link rel="stylesheet" href="../new css/footer.css">`)
      .appendTo("head");
    }
  })
})