
$(document).ready(function(){
  var SIDEMENU = function(){
    this.alert = function(txt){
      var Alert = $('.MyAlert');
      var Txt = $('.sideMenuBox p');
      var CloseSideMenu = $('.menuBtn4');

      Alert.show();
      Txt.text(txt);
      CloseSideMenu.unbind('.click');
      CloseSideMenu.click(function(){
        Alert.hide();
      });
    };
  };

  var sideMenu = new SIDEMENU();
  $('.sideMenuBtn').click(function(){
    sideMenu.alert();
  });

  // $('.testChange').click(function(){
  //   alert('test');}
  // );




});
