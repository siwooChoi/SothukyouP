$(document).ready(function(){

allHide();

// $("#test").show();

loginViewOpen();


  // 앱 실행 시 로그인화면 보여주기
  function loginViewOpen(){
    allHide()
    $("#tLoginTop").hide();
    $("#pLoginTop").hide();
    //
    $("#notLogin").show();
    $("#notLoginTop").show();
    $("#notLoginView").show();
  }

  // 실행시 바로 교사메인 보여주기
  // $('#pLoginTop').hide();
  // $('#tLoginTop').show();
  // $('#teacherMain').show();


  // 실행시 바로 학부모메인 보여주기
  // $("#tLoginTop").hide();
  // $("#psideMenuListDiv").hide();
  // $('#pLoginTop').show();
  // $('#parentMain').show();


  // 로그인 판단
    var position;   // User직위(1->원장, 2->교사, 3->학부모)
    var user_num;   // User고유번호
    var user_name;  // User이름

    $('#noIDLoginBtn').unbind("click").bind("click", function(){
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


    // 로그인 버튼 클릭 시  ID,PW 조회 및 User직위에 맞는 앱화면 보여주기
    $('#LoginBtn').unbind("click").bind("click", function(){
      // 입력한 ID와 PW
      var user_id = $("#inputId").val();
      var password = $("#inputPw").val();

      $.ajax({

        dataType:"jsonp",
        data:{
          user_id: user_id,
          password: password
        },
        url:"http://project-okyo.c9users.io/mobile/login.php",
        success:function(data){

          position = data.position;   // User직위(1->원장, 2->교사, 3->학부모)
          user_num  = data.userNum;   // User고유번호
          user_name = data.userName;  // User이름

          switch (position) {
            case "1":
              alert('원장 준비 중');
              break;
            case "2":
              $('#notLoginTop').hide();
              $('#notLoginView').hide();

              $('#tLoginTop').show();
              $('#sideMenuListDiv').hide();
              $('#teacherMain').show();
              break;
            case "3":
            $('#notLoginTop').hide();
            $('#notLoginView').hide();

            $('#pLoginTop').show();
            $('#psideMenuListDiv').hide();
            $('#parentMain').show();
            default:
            alert('알 수 없는 에러');

          }

        },
        error:function(){
          alert('서버접속 실패');
        }

      });

    });


  // 숨기기
  function allHide(){
    $("#notLogin").hide();
    // $('#notLoginTop').hide();
    // $('#notLoginView').hide();
    $('#sideMenuListDiv').hide();
    $('#teacherMain').hide();
    $('#albumChildSelectBox').hide();
    $('#childSelectBox1').hide();
    $('#tObservation').hide();
    $('#tObText').hide();
    $('#tObDraw').hide();
    $('#tDevelopCheck').hide();
    $('#tICheckMain').hide();
    $('#modeBtns').hide();
    $('#ICheck').hide();
    $("#albumChildSelectBox1").hide();
    $("#showAlbum").hide();
    $("#photoUpload").hide();
    $("#showSavedImages").hide();
    $("#tAttendanceCheck").hide();
    $("#showDetailAlbum").hide();
    $('#textMemo').val('');
    // $("#pAttendanceCheck").hide();
    // $('#childSelectBox2').hide();
    // $('#pICheck').hide();
    // $('#tObChildInfo').empty();
    ///////////////////  구분선   //////////////////
    $('#parentMain').hide();
    $('#childSelectBox2').hide();
    $('#pICheck').hide();
    $('#pICheckMain').hide();
    $('#pmodeBtns').hide();
    $("#pShowDetailAlbum").hide();
    $("#psideMenuListDiv").hide();
    $("#pShowAlbum").hide();
    $("#pAttendanceCheck").hide();
    $("#pAttText").val('');

  }

// 사이드메뉴 슬라이드
  $("#sideMenuBtn").unbind("click").bind("click", function(){
      $("#sideMenuListDiv").toggle("slide",{direction:"left"},350,null);
  });
  $("#psideMenuBtn").unbind("click").bind("click", function(){
      $("#psideMenuListDiv").toggle("slide",{direction:"left"},350,null);
  });

  // 사이드메뉴가 열려있을 경우 화면 눌러서 사이드메뉴 닫기
  /*
        $("#teacherMain").unbind("click").bind("click", function(){
            $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
        });

        $("#childSelectBox1").unbind("click").bind("click", function(){
            $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
        });

        $("#albumChildSelectBox1").unbind("click").bind("click", function(){
            $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
        });

        $("#tObservation").unbind("click").bind("click", function(){
            $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
        });

        $("#tDevelopCheck").unbind("click").bind("click", function(){
            $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
        });

        $("#ICheck").unbind("click").bind("click", function(){
            $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
        });

        $("#photoUpload").unbind("click").bind("click", function(){
            $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
        });

        $("#showAlbum").unbind("click").bind("click", function(){
            $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
        });

        $("#showDetailAlbum").unbind("click").bind("click", function(){
            $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
        });

        $("#tAttendanceCheck").unbind("click").bind("click", function(){
            $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
        });
    */

  // 로그아웃 클릭
  $("#tlogoutBtn").unbind("click").bind("click", function(){
    // $('#tLoginTop').hide();
    // allHide();
    //
    // $("#notLogin").show();
    loginViewOpen();
    // $('#notLoginTop').show();
    // $('#notLoginView').show();
  });


  // 상단 클릭 (메인으로 돌아가기)
  $('#top').find('#imgLogo').unbind("click").bind("click", function(){
    allHide();

    $('#tLoginTop').show();
    $('#sideMenuListDiv').hide();
    $('#teacherMain').show();
  })
  $('#top').find('#textLogo').unbind("click").bind("click", function(){
    allHide();

    $('#tLoginTop').show();
    $('#sideMenuListDiv').hide();
    $('#teacherMain').show();
  })

  // 원아 선택화면
  function selectChildView(box){
    // 사이드메뉴가 열려있을 경우 화면 눌러서 사이드메뉴 닫기

    allHide();

    $('#tLoginTop').show();

    if(box == "box5" || box == "box6"){
      $('#albumChildSelectBox1').show();
      $('#albumChildSelect1').empty();
    }

    else{
      $('#childSelectBox1').show();
      $('#childSelect1').empty();
    }


    $.ajax({
        url:"http://project-okyo.c9users.io/mobile/getChildrens.php",
        // url:"http://project-okyo.c9users.io/mobile/mTest.php",
        data:{
          user_num: user_num,
          user_name : user_name
        },
        dataType:"jsonp",
        success:function(data){
            //성공
            if(data.result == "success"){
                var cnt = data.data.length;

                for(var i = 0; i < cnt ; i++){
                    var childID   = data.data[i].childNum;

                    var imageName = data.data[i].imageName;
                    var childName = data.data[i].childName;
                    var imageComment = data.data[i].imageComment;


                      var imgs = $("<img />").addClass("imageName"+childID).attr("src", "http://project-okyo.c9users.io/img/child/"+imageName);
                      var names = $("<p></p>").addClass("childName"+childID).text(childName);
                      var namesDiv = $("<div></div>").addClass("childNameDiv"+childID).append(names);

                      if(box == "box5" || box == "box6"){
                        $("<div></div>").addClass('selectImgAndName'+childID).appendTo("#albumChildSelect1");
                        $("<div></div>").addClass("imageDiv").append(imgs).appendTo(".selectImgAndName"+childID);
                        $("<div></div>").addClass("NameDiv").append(namesDiv).appendTo(".selectImgAndName"+childID);
                      }

                      else{
                        $("<div></div>").addClass('selectImgAndName'+childID).appendTo("#childSelect1");
                        $("<div></div>").addClass("imageDiv").append(imgs).appendTo(".selectImgAndName"+childID);
                        $("<div></div>").addClass("NameDiv").append(namesDiv).appendTo(".selectImgAndName"+childID);
                      }
                    (function(childID){

                    $(".selectImgAndName"+childID).unbind("click").bind("click",function(){

                          switch (box) {
                            case "box1":
                              tObservation(childID, imageName, childName);
                              break;
                            case "box2":
                              developCheck(childID, imageName, childName);
                              break;
                            case "box3":
                              tICheck(childID, imageName, childName);
                              break;
                            case "box4":
                              alert('원아지킴이...');
                              break;
                            case "box5":
                              photoUpload(childID, imageName, childName);
                              break;
                            case "box6":
                              showAlbum(childID, imageName, childName, 1);
                              break;

                            default:
                              alert("default");
                          }
                    });

                  }(childID));
                }

                if(cnt == 0)
                    $("<p></p>").text("업로드 된 이미지가 없습니다.").appendTo("#selectImgAndName1");
            }
            //오류
            else {
                window.alert("오류가 발생하였습니다. 하하핫");
            }



        }, error: function(){
            window.alert("서버 접속 오류가 발생하였습니다.");
        }
    });
  }


  function selectChildView_Album(box){
    allHide();
    $('#tLoginTop').show();
    $('#childSelectBox1').show();
    $('#albhildSelect1').empty();

    ////
    var imgs = $("<img />").addClass("imageName"+childID).attr("src","http://project-okyo.c9users.io/img/child/"+imageName);
    var names = $("<p></p>").addClass("childName"+childID).text(childName);
    var namesDiv = $("<div></div>").addClass("childNameDiv"+childID).append(names);

    $("<div></div>").addClass('selectImgAndName'+childID).appendTo("#albumChildSelect1");
    $("<div></div>").addClass("imageDiv").append(imgs).appendTo(".selectImgAndName"+childID);
    $("<div></div>").addClass("NameDiv").append(namesDiv).appendTo(".selectImgAndName"+childID);
    ////
  }
  // 관찰일지, 발달체크 원아 선택 시 해당 원아 이름, 이미지 출력

  /*
  function selectedChild(id, childName){

    $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/selectedChildImage.php",
        data:{
          id: id,
          childName: childName
        },
        dataType:"jsonp",
        success:function(data){

            //성공
            if(data.result == "success"){
                    $('#tObChildInfo').empty();
                    var id        = data.data.id;
                    var imageName = data.data.imageName;
                    var childName = data.data.childName;

                    var imgs = $("<img />").addClass("write_ImageName").attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                    var names = $("<p></p>").addClass("write_ChildName"+id).text(childName);
                    var namesDiv = $("<div></div>").addClass("write_ChildNameDiv"+id).append(names);

                    $("#tObChildInfo").append("<div></div>").addClass('write_ImgAndName'+id);
                    $("<div></div>").addClass("write_ImageNameDiv"+id).append(imgs).append(namesDiv).appendTo(".write_ImgAndName"+id);
            }
            //오류
            else {
                window.alert("오류가 발생하였습니다.");
            }
        }, error: function(){
            window.alert("서버 접속 오류가 발생하였습니다.");
        }
    });
  }
*/


  // 관찰일지 작성 도우미 클릭
  $('#box1').unbind("click").bind("click", function(){
    var whatIsBox = "box1";
    selectChildView(whatIsBox);
  });

  // 관찰일지 작성 도우미
  function tObservation(childID, imageName, childName){
      // alert(id);
      $('#childSelectBox1').hide();
      $('#tObservation').show();
      $('#tObText').show();

      $('#tObChildInfo').empty();


      var imgs = $("<img />").addClass("write_ImageName").attr("src","http://project-okyo.c9users.io/img/child/"+imageName);
      var names = $("<p></p>").addClass("write_ChildName").text(childName);
      var namesDiv = $("<div></div>").addClass("write_ChildNameDiv").append(names);

      $("#tObChildInfo").addClass('write_ImgAndName');
      $("<div></div>").addClass("write_ImageNameDiv").append(imgs).append(namesDiv).appendTo(".write_ImgAndName");


      // 저장 된 텍스트 보여주기 실행
      showSavedTexts(childID);


      // 관찰일지 텍스트 부분
    // 텍스트 취소 버튼
    $('#tObCancelBtn1').unbind("click").bind("click", function(){
      selectChildView("box1");
    });

    // 텍스트 저장 버튼
    $('#tObSaveBtn1').unbind("click").bind("click", function(){
      saveText();
    });

    // 텍스트 저장
    function saveText(){
      var textMemo = $('#textMemo').val();

      $.ajax({
        dataType:"jsonp",
        data: {
          childID: childID,
          user_num: user_num,
          textMemo : textMemo,
          memoCategory : 4,      // 1 -> 알림장내용 / 2 -> 알림장의 댓글  / 3 -> 특이사항  / 4 -> 단순메모
          memoType : 1  // 1 -> 글씨  /  2 -> 그림
        },
          url:'http://project-okyo.c9users.io/mobile/setMemo.php',

         success:function(result){
          alert("메모를 등록했습니다");
          $('#textMemo').val('');

          // 저장 된 텍스트 보여주기 실행
          showSavedTexts(childID);


         }, error:function(result){
           alert("error");
           selectChildView("box1");
         }
      });
    }


    // 저장된 텍스트 보여주기
    function showSavedTexts(childID){
      $("#tObSavedText").empty();
      var newDate = new Date();
      var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();

      if(( (newDate.getMonth() + 1)+"" ).length == 1 && ( newDate.getDate()+"").length == 2){
        var dateValue = newDate.getFullYear() + "-0" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
      } else if(( (newDate.getMonth() + 1)+"" ).length == 2 && ( newDate.getDate()+"").length == 1){
        var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-0" + newDate.getDate();
      } else if(( (newDate.getMonth() + 1)+"" ).length == 1 && ( newDate.getDate()+"").length == 1){
        var dateValue = newDate.getFullYear() + "-0" + (newDate.getMonth() + 1) + "-0" + newDate.getDate();
      } else{
        var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
      }


      $.ajax({
        dataType:"jsonp",
        data:{
          childID: childID,
          user_num: user_num,
          user_name: user_name,
          dateValue: dateValue,
          memoCategory : 4, // 1 -> 알림장내용 / 2 -> 알림장의 댓글  / 3 -> 특이사항  / 4 -> 단순메모
          memoType : 1  // 1 -> 글씨  /  2 -> 그림
        },
        url:'http://project-okyo.c9users.io/mobile/getMemo.php',
        success:function(data){



          var cnt = data.data.length;
          alert(cnt);
          // var savedTextsTileDiv = $("<div></div>").addClass("savedTextsTileDiv");
          // var savedTexts = $("<p></p>").addClass('savedTextsTitle').text("오늘 작성한 메모");
          //
          // $("#tObSavedText").append(savedTextsTileDiv);
          // $(".savedTextsTileDiv").append(savedTexts);

          for(var i = 0; i < cnt; i++){
            var id        = data.data[i].memoId;
            var textValue = data.data[i].comment;

            var savedTexts = $("<p></p>").addClass('savedTextMemos'+id).text(textValue);

              // $('.savedTextMemos').
              $("#tObSavedText").append(savedTexts);

              (function(id){
                  $('.savedTextMemos'+id).unbind("click").bind("click",function(){
                    // deleteUploadedTexts(id, childID);  // 오늘 작성하나 메모 클릭시 삭제
                  });
              }(id));

          }
        },
        error:function(){
          alert('error');
        }
      });
    }


    // // 저장된 텍스트 지우기
    // function deleteUploadedTexts(id, childID){
    //
    //   var deleteFlag = confirm("댓글을 삭제하시겠습니까?");
    //
    //   if(deleteFlag){
    //     $.ajax({
    //       dataType:"jsonp",
    //       data:{
    //         id: id
    //       },
    //       url:'https://chesyu.run.goorm.io/MyProject/ni/delUploadedTextsApp.php',
    //       success:function(data){
    //         // alert('삭제하였습니다.');
    //         showSavedTexts(childID);
    //       }, error:function(){
    //         alert('error');
    //       }
    //     });
    //   } else{
    //
    //   }
    // }


    // 관찰일지 그리기에서 텍스트로 전환
    $('#tObChangeTextBtn').unbind("click").bind("click", function(){
      $('#tObDraw').hide();
      $('#tObText').show();
    });

    // 관찰일지 텍스트에서 그리기로 전환
    $('.tObChangeDrawBtn').unbind("click").bind("click", function(){
      $('#tObText').hide();
      $('#textMemo').val('');
      $('#tObDraw').show();

      var drawCanvas = document.getElementById('drawCanvas');
  	   var drawBackup = new Array();

       drawCanvas.width = window.innerWidth;
       drawCanvas.height = window.innerHeight/2;


  	    if (typeof drawCanvas.getContext == 'function') {
      		var ctx = drawCanvas.getContext('2d');
      		var isDraw = false;
      		var width = $('#width').val();;
      		var color = $('#color').val();
      		var pDraw = $('#drawCanvas').offset();
      		var currP = null;

      		$('#width').bind('change', function(){ width = $('#width').val(); });
      		$('#color').bind('change', function(){ color = $('#color').val(); });

      		// 저장된 이미지 호출
      		if (localStorage['imgCanvas']) {
      			loadImage();
      		} else {
      			ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
      		}

      		// Event (마우스)
      		$('#drawCanvas').bind('mousedown', function(e) {
      			if (e.button===0) {
      				saveCanvas();
      				e.preventDefault();
      				ctx.beginPath();
      				isDraw = true;
      			}
      		});



      		$('#drawCanvas').bind('mousemove', function(e) {
      			var event = e.originalEvent;
      			e.preventDefault();
      			currP = { X:event.offsetX, Y:event.offsetY };
      			if(isDraw) draw_line(currP);
      		});
      		$('#drawCanvas').bind('mouseup', function(e) {
      			e.preventDefault();
      			isDraw = false;
      		});
      		$('#drawCanvas').bind('mouseleave', function(e) {
      			isDraw = false;
      		});

      		// Event (터치스크린)
      		$('#drawCanvas').bind('touchstart', function(e) {
      			saveCanvas();
      			e.preventDefault();
      			ctx.beginPath();
      		});
      		$('#drawCanvas').bind('touchmove', function(e) {
      			var event = e.originalEvent;
      			e.preventDefault();
      			currP = { X:event.touches[0].pageX-pDraw.left, Y:event.touches[0].pageY-pDraw.top };
      			draw_line(currP);
      		});
      		$('#drawCanvas').bind('touchend', function(e) {
      			e.preventDefault();
      		});

      		// 선 그리기
      		function draw_line(p) {
      			ctx.lineWidth = width;
      			ctx.lineCap = 'round';
      			ctx.lineTo(p.X, p.Y);
      			ctx.moveTo(p.X, p.Y);
      			ctx.strokeStyle = color;
      			ctx.stroke();
      		}

          /*

      		function loadImage() { // reload from localStorage
      			var img = new Image();
      			img.onload = function() {
      				ctx.drawImage(img, 0, 0);
      			}
      			img.src = localStorage.getItem('imgCanvas');
      		}
          */

          // 이미지 저장
      		function saveImage(childID) {
                // start
              // alert(id);
                var drawCanvas = document.getElementById('drawCanvas');
                // var test = document.getElementsByClass('')
                // "albumChildNameDiv"+id

            // 그림으로 보내는 데이터양이 많으면 get으로 주고받을수가
            // 없기 때문에 POST를 사용해야 한다.
            $.ajax({
              type:'POST',
              data: {
                imgUpload:drawCanvas.toDataURL('image/png'),
                childID : childID,
                user_num: user_num,
                memoCategory: 4,  // 1 -> 알림장내용 / 2 -> 알림장의 댓글  / 3 -> 특이사항  / 4 -> 단순메모
                memoType : 2  // 1 -> 글씨  /  2 -> 그림

              },

              // dataType:'jsonp',
              // data: {
              //   imgUpload:drawCanvas.toDataURL('image/png'),
              //   childID : childID
              // },
              	url:'http://project-okyo.c9users.io/mobile/setMemo.php',
                // url:'./testphp.php',

          		 success:function(result){
          		 	alert("이미지 메모를 등록했습니다 ");
                clearCanvas();
          		 }, error:function(result){
                 clearCanvas();
                //  selectChildView("box1");
               }
          	});
              // end
          }





          // 캔버스 초기화
      		function clearCanvas() {
      			ctx.clearRect(0, 0, drawCanvas.width, drawCanvas.height);
      			ctx.beginPath();
      			localStorage.removeItem('imgCanvas');
      		}

          // ...?
      		function saveCanvas() {
      			drawBackup.push(ctx.getImageData(0, 0, drawCanvas.width, drawCanvas.height));
      		}

          //
      		function prevCanvas() {
      			ctx.putImageData(drawBackup.pop(), 0, 0);
      		}

          // 캔버스 뒤로돌아가기 버튼 클릭
      		$('#btnPrev').unbind("click").bind("click", function() {
      			prevCanvas();
      		});

          // 캔버스 클리어 버튼 클릭
      		$('#btnClea').unbind("click").bind("click", function() {
      			clearCanvas();
      		});

          // 저장한 이미지 보기 버튼 클릭
          $("#tObSavedDrawBtn").unbind("click").bind("click", function() {
            allHide();
            $("#showSavedImagesDiv").empty();
            $("#showSavedImages").show();
            getUploadedImageApp();


          });

          // 저장한 이미지 보기
          function getUploadedImageApp(){
            var newDate = new Date();
            var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();

            if(( (newDate.getMonth() + 1)+"" ).length == 1 && ( newDate.getDate()+"").length == 2){
              var dateValue = newDate.getFullYear() + "-0" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
            } else if(( (newDate.getMonth() + 1)+"" ).length == 2 && ( newDate.getDate()+"").length == 1){
              var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-0" + newDate.getDate();
            } else if(( (newDate.getMonth() + 1)+"" ).length == 1 && ( newDate.getDate()+"").length == 1){
              var dateValue = newDate.getFullYear() + "-0" + (newDate.getMonth() + 1) + "-0" + newDate.getDate();
            } else{
              var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
            }
            $.ajax({
              dataType:"jsonp",
              data:{
                childID: childID,
                user_num: user_num,
                dateValue: dateValue,
                memoCategory: 4,  // 1 -> 알림장내용 / 2 -> 알림장의 댓글  / 3 -> 특이사항  / 4 -> 단순메모
                memoType : 2
              },
              url:'http://project-okyo.c9users.io/mobile/getMemo.php',
              success:function(data){

                var cnt = data.data.length;

                for(var i = 0; i < cnt ; i++){

                    var id        = data.data[i].id;
                    var imageName = data.data[i].imageName;
                    var imgPath = data.data[i].imgPath;

                    var imgs = $("<img />").attr("src","http://project-okyo.c9users.io"+imgPath+imageName);
                    // var imgsDiv = $("<div></div>").addClass("uploadedImgDiv").append(imags);
                    $("<div></div>").addClass("uploadedImgDiv"+id).append(imgs).appendTo("#showSavedImagesDiv");

                    (function(id, childId, imgPath, imageName){
                      $(".uploadedImgDiv"+id).unbind("click").bind("click",function(){
                        // deleteUploadedImages(id, childID, path, imageName);  // 클릭한 사진 지우기
                      });
                    }(id, childID, imgPath, imageName));
                }
              }, error:function(){

              }
            });
        }

          // 클릭한 이미지메모 지우기
          // function deleteUploadedImages(id, childID, path, imageName){
          //
          //   var deleteFlag = confirm("이미지를 삭제하시겠습니까?");
          //
          //   if(deleteFlag){
          //     $.ajax({
          //       dataType:"jsonp",
          //       data:{
          //         id: id,
          //         path: path,
          //         imageName: imageName
          //       },
          //       url:'https://chesyu.run.goorm.io/MyProject/ni/delUploadedImagesApp.php',
          //       success:function(data){
          //         // alert('삭제하였습니다.');
          //         $("#showSavedImagesDiv").empty();
          //         getUploadedImageApp();
          //         $("#showSavedImages").show();
          //       }, error:function(){
          //         alert('error');
          //       }
          //     });
          //   } else{
          //
          //   }
          // }

          // 다시 돌아가기
          $("#backTObDraw").unbind("click").bind("click", function(){
            reStartTodDraw(childID, imageName, childName);
          });



          // 그리기 취소버튼
          $('#tObCancelBtn2').unbind("click").bind("click", function(){
            selectChildView("box1");
          });

          // 그리기 저장버튼
      		$('#tObSaveBtn2').unbind("click").bind("click", function() {
      			saveImage(childID);
      		});
    	}

    });

  }

  // 다시 그리기로 보여주기
  function reStartTodDraw(childID, imageName, childName){
    allHide();
    tObservation(childID, imageName, childName);
    $('#tObText').hide();
    $('#tObDraw').show();
  }



  // 발달 행동 체크 클릭
  $('#box2').unbind("click").bind("click", function(){
    var whatIsBox = "box2";
    selectChildView(whatIsBox);
  });

  var feels;
  var health;
  var temperature;
  var eat;

  var basicChecks = new Array();
  var developCheckArrayID = new Array();
  var developCheckArrayValue = new Array();




  // 발달 행동 체크
  function developCheck(childID, imageName, childName){
    $('#childSelectBox1').hide();
    $('#tDevelopCheck').show();
    var cnt;
    // 선택한 원아 이름, 이미지 출력
      $('#tDevelopChildInfo').empty();
      // var id        = data.data.id;
      // var imageName = data.data.imageName;
      // var childNum = data.data.childNum;
      // var childName = data.data.childName;

      var imgs = $("<img />").addClass("develop_ImageName").attr("src","http://project-okyo.c9users.io/img/child/"+imageName);
      var names = $("<p></p>").addClass("develop_ChildName").text(childName);
      var namesDiv = $("<div></div>").addClass("develop_ChildNameDiv").append(names);

      $("#tDevelopChildInfo").append("<div></div>").addClass('develop_ImgAndName');
      $("<div></div>").addClass("develop_ImageNameDiv").append(imgs).append(namesDiv).appendTo(".develop_ImgAndName");
      // 발달 사항 체크 저장버튼 클릭
      // $('#tDevelopCheckSaveBtn').unbind("click").bind("click", function(){
      //   tDevelopCheckSave(childID);
      // });


      $.ajax({
        dataType:"jsonp",
        data:{
          user_num: user_num,
          childID: childID
        },
        url:"http://project-okyo.c9users.io/mobile/assessments.php",
        success:function(result){

          if(result.result == 'success'){
            // 항목 표시
            var cnt = result.data.length;


            // for(var i = 0; i < result.data.length; i++){
              for(var i = 0; i < cnt ; i++){

                checkID = result.data[i].id;

              (function(checkID, i){
                  //항목이름 담을 div
                  var checkTitleDiv = $("<div></div>").addClass("checkTitleDiv");
                  var checkTitleP   = $("<p></p>").text(result.data[i].assContent).appendTo(checkTitleDiv);
                  alert("atom"+checkID);
                  developCheckArrayID[i] = checkID;

                  // 항목 값 담을 div
                  var checkValuesDiv = $("<div></div>").addClass("checkValuesDiv");

                  var checkValueDiv1 = $("<div></div>").appendTo(checkValuesDiv).addClass("checkValueDiv1"+checkID);
                  $("<p>1</p>").appendTo(checkValueDiv1);

                  var checkValueDiv2 = $("<div></div>").appendTo(checkValuesDiv).addClass("checkValueDiv2"+checkID);
                  $("<p>2</p>").appendTo(checkValueDiv2);

                  var checkValueDiv3 = $("<div></div>").appendTo(checkValuesDiv).addClass("checkValueDiv3"+checkID);
                  $("<p>3</p>").appendTo(checkValueDiv3);

                  var checkValueDiv4 = $("<div></div>").appendTo(checkValuesDiv).addClass("checkValueDiv4"+checkID);
                  $("<p>4</p>").appendTo(checkValueDiv4);

                  var checkValueDiv5 = $("<div></div>").appendTo(checkValuesDiv).addClass("checkValueDiv5"+checkID);
                  $("<p>5</p>").appendTo(checkValueDiv5);

                  $("#tDevelopCheckDiv1").append(checkTitleDiv);
                  $("#tDevelopCheckDiv1").append(checkValuesDiv);

                    /////////
                    // 1번 버튼 클릭
                     $(".checkValueDiv1"+checkID).unbind("click").bind("click", function(){
                       // attendanceInfo[i] = "출석";
                       // alert("선택한 원아는 " + checkID + "이며, " + attendanceInfo[i]);
                       $(".checkValueDiv1"+checkID).empty();
                       $("<p></p>").text('1').appendTo(".checkValueDiv1"+checkID);
                       $(".checkValueDiv1"+checkID).css({
                         "border" : "2px solid white",
                         "background-color":"#00B1F2"
                       });
                       // var on = $("<input></input>").attr("type", "hidden").addClass("tAttendanceOn"+checkID);
                       var on = $("<input></input>").attr("type", "hidden").addClass("on");
                       $(".checkValueDiv1"+checkID).append(on);
                       developCheckArrayValue[i] = "1";



                       $(".checkValueDiv2"+checkID).empty();
                       $("<p></p>").text('2').appendTo(".checkValueDiv2"+checkID);
                       $(".checkValueDiv2"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });


                       $(".checkValueDiv3"+checkID).empty();
                       $("<p></p>").text('3').appendTo(".checkValueDiv3"+checkID);
                       $(".checkValueDiv3"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });

                       $(".checkValueDiv4"+checkID).empty();
                       $("<p></p>").text('4').appendTo(".checkValueDiv4"+checkID);
                       $(".checkValueDiv4"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });

                       $(".checkValueDiv5"+checkID).empty();
                       $("<p></p>").text('5').appendTo(".checkValueDiv5"+checkID);
                       $(".checkValueDiv5"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });
                     });

                     // 2번 버튼 클릭
                     $(".checkValueDiv2"+checkID).unbind("click").bind("click", function(){
                       // attendanceInfo[i] = "조퇴";
                       // alert("선택한 원아는 " + checkID + "이며, " + attendanceInfo[i]);
                       $(".checkValueDiv1"+checkID).empty();
                       $("<p></p>").text('1').appendTo(".checkValueDiv1"+checkID);
                       $(".checkValueDiv1"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });

                       $(".checkValueDiv2"+checkID).empty();
                       $("<p></p>").text('2').appendTo(".checkValueDiv2"+checkID);
                       $(".checkValueDiv2"+checkID).css({
                         "border" : "2px solid white",
                         "background-color":"#00B1F2"
                       });
                       // var on = $("<input></input>").attr("type", "hidden").addClass("tEarlyLeaveOn"+checkID);
                       var on = $("<input></input>").attr("type", "hidden").addClass("on");
                       $(".checkValueDiv2"+checkID).append(on);
                       developCheckArrayValue[i] = "2";



                       $(".checkValueDiv3"+checkID).empty();
                       $("<p></p>").text('3').appendTo(".checkValueDiv3"+checkID);
                       $(".checkValueDiv3"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });

                       $(".checkValueDiv4"+checkID).empty();
                       $("<p></p>").text('4').appendTo(".checkValueDiv4"+checkID);
                       $(".checkValueDiv4"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });

                       $(".checkValueDiv5"+checkID).empty();
                       $("<p></p>").text('5').appendTo(".checkValueDiv5"+checkID);
                       $(".checkValueDiv5"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });

                     });

                     // 3번 버튼 클릭
                     $(".checkValueDiv3"+checkID).unbind("click").bind("click", function(){
                       // attendanceInfo[i] = "결석";
                       // alert("선택한 원아는 " + checkID + "이며, " + attendanceInfo[i]);
                       $(".checkValueDiv1"+checkID).empty();
                       $("<p></p>").text('1').appendTo(".checkValueDiv1"+checkID);
                       $(".checkValueDiv1"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });


                       $(".checkValueDiv2"+checkID).empty();
                       $("<p></p>").text('2').appendTo(".checkValueDiv2"+checkID);
                       $(".checkValueDiv2"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });


                       $(".checkValueDiv3"+checkID).empty();
                       $("<p></p>").text('3').appendTo(".checkValueDiv3"+checkID);
                       $(".checkValueDiv3"+checkID).css({
                         "border" : "2px solid white",
                         "background-color":"#00B1F2"
                       });
                       // var on = $("<input></input>").attr("type", "hidden").addClass("tAbsenceOn"+checkID);
                       var on = $("<input></input>").attr("type", "hidden").addClass("on");
                       $(".checkValueDiv3"+checkID).append(on);
                       developCheckArrayValue[i] = "3";



                       $(".checkValueDiv4"+checkID).empty();
                       $("<p></p>").text('4').appendTo(".checkValueDiv4"+checkID);
                       $(".checkValueDiv4"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });

                       $(".checkValueDiv5"+checkID).empty();
                       $("<p></p>").text('5').appendTo(".checkValueDiv5"+checkID);
                       $(".checkValueDiv5"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });
                     });

                     // 4번 버튼 클릭
                     $(".checkValueDiv4"+checkID).unbind("click").bind("click", function(){
                       // attendanceInfo[i] = "결석";
                       // alert("선택한 원아는 " + checkID + "이며, " + attendanceInfo[i]);
                       $(".checkValueDiv1"+checkID).empty();
                       $("<p></p>").text('1').appendTo(".checkValueDiv1"+checkID);
                       $(".checkValueDiv1"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });


                       $(".checkValueDiv2"+checkID).empty();
                       $("<p></p>").text('2').appendTo(".checkValueDiv2"+checkID);
                       $(".checkValueDiv2"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });


                       $(".checkValueDiv3"+checkID).empty();
                       $("<p></p>").text('3').appendTo(".checkValueDiv3"+checkID);
                       $(".checkValueDiv3"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });

                       $(".checkValueDiv4"+checkID).empty();
                       $("<p></p>").text('4').appendTo(".checkValueDiv4"+checkID);
                       $(".checkValueDiv4"+checkID).css({
                         "border" : "2px solid white",
                         "background-color":"#00B1F2"
                       });
                       var on = $("<input></input>").attr("type", "hidden").addClass("on");
                       $(".checkValueDiv4"+checkID).append(on);
                       developCheckArrayValue[i] = "4";


                       $(".checkValueDiv5"+checkID).empty();
                       $("<p></p>").text('5').appendTo(".checkValueDiv5"+checkID);
                       $(".checkValueDiv5"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });
                     });

                     // 5번 버튼 클릭
                     $(".checkValueDiv5"+checkID).unbind("click").bind("click", function(){
                       // attendanceInfo[i] = "결석";
                       // alert("선택한 원아는 " + checkID + "이며, " + attendanceInfo[i]);
                       $(".checkValueDiv1"+checkID).empty();
                       $("<p></p>").text('1').appendTo(".checkValueDiv1"+checkID);
                       $(".checkValueDiv1"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });


                       $(".checkValueDiv2"+checkID).empty();
                       $("<p></p>").text('2').appendTo(".checkValueDiv2"+checkID);
                       $(".checkValueDiv2"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });


                       $(".checkValueDiv3"+checkID).empty();
                       $("<p></p>").text('3').appendTo(".checkValueDiv3"+checkID);
                       $(".checkValueDiv3"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });

                       $(".checkValueDiv4"+checkID).empty();
                       $("<p></p>").text('4').appendTo(".checkValueDiv4"+checkID);
                       $(".checkValueDiv4"+checkID).css({
                         "border" : "2px solid #00B1F2",
                         "background-color":"white"
                       });


                       $(".checkValueDiv5"+checkID).empty();
                       $("<p></p>").text('5').appendTo(".checkValueDiv5"+checkID);
                       $(".checkValueDiv5"+checkID).css({
                         "border" : "2px solid white",
                         "background-color":"#00B1F2"
                       });
                       var on = $("<input></input>").attr("type", "hidden").addClass("on");
                       $(".checkValueDiv5"+checkID).append(on);
                       developCheckArrayValue[i] = "5";
                     });


                    //////////


              }(checkID, i));


            }
          }else{
            alert('디비 접속에러가 발생했습니다.');
          }

        },error:function(){
          alert('서버에러');
        }
      });






      // var on = $("<input></input>").attr("type", "hidden").attr("value", "on").addClass("on");


      // 기분 버튼들
      $("#checkBoxDiv1Value1").unbind("click").bind("click", function(){
        $("#checkBoxDiv1Value1").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv1Value1").empty();
        // $("#checkBoxDiv1Value1").append("<p>나쁨</p>");
        // $("#checkBoxDiv1Value1").append(on);
        feels = "1";
        $("#checkBoxDiv1Value2").css({"background-color":"white"});
        $("#checkBoxDiv1Value3").css({"background-color":"white"});
      });
      $("#checkBoxDiv1Value2").unbind("click").bind("click", function(){
        $("#checkBoxDiv1Value1").css({"background-color":"white"});
        $("#checkBoxDiv1Value2").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv1Value2").empty(on);
        // $("#checkBoxDiv1Value2").append("<p>보통</p>");
        // $("#checkBoxDiv1Value2").append(on);
        feels = "2";
        $("#checkBoxDiv1Value3").css({"background-color":"white"});
      });
      $("#checkBoxDiv1Value3").unbind("click").bind("click", function(){
        $("#checkBoxDiv1Value1").css({"background-color":"white"});
        $("#checkBoxDiv1Value2").css({"background-color":"white"});
        $("#checkBoxDiv1Value3").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv1Value3").empty(on);
        // $("#checkBoxDiv1Value3").append("<p>좋음</p>");
        // $("#checkBoxDiv1Value3").append(on);
        feels = "3";
      });

      // 건강 버튼들
      $("#checkBoxDiv2Value1").unbind("click").bind("click", function(){
        $("#checkBoxDiv2Value1").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv2Value1").empty(on);
        // $("#checkBoxDiv2Value1").append("<p>나쁨</p>");
        // $("#checkBoxDiv2Value1").append(on);
        health = "1";
        $("#checkBoxDiv2Value2").css({"background-color":"white"});
        $("#checkBoxDiv2Value3").css({"background-color":"white"});
      });
      $("#checkBoxDiv2Value2").unbind("click").bind("click", function(){
        $("#checkBoxDiv2Value1").css({"background-color":"white"});
        $("#checkBoxDiv2Value2").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv2Value2").empty(on);
        // $("#checkBoxDiv2Value2").append("<p>보통</p>");
        // $("#checkBoxDiv2Value2").append(on);
        health = "2";
        $("#checkBoxDiv2Value3").css({"background-color":"white"});
      });
      $("#checkBoxDiv2Value3").unbind("click").bind("click", function(){
        $("#checkBoxDiv2Value1").css({"background-color":"white"});
        $("#checkBoxDiv2Value2").css({"background-color":"white"});
        $("#checkBoxDiv2Value3").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv2Value3").empty(on);
        // $("#checkBoxDiv2Value3").append("<p>좋음</p>");
        // $("#checkBoxDiv2Value3").append(on);
        health = "3";
      });

      // 체온 버튼들
      $("#checkBoxDiv3Value1").unbind("click").bind("click", function(){
        $("#checkBoxDiv3Value1").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv3Value1").empty(on);
        // $("#checkBoxDiv3Value1").append("<p>정상</p>");
        // $("#checkBoxDiv3Value1").append(on);
        temperature = "1";
        $("#checkBoxDiv3Value2").css({"background-color":"white"});
        $("#checkBoxDiv3Value3").css({"background-color":"white"});
      });
      $("#checkBoxDiv3Value2").unbind("click").bind("click", function(){
        $("#checkBoxDiv3Value1").css({"background-color":"white"});
        $("#checkBoxDiv3Value2").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv3Value2").empty(on);
        // $("#checkBoxDiv3Value2").append("<p>미열</p>");
        // $("#checkBoxDiv3Value2").append(on);
        temperature = "2";
        $("#checkBoxDiv3Value3").css({"background-color":"white"});
      });
      $("#checkBoxDiv3Value3").unbind("click").bind("click", function(){
        $("#checkBoxDiv3Value1").css({"background-color":"white"});
        $("#checkBoxDiv3Value2").css({"background-color":"white"});
        $("#checkBoxDiv3Value3").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv3Value1").empty(on);
        // $("#checkBoxDiv3Value1").append("<p>고열</p>");
        // $("#checkBoxDiv3Value1").append(on);
        temperature = "3";
      });

      // 식사여부 버튼들
      $("#checkBoxDiv4Value1").unbind("click").bind("click", function(){
        $("#checkBoxDiv4Value1").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv4Value1").empty(on);
        // $("#checkBoxDiv4Value1").append("<p>적음</p>");
        // $("#checkBoxDiv4Value1").append(on);
        eat = "1";
        $("#checkBoxDiv4Value2").css({"background-color":"white"});
        $("#checkBoxDiv4Value3").css({"background-color":"white"});
        $("#checkBoxDiv4Value4").css({"background-color":"white"});
      });
      $("#checkBoxDiv4Value2").unbind("click").bind("click", function(){
        $("#checkBoxDiv4Value1").css({"background-color":"white"});
        $("#checkBoxDiv4Value2").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv4Value2").empty(on);
        // $("#checkBoxDiv4Value2").append("<p>보통</p>");
        // $("#checkBoxDiv4Value2").append(on);
        eat = "2";
        $("#checkBoxDiv4Value3").css({"background-color":"white"});
        $("#checkBoxDiv4Value4").css({"background-color":"white"});
      });
      $("#checkBoxDiv4Value3").unbind("click").bind("click", function(){
        $("#checkBoxDiv4Value1").css({"background-color":"white"});
        $("#checkBoxDiv4Value2").css({"background-color":"white"});
        $("#checkBoxDiv4Value3").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv4Value3").empty(on);
        // $("#checkBoxDiv4Value3").append("<p>많음</p>");
        // $("#checkBoxDiv4Value3").append(on);
        eat = "3";
        $("#checkBoxDiv4Value4").css({"background-color":"white"});
      });
      $("#checkBoxDiv4Value4").unbind("click").bind("click", function(){
        $("#checkBoxDiv4Value1").css({"background-color":"white"});
        $("#checkBoxDiv4Value2").css({"background-color":"white"});
        $("#checkBoxDiv4Value3").css({"background-color":"white"});
        $("#checkBoxDiv4Value4").css({"background-color":"#00B1F2"});
        // $("#checkBoxDiv4Value4").empty(on);
        // $("#checkBoxDiv4Value4").append("<p>안함</p>");
        // $("#checkBoxDiv4Value4").append(on);
        eat = "4";
      });



    // 항목 표시
