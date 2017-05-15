$(document).ready(function(){

  $('.sideMenu').show();
  $('.sideMenuListDiv').hide();
  $('.top').show();
  $('.topMenu').show();
  $('.mainContent').show();

  $(".sideMenuBtn").click(function(){
      $(".sideMenuListDiv").toggle("slide",{direction:"left"},500,null);
  });

  $(".mainContent").click(function(){
      $(".sideMenuListDiv").hide("slide",{direction:"left"},500,null);
  });

});
