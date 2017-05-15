$(document).ready(function(){

  // $('.notLoginTop').show();
  // $('.loginMainBox').show();
  // $('.LoginBtn').show();

  $('.sideMenu').show();
  $('.sideMenuListDiv').hide();
  $('.top').show();
  $('.topMenu').show();
  $('.mainContent').show();

  // 교사아이디로 로그인버튼 클릭
  $('.LoginBtn').click(function(){

    $('.notLoginTop').hide();
    $('.loginMainBox').hide();
    $('.LoginBtn').hide();

    $('.sideMenu').show();
    $('.sideMenuListDiv').hide();
    $('.top').show();
    $('.topMenu').show();
    $('.mainContent').show();

});

// 사이드메뉴 슬라이드
  $(".sideMenuBtn").click(function(){
      $(".sideMenuListDiv").toggle("slide",{direction:"left"},500,null);
  });

  $(".mainContent").click(function(){
      $(".sideMenuListDiv").hide("slide",{direction:"left"},500,null);
  });


  // 로그아웃 클릭
  $(".logoutBtn").click(function(){
    $('.sideMenu').hide();
    $('.sideMenuListDiv').hide();
    $('.top').hide();
    $('.topMenu').hide();
    $('.mainContent').hide();

    $('.notLoginTop').show();
    $('.loginMainBox').show();
    $('.LoginBtn').show();
  });


});