/*
  $.ajax({
      url:"https://chesyu.run.goorm.io/MyProject/ni/developCheckList.php",
      data:{
        childID: childID
      },
      dataType:"jsonp",
      success:function(data){
          if(data.result == "success"){
            cnt = data.data.length;

            $('#tDevelopCheckDiv1').empty();


        for(var i = 0; i < cnt ; i++){
            var id        = data.data[i].id;
            var childNum = data.data[i].childNum;
            var childName = data.data[i].childName;
            var developCheckName = data.data[i].developCheckName;
            var developCheckValue1 = data.data[i].developCheckValue1;
            var developCheckValue2 = data.data[i].developCheckValue2;
            var developCheckValue3 = data.data[i].developCheckValue3;
            var developCheckValue4 = data.data[i].developCheckValue4;
            var developCheckValue5 = data.data[i].developCheckValue5;
            var regist_day		  = data.data[i].regist_day;

            var tDevelopCheckSet = $("<div></div>").addClass("tDevelopCheckSet"+id).appendTo('#tDevelopCheckDiv1');
            var tDevelopCheckNameDiv = $("<div></div>").addClass("tDevelopCheckNameDiv"+id).appendTo(tDevelopCheckSet);
            var tDevelopCheckNameP = $("<p></p>").addClass("tDevelopCheckNameP"+id).text(developCheckName).appendTo(tDevelopCheckNameDiv);

            var tDevelopCheckValueTable = $("<table></table>").appendTo(tDevelopCheckSet);
            var tDevelopCheckValueTr = $("<tr></tr>").addClass("tr"+id).appendTo(tDevelopCheckValueTable);

            var tDevelopCheckValueTd1 = $("<td></td>").appendTo(tDevelopCheckValueTr);
            var tDevelopCheckValueTd2 = $("<td></td>").appendTo(tDevelopCheckValueTr);
            var tDevelopCheckValueTd3 = $("<td></td>").appendTo(tDevelopCheckValueTr);
            var tDevelopCheckValueTd4 = $("<td></td>").appendTo(tDevelopCheckValueTr);
            var tDevelopCheckValueTd5 = $("<td></td>").appendTo(tDevelopCheckValueTr);



            var tDevelopCheckValuelabel1 = $("<label></label>").appendTo(tDevelopCheckValueTd1);
            var tDevelopCheckValuelabel2 = $("<label></label>").appendTo(tDevelopCheckValueTd2);
            var tDevelopCheckValuelabel3 = $("<label></label>").appendTo(tDevelopCheckValueTd3);
            var tDevelopCheckValuelabel4 = $("<label></label>").appendTo(tDevelopCheckValueTd4);
            var tDevelopCheckValuelabel5 = $("<label></label>").appendTo(tDevelopCheckValueTd5);

            var tDevelopCheckValue1 = $("<input> 1</input>").addClass("tDevelopCheckValue1"+id).attr("type", "radio").attr("name", "value"+id).appendTo(tDevelopCheckValuelabel1);
            var tDevelopCheckValue2 = $("<input> 2</input>").addClass("tDevelopCheckValue2"+id).attr("type", "radio").attr("name", "value"+id).appendTo(tDevelopCheckValuelabel2);
            var tDevelopCheckValue3 = $("<input> 3</input>").addClass("tDevelopCheckValue3"+id).attr("type", "radio").attr("name", "value"+id).appendTo(tDevelopCheckValuelabel3);
            var tDevelopCheckValue4 = $("<input> 4</input>").addClass("tDevelopCheckValue4"+id).attr("type", "radio").attr("name", "value"+id).appendTo(tDevelopCheckValuelabel4);
            var tDevelopCheckValue5 = $("<input> 5</input>").addClass("tDevelopCheckValue5"+id).attr("type", "radio").attr("name", "value"+id).appendTo(tDevelopCheckValuelabel5);

                  // 값도 변경할 수 있도록 데이터베이스를 설정할 경우.
            // var tDevelopCheckValue1 = $("<input>"+developCheckValue1+"</input>").addClass("tDevelopCheckValue1"+id).attr("type", "radio").attr("name", "value"+id).appendTo(tDevelopCheckValuelabel1);
            // var tDevelopCheckValue2 = $("<input>"+developCheckValue2+"</input>").addClass("tDevelopCheckValue2"+id).attr("type", "radio").attr("name", "value"+id).appendTo(tDevelopCheckValuelabel2);
            // var tDevelopCheckValue3 = $("<input>"+developCheckValue3+"</input>").addClass("tDevelopCheckValue3"+id).attr("type", "radio").attr("name", "value"+id).appendTo(tDevelopCheckValuelabel3);
            // var tDevelopCheckValue4 = $("<input>"+developCheckValue4+"</input>").addClass("tDevelopCheckValue4"+id).attr("type", "radio").attr("name", "value"+id).appendTo(tDevelopCheckValuelabel4);
            // var tDevelopCheckValue5 = $("<input>"+developCheckValue5+"</input>").addClass("tDevelopCheckValue5"+id).attr("type", "radio").attr("name", "value"+id).appendTo(tDevelopCheckValuelabel5);

          }
        }
      } // success 끝나는 지점
    });
*/

    // // 발달 사항 체크 저장버튼 클릭
    $('#tDevelopCheckSaveBtn').unbind("click").bind("click", function(){
      tDevelopCheckSave(childID);
    });

    // 발달 사항 체크 취소버튼 클릭
    $('#tDevelopCheckCancelBtn').unbind("click").bind("click", function(){
      selectChildView("box2");
    });


    // 발달 사항 체크 저장
    function tDevelopCheckSave(childID){


      // alert("원아ID" + childID);
      // alert("선생ID" + user_num);
      // alert("선생이름" + user_name);

      if(feels == undefined){
        feels = "2";
      }
      if(health == undefined){
        health = "2";
      }

      if(temperature == undefined){
        temperature = "2";
      }

      if(eat == undefined){
        eat = "2";
      }

      basicChecks[0] = feels;
      basicChecks[1] = health;
      basicChecks[2] = temperature;
      basicChecks[3] = eat;

      for(var i = 0; i < developCheckArrayID.length; i++){
          if(developCheckArrayValue[i] == undefined){
            developCheckArrayValue[i] = "3";
          }


          // alert(
          //   "항목 고유넘버 : " + developCheckArrayID[i] +
          //   " //////// " +
          //   "항목 선택한값 : " + developCheckArrayValue[i]
          // );

      }

// developCheckArrayID[i]]  <--   항목 고유넘버
// developCheckArrayValue[i]]  <--   항목 고유넘버에 대응하는 클릭한 값

      alert(childID);

      $.ajax({
        dataType:"jsonp",
        data:{
          childID: childID,
          user_num: user_num,
          developCheckArrayID : developCheckArrayID,
          developCheckArrayValue : developCheckArrayValue,
          basicChecks : basicChecks
        },
        url:"http://project-okyo.c9users.io/mobile/setAssessed.php",
        success:function(data){
          alert('데이터 저장');
        },
        error:function(){
          alert('서버 실패');
        }
      });

    }// 발달사항체크저장 끝부분

  }


  // I-Check 클릭
  $('#box3').unbind("click").bind("click", function(){
    var whatIsBox = "box3";
    selectChildView(whatIsBox);
  });


  // I-Check
  function tICheck(childID, imageName, childName){
    allHide();
    $('#ICheck').show();
    $('#tICheckMain').show();
    $('#modeBtns').show();

    var newDate = new Date();
    var dateString = newDate.getFullYear() + " - " + (newDate.getMonth() + 1) + " - " + newDate.getDate();

    var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();

    if(( (newDate.getMonth() + 1)+"" ).length == 1 && ( newDate.getDate()+"").length == 2){
      var dateValue = newDate.getFullYear() + "-0" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
    } else if(( (newDate.getMonth() + 1)+"" ).length == 2 && ( newDate.getDate()+"").length == 1){
      var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-0" + newDate.getDate();
    } else if(( (newDate.getMonth() + 1)+"" ).length == 1 && ( newDate.getDate()+"").length == 1){
      var dateValue = newDate.getFullYear() + "-0" + (newDate.getMonth() + 1) + "-0" + newDate.getDate();
    } else{
      var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
    }


    // 달력
    $(".dateValueP").text(dateString);
    $(".datepicker").datepicker({
            buttonImage: './img/calendar.png',
            buttonImageOnly: true,
             dateFormat: 'yy - mm - dd',
            // changeMonth: true,
            // changeYear: true,

            // nextText: '다음 달', // next 아이콘의 툴팁.
            // prevText: '이전 달',
            showOn: 'both',
            showButtonPanel: true,  // 달력아래 버튼 패널
            // currentText : 'Today',
            closeText:'Close',       // 버튼패널 중 닫기 텍스트 정의
            duration: "slow" ,      // 속도

            // 달력 OPEN시 위치
            beforeShow: function (input, inst) {
                setTimeout(function () {
                    inst.dpDiv.css({
                        top: 65,
                        left: 58
                        // top: 125,
                        // left: 2,
                        // width:340,
                    });
                }, 0);
            },

            // 달력에서 선택한 값을 변수에 저장
            onSelect: function(value) {
              var explodeValue = value.split(" - ");
              dateValue = explodeValue[0]+"-"+explodeValue[1]+"-"+explodeValue[2];

              $(".dateValueP").empty();
              $(".dateValueP").text(value);

              var valueP = $(".dateValueP").text();
              // var explodeValue = valueP.split(" - ");
              // dateValue = explodeValue[0]+"-"+explodeValue[1]+"-"+explodeValue[2];
              // alert("p태그 날짜는 : " + valueP);
              // alert("dateValue는 : " + dateValue);

              if($("#modeContents").children().hasClass("notification_div") === true){
                // alert('알림내용');


                notification(dateValue);

              }

              if($("#modeContents").children().hasClass("developGraph_div2") === true){
                // alert('발달사항');
                developGraph(dateValue);
              }

              if($("#modeContents").children().hasClass("significant_div") === true){
                // alert('특이사항');
                significant(dateValue);
              }
            }
    });



    notification(dateValue);
    $("#tICheck_Notification_btn2").css({
      "background-color":"#FF5E00"
    });
    $("#tICheck_DevelopGraph_btn2").css({
      "background-color":"#FFCA6C"
    });
    $("#tICheck_Significant_btn2").css({
      "background-color":"#FFCA6C"
    });


    var cnt;
    // 선택한 원아 이름, 이미지 출력

    $('#tICheck_childBox_div').empty();

    var imgs = $("<img />").attr("src","http://project-okyo.c9users.io/img/child/"+imageName);
    var names = $("<p></p>").text(childName);

    $("<div></div>").addClass("tICheck_childBox").appendTo("#tICheck_childBox_div");
    var imgsDiv = $("<div></div>").addClass("tICheck_imgsDiv").appendTo(".tICheck_childBox");
    var namesDiv = $("<div></div>").addClass("tICheck_namesDiv").appendTo(".tICheck_childBox");
    imgsDiv.append(imgs);
    namesDiv.append(names);

    // 모드 버튼들
      // 알림내용 버튼 클릭
    $("#tICheck_Notification_btn").unbind("click").bind("click", function(){
      notification(dateValue);
      $("#tICheck_Notification_btn2").css({
        "background-color":"#FF5E00"
      });
      $("#tICheck_DevelopGraph_btn2").css({
        "background-color":"#FFCA6C"
      });
      $("#tICheck_Significant_btn2").css({
        "background-color":"#FFCA6C"
      });
    });

      // 발달사항 버튼 클릭
    $("#tICheck_DevelopGraph_btn").unbind("click").bind("click", function(){
      developGraph(dateValue);
      $("#tICheck_Notification_btn2").css({
        "background-color":"#FFCA6C"
      });
      $("#tICheck_DevelopGraph_btn2").css({
        "background-color":"#FF5E00"
      });
      $("#tICheck_Significant_btn2").css({
        "background-color":"#FFCA6C"
      });


    });

      // 특이사항 버튼 클릭
    $("#tICheck_Significant_btn").unbind("click").bind("click", function(){
      significant(dateValue);
      $("#tICheck_Notification_btn2").css({
        "background-color":"#FFCA6C"
      });
      $("#tICheck_DevelopGraph_btn2").css({
        "background-color":"#FFCA6C"
      });
      $("#tICheck_Significant_btn2").css({
        "background-color":"#FF5E00"
      });

    });

    //  알림내용 모드 컨텐츠 보여주기
    function notification(dateValue){


      $("#modeContents").empty();

      // 댓글보기 버튼
      var showCommentsBtn = $("<div></div>").addClass("showCommentsBtn").appendTo("#modeContents");
      $("<p>댓</p>").appendTo(showCommentsBtn);
      $("<p>글</p>").appendTo(showCommentsBtn);
      $("<p>보</p>").appendTo(showCommentsBtn);
      $("<p>기</p>").appendTo(showCommentsBtn);


      // 알림내용의 댓글 div
      $("<div></div>").addClass("notification_commentsDiv").appendTo("#modeContents");
      $("<div></div>").attr("id", "viewUploadedComment_div").addClass("viewUploadedComment_div").appendTo(".notification_commentsDiv");
      $("<div></div>").addClass("uploadComment_div").appendTo(".notification_commentsDiv");
      $("<p></p>").text("작성").appendTo(".uploadComment_div");
      $(".notification_commentsDiv").hide();





      // 댓글보기 버튼 클릭 시
      $(".showCommentsBtn").unbind("click").bind("click", function(){
        // 댓글창 나타내기
        // $(".notification_commentsDiv").slideUp(500);
         $(".notification_commentsDiv").slideToggle(500, showComments(childID, dateValue));

        // 댓글보기 함수
        // showComments(childID, dateValue);

        // 알림내용의 댓글작성 버튼 클릭
        $('.uploadComment_div').unbind("click").bind("click", function(){
          var newDate = new Date();
          // var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
          //
          // if(( (newDate.getMonth() + 1)+"" ).length == 1 && ( newDate.getDate()+"").length == 2){
          //   var dateValue = newDate.getFullYear() + "-0" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
          // } else if(( (newDate.getMonth() + 1)+"" ).length == 2 && ( newDate.getDate()+"").length == 1){
          //   var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-0" + newDate.getDate();
          // } else if(( (newDate.getMonth() + 1)+"" ).length == 1 && ( newDate.getDate()+"").length == 1){
          //   var dateValue = newDate.getFullYear() + "-0" + (newDate.getMonth() + 1) + "-0" + newDate.getDate();
          // } else{
          //   var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
          // }
          var timeValue = newDate.getHours() + ":" +
                          newDate.getMinutes() + ":" +
                          newDate.getSeconds();


          var comment = prompt('댓글을 입력하세요.');
          $.ajax({
            dataType:'jsonp',
            data: {
              childID: childID,
              user_num: user_num,
              textMemo: comment,
              dateValue: dateValue,
              timeValue: timeValue,
              memoCategory : 2, // 1 -> 알림장내용 / 2 -> 알림장의 댓글  / 3 -> 특이사항  / 4 -> 단순메모
              memoType : 1  // 1 -> 글씨  /  2 -> 그림
            },
              url:'http://project-okyo.c9users.io/mobile/setMemo.php',
             success:function(result){
                $('.viewUploadedComment_div').empty();
               showComments(childID, dateValue);
             }, error:function(){
              //  alert('실패');
             }

          });
        });



      });



      // var showtextDiv1Btn = $("<div></div>").addClass("showtextDiv1Btn").appendTo("#modeContents");
      // $("<p>알림장</p>").appendTo(showtextDiv1Btn);
      // $(".showtextDiv1Btn").hide();
      //
      // $(".showtextDiv1Btn").unbind("click").bind("click", function(){
      //
      //   // 알림장보기 버튼 숨기고 댓글보기버튼 나타내기
      //   $(".showtextDiv1Btn").hide();
      //   $(".showCommentsBtn").show();
      //
      //
      // });


      // 텍스트메모 보기 버튼
      var showTextMemoBtn = $("<div></div>").addClass("notification_showTextMemoBtn").appendTo("#modeContents");
      $("<p></p>").text("메").appendTo(showTextMemoBtn);
      $("<p></p>").text("모").appendTo(showTextMemoBtn);
      $("<p></p>").text("보").appendTo(showTextMemoBtn);
      $("<p></p>").text("기").appendTo(showTextMemoBtn);

      // 텍스트메모 보기 컨텐츠
      var showTextMemoDiv = $("<div></div>").addClass("showTextMemoDiv").appendTo("#modeContents");
      var showTextMemo =  $("<div></div>").addClass("showTextMemo").appendTo(showTextMemoDiv);
      var showTextDateTitle =  $("<div></div>").addClass("showTextDateTitle").appendTo(showTextMemoDiv);
      $("<p></p>").text('메모 작성 날짜 : '+dateValue).appendTo(showTextDateTitle);
      var TextMemoCloseBtn = $("<div></div>").addClass("TextMemoCloseBtn").appendTo(showTextMemoDiv);
      $(".showTextMemoDiv").hide();

      // 텍스트메모 보기 버튼 클릭 이벤트
      $(".notification_showTextMemoBtn").unbind("click").bind("click", function(){
        $(".showTextMemoDiv").toggle("slide",{direction:"left"},200,null);
        var on = $("<input></input>").attr("type", "hidden").attr("value", "on").addClass("on");
        $(".showTextMemo").empty();

        $(".showTextMemo").append(on);
        $.ajax({
          dataType:"jsonp",
          data:{
            childID: childID,
            user_num: user_num,
            user_name: user_name,
            dateValue: dateValue,
            memoCategory : 4, // 1 -> 알림장내용 / 2 -> 알림장의 댓글  / 3 -> 특이사항  / 4 -> 단순메모
            memoType : 1  // 1 -> 글씨  /  2 -> 그림

          },
          url:'http://project-okyo.c9users.io/mobile/getMemo.php',
          success:function(data){

            var cnt = data.data.length;

            for(var i = 0; i < cnt; i++){
              var id        = data.data[i].id;
              var textValue = data.data[i].textValue;

              var textMemo = $("<p></p>").text(textValue).addClass("textMemo"+id);
              $(".showTextMemo").append(textMemo);


              (function(id){
                  $('.savedTextMemos'+id).unbind("click").bind("click",function(){
                    // deleteUploadedTexts(id, childID);  // 오늘 작성하나 메모 클릭시 삭제
                  });
              }(id));

            }
          },
          error:function(){
            alert('error');
          }
        });
      });

      // 텍스트메모 닫기 클릭 이벤트
      $(".TextMemoCloseBtn").unbind("click").bind("click", function(){
        $(".showTextMemoDiv").toggle("slide",{direction:"left"},200,null);
        $(".showTextMemo").empty();
      });



      // 이미지메모 보기 버튼
      var showImageMemoBtn = $("<div></div>").addClass("notification_showImageMemoBtn").appendTo("#modeContents");
      $("<p></p>").text("그").appendTo(showImageMemoBtn);
      $("<p></p>").text("림").appendTo(showImageMemoBtn);
      $("<p></p>").text("메").appendTo(showImageMemoBtn);
      $("<p></p>").text("모").appendTo(showImageMemoBtn);

      // 이미지메모 보기 컨텐츠
      var showImageMemoDiv = $("<div></div>").addClass("showImageMemoDiv").appendTo("#modeContents");
      var showImageMemo =  $("<div></div>").addClass("showImageMemo").appendTo(showImageMemoDiv);
      var showImageDateTitle =  $("<div></div>").addClass("showImageDateTitle").appendTo(showImageMemoDiv);
      $("<p></p>").text('메모 작성 날짜 : '+dateValue).appendTo(showImageDateTitle);
      var ImageMemoCloseBtn = $("<div></div>").addClass("ImageMemoCloseBtn").appendTo(showImageMemoDiv);
      $(".showImageMemoDiv").hide();

      // 이미지메모 보기 버튼 클릭 이벤트
      $(".notification_showImageMemoBtn").unbind("click").bind("click", function(){
        $(".showImageMemoDiv").toggle("slide",{direction:"left"},200,null);
        var on = $("<input></input>").attr("type", "hidden").attr("value", "on").addClass("on");
        $(".showImageMemo").empty();


        $(".showImageMemo").append(on);
        $.ajax({
          dataType:"jsonp",
          data:{
            childID: childID,
            user_num: user_num,
            dateValue: dateValue,
            memoCategory: 4,  // 1 -> 알림장내용 / 2 -> 알림장의 댓글  / 3 -> 특이사항  / 4 -> 단순메모
            memoType : 2
          },
          url:'http://project-okyo.c9users.io/mobile/getMemo.php',
          success:function(data){

            var cnt = data.data.length;

            for(var i = 0; i < cnt ; i++){

                var id        = data.data[i].id;
                var imageName = data.data[i].imageName;
                var imgPath = data.data[i].imgPath;

                var imgs = $("<img />").attr("src","http://project-okyo.c9users.io"+imgPath+imageName);
                // var imgsDiv = $("<div></div>").addClass("uploadedImgDiv").append(imags);
                $("<div></div>").addClass("imageMemo"+id).append(imgs).appendTo(".showImageMemo");

                (function(id, childId, imgPath, imageName){
                  $(".imageMemo"+id).unbind("click").bind("click",function(){
                    // deleteUploadedImages(id, childID, path, imageName);  // 클릭한 사진 지우기
                  });
                }(id, childID, imgPath, imageName));
            }
          }, error:function(){

          }
        });

        // $(".notification_showTextMemoBtn").toggle("slide",{direction:"left"},200,null);
      });

      // 이미지메모 닫기 클릭 이벤트
      $(".ImageMemoCloseBtn").unbind("click").bind("click", function(){
        $(".showImageMemoDiv").toggle("slide",{direction:"left"},200,null);
        $(".showImageMemo").empty();

        // $(".notification_showTextMemoBtn").toggle("slide",{direction:"left"},200,null);
      });


      // 앨범추가 보기 버튼
      var showAddAlbumBtn = $("<div></div>").addClass("notification_showAddAlbumBtn").appendTo("#modeContents");
      $("<p></p>").text("앨").appendTo(showAddAlbumBtn);
      $("<p></p>").text("범").appendTo(showAddAlbumBtn);
      $("<p></p>").text("보").appendTo(showAddAlbumBtn);
      $("<p></p>").text("기").appendTo(showAddAlbumBtn);

      // 앨범추가 보기 컨텐츠
      var showAddAlbumDiv = $("<div></div>").addClass("showAddAlbumDiv").appendTo("#modeContents");
      var showAddAlbum =  $("<div></div>").addClass("showAddAlbum").appendTo(showAddAlbumDiv);
      var showImageDateTitle =  $("<div></div>").addClass("showImageDateTitle").appendTo(showAddAlbumDiv);
      $("<p></p>").text('사진 촬영 날짜 : '+dateValue).appendTo(showImageDateTitle);
      var AddAlbumCloseBtn = $("<div></div>").addClass("AddAlbumCloseBtn").appendTo(showAddAlbumDiv);
      $(".showAddAlbumDiv").hide();

      // 앨범추가 보기 버튼 클릭 이벤트
      $(".notification_showAddAlbumBtn").unbind("click").bind("click", function(){
        $(".showAddAlbumDiv").toggle("slide",{direction:"left"},200,null);
        var on = $("<input></input>").attr("type", "hidden").attr("value", "on").addClass("on");
        $(".showAddAlbum").empty();


        $(".showAddAlbum").append(on);


        $.ajax({
          dataType:"jsonp",
          data:{
            childID: childID,
          },
          url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
          success:function(data){

            var cnt = data.data.length;

            for(var i = 0; i < cnt ; i++){

              var photoId   = data.data[i].id;
              var folderPath = data.data[i].folderPath;
              var photoName = data.data[i].photoName;
              var registDay = data.data[i].registDay;
              var fullPath = childID+"/"+folderPath+"/"+photoName;
              var photoMemo = data.data[i].photoMemo;

                var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+fullPath).addClass("addAlbumID"+photoId);
                // var imgsDiv = $("<div></div>").addClass("uploadedImgDiv").append(imags);
                $("<div></div>").addClass("AddAlbum"+photoId).append(imgs).appendTo(".showAddAlbum");

                (function(photoId, childId, imageName, fullPath){
                  $(".AddAlbum"+photoId).unbind("click").bind("click",function(){

                    if($(".notification_imageDiv2").children().hasClass("notification_addedImg") == true){
                      alert('사진추가는 한장만.');
                    } else{
                      var img = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+fullPath).addClass("notification_imageDiv2Img");
                      $(".notification_imageDiv2").append(img);
                    }
                    // 사진 클릭한 다음에는 앨범보기 창 숨기기
                    $(".showAddAlbumDiv").toggle("slide",{direction:"left"},200,null);
                    $(".showAddAlbum").empty();

                  });
                }(photoId, childID, imageName, fullPath));
            }
          }, error:function(){

          }
        });

        // $(".notification_showTextMemoBtn").toggle("slide",{direction:"left"},200,null);
      });

      // 앨범추가 닫기 클릭 이벤트
      $(".AddAlbumCloseBtn").unbind("click").bind("click", function(){
        $(".showAddAlbumDiv").toggle("slide",{direction:"left"},200,null);
        $(".showAddAlbum").empty();

        // $(".notification_showTextMemoBtn").toggle("slide",{direction:"left"},200,null);
      });

      $(".notification_showTextMemoBtn").hide();
      $(".notification_showImageMemoBtn").hide();
      $(".notification_showAddAlbumBtn").hide();



      // 알림내용 div
      var ndTitle = $("<div></div>").addClass("notification_divTitle").appendTo("#modeContents");
      ndTitle.append("<p>I-Check 알림장</p>");
      $("<div></div>").addClass("notification_div").appendTo("#modeContents");





      // 알림장보기 사진들어갈 공간
      $("<div></div>").addClass("notification_imageDiv1").appendTo(".notification_div");
      $("<img />").attr("src", "./img/noImg.png").addClass("notification_imageDiv1Img").appendTo(".notification_imageDiv1");
      // 알림장보기 글씨들어갈 공간
      $("<div></div>").addClass("notification_textDiv1").appendTo(".notification_div");
      $("<pre></pre>").text('알림장 첫번째 값 들어가야함').addClass("notification_pre").appendTo(".notification_textDiv1");


      // 알림장작성 사진들어갈 공간
      $("<div></div>").addClass("notification_imageDiv2").appendTo(".notification_div");
      // 알림장작성 글씨들어갈 공간
      $("<div></div>").addClass("notification_textDiv2").appendTo(".notification_div");



      // 처음엔 보기  를 보여주고
      $(".notification_textDiv1").show();
      $(".notification_imageDiv1").show();

      // 작성을 숨긴다
      $(".notification_textDiv2").hide();
      $(".notification_imageDiv2").hide();



      // 알림장 작성버튼
      $("<div></div>").addClass("notification_createBtn").appendTo(".notification_div");
      $("<p>작성</p>").appendTo(".notification_createBtn");

      // 알림장 저장버튼

      $("<div></div>").addClass("notification_saveBtn").appendTo(".notification_div");
      $("<p>저장</p>").appendTo(".notification_saveBtn");
      $(".notification_saveBtn").hide();


      var text;   // 테스트용 알림장 내용 왔다갔다 하기 변수
      // 작성버튼 클릭할 시.
      $(".notification_createBtn").unbind("click").bind("click", function(){

        text = $(".notification_textDiv1").text();

        // 댓글보기버튼 숨기기
        $(".showCommentsBtn").hide();

        // 좌측 버튼들 소환
        $(".notification_showTextMemoBtn").show();
        $(".notification_showImageMemoBtn").show();
        $(".notification_showAddAlbumBtn").show();

        $(".notification_textDiv1").hide();
        $(".notification_imageDiv1").hide();

        $(".notification_textDiv2").show();
        $(".notification_imageDiv2").show();

        $(".notification_saveBtn").show();
        $(".notification_createBtn").hide();

        $(".notification_textDiv1").empty();

        $("<textarea></textarea>").text(text).attr("wrap", "hard").addClass("notification_textarea").appendTo(".notification_textDiv2");

        $(".notification_imageDiv2").unbind("click").bind("click", function(){

          // 사진이 들어있을 때만 클릭 시 삭제확인 메시지 출력
          if($(".notification_imageDiv2").children().hasClass("notification_imageDiv2Img")){
            var YesOrNo = confirm("삭제?");
          }
            if(YesOrNo){
              $(".notification_imageDiv2").empty();
            } else{
            }
        });
      });


      // 저장버튼 클릭 시
      $(".notification_saveBtn").unbind("click").bind("click", function(){

        text = $(".notification_textarea").val();

        // 댓글보기 버튼 나타내기
        $(".showCommentsBtn").show();

        alert('이렇게 디비에 저장하면서 저장한것 불러오기 하면 될 것 같당');
        $(".notification_showTextMemoBtn").hide();
        $(".notification_showImageMemoBtn").hide();
        $(".notification_showAddAlbumBtn").hide();

        $(".notification_textDiv1").show();
        $(".notification_imageDiv1").show();

        $(".notification_textDiv2").hide();
        $(".notification_imageDiv2").hide();


        $(".notification_createBtn").show();
        $(".notification_saveBtn").hide();

        $("<pre></pre>").text(text).addClass("notification_pre").appendTo(".notification_textDiv1");



        $(".notification_textDiv2").empty();

        var getDiv2ImgSrc = $(".notification_imageDiv2").find('img').attr('src');
        $(".notification_imageDiv1Img").attr("src", getDiv2ImgSrc);
      });
    }

    //  발달그래프 모드 컨텐츠 보여주기
    function developGraph(dateValue){
      $("#modeContents").empty();
      $("<div></div>").addClass("developGraph_div1").appendTo("#modeContents");
      $("<div></div>").addClass("developGraph_div2").appendTo("#modeContents");



      $("<p></p>").text('수업 평가항목').appendTo(".developGraph_div1");

      /*
      $.ajax({
        dataType:"jsonp",
        data:{
          childID: childID,
          user_num: user_num,
          dateValue: dateValue
        },
        url:"https://chesyu.run.goorm.io/MyProject/ni/getDevelopValues.php",
        success:function(data){

          // 쿼리결과 행 갯수
          var cnt = data.data.length;
          $(".valueGraphDiv").empty();

          // 그래프 담을 div
          var valueGraphDiv = $("<div></div>").addClass("valueGraphDiv").appendTo(".developGraph_div2");

          if(cnt > 0){
            for(var i = 0; i < cnt; i++){
              // 그래프막대
              var developValueDiv = $("<div></div>").addClass("developValueDiv").progressbar({ value: data.data[i].developCheckValue * 20}).appendTo(".valueGraphDiv");
              // // 그래프 라벨
              var valueLavel = $("<div></div>").addClass("progress-label").text(data.data[i].developCheckName).appendTo(developValueDiv);
            }
          } else{
            var noCheckMessage = $("<div></div>").text('오늘 체크 안했음');
            $(".valueGraphDiv").append(noCheckMessage);
          }


        }, error:function(){
          alert("error 발생");
        }

      });
      */

    }

    // 특이사항 모드 컨텐츠 보여주기
    function significant(dateValue){
      $("#modeContents").empty();
      $("<div></div>").addClass("significant_divTitle").appendTo("#modeContents");
      $("<div></div>").addClass("significant_div").appendTo("#modeContents");



    }

    // 댓글보기 함수
    function showComments(childID, dateValue){


      $.ajax({
        url:'http://project-okyo.c9users.io/mobile/getMemo.php',
        data:{
          childID:childID,
          user_num: user_num,
          dateValue:dateValue,
          memoCategory : 2,      // 1 -> 알림장내용 / 2 -> 알림장의 댓글  / 3 -> 특이사항  / 4 -> 단순메모
          memoType : 1  // 1 -> 글씨  /  2 -> 그림
        },
        dataType:"jsonp",
          success:function(data){

            var cnt = data.data.length;
            $(".viewUploadedComment_div").empty();
            for(var i = 0; i < cnt; i++){
              // 댓글 입력한 것이 교사라면.
              if(data.data[i].position == 2){

                var teacherCommentBox = $("<div></div>").addClass("teacherCommentBox");
                $("<div></div>").addClass("teacherTrue1").text("교사").appendTo(teacherCommentBox);
                $("<p></p>").text(data.data[i].comment).appendTo(teacherCommentBox);
                teacherCommentBox.appendTo(".viewUploadedComment_div");
              }
              // 댓글 입력한 것이 교사가 아니라면.
              else {
                var parentCommentBox = $("<div></div>").addClass("parentCommentBox");
                $("<div></div>").addClass("teacherTrue0").text("학부모").appendTo(parentCommentBox);
                $("<p></p>").text(data.data[i].comment).appendTo(parentCommentBox);
                parentCommentBox.appendTo(".viewUploadedComment_div");
              }

              // $("<p></p>").text(data.data[i].comment).appendTo(".viewUploadedComment_div");

            }

            // 댓글창 스크롤 가장 아래로 내리기
            document.getElementById('viewUploadedComment_div').scrollTop = document.getElementById('viewUploadedComment_div').scrollHeight;

        },error:function(){
          alert('error');
        }
      });

    }



    // 뒤로 돌아가기 버튼
    $('#backTurnBtn').unbind("click").bind("click", function(){
      var whatIsBox = "box3";
      selectChildView(whatIsBox);
    });

  }


  // 원아지킴이 클릭

  // 사진 업로드 클릭
  $("#box5").unbind("click").bind("click", function(){
    var whatIsBox = "box5";
    selectChildView(whatIsBox);
    $("#etcPicture1").unbind("click").bind("click",function(){
                                alert('기타 사진업로드 구현 대기중');
                              });
  });




  // 사진 업로드
  function photoUpload(childID, imageName, childName){
    allHide();
    $("#photoUpload").show();

                    var imgs = $("<img />").addClass("photoUpload_ImageName").attr("src","http://project-okyo.c9users.io/img/child/"+imageName);
                    var names = $("<p></p>").addClass("photoUpload_ChildName").text(childName);
                    var namesDiv = $("<div></div>").addClass("photoUpload_ChildNameDiv").append(names);

                    $("#photoUpload_childBox_div").addClass('photoUpload_ImgAndName');
                    $("<div></div>").addClass("photoUpload_ImageNameDiv").append(imgs).append(namesDiv).appendTo(".photoUpload_ImgAndName");

    // 이미지태그로 이미지 띄우기
    var GalleryImageView = $("<img />").attr("src", "").addClass("GalleryImageView");
    // var GalleryImageView = $("<img />").attr("src", "./img/testImg.jpg").addClass("GalleryImageView");

    $("#photoUpload").append(GalleryImageView);

    // 사진촬영 버튼
    $("#takePictureBtn").unbind("click").bind("click", function(){
      btnTakePic();
    });

    // 갤러리찾기 버튼
    $("#getGalleryBtn").unbind("click").bind("click", function(){
      btnAlbumPic();
    });


    // '사진촬영' 클릭 시
    function btnTakePic(){
      navigator.camera.getPicture(onPhotoData, onFail,
                                    { quality: 50, destinationType: Camera.DestinationType.DATA_URL });
    }


    // '갤러리 찾기' 클릭 시
    function btnAlbumPic(){
      navigator.camera.getPicture(onPhotoData, onFail,
                                    { quality: 50, destinationType: Camera.DestinationType.DATA_URL,
                                      sourceType: Camera.PictureSourceType.PHOTOLIBRARY });
    }

    function onPhotoData(imageData){
      // 이미지태그로 이미지값 가져와서 띄우기
      $(".GalleryImageView").attr("src", "data:image/jpeg;base64, " + imageData);
    }

    function onFail(message){
      // alert('Faild : ' + message);
    }

        //업로드 버튼
    $("#photoUploadBtn").unbind("click").bind("click", function(){
          uploadPhoto(childID);
    });

    // 이미지 저장 클릭
    function uploadPhoto(childID) {
        var viewPhotoDataUrl = $(".GalleryImageView").attr('src');
        var photoMemo = $("#photoMemo").val();

      // 그림으로 보내는 데이터양이 많으면 get으로 주고받을수가
      // 없기 때문에 POST를 사용해야 한다.
        $.ajax({
          type:'POST',
          data: {
            childID : childID,
            user_num: user_num,
            viewPhotoDataUrl: viewPhotoDataUrl,
            photoMemo: photoMemo
          },
            url:'http://project-okyo.c9users.io/mobile/uploadPhoto.php',
           success:function(result){

            alert("사진을 업로드했습니다.");
            $("#photoMemo").val('');
            $(".GalleryImageView").attr("src", "");

           }, error:function(result){
             alert("error");
           }
        });

      // end
    }

      //취소버튼
    $("#photoUploadCancelBtn").unbind("click").bind("click", function(){
      var whatIsBox = "box5";
      selectChildView(whatIsBox);
    });


    // 이미지업로드 끝부분
  }


  // 앨범 보기 클릭
  $('#box6').unbind("click").bind("click", function(){
    selectChildView("box6");
    $("#etcPicture1").unbind("click").bind("click",function(){
                                alert('기타 앨범보기 구현 대기중');
                              });
  });



  // 앨범 보기
  function showAlbum(childID, imageName, childName, optionValue){
    $("#albumChildSelectBox1").hide();
    $("#showAlbum").show();

    switch (optionValue) {
      case 1:
          showAlbumOption1(childID, imageName, childName, optionValue);
          $("#showAlbumOptionBtn1").css({
            "background-color":"#5F00FF"
          });
          $("#showAlbumOptionBtn2").css({
            "background-color":"#D1B2FF"
          });
          $("#showAlbumOptionBtn6").css({
            "background-color":"#D1B2FF"
          });
        break;
      case 2:
          showAlbumOption2(childID, imageName, childName, optionValue);
          $("#showAlbumOptionBtn1").css({
            "background-color":"#D1B2FF"
          });
          $("#showAlbumOptionBtn2").css({
            "background-color":"#5F00FF"
          });
          $("#showAlbumOptionBtn6").css({
            "background-color":"#D1B2FF"
          });
      default:

    }


      // 최근순 버튼 클릭
    $("#showAlbumOptionBtn1").unbind("click").bind("click", function(){
      showAlbumOption1(childID, 1);
      $("#showAlbumOptionBtn1").css({
        "background-color":"#5F00FF"
      });
      $("#showAlbumOptionBtn2").css({
        "background-color":"#D1B2FF"
      });
      $("#showAlbumOptionBtn6").css({
        "background-color":"#D1B2FF"
      });
    });

    // $("<div></div>").addClass("tICheck_Notification_btn2").text('알림내용').appendTo("#tICheck_Notification_btn");

      // 오래된순 버튼 클릭
    $("#showAlbumOptionBtn2").unbind("click").bind("click", function(){
      showAlbumOption2(childID, 2);
      $("#showAlbumOptionBtn1").css({
        "background-color":"#D1B2FF"
      });
      $("#showAlbumOptionBtn2").css({
        "background-color":"#5F00FF"
      });
      $("#showAlbumOptionBtn6").css({
        "background-color":"#D1B2FF"
      });


    });
    // $("<div></div>").addClass("tICheck_DevelopGraph_btn2").text('발달사항').appendTo("#tICheck_DevelopGraph_btn");


    //   // 날짜조회 버튼 클릭
    // $("#showAlbumOptionBtn6").unbind("click").bind("click", function(){
    //   showAlbumOption6(childID);
    //   $("#showAlbumOptionBtn1").css({
    //     "background-color":"#D1B2FF"
    //   });
    //   $("#showAlbumOptionBtn2").css({
    //     "background-color":"#D1B2FF"
    //   });
    //   $("#showAlbumOptionBtn6").css({
    //     "background-color":"#5F00FF"
    //   });
    //
    // });


/*
    // 최근순 정렬
    function showAlbumOption1(childID){
      $.ajax({
        dataType: "jsonp",
        data:{
          childID: childID
        },
        // url:'https://chesyu.run.goorm.io/MyProject/ni/uaaa.php',
        url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
        success:function(data){
          var cnt = data.data.length;

          $("#showAlbumDiv").empty();

          var photoData = new Array();

          for(var i = 0; i < cnt; i++){
            photoData['photoId']   = data.data[i].id;
            photoData['folderPath'] = data.data[i].folderPath;
            photoData['photoName'] = data.data[i].photoName;
            photoData['registDay'] = data.data[i].registDay;
            photoData['fullPath'] = childID+"/"+photoData['folderPath']+"/"+photoData['photoName'];
            photoData['photoMemo'] = data.data[i].photoMemo;

            var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+photoData['fullPath']).addClass("photo"+photoData['photoId']);
            // var memos   = $("<p></p>").text(photoMemo);
            var imgsDiv = $("<div></div>").addClass("photoImgsDiv").append(imgs);
            $("#showAlbumDiv").append(imgsDiv);

            (function(photoData){
              $(".photo"+photoData['photoId']).unbind("click").bind("click",function(){
                detailPhotoView(photoData);
              });
            }(photoData));

          }
        },
        error:function(){
          alert('서버 오류');
        }
      });
    }

    // 오래된순 정렬
    function showAlbumOption2(childID){
      var asc = "asc";
      $.ajax({
        dataType: "jsonp",
        data:{
          childID: childID,
          asc : asc
        },
        // url:'https://chesyu.run.goorm.io/MyProject/ni/uaaa.php',
        url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
        success:function(data){
          var cnt = data.data.length;

          $("#showAlbumDiv").empty();

          var photoData = new Array();

          for(var i = 0; i < cnt; i++){
            photoData['id']   = data.data[i].id;
            photoData['folderPath'] = data.data[i].folderPath;
            photoData['photoName'] = data.data[i].photoName;
            photoData['registDay'] = data.data[i].registDay;
            photoData['fullPath'] = childID+"/"+photoData['folderPath']+"/"+photoData['photoName'];
            photoData['photoMemo'] = data.data[i].photoMemo;

            var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+photoData['fullPath']).addClass("photo"+photoData['photoId']);
            // var memos   = $("<p></p>").text(photoMemo);
            var imgsDiv = $("<div></div>").addClass("photoImgsDiv").append(imgs);
            $("#showAlbumDiv").append(imgsDiv);

            (function(photoData){
              $(".photo"+photoData['photoId']).unbind("click").bind("click",function(){
                detailPhotoView(photoData);
              });
            }(photoData));

          }

        },
        error:function(){
          alert('서버 오류');
        }
      });
    }
    */
    // 최근순 정렬
    function showAlbumOption1(childID, imageName, childName, optionValue){

      $.ajax({
        dataType: "jsonp",
        data:{
          childID: childID
        },
        // url:'https://chesyu.run.goorm.io/MyProject/ni/uaaa.php',
        url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
        success:function(data){
          var cnt = data.data.length;

          $("#showAlbumDiv").empty();

          for(var i = 0; i < cnt; i++){
            var photoId   = data.data[i].id;
            var folderPath = data.data[i].folderPath;
            var photoName = data.data[i].photoName;
            var registDay = data.data[i].registDay;
            var fullPath = childID+"/"+folderPath+"/"+photoName;
            var photoMemo = data.data[i].photoMemo;

            var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+fullPath).addClass("photo"+photoId);
            // var memos   = $("<p></p>").text(photoMemo);
            var imgsDiv = $("<div></div>").addClass("photoImgsDiv").append(imgs);
            $("#showAlbumDiv").append(imgsDiv);

            (function(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue){
              $(".photo"+photoId).unbind("click").bind("click",function(){
                detailPhotoView(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue);
              });
            }(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue));

          }
        },
        error:function(){
          alert('서버 오류');
        }
      });
    }

    // 오래된순 정렬
    function showAlbumOption2(childID, imageName, childName, optionValue){
      optionValue = 2;
      var asc = "asc";
      $.ajax({
        dataType: "jsonp",
        data:{
          childID: childID,
          asc : asc
        },
        // url:'https://chesyu.run.goorm.io/MyProject/ni/uaaa.php',
        url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
        success:function(data){
          var cnt = data.data.length;

          $("#showAlbumDiv").empty();



          for(var i = 0; i < cnt; i++){
            var photoId   = data.data[i].id;
            var folderPath = data.data[i].folderPath;
            var photoName = data.data[i].photoName;
            var registDay = data.data[i].registDay;
            var fullPath = childID+"/"+folderPath+"/"+photoName;
            var photoMemo = data.data[i].photoMemo;

            var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+fullPath).addClass("photo"+photoId);
            // var memos   = $("<p></p>").text(photoMemo);
            var imgsDiv = $("<div></div>").addClass("photoImgsDiv").append(imgs);
            $("#showAlbumDiv").append(imgsDiv);

            (function(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue){
              $(".photo"+photoId).unbind("click").bind("click",function(){
                detailPhotoView(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue);
              });
            }(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue));

          }

        },
        error:function(){
          alert('서버 오류');
        }
      });
    }
    // // 두 날짜 사이 정렬
    // function showAlbumOption2(childID){
    //   var asc = "asc";
    //   $.ajax({
    //     dataType: "jsonp",
    //     data:{
    //       childID: childID,
    //       asc : asc
    //     },
    //     // url:'https://chesyu.run.goorm.io/MyProject/ni/uaaa.php',
    //     url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
    //     success:function(data){
    //       var cnt = data.data.length;
    //
    //       $("#showAlbumDiv").empty();
    //
    //       for(var i = 0; i < cnt; i++){
    //         var photoId   = data.data[i].id;
    //         var folderPath = data.data[i].folderPath;
    //         var photoName = data.data[i].photoName;
    //
    //         var fullPath = childID+"/"+folderPath+"/"+photoName;
    //         var photoMemo = data.data[i].photoMemo;
    //
    //         var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+fullPath).addClass("photo"+photoId);
    //         // var memos   = $("<p></p>").text(photoMemo);
    //         var imgsDiv = $("<div></div>").addClass("photoImgsDiv").append(imgs);
    //         $("#showAlbumDiv").append(imgsDiv);
    //
    //         (function(photoId, folderPath, photoName, fullPath, photoMemo){
    //           $(".photo"+photoId).unbind("click").bind("click",function(){
    //             detailPhotoView(photoId, folderPath, photoName, fullPath, photoMemo);
    //           });
    //         }(photoId, folderPath, photoName, fullPath, photoMemo));
    //
    //       }
    //     },
    //     error:function(){
    //       alert('서버 오류');
    //     }
    //   });
    // }


    // 원아선택으로 돌아가기
    $("#showAlbumBackBtn").unbind("click").bind("click",function(){
      allHide();
      selectChildView("box6");
    });




    // 사진 클릭 시 상세보기
    function detailPhotoView(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue){
      allHide();
      $("#showDetailAlbum").show();
      $("#detailAlbumImageDiv").empty();
      $("#detailAlbumRegistDiv").empty();
      $("#detailAlbumMemoDiv").empty();

      var img  = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+fullPath);
      var memo = $("<p></p>").text(photoMemo).addClass('photoMemo');
      var registDay = $("<p></p>").text("사진 등록 날짜 : " + registDay).addClass('photoRegistDay');

      $("#detailAlbumImageDiv").append(img);
      $("#detailAlbumRegistDiv").append(registDay);
      $("#detailAlbumMemoDiv").append(memo);

      // 상세보기에서 뒤로가기 버튼 클릭
      $("#detailAlbumBackBtn").unbind("click").bind("click",function(){

        allHide();
        showAlbum(childID, optionValue);

        $("#showDetailAlbum").hide();
      });
    }

