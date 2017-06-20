$(document).ready(function(){
  // 실행시 바로 로그인화면 보여주기
    // $('#notLoginTop').show();
    // $('#notLoginView').show();

  // 실행시 바로 교사메인 보여주기
  $("#sideMenuListDiv").hide();
  $('#tLoginTop').show();
  $('#teacherMain').show();


  // 실행시 바로 학부모메인 보여주기
  // $("#psideMenuListDiv").hide();
  // $('#pLoginTop').show();
  // $('#parentMain').show();




  // 교사아이디로 로그인버튼 클릭

    $('#LoginBtn').unbind("click").bind("click", function(){

      if( $("#inputId").val() == "ttt") {
        $('#notLoginTop').hide();
        $('#notLoginView').hide();

        $('#tLoginTop').show();
        $('#sideMenuListDiv').hide();
        $('#teacherMain').show();
      } else if($("#inputId").val() == "ppp"){
        $('#notLoginTop').hide();
        $('#notLoginView').hide();

        $('#pLoginTop').show();
        $('#psideMenuListDiv').hide();
        $('#parentMain').show();
      } else{
        alert('교사아이디 ttt,   학부모아이디 ppp');
      }


    });
});