/*
    // 사진 클릭 시 상세보기
    function detailPhotoView(photoData){
      allHide();
      $("#showDetailAlbum").show();
      $("#detailAlbumImageDiv").empty();
      $("#detailAlbumRegistDiv").empty();
      $("#detailAlbumMemoDiv").empty();

      var img  = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+photoData['fullPath']);
      var memo = $("<p></p>").text(photoData['photoMemo']).addClass('photoMemo');
      var registDay = $("<p></p>").text("사진 등록 날짜 : " + photoData['registDay']).addClass('photoRegistDay');

      $("#detailAlbumImageDiv").append(img);
      $("#detailAlbumRegistDiv").append(registDay);
      $("#detailAlbumMemoDiv").append(memo);

      // 상세보기에서 뒤로가기 버튼 클릭
      $("#detailAlbumBackBtn").unbind("click").bind("click",function(){
        allHide();
        showAlbum(childID);
        if(optionValue == 1){
          alert('test');
        } else{
          alert('2222');
        }

        $("#showDetailAlbum").hide();
      });
    }*/

  }

  // function selectChildAlbum(){
  //   $.ajax({
  //       url:"https://chesyu.run.goorm.io/MyProject/ni/childImage.php",
  //       data:{},
  //       dataType:"jsonp",
  //       success:function(data){
  //           //성공
  //           if(data.result == "success"){
  //               var cnt = data.data.length;
  //
  //               $('#albumImageAndName').empty();
  //
  //               for(var i = 0; i < cnt ; i++){
  //                   var id        = data.data[i].id;
  //                   var imageName = data.data[i].imageName;
  //                   var childNum = data.data[i].childNum;
  //                   var childName = data.data[i].childName;
  //
  //                   var imgs = $("<img />").addClass("albumImageName"+id).attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
  //                   var names = $("<p></p>").addClass("albumChildName"+id).text(childName);
  //                   var namesDiv = $("<div></div>").addClass("albumChildNameDiv"+id).attr("POST", "albumChildName").append(names);
  //
  //                   // $("<div></div>").addClass("imageNameDiv"+id).append(imgs).appendTo("#imageAndName");
  //                   // $("<div></div>").addClass("childNameDiv"+id).append(names).appendTo("#imageAndName");
  //
  //                   // $("<div></div>").addClass("imageNameDiv"+id).append(imgs).(append("<div></div>").append(names)).appendTo("#imageAndName");
  //
  //                   // $("<div></div>").addClass("imageNameDiv"+id).append(imgs).append("<div></div>").addClass("childNameDiv"+id).appendTo("#imageAndName");
  //                   // $("childNameDiv"+id).append(childName);
  //
  //                   // $("<div></div>").addClass("imageNameDiv"+id).append(imgs).appendTo("#imageAndName");
  //                   // $("<div></div>").addClass("childNameDiv"+id).append(childName).appendTo("imageNameDiv"+id);
  //                   $("<div></div>").addClass("albumImageNameDiv"+id).append(imgs).append(namesDiv).appendTo("#albumImageAndName");
  //               }
  //
  //
  //               if(cnt == 0)
  //                   $("<p></p>").text("업로드 된 이미지가 없습니다.").appendTo("#albumImageAndName");
  //           }
  //           //오류
  //           else {
  //               window.alert("오류가 발생하였습니다.");
  //           }
  //       }, error: function(){
  //           window.alert("서버 접속 오류가 발생하였습니다.");
  //       }
  //   });
  // }

  // 공지사항 클릭

  // 출석체크 클릭
  $("#attendanceCheck").unbind("click").bind("click", function(){
    allHide();
    $("#tAttendanceChildListDiv").empty();
    $("#tAttendanceCheck").show();
    var childIdArray = new Array();
    var attendanceValue = 1;

    // 원아 이미지 및 이름 출력
    $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/childImage.php",
        data:{},
        dataType:"jsonp",
        success:function(data){
            //성공
            if(data.result == "success"){
                var cnt = data.data.length;
                // testClick(data);

                for(var i = 0; i < cnt ; i++){
                    var childID        = data.data[i].id;
                    childIdArray[i]    = data.data[i].id;
                    var imageName = data.data[i].imageName;
                    var childName = data.data[i].childName;
                    var attendanceInfo = new Array();
                    var firstChildID = data.data[0].id;
                    var lastChildID = firstChildID+cnt;

                    var imgs = $("<img />").addClass("atd_childImage"+childID).attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                    var names = $("<p></p>").addClass("atd_childName"+childID).text(childName);
                    var namesDiv = $("<div></div>").addClass("atd_childNameDiv"+childID).append(names);


                    // 원아 이미지 및 이름
                    $("<div></div>").addClass('atd_ImgAndName'+childID).appendTo("#tAttendanceChildListDiv");
                    $("<div></div>").addClass("atd_imageDiv").append(imgs).appendTo(".atd_ImgAndName"+childID);
                    $("<div></div>").addClass("atd_NameDiv").append(namesDiv).appendTo(".atd_ImgAndName"+childID);
/*
                    // // 출석버튼 및 글씨
                    // $("<div></div>").addClass("tAttendance tAttendance"+childID).appendTo(".atd_ImgAndName"+childID);
                    // $("<p></p>").text('출석').appendTo(".tAttendance"+childID);
                    //
                    // // 조퇴버튼 및 글씨
                    // $("<div></div>").addClass("tEarlyLeave tEarlyLeave"+childID).appendTo(".atd_ImgAndName"+childID);
                    // $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+childID);
                    //
                    // // 결석버튼 및 글씨
                    // $("<div></div>").addClass("tAbsence tAbsence"+childID).appendTo(".atd_ImgAndName"+childID);
                    // $("<p></p>").text('결석').appendTo(".tAbsence"+childID);


                    // (function(childID){

                    //   // 출석버튼 클릭
                    //   $(".tAttendance"+childID).unbind("click").bind("click", function(){
                    //     // attendanceInfo[i] = "출석";
                    //     // alert("선택한 원아는 " + childID + "이며, " + attendanceInfo[i]);
                    //     $(".tAttendance"+childID).empty();
                    //     $("<p></p>").text('출석').appendTo(".tAttendance"+childID);
                    //     $(".tAttendance"+childID).css({
                    //       "border" : "2px solid white",
                    //       "background-color":"#00B1F2"
                    //     });
                    //     // var on = $("<input></input>").attr("type", "hidden").addClass("tAttendanceOn"+childID);
                    //     var on = $("<input></input>").attr("type", "hidden").addClass("on");
                    //     $(".tAttendance"+childID).append(on);
                    //
                    //
                    //
                    //     $(".tEarlyLeave"+childID).empty();
                    //     $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+childID);
                    //     $(".tEarlyLeave"+childID).css({
                    //       "border" : "2px solid gold",
                    //       "background-color":"white"
                    //     });
                    //
                    //
                    //     $(".tAbsence"+childID).empty();
                    //     $("<p></p>").text('결석').appendTo(".tAbsence"+childID);
                    //     $(".tAbsence"+childID).css({
                    //       "border" : "2px solid #FF48FF",
                    //       "background-color":"white"
                    //     });
                    //   });
                    //
                    //   // 조퇴버튼 클릭
                    //   $(".tEarlyLeave"+childID).unbind("click").bind("click", function(){
                    //     // attendanceInfo[i] = "조퇴";
                    //     // alert("선택한 원아는 " + childID + "이며, " + attendanceInfo[i]);
                    //     $(".tAttendance"+childID).empty();
                    //     $("<p></p>").text('출석').appendTo(".tAttendance"+childID);
                    //     $(".tAttendance"+childID).css({
                    //       "border" : "2px solid #00B1F2",
                    //       "background-color":"white"
                    //     });
                    //
                    //     $(".tEarlyLeave"+childID).empty();
                    //     $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+childID);
                    //     $(".tEarlyLeave"+childID).css({
                    //       "border" : "2px solid white",
                    //       "background-color":"gold"
                    //     });
                    //     // var on = $("<input></input>").attr("type", "hidden").addClass("tEarlyLeaveOn"+childID);
                    //     var on = $("<input></input>").attr("type", "hidden").addClass("on");
                    //     $(".tEarlyLeave"+childID).append(on);
                    //
                    //
                    //     $(".tAbsence"+childID).empty();
                    //     $("<p></p>").text('결석').appendTo(".tAbsence"+childID);
                    //     $(".tAbsence"+childID).css({
                    //       "border" : "2px solid #FF48FF",
                    //       "background-color":"white"
                    //     });
                    //
                    //   });
                    //
                    //     // 결석버튼 클릭
                    //   $(".tAbsence"+childID).unbind("click").bind("click", function(){
                    //     // attendanceInfo[i] = "결석";
                    //     // alert("선택한 원아는 " + childID + "이며, " + attendanceInfo[i]);
                    //     $(".tAttendance"+childID).empty();
                    //     $("<p></p>").text('출석').appendTo(".tAttendance"+childID);
                    //     $(".tAttendance"+childID).css({
                    //       "border" : "2px solid #00B1F2",
                    //       "background-color":"white"
                    //     });
                    //
                    //
                    //     $(".tEarlyLeave"+childID).empty();
                    //     $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+childID);
                    //     $(".tEarlyLeave"+childID).css({
                    //       "border" : "2px solid gold",
                    //       "background-color":"white"
                    //     });
                    //
                    //
                    //     $(".tAbsence"+childID).empty();
                    //     $("<p></p>").text('결석').appendTo(".tAbsence"+childID);
                    //     $(".tAbsence"+childID).css({
                    //       "border" : "2px solid white",
                    //       "background-color":"#FF48FF"
                    //     });
                    //     // var on = $("<input></input>").attr("type", "hidden").addClass("tAbsenceOn"+childID);
                    //     var on = $("<input></input>").attr("type", "hidden").addClass("on");
                    //     $(".tAbsence"+childID).append(on);
                    //   });
                    // // $(".tAttendance"+childID).unbind("click").bind("click",function(){
                    // //   alert("클릭한 원아는 : " + childID + " 이며, 출석버튼이다.");
                    // // });
                    //
                    // // 모두출석 버튼클릭
                    // $("#allCheckBtn").unbind("click").bind("click", function(){
                    //       $(".tAttendance").css({
                    //         "border" : "2px solid white",
                    //         "background-color":"#00B1F2"
                    //       });
                    //       $(".tEarlyLeave").css({
                    //         "border" : "2px solid gold",
                    //         "background-color":"white"
                    //       });
                    //       $(".tAbsence").css({
                    //         "border" : "2px solid #FF48FF",
                    //         "background-color":"white"
                    //       });
                    //
                    //       for(var i = firstChildID; i < lastChildID; i++){
                    //         $(".tAttendance"+i).empty();
                    //         $(".tEarlyLeave"+i).empty();
                    //         $(".tAbsence"+i).empty();
                    //
                    //         $("<p></p>").text('출석').appendTo(".tAttendance"+i);
                    //         $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+i);
                    //         $("<p></p>").text('결석').appendTo(".tAbsence"+i);
                    //
                    //         // var on = $("<input></input>").attr("type", "hidden").addClass("tAttendanceOn"+i);
                    //         var on = $("<input></input>").attr("type", "hidden").addClass("on");
                    //         $(".tAttendance"+i).append(on);
                    //       }
                    //   });

                    // // 완료 버튼클릭
                    // $("#tAttendanceSaveBtn").unbind("click").bind("click", function(){
                    //   var childNumArray = new Array();  // [원아ID, 작성자, 출석값]
                    //   var attendanceData = new Array();
                    //   var index = 0;
                    //
                    //   for(var i = firstChildID; i < lastChildID; i++){
                    //     if($(".tAttendance"+i).children().hasClass("on") === true){
                    //       childNumArray[index] = i;
                    //       attendanceData[index] = 1;
                    //       // alert(i+"번째 아이는 " + '출석 ' + attendanceData[index]);
                    //       index++;
                    //     }
                    //
                    //     if($(".tEarlyLeave"+i).children().hasClass("on") === true){
                    //       childNumArray[index] = i;
                    //       attendanceData[index] = 2;
                    //       // alert(i+"번째 아이는 " + '조퇴 ' + attendanceData[index]);
                    //       index++;
                    //     }
                    //
                    //     if($(".tAbsence"+i).children().hasClass("on") === true){
                    //       childNumArray[index] = i;
                    //       attendanceData[index] = 3;
                    //       // alert(i+"번째 아이는 " + '결석 ' + attendanceData[index]);
                    //       index++;
                    //     }
                    //   }
                    //
                    //   $.ajax({
                    //     url:"https://chesyu.run.goorm.io/MyProject/ni/setAttendanceCheckT.php",
                    //     data:{
                    //       childNumArray: childNumArray,
                    //       uploader: 1,
                    //       attendanceData: attendanceData
                    //     },
                    //     dataType:"jsonp",
                    //     success:function(data){
                    //       alert('s');
                    //     },
                    //     error:function(){
                    //       alert('e');
                    //     }
                    //   });
                    // });
          }(childID));
*/
                }
                // 출석버튼들 출력

                attendanceBtns(childIdArray, cnt);
                if(cnt == 0)
                    $("<p></p>").text("업로드 된 이미지가 없습니다.").appendTo("#selectImgAndName1");
            }
            //오류
            else {
                window.alert("오류가 발생하였습니다.");
            }
        }, error: function(){
            window.alert("서버 접속 오류가 발생하였습니다.");
        }

    });
    ////////////////////// 원아 이미지 및 이름 출력 ajax끝부분


      // 출석버튼 관련  /////////////
      function attendanceBtns(childIdArray, cnt){
        $.ajax({
          url:"https://chesyu.run.goorm.io/MyProject/ni/getAttendanceCheckT.php",
          data:{
            childIdArray: childIdArray,
            cnt : cnt
          },
          dataType:"jsonp",
          success:function(data){
            for(var i = 0; i < cnt ; i++){

              childID = childIdArray[i];
              var firstChildID = childIdArray[0];
              var lastChildID = firstChildID+cnt;

              (function(childID){

                  // 출석버튼 및 글씨
                  $("<div></div>").addClass("tAttendance tAttendance"+childID).appendTo(".atd_ImgAndName"+childID);
                  $(".tAttendance"+childID).empty();
                  $("<p></p>").text('출석').appendTo(".tAttendance"+childID);
                  if(data.data[i]['attendanceValue'] == 1){
                    $(".tAttendance"+childID).css({
                      "border" : "2px solid white",
                      "background-color":"#00B1F2"
                    });
                    // var on = $("<input></input>").attr("type", "hidden").addClass("tAttendanceOn"+childID);


                    // var on = $("<input></input>").attr("type", "hidden").addClass("on");
                    // $(".tAttendance"+childID).append(on);
                    //  학부모가 업로드 한 것과 구별하기
                    if(data.data[i]['uploaderPosition'] == 0){
                      var on2 = $("<input></input>").attr("type", "hidden").addClass("on2");
                      $(".tAttendance"+childID).append(on2);
                    } else{
                      var on = $("<input></input>").attr("type", "hidden").addClass("on");
                      $(".tAttendance"+childID).append(on);
                    }
                  }

                  // 조퇴버튼 및 글씨
                  $("<div></div>").addClass("tEarlyLeave tEarlyLeave"+childID).appendTo(".atd_ImgAndName"+childID);
                  $(".tEarlyLeave"+childID).empty();
                  $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+childID);
                  if(data.data[i]['attendanceValue'] == 2){
                    $(".tEarlyLeave"+childID).css({
                      "border" : "2px solid white",
                      "background-color":"gold"
                    });
                    // var on = $("<input></input>").attr("type", "hidden").addClass("tEarlyLeaveOn"+childID);

                          // 아래 2줄 기존  on  추가하기
                    // var on = $("<input></input>").attr("type", "hidden").addClass("on");
                    // $(".tEarlyLeave"+childID).append(on);
                    if(data.data[i]['uploaderPosition'] == 0){
                      var on2 = $("<input></input>").attr("type", "hidden").addClass("on2");
                      $(".tEarlyLeave"+childID).append(on2);
                    } else{
                      var on = $("<input></input>").attr("type", "hidden").addClass("on");
                      $(".tEarlyLeave"+childID).append(on);
                    }
                  }


                  // 결석버튼 및 글씨
                  $("<div></div>").addClass("tAbsence tAbsence"+childID).appendTo(".atd_ImgAndName"+childID);
                  $(".tAbsence"+childID).empty();
                  $("<p></p>").text('결석').appendTo(".tAbsence"+childID);
                  if(data.data[i]['attendanceValue'] == 3){
                    $(".tAbsence"+childID).css({
                      "border" : "2px solid white",
                      "background-color":"#FF48FF"
                    });
                    // var on = $("<input></input>").attr("type", "hidden").addClass("tAbsenceOn"+childID);

                    // var on = $("<input></input>").attr("type", "hidden").addClass("on");
                    // $(".tAbsence"+childID).append(on);
                    if(data.data[i]['uploaderPosition'] == 0){
                      var on2 = $("<input></input>").attr("type", "hidden").addClass("on2");
                      $(".tAbsence"+childID).append(on2);
                    } else{
                      var on = $("<input></input>").attr("type", "hidden").addClass("on");
                      $(".tAbsence"+childID).append(on);
                    }
                  }



                  // 출석버튼 클릭
                  $(".tAttendance"+childID).unbind("click").bind("click", function(){
                    // attendanceInfo[i] = "출석";
                    // alert("선택한 원아는 " + childID + "이며, " + attendanceInfo[i]);
                    $(".tAttendance"+childID).empty();
                    $("<p></p>").text('출석').appendTo(".tAttendance"+childID);
                    $(".tAttendance"+childID).css({
                      "border" : "2px solid white",
                      "background-color":"#00B1F2"
                    });
                    // var on = $("<input></input>").attr("type", "hidden").addClass("tAttendanceOn"+childID);
                    var on = $("<input></input>").attr("type", "hidden").addClass("on");
                    $(".tAttendance"+childID).append(on);



                    $(".tEarlyLeave"+childID).empty();
                    $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+childID);
                    $(".tEarlyLeave"+childID).css({
                      "border" : "2px solid gold",
                      "background-color":"white"
                    });


                    $(".tAbsence"+childID).empty();
                    $("<p></p>").text('결석').appendTo(".tAbsence"+childID);
                    $(".tAbsence"+childID).css({
                      "border" : "2px solid #FF48FF",
                      "background-color":"white"
                    });
                  });

                  // 조퇴버튼 클릭
                  $(".tEarlyLeave"+childID).unbind("click").bind("click", function(){
                    // attendanceInfo[i] = "조퇴";
                    // alert("선택한 원아는 " + childID + "이며, " + attendanceInfo[i]);
                    $(".tAttendance"+childID).empty();
                    $("<p></p>").text('출석').appendTo(".tAttendance"+childID);
                    $(".tAttendance"+childID).css({
                      "border" : "2px solid #00B1F2",
                      "background-color":"white"
                    });

                    $(".tEarlyLeave"+childID).empty();
                    $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+childID);
                    $(".tEarlyLeave"+childID).css({
                      "border" : "2px solid white",
                      "background-color":"gold"
                    });
                    // var on = $("<input></input>").attr("type", "hidden").addClass("tEarlyLeaveOn"+childID);
                    var on = $("<input></input>").attr("type", "hidden").addClass("on");
                    $(".tEarlyLeave"+childID).append(on);


                    $(".tAbsence"+childID).empty();
                    $("<p></p>").text('결석').appendTo(".tAbsence"+childID);
                    $(".tAbsence"+childID).css({
                      "border" : "2px solid #FF48FF",
                      "background-color":"white"
                    });

                  });

                    // 결석버튼 클릭
                  $(".tAbsence"+childID).unbind("click").bind("click", function(){
                    // attendanceInfo[i] = "결석";
                    // alert("선택한 원아는 " + childID + "이며, " + attendanceInfo[i]);
                    $(".tAttendance"+childID).empty();
                    $("<p></p>").text('출석').appendTo(".tAttendance"+childID);
                    $(".tAttendance"+childID).css({
                      "border" : "2px solid #00B1F2",
                      "background-color":"white"
                    });


                    $(".tEarlyLeave"+childID).empty();
                    $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+childID);
                    $(".tEarlyLeave"+childID).css({
                      "border" : "2px solid gold",
                      "background-color":"white"
                    });


                    $(".tAbsence"+childID).empty();
                    $("<p></p>").text('결석').appendTo(".tAbsence"+childID);
                    $(".tAbsence"+childID).css({
                      "border" : "2px solid white",
                      "background-color":"#FF48FF"
                    });
                    // var on = $("<input></input>").attr("type", "hidden").addClass("tAbsenceOn"+childID);
                    var on = $("<input></input>").attr("type", "hidden").addClass("on");
                    $(".tAbsence"+childID).append(on);
                  });
                // $(".tAttendance"+childID).unbind("click").bind("click",function(){
                //   alert("클릭한 원아는 : " + childID + " 이며, 출석버튼이다.");
                // });

                // 모두출석 버튼클릭
                $("#allCheckBtn").unbind("click").bind("click", function(){
                  for(var i = firstChildID; i < lastChildID; i++){

                    // 학부모가 등록한 출석정보라면 수정하지 않음 (1회만 수정을 피함)
                    if($(".tAttendance"+i).children().hasClass("on2") === true
                  || $(".tEarlyLeave"+i).children().hasClass("on2") === true
                  || $(".tAbsence"+i).children().hasClass("on2") === true){
                    // $(".tAttendance"+i).empty();
                    // $(".tEarlyLeave"+i).empty();
                    // $(".tAbsence"+i).empty();
                    // $("<p></p>").text('출석').appendTo(".tAttendance"+i);
                    // $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+i);
                    // $("<p></p>").text('결석').appendTo(".tAbsence"+i);
                  }
                    else{
                        $(".tAttendance"+i).css({
                          "border" : "2px solid white",
                          "background-color":"#00B1F2"
                        });

                        $(".tAttendance"+i).empty();
                        $("<p></p>").text('출석').appendTo(".tAttendance"+i);

                        $(".tEarlyLeave"+i).css({
                          "border" : "2px solid gold",
                          "background-color":"white"
                        });

                        $(".tEarlyLeave"+i).empty();
                        $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+i);

                        $(".tAbsence"+i).css({
                          "border" : "2px solid #FF48FF",
                          "background-color":"white"
                        });

                        $(".tAbsence"+i).empty();
                        $("<p></p>").text('결석').appendTo(".tAbsence"+i);
                    }

                  /*
                  // if($(".tAttendance"+i).children().hasClass("on2") === true){}
                  // else{
                  //     $(".tAttendance"+i).css({
                  //       "border" : "2px solid white",
                  //       "background-color":"#00B1F2"
                  //     });
                  //
                  //     $(".tAttendance"+i).empty();
                  //     $("<p></p>").text('출석').appendTo(".tAttendance"+i);
                  // }
                  //
                  // if($(".tEarlyLeave"+i).children().hasClass("on2") === true){}
                  // else{
                  //     $(".tEarlyLeave"+i).css({
                  //       "border" : "2px solid gold",
                  //       "background-color":"white"
                  //     });
                  //
                  //     $(".tEarlyLeave"+i).empty();
                  //     $("<p></p>").text('조퇴').appendTo(".tEarlyLeave"+i);
                  // }
                  //       // 학부모가 작성한 것이 아니라면 모두출석으로 출석
                  // if($(".tAbsence"+i).children().hasClass("on2") === true){}
                  // else{
                  //   $(".tAbsence"+i).css({
                  //     "border" : "2px solid #FF48FF",
                  //     "background-color":"white"
                  //   });
                  //
                  //   $(".tAbsence"+i).empty();
                  //   $("<p></p>").text('결석').appendTo(".tAbsence"+i);
                  // }
                  */

                        // var on = $("<input></input>").attr("type", "hidden").addClass("tAttendanceOn"+i);
                        var on = $("<input></input>").attr("type", "hidden").addClass("on");
                        $(".tAttendance"+i).append(on);
                    }
              });




                  // 완료 버튼클릭
                  $("#tAttendanceSaveBtn").unbind("click").bind("click", function(){
                    var childNumArray = new Array();  // [원아ID, 작성자, 출석값]
                    var attendanceData = new Array();
                    var index = 0;

                    for(var i = firstChildID; i < lastChildID; i++){
                      if($(".tAttendance"+i).children().hasClass("on") === true){
                        childNumArray[index] = i;
                        attendanceData[index] = 1;
                        // alert(i+"번째 아이는 " + '출석 ' + attendanceData[index]);
                        index++;
                      }

                      if($(".tEarlyLeave"+i).children().hasClass("on") === true){
                        childNumArray[index] = i;
                        attendanceData[index] = 2;
                        // alert(i+"번째 아이는 " + '조퇴 ' + attendanceData[index]);
                        index++;
                      }

                      if($(".tAbsence"+i).children().hasClass("on") === true){
                        childNumArray[index] = i;
                        attendanceData[index] = 3;
                        // alert(i+"번째 아이는 " + '결석 ' + attendanceData[index]);
                        index++;
                      }
                    }

                    $.ajax({
                      url:"https://chesyu.run.goorm.io/MyProject/ni/setAttendanceCheckT.php",
                      data:{
                        childNumArray: childNumArray,
                        uploader: 1,
                        attendanceData: attendanceData
                      },
                      dataType:"jsonp",
                      success:function(data){
                        alert('출석정보를 등록했습니다.');
                        allHide();

                        $('#tLoginTop').show();
                        $('#sideMenuListDiv').hide();
                        $('#teacherMain').show();
                      },
                      error:function(){
                        alert('e');
                      }
                    });
                  });


              }(childID));
            }
          },
          error:function(){
            alert('출석 정보를 가져올 수 없습니다.');
          }
        });



      }
    /////////////////////////////

    // // 모두출석 버튼클릭
    // $("#allCheckBtn").unbind("click").bind("click", function(){
    //   $(".tAttendance").css({
    //     "border" : "2px solid white",
    //     "background-color":"#00B1F2"
    //   });
    //   $(".tEarlyLeave").css({
    //     "border" : "2px solid gold",
    //     "background-color":"white"
    //   });
    //   $(".tAbsence").css({
    //     "border" : "2px solid #FF48FF",
    //     "background-color":"white"
    //   });
    // });

    // // 완료 버튼클릭
    // $("#tAttendanceSaveBtn").unbind("click").bind("click", function(){
    //   alert('완료 클릭');
    // });

  });

  // 발달체크 항목편집 클릭

  ///////////////////////////////////   ↑ 교사버전 //////////////////////////////////////////////////////
  ///////////////////////      ---------- 구분선 ----------      ////////////////////////////////////////
  //////////////////////////////////   ↓ 학부모버전//////////////////////////////////////////////////////

  // 학부모 로그아웃
  $("#plogoutBtn").unbind("click").bind("click", function(){
    allHide();
    $("#tLoginTop").hide();
    $('#pLoginTop').hide();

    $('#notLoginTop').show();
    $('#notLoginView').show();
    $("#notLogin").show();
  });

  // 상단 클릭 (메인으로 돌아가기)
  $('#ptop').find('#pimgLogo').unbind("click").bind("click", function(){
    allHide();

    $('#pLoginTop').show();
    $('#psideMenuListDiv').hide();
    $('#parentMain').show();
  })
  $('#ptop').find('#ptextLogo').unbind("click").bind("click", function(){
    allHide();

    $('#pLoginTop').show();
    $('psideMenuListDiv').hide();
    $('#parentMain').show();
  })

  // 원아 선택화면
  function pselectChildView(pBox){
    allHide();
    $('#pLoginTop').show();
    $('#childSelectBox2').show();
    $('#childSelect2').empty();

    $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/zen_childImage.php",
        data:{
          // user_num: user_num,
          // user_name: user_name
        },
        dataType:"jsonp",
        success:function(data){
            //성공
            if(data.result == "success"){
                var cnt = data.data.length;

                for(var i = 0; i < cnt ; i++){
                    childID        = data.data[i].id;
                    imageName = data.data[i].imageName;
                    childName = data.data[i].childName;
                    // var imageComment = data.data[i].imageComment;

                    var imgs = $("<img />").addClass("imageName"+childID).attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                    var names = $("<p></p>").addClass("childName"+childID).text(childName);
                    var namesDiv = $("<div></div>").addClass("childNameDiv"+childID).append(names);

                    $("<div></div>").addClass('selectImgAndName'+childID).appendTo("#childSelect2");
                    $("<div></div>").addClass("imageDiv").append(imgs).appendTo(".selectImgAndName"+childID);
                    $("<div></div>").addClass("NameDiv").append(namesDiv).appendTo(".selectImgAndName"+childID);

                    (function(childID){

                    $(".selectImgAndName"+childID).unbind("click").bind("click",function(){

                          switch (pBox) {
                            // 알림장 확인
                            case "pbox1":
                              pICheck(childID, imageName, childName);
                              break;

                            // 출석 확인
                            case "pbox2":
                              pAttendanceCheck(childID, imageName, childName);
                              break;

                            // 앨범 확인
                            case "pbox3":
                            pShowAlbum(childID, 1);
                              // tICheck(childID);
                              break;

                            // 자녀정보 확인
                            case "pbox4":
                            alert('pbox4');
                              break;

                            default:
                              alert("default");
                          }


                    });

                  }(childID));
                }

                if(cnt == 0)
                    $("<p></p>").text("업로드 된 이미지가 없습니다.").appendTo("#selectImgAndName1");
            }
            //오류
            else {
                window.alert("오류가 발생하였습니다.");
            }
        }, error: function(){
            window.alert("서버 접속 오류가 발생하였습니다.");
        }
    });
  }

  // 알림장 확인 클릭
  $('#pbox1').unbind("click").bind("click", function(){
    var whatIsBox = "pbox1";
    pselectChildView(whatIsBox);
  });

  // 알림장 확인
  function pICheck(childID, imageName, childName){
        allHide();
        $('#pICheck').show();
        $('#pICheckMain').show();
        $('#pmodeBtns').show();

        var newDate = new Date();
        var dateString = newDate.getFullYear() + " - " + (newDate.getMonth() + 1) + " - " + newDate.getDate();

        var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();;


        // 달력
        $(".dateValueP").text(dateString);
        $(".datepicker").datepicker({
                buttonImage: './img/calendar.png',
                buttonImageOnly: true,
                 dateFormat: 'yy - mm - dd',
                // changeMonth: true,
                // changeYear: true,

                // nextText: '다음 달', // next 아이콘의 툴팁.
                // prevText: '이전 달',
                showOn: 'both',
                showButtonPanel: true,  // 달력아래 버튼 패널
                // currentText : 'Today',
                closeText:'Close',       // 버튼패널 중 닫기 텍스트 정의
                duration: "slow" ,      // 속도

                // 달력 OPEN시 위치
                beforeShow: function (input, inst) {
                    setTimeout(function () {
                        inst.dpDiv.css({
                            top: 65,
                            left: 58
                            // top: 125,
                            // left: 2,
                            // width:340,
                        });
                    }, 0);
                },

                // 달력에서 선택한 값을 변수에 저장
                onSelect: function(value) {
                  var explodeValue = value.split(" - ");
                  dateValue = explodeValue[0]+"-"+explodeValue[1]+"-"+explodeValue[2];

                  $(".dateValueP").empty();
                  $(".dateValueP").text(value);

                  var valueP = $(".dateValueP").text();
                  // var explodeValue = valueP.split(" - ");
                  // dateValue = explodeValue[0]+"-"+explodeValue[1]+"-"+explodeValue[2];
                  // alert("p태그 날짜는 : " + valueP);
                  // alert("dateValue는 : " + dateValue);

                  if($("#pmodeContents").children().hasClass("pNotification_div") === true){
                    // alert('알림내용');
                    notification(dateValue);
                  }

                  if($("#pmodeContents").children().hasClass("developGraph_div2") === true){
                    // alert('발달사항');
                    developGraph(dateValue);
                  }

                  if($("#pmodeContents").children().hasClass("significant_div") === true){
                    // alert('특이사항');
                    significant(dateValue);
                  }
                }
        });


        notification();
        $("#pICheck_Notification_btn2").css({
          "background-color":"#FF5E00"
        });
        $("#pICheck_DevelopGraph_btn2").css({
          "background-color":"#FFCA6C"
        });
        $("#pICheck_Significant_btn2").css({
          "background-color":"#FFCA6C"
        });


        var cnt;
        // 선택한 원아 이름, 이미지 출력
      // $.ajax({
      //     url:"https://chesyu.run.goorm.io/MyProject/ni/selectedChildImage.php",
      //     data:{
      //       childID: childID
      //     },
      //     dataType:"jsonp",
      //     success:function(data){
      //
      //         //성공
      //         if(data.result == "success"){
                      $('#pICheck_childBox_div').empty();

                      // var id        = data.data.id;
                      // var imageName = data.data.imageName;
                      // var childNum = data.data.childNum;
                      // var childName = data.data.childName;

                      var imgs = $("<img />").attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                      var names = $("<p></p>").text(childName);

                      $("<div></div>").addClass("pICheck_childBox").appendTo("#pICheck_childBox_div");
                      var imgsDiv = $("<div></div>").addClass("pICheck_imgsDiv").appendTo(".pICheck_childBox");
                      var namesDiv = $("<div></div>").addClass("pICheck_namesDiv").appendTo(".pICheck_childBox");
                      imgsDiv.append(imgs);
                      namesDiv.append(names);
      //         }
      //         //오류
      //         else {
      //             window.alert("오류가 발생하였습니다.");
      //         }
      //     }, error: function(){
      //         window.alert("서버 접속 오류가 발생하였습니다.");
      //     }
      // });


        // 모드 버튼들
        $("#pICheck_Notification_btn").unbind("click").bind("click", function(){
          notification(dateValue);
          $("#pICheck_Notification_btn2").css({
            "background-color":"#FF5E00"
          });
          $("#pICheck_DevelopGraph_btn2").css({
            "background-color":"#FFCA6C"
          });
          $("#pICheck_Significant_btn2").css({
            "background-color":"#FFCA6C"
          });

        });

        $("#pICheck_DevelopGraph_btn").unbind("click").bind("click", function(){
          developGraph(dateValue);
          $("#pICheck_Notification_btn2").css({
            "background-color":"#FFCA6C"
          });
          $("#pICheck_DevelopGraph_btn2").css({
            "background-color":"#FF5E00"
          });
          $("#pICheck_Significant_btn2").css({
            "background-color":"#FFCA6C"
          });


        });

        $("#pICheck_Significant_btn").unbind("click").bind("click", function(){
          significant(dateValue);
          $("#pICheck_Notification_btn2").css({
            "background-color":"#FFCA6C"
          });
          $("#pICheck_DevelopGraph_btn2").css({
            "background-color":"#FFCA6C"
          });
          $("#pICheck_Significant_btn2").css({
            "background-color":"#FF5E00"
          });

        });


        //  알림내용 모드 컨텐츠 보여주기
        function notification(){
          $("#pmodeContents").empty();
          $("#ppnotification_commentsDiv").empty();


          // 알림내용 div
          $("<div></div>").addClass("pNotification_div").appendTo("#pmodeContents");

          // 알림내용의 댓글 div
          $("<div></div>").addClass("pnotification_commentsDiv").appendTo("#pmodeContents");
          $("<div></div>").addClass("pViewUploadedComment_div").appendTo(".pnotification_commentsDiv");
          $("<div></div>").addClass("uploadComment_div").appendTo(".pnotification_commentsDiv");
          $("<p></p>").text("작성").appendTo(".uploadComment_div");

          // 댓글보기 함수
          // showComments(childID, dateValue);


          // 알림내용의 댓글작성 버튼 클릭
          $('.uploadComment_div').unbind("click").bind("click", function(){
            var comment = prompt('댓글을 입력하세요.');
            $.ajax({
              dataType:'jsonp',
              data: {
                childID: childID,
                user_num: user_num,
                textMemo: comment,
                memoCategory : 2, // 1 -> 알림장내용 / 2 -> 알림장의 댓글  / 3 -> 특이사항  / 4 -> 단순메모
                memoType : 1  // 1 -> 글씨  /  2 -> 그림
              },
                url:'http://project-okyo.c9users.io/mobile/setMemo.php',
               success:function(result){
                 showComments(childID, dateValue);
               }, error:function(){
                //  alert('실패');
               }

            });
          });
        }


        //  발달그래프 모드 컨텐츠 보여주기
        function developGraph(dateValue){
          $("#pmodeContents").empty();
          $("<div></div>").addClass("developGraph_div1").appendTo("#pmodeContents");
          $("<div></div>").addClass("developGraph_div2").appendTo("#pmodeContents");
          $("<div></div>").addClass("developGraph_div2_Name").appendTo(".developGraph_div2");
          $("<p></p>").text('발달 행동 체크 그래프').appendTo(".developGraph_div2_Name");


          $.ajax({
            dataType:"jsonp",
            data:{
              childID: childID,
              dateValue: dateValue

            },
            url:"https://chesyu.run.goorm.io/MyProject/ni/getDevelopValues.php",
            success:function(data){

              // 쿼리결과 행 갯수
              var cnt = data.data.length;

              $(".valueGraphDiv").empty();

              // 그래프 담을 div
              var valueGraphDiv = $("<div></div>").addClass("valueGraphDiv").appendTo(".developGraph_div2");

              if(cnt > 0){
                for(var i = 0; i < cnt; i++){
                  // 그래프막대
                  var developValueDiv = $("<div></div>").addClass("developValueDiv").progressbar({ value: data.data[i].developCheckValue * 20}).appendTo(".valueGraphDiv");
                  // // 그래프 라벨
                  var valueLavel = $("<div></div>").addClass("progress-label").text(data.data[i].developCheckName).appendTo(developValueDiv);
                }
              } else{
                var noCheckMessage = $("<div></div>").text('오늘 체크 안했음');
                $(".valueGraphDiv").append(noCheckMessage);
              }


            }, error:function(){
              alert("error 발생");
            }

          });


        }

        // 특이사항 모드 컨텐츠 보여주기
        function significant(dateValue){
          $("#pmodeContents").empty();
          $("<div></div>").addClass("significant_div").appendTo("#pmodeContents");

        }

        // 댓글 보여주기 (학부모)
        // function showComments(childID, dateValue){
        //   alert("아톰 날짜값"+dateValue);
        //
        //   $.ajax({
        //     url:'http://project-okyo.c9users.io/mobile/getMemo.php',
        //     data:{
        //       childID:childID,
        //       user_num: user_num,
        //       dateValue: dateValue,
        //       memoCategory : 2, // 1 -> 알림장내용 / 2 -> 알림장의 댓글  / 3 -> 특이사항  / 4 -> 단순메모
        //       memoType : 1  // 1 -> 글씨  /  2 -> 그림
        //     },
        //     dataType:"jsonp",
        //       success:function(data){
        //         var cnt = data.length;
        //
        //         alert(cnt);
        //         // for(var i = 0; i < cnt; i++){
        //         //
        //         //   // 댓글 입력한 것이 교사라면.
        //         //   if(data.data[i].teacherTrue == 1){
        //         //
        //         //     var teacherCommentBox = $("<div></div>").addClass("teacherCommentBox");
        //         //
        //         //     $("<div></div>").addClass("teacherTrue1").text("교사").appendTo(teacherCommentBox);
        //         //     $("<p></p>").text(data.data[i].comment).appendTo(teacherCommentBox);
        //         //     teacherCommentBox.appendTo(".pViewUploadedComment_div");
        //         //   }
        //         //   // 댓글 입력한 것이 교사가 아니라면.
        //         //   else {
        //         //     var parentCommentBox = $("<div></div>").addClass("parentCommentBox");
        //         //
        //         //     $("<div></div>").addClass("teacherTrue0").text("학부모").appendTo(parentCommentBox);
        //         //     $("<p></p>").text(data.data[i].comment).appendTo(parentCommentBox);
        //         //     parentCommentBox.appendTo(".pViewUploadedComment_div");
        //         //   }
        //         //
        //         //   // $("<p></p>").text(data.data[i].comment).appendTo(".pViewUploadedComment_div");
        //         // }
        //         //
        //         // $(".pViewUploadedComment_div").scrollTop($(document).height());
        //
        //
        //     },error:function(){
        //       alert('error');
        //     }
        //   });
        // }


        // 원아선택으로 돌아가기 버튼
        $('#pbackTurnBtn').unbind("click").bind("click", function(){
          var whatIsBox = "pbox1";
          pselectChildView(whatIsBox);
        });

  }

  // 출석 클릭
  $('#pbox2').unbind("click").bind("click", function(){
    var whatIsBox = "pbox2";
    pselectChildView(whatIsBox);
  });

  // 출석 확인
  function pAttendanceCheck(childID, imageName, childName){

    allHide();
    $("#pAttendanceCheck").show();

    var attendanceValue = 1;

    // 달력


    // 원아 이미지 및 이름 출력
    $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/childImage_p_attan.php",
        data:{
          childID: childID
        },
        dataType:"jsonp",
        success:function(data){

          $("#pAttendanceChildDiv").empty();

                var imageName = data.data.imageName;
                var childName = data.data.childName;
                var attendanceInfo = new Array();

                var imgs = $("<img />").addClass("pAtd_childImage").attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                var names = $("<p></p>").addClass("pAtd_childName").text(childName);
                var namesDiv = $("<div></div>").addClass("pAtd_childNameDiv").append(names);

                // 원아 이미지 및 이름
                $("<div></div>").addClass('pAtd_ImgAndName').appendTo("#pAttendanceChildDiv");
                $("<div></div>").addClass("pAtd_imageDiv").append(imgs).appendTo(".pAtd_ImgAndName");
                $("<div></div>").addClass("pAtd_NameDiv").append(namesDiv).appendTo(".pAtd_ImgAndName");



                var newDate = new Date();
                var dateString = newDate.getFullYear() + " - " + (newDate.getMonth() + 1) + " - " + newDate.getDate();
                var dateValue = newDate.getFullYear() + "-" + (newDate.getMonth() + 1) + "-" + newDate.getDate();
                // 달력 출력


                // if($("#pAttendanceChildDiv").children().hasClass("pAttendance") === true){
                  // showDatePicker(dateString, dateValue);
                // } else{
                  showDatePicker(dateString, dateValue);
                  attendanceBtns(dateValue);
                // }



        }, error: function(){
            window.alert("서버 접속 오류가 발생하였습니다.");
        }
    });


    function showDatePicker(dateString, dateValue){
      $(".pAttDateValueP").text(dateString);

      $(".pAttDatepicker").datepicker({
              buttonImage: './img/calendar.png',
              buttonImageOnly: true,
               dateFormat: 'yy - mm - dd',
              // changeMonth: true,
              // changeYear: true,

              // nextText: '다음 달', // next 아이콘의 툴팁.
              // prevText: '이전 달',
              showOn: 'both',
              showButtonPanel: true,  // 달력아래 버튼 패널
              // currentText : 'Today',
              closeText:'Close',       // 버튼패널 중 닫기 텍스트 정의
              duration: "slow" ,      // 속도

              // 달력 OPEN시 위치
              beforeShow: function (input, inst) {
                  setTimeout(function () {
                      inst.dpDiv.css({
                          top: 65,
                          left: 58
                          // top: 125,
                          // left: 2,
                          // width:340,
                      });
                  }, 0);
              },

              // 달력에서 선택한 값을 변수에 저장
              onSelect: function(value) {
                var explodeValue = value.split(" - ");
                argDateValue = explodeValue[0]+"-"+explodeValue[1]+"-"+explodeValue[2];

                $(".pAttDateValueP").empty();
                $(".pAttDateValueP").text(argDateValue);
                var valueP = $(".pAttDateValueP").text();


                attendanceBtns(argDateValue);
                // if($("#modeContents").children().hasClass("pNotification_div") === true){
                //   // alert('알림내용');
                //   notification(dateValue);
                }
      });
    }




    // 출석 메시지 관련
    // var pAttMemo = $("<input></input>").attr("type", "text");
    // $("#pAttTextDiv").append(pAttMemo);


    // 출석버튼 관련  /////////////
    function attendanceBtns(dateValue){
      $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/getAttendanceCheckP.php",
        data:{
          childID: childID,
          dateValue: dateValue
        },
        dataType:"jsonp",
        success:function(data){
          // 출석버튼 및 글씨

          $("<div></div>").addClass("pAttendance").appendTo("#pAttendanceChildDiv");
          $(".pAttendance").empty();
          $("<p></p>").text('출석').appendTo(".pAttendance");
          if(data.data['attendanceValue'] == 1){
            $(".pAttendance").css({
              "border" : "2px solid white",
              "background-color":"#00B1F2"
            });
            // var on = $("<input></input>").attr("type", "hidden").addClass("pAttendanceOn"+childID);
            var on = $("<input></input>").attr("type", "hidden").addClass("on");
            $(".pAttendance").append(on);
          }

          // 조퇴버튼 및 글씨
          $("<div></div>").addClass("pEarlyLeave pEarlyLeave").appendTo("#pAttendanceChildDiv");
          $(".pEarlyLeave").empty();
          $("<p></p>").text('조퇴').appendTo(".pEarlyLeave");
          if(data.data['attendanceValue'] == 2){
            $(".pEarlyLeave").css({
              "border" : "2px solid white",
              "background-color":"gold"
            });
            // var on = $("<input></input>").attr("type", "hidden").addClass("pEarlyLeaveOn"+childID);
            var on = $("<input></input>").attr("type", "hidden").addClass("on");
            $(".pEarlyLeave").append(on);
          }


          // 결석버튼 및 글씨
          $("<div></div>").addClass("pAbsence pAbsence").appendTo("#pAttendanceChildDiv");
          $(".pAbsence").empty();
          $("<p></p>").text('결석').appendTo(".pAbsence");
          if(data.data['attendanceValue'] == 3){
            $(".pAbsence").css({
              "border" : "2px solid white",
              "background-color":"#FF48FF"
            });
            // var on = $("<input></input>").attr("type", "hidden").addClass("pAbsenceOn"+childID);
            var on = $("<input></input>").attr("type", "hidden").addClass("on");
            $(".pAbsence").append(on);
          }



          // 출석버튼 클릭
          $(".pAttendance").unbind("click").bind("click", function(){
            // attendanceInfo[i] = "출석";
            // alert("선택한 원아는 " + childID + "이며, " + attendanceInfo[i]);
            $(".pAttendance").empty();
            $("<p></p>").text('출석').appendTo(".pAttendance");
            $(".pAttendance").css({
              "border" : "2px solid white",
              "background-color":"#00B1F2"
            });
            // var on = $("<input></input>").attr("type", "hidden").addClass("pAttendanceOn"+childID);
            var on = $("<input></input>").attr("type", "hidden").addClass("on");
            $(".pAttendance").append(on);



            $(".pEarlyLeave").empty();
            $("<p></p>").text('조퇴').appendTo(".pEarlyLeave");
            $(".pEarlyLeave").css({
              "border" : "2px solid gold",
              "background-color":"white"
            });


            $(".pAbsence").empty();
            $("<p></p>").text('결석').appendTo(".pAbsence");
            $(".pAbsence").css({
              "border" : "2px solid #FF48FF",
              "background-color":"white"
            });
          });

          // 조퇴버튼 클릭
          $(".pEarlyLeave").unbind("click").bind("click", function(){
            // attendanceInfo[i] = "조퇴";
            // alert("선택한 원아는 " + childID + "이며, " + attendanceInfo[i]);
            $(".pAttendance").empty();
            $("<p></p>").text('출석').appendTo(".pAttendance");
            $(".pAttendance").css({
              "border" : "2px solid #00B1F2",
              "background-color":"white"
            });

            $(".pEarlyLeave").empty();
            $("<p></p>").text('조퇴').appendTo(".pEarlyLeave");
            $(".pEarlyLeave").css({
              "border" : "2px solid white",
              "background-color":"gold"
            });
            // var on = $("<input></input>").attr("type", "hidden").addClass("pEarlyLeaveOn"+childID);
            var on = $("<input></input>").attr("type", "hidden").addClass("on");
            $(".pEarlyLeave").append(on);


            $(".pAbsence").empty();
            $("<p></p>").text('결석').appendTo(".pAbsence");
            $(".pAbsence").css({
              "border" : "2px solid #FF48FF",
              "background-color":"white"
            });

          });

            // 결석버튼 클릭
          $(".pAbsence").unbind("click").bind("click", function(){
            // attendanceInfo[i] = "결석";
            // alert("선택한 원아는 " + childID + "이며, " + attendanceInfo[i]);
            $(".pAttendance").empty();
            $("<p></p>").text('출석').appendTo(".pAttendance");
            $(".pAttendance").css({
              "border" : "2px solid #00B1F2",
              "background-color":"white"
            });


            $(".pEarlyLeave").empty();
            $("<p></p>").text('조퇴').appendTo(".pEarlyLeave");
            $(".pEarlyLeave").css({
              "border" : "2px solid gold",
              "background-color":"white"
            });


            $(".pAbsence").empty();
            $("<p></p>").text('결석').appendTo(".pAbsence");
            $(".pAbsence").css({
              "border" : "2px solid white",
              "background-color":"#FF48FF"
            });
            // var on = $("<input></input>").attr("type", "hidden").addClass("pAbsenceOn"+childID);
            var on = $("<input></input>").attr("type", "hidden").addClass("on");
            $(".pAbsence").append(on);
          });
        // $(".pAttendance"+childID).unbind("click").bind("click",function(){
        //   alert("클릭한 원아는 : " + childID + " 이며, 출석버튼이다.");
        // });



        // 취소버튼 클릭
        $("#pAttCancelBtn").unbind("click").bind("click", function(){
          // allHide();
          var whatIsBox = "pbox2";
          pselectChildView(whatIsBox);
        });


            // 완료 버튼클릭
            $("#pAttSaveBtn").unbind("click").bind("click", function(){

               // 출석 값 저장변수
               var attendanceData;

               var comment = $("#pAttText").val();


                // 클릭한 버튼의 값을 저장
                if($(".pAttendance").children().hasClass("on") === true){
                  attendanceData = 1;
                }
                if($(".pEarlyLeave").children().hasClass("on") === true){
                  attendanceData = 2;
                }
                if($(".pAbsence").children().hasClass("on") === true){
                  attendanceData = 3;
                }

                // 출석정보를 입력하지 않으면 등록할 수 없음
                if(comment == ""){
                  alert('출석 정보를 입력해주세요.')
                } else{
                  $.ajax({
                    url:"https://chesyu.run.goorm.io/MyProject/ni/setAttendanceCheckP.php",
                    data:{
                      childID: childID,
                      uploader: 0,
                      comment : comment,
                      attendanceData: attendanceData,
                      dateValue: dateValue
                    },
                    dataType:"jsonp",
                    success:function(data){
                      alert('출석정보를 등록했습니다.');


                      allHide();
                      $('#pLoginTop').show();
                      // $('#psideMenuListDiv').hide();
                      $('#parentMain').show();
                    },
                    error:function(){
                      alert('e');
                    }
                  }); // 출석정도 등록 ajax 끝부분
                } // else 끝부분

            }); // 완료버튼클릭 끝부분

        },
        error:function(){
          alert('출석 정보를 가져올 수 없습니다.');
        }
      }); // 출석정보 관련 ajax 끝부분



    }



  }

  // 앨범 클릭
$('#pbox3').unbind("click").bind("click", function(){
  var whatIsBox = "pbox3";
  pselectChildView(whatIsBox);
});
  // 앨범 확인
function pShowAlbum(childID, optionValue){
  $("#albumChildSelectBox1").hide();
  $("#pShowAlbum").show();

  switch (optionValue) {
    case 1:
        pShowAlbumOption1(childID, optionValue);
        $("#pShowAlbumOptionBtn1").css({
          "background-color":"#5F00FF"
        });
        $("#pShowAlbumOptionBtn2").css({
          "background-color":"#D1B2FF"
        });
        $("#pShowAlbumOptionBtn6").css({
          "background-color":"#D1B2FF"
        });
      break;
    case 2:
        pShowAlbumOption2(childID, optionValue);
        $("#pShowAlbumOptionBtn1").css({
          "background-color":"#D1B2FF"
        });
        $("#pShowAlbumOptionBtn2").css({
          "background-color":"#5F00FF"
        });
        $("#pShowAlbumOptionBtn6").css({
          "background-color":"#D1B2FF"
        });
    default:

  }


    // 최근순 버튼 클릭
  $("#pShowAlbumOptionBtn1").unbind("click").bind("click", function(){
    pShowAlbumOption1(childID, 1);
    $("#pShowAlbumOptionBtn1").css({
      "background-color":"#5F00FF"
    });
    $("#pShowAlbumOptionBtn2").css({
      "background-color":"#D1B2FF"
    });
    $("#pShowAlbumOptionBtn6").css({
      "background-color":"#D1B2FF"
    });
  });

  // $("<div></div>").addClass("tICheck_Notification_btn2").text('알림내용').appendTo("#tICheck_Notification_btn");

    // 오래된순 버튼 클릭
  $("#pShowAlbumOptionBtn2").unbind("click").bind("click", function(){
    pShowAlbumOption2(childID, 2);
    $("#pShowAlbumOptionBtn1").css({
      "background-color":"#D1B2FF"
    });
    $("#pShowAlbumOptionBtn2").css({
      "background-color":"#5F00FF"
    });
    $("#pShowAlbumOptionBtn6").css({
      "background-color":"#D1B2FF"
    });
  });



  // $("<div></div>").addClass("tICheck_DevelopGraph_btn2").text('발달사항').appendTo("#tICheck_DevelopGraph_btn");


  //   // 날짜조회 버튼 클릭
  // $("#pShowAlbumOptionBtn6").unbind("click").bind("click", function(){
  //   pShowAlbumOption6(childID);
  //   $("#pShowAlbumOptionBtn1").css({
  //     "background-color":"#D1B2FF"
  //   });
  //   $("#pShowAlbumOptionBtn2").css({
  //     "background-color":"#D1B2FF"
  //   });
  //   $("#pShowAlbumOptionBtn6").css({
  //     "background-color":"#5F00FF"
  //   });
  //
  // });


/*
  // 최근순 정렬
  function pShowAlbumOption1(childID){
    $.ajax({
      dataType: "jsonp",
      data:{
        childID: childID
      },
      // url:'https://chesyu.run.goorm.io/MyProject/ni/uaaa.php',
      url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
      success:function(data){
        var cnt = data.data.length;

        $("#pShowAlbumDiv").empty();

        var photoData = new Array();

        for(var i = 0; i < cnt; i++){
          photoData['photoId']   = data.data[i].id;
          photoData['folderPath'] = data.data[i].folderPath;
          photoData['photoName'] = data.data[i].photoName;
          photoData['registDay'] = data.data[i].registDay;
          photoData['fullPath'] = childID+"/"+photoData['folderPath']+"/"+photoData['photoName'];
          photoData['photoMemo'] = data.data[i].photoMemo;

          var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+photoData['fullPath']).addClass("photo"+photoData['photoId']);
          // var memos   = $("<p></p>").text(photoMemo);
          var imgsDiv = $("<div></div>").addClass("photoImgsDiv").append(imgs);
          $("#pShowAlbumDiv").append(imgsDiv);

          (function(photoData){
            $(".photo"+photoData['photoId']).unbind("click").bind("click",function(){
              detailPhotoView(photoData);
            });
          }(photoData));

        }
      },
      error:function(){
        alert('서버 오류');
      }
    });
  }

  // 오래된순 정렬
  function pShowAlbumOption2(childID){
    var asc = "asc";
    $.ajax({
      dataType: "jsonp",
      data:{
        childID: childID,
        asc : asc
      },
      // url:'https://chesyu.run.goorm.io/MyProject/ni/uaaa.php',
      url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
      success:function(data){
        var cnt = data.data.length;

        $("#pShowAlbumDiv").empty();

        var photoData = new Array();

        for(var i = 0; i < cnt; i++){
          photoData['id']   = data.data[i].id;
          photoData['folderPath'] = data.data[i].folderPath;
          photoData['photoName'] = data.data[i].photoName;
          photoData['registDay'] = data.data[i].registDay;
          photoData['fullPath'] = childID+"/"+photoData['folderPath']+"/"+photoData['photoName'];
          photoData['photoMemo'] = data.data[i].photoMemo;

          var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+photoData['fullPath']).addClass("photo"+photoData['photoId']);
          // var memos   = $("<p></p>").text(photoMemo);
          var imgsDiv = $("<div></div>").addClass("photoImgsDiv").append(imgs);
          $("#pShowAlbumDiv").append(imgsDiv);

          (function(photoData){
            $(".photo"+photoData['photoId']).unbind("click").bind("click",function(){
              detailPhotoView(photoData);
            });
          }(photoData));

        }

      },
      error:function(){
        alert('서버 오류');
      }
    });
  }
  */
  // 최근순 정렬
  function pShowAlbumOption1(childID, optionValue){

    $.ajax({
      dataType: "jsonp",
      data:{
        childID: childID
      },
      // url:'https://chesyu.run.goorm.io/MyProject/ni/uaaa.php',
      url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
      success:function(data){
        var cnt = data.data.length;

        $("#pShowAlbumDiv").empty();

        for(var i = 0; i < cnt; i++){
          var photoId   = data.data[i].id;
          var folderPath = data.data[i].folderPath;
          var photoName = data.data[i].photoName;
          var registDay = data.data[i].registDay;
          var fullPath = childID+"/"+folderPath+"/"+photoName;
          var photoMemo = data.data[i].photoMemo;

          var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+fullPath).addClass("photo"+photoId);
          // var memos   = $("<p></p>").text(photoMemo);
          var imgsDiv = $("<div></div>").addClass("photoImgsDiv").append(imgs);
          $("#pShowAlbumDiv").append(imgsDiv);

          (function(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue){
            $(".photo"+photoId).unbind("click").bind("click",function(){
              detailPhotoView(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue);
            });
          }(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue));

        }
      },
      error:function(){
        alert('서버 오류');
      }
    });
  }

  // 오래된순 정렬
  function pShowAlbumOption2(childID, optionValue){
    optionValue = 2;
    var asc = "asc";
    $.ajax({
      dataType: "jsonp",
      data:{
        childID: childID,
        asc : asc
      },
      // url:'https://chesyu.run.goorm.io/MyProject/ni/uaaa.php',
      url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
      success:function(data){
        var cnt = data.data.length;

        $("#pShowAlbumDiv").empty();



        for(var i = 0; i < cnt; i++){
          var photoId   = data.data[i].id;
          var folderPath = data.data[i].folderPath;
          var photoName = data.data[i].photoName;
          var registDay = data.data[i].registDay;
          var fullPath = childID+"/"+folderPath+"/"+photoName;
          var photoMemo = data.data[i].photoMemo;

          var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+fullPath).addClass("photo"+photoId);
          // var memos   = $("<p></p>").text(photoMemo);
          var imgsDiv = $("<div></div>").addClass("photoImgsDiv").append(imgs);
          $("#pShowAlbumDiv").append(imgsDiv);

          (function(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue){
            $(".photo"+photoId).unbind("click").bind("click",function(){
              detailPhotoView(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue);
            });
          }(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue));

        }

      },
      error:function(){
        alert('서버 오류');
      }
    });
  }
  // // 두 날짜 사이 정렬
  // function pShowAlbumOption2(childID){
  //   var asc = "asc";
  //   $.ajax({
  //     dataType: "jsonp",
  //     data:{
  //       childID: childID,
  //       asc : asc
  //     },
  //     // url:'https://chesyu.run.goorm.io/MyProject/ni/uaaa.php',
  //     url:'https://chesyu.run.goorm.io/MyProject/ni/getAlbum.php',
  //     success:function(data){
  //       var cnt = data.data.length;
  //
  //       $("#pShowAlbumDiv").empty();
  //
  //       for(var i = 0; i < cnt; i++){
  //         var photoId   = data.data[i].id;
  //         var folderPath = data.data[i].folderPath;
  //         var photoName = data.data[i].photoName;
  //
  //         var fullPath = childID+"/"+folderPath+"/"+photoName;
  //         var photoMemo = data.data[i].photoMemo;
  //
  //         var imgs    = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+fullPath).addClass("photo"+photoId);
  //         // var memos   = $("<p></p>").text(photoMemo);
  //         var imgsDiv = $("<div></div>").addClass("photoImgsDiv").append(imgs);
  //         $("#pShowAlbumDiv").append(imgsDiv);
  //
  //         (function(photoId, folderPath, photoName, fullPath, photoMemo){
  //           $(".photo"+photoId).unbind("click").bind("click",function(){
  //             detailPhotoView(photoId, folderPath, photoName, fullPath, photoMemo);
  //           });
  //         }(photoId, folderPath, photoName, fullPath, photoMemo));
  //
  //       }
  //     },
  //     error:function(){
  //       alert('서버 오류');
  //     }
  //   });
  // }


  // 원아선택으로 돌아가기
  $("#pShowAlbumBackBtn").unbind("click").bind("click", function(){
    // alert('testasdaasds');
    allHide();
    pselectChildView("pbox3");



  });



  // 사진 클릭 시 상세보기
  function detailPhotoView(photoId, folderPath, photoName, registDay, fullPath, photoMemo, optionValue){
    allHide();
    $("#pShowDetailAlbum").show();
    $("#pDetailAlbumImageDiv").empty();
    $("#pDetailAlbumRegistDiv").empty();
    $("#pDetailAlbumMemoDiv").empty();

    var img  = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+fullPath);
    var memo = $("<p></p>").text(photoMemo).addClass('photoMemo');
    var registDay = $("<p></p>").text("사진 등록 날짜 : " + registDay).addClass('photoRegistDay');

    $("#pDetailAlbumImageDiv").append(img);
    $("#pDetailAlbumRegistDiv").append(registDay);
    $("#pDetailAlbumMemoDiv").append(memo);

    // 상세보기에서 뒤로가기 버튼 클릭
    $("#pDetailAlbumBackBtn").unbind("click").bind("click",function(){

      allHide();
      pShowAlbum(childID, optionValue);

      $("#pShowDetailAlbum").hide();
    });
  }

/*
  // 사진 클릭 시 상세보기
  function detailPhotoView(photoData){
    allHide();
    $("#showDetailAlbum").show();
    $("#pDetailAlbumImageDiv").empty();
    $("#pDetailAlbumRegistDiv").empty();
    $("#pDetailAlbumMemoDiv").empty();

    var img  = $("<img />").attr("src", "https://chesyu.run.goorm.io/MyProject/ni/album/folder"+photoData['fullPath']);
    var memo = $("<p></p>").text(photoData['photoMemo']).addClass('photoMemo');
    var registDay = $("<p></p>").text("사진 등록 날짜 : " + photoData['registDay']).addClass('photoRegistDay');

    $("#pDetailAlbumImageDiv").append(img);
    $("#pDetailAlbumRegistDiv").append(registDay);
    $("#pDetailAlbumMemoDiv").append(memo);

    // 상세보기에서 뒤로가기 버튼 클릭
    $("#pDetailAlbumBackBtn").unbind("click").bind("click",function(){
      allHide();
      pShowAlbum(childID);
      if(optionValue == 1){
        alert('test');
      } else{
        alert('2222');
      }

      $("#showDetailAlbum").hide();
    });
  }*/

}

  // 자녀 정보 클릭

  // 자녀 정보 확인

});
