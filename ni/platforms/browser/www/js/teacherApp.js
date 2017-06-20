$(document).ready(function(){


allHide();

// loginViewOpen();
// $("#tloginMains").show();
  // $("#sideMenuListDiv").hide();
  // // 실행시 바로 로그인화면 보여주기
  function loginViewOpen(){
    allHide()
    $("#tLoginTop").hide();
    $("#pLoginTop").hide();

    $("#notLogin").show();
    $("#notLoginTop").show();
    $("#notLoginView").show();
  }


  // $('#notLoginTop').show();
  // $('#notLoginView').show();


  // 실행시 바로 교사메인 보여주기
  // $('#pLoginTop').hide();
  // $('#tLoginTop').show();
  // $('#teacherMain').show();


  // 실행시 바로 학부모메인 보여주기
  $("#tLoginTop").hide();
  $("#psideMenuListDiv").hide();
  $('#pLoginTop').show();
  $('#parentMain').show();



  //
  // // 교사아이디로 로그인버튼 클릭
  //
  //   $('#LoginBtn').unbind("click").bind("click", function(){
  //
  //     if( $("#inputId").val() == "ttt") {
  //       $('#notLoginTop').hide();
  //       $('#notLoginView').hide();
  //
  //       $('#tLoginTop').show();
  //       $('#sideMenuListDiv').hide();
  //       $('#teacherMain').show();
  //     } else if($("#inputId").val() == "ppp"){
  //       $('#notLoginTop').hide();
  //       $('#notLoginView').hide();
  //
  //       $('#pLoginTop').show();
  //       $('#psideMenuListDiv').hide();
  //       $('#parentMain').show();
  //     } else{
  //       alert('교사아이디 ttt,   학부모아이디 ppp');
  //     }
  //
  //
  //   });

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
        url:"https://chesyu.run.goorm.io/MyProject/ni/childImage.php",
        data:{},
        dataType:"jsonp",
        success:function(data){
            //성공
            if(data.result == "success"){
                var cnt = data.data.length;


                for(var i = 0; i < cnt ; i++){
                    var childID        = data.data[i].id;
                    var imageName = data.data[i].imageName;
                    var childName = data.data[i].childName;
                    var imageComment = data.data[i].imageComment;

                      var imgs = $("<img />").addClass("imageName"+childID).attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
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
                              tObservation(childID);
                              break;
                            case "box2":
                              developCheck(childID);
                              break;
                            case "box3":
                              tICheck(childID);
                              break;
                            case "box4":
                              alert('원아지킴이...');
                              break;
                            case "box5":
                              photoUpload(childID);
                              break;
                            case "box6":
                              showAlbum(childID, 1);
                              break;

                            default:
                              alert("default");
                          }
                        ///

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

  function selectChildView_Album(box){
    allHide();
    $('#tLoginTop').show();
    $('#childSelectBox1').show();
    $('#albhildSelect1').empty();

    ////
    var imgs = $("<img />").addClass("imageName"+childID).attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
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
  function tObservation(childID){
      // alert(id);
      $('#childSelectBox1').hide();
      $('#tObservation').show();
      $('#tObText').show();

      // selectedChild(id,childName );

    $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/selectedChildImage.php",
        data:{
          childID: childID
        },
        dataType:"jsonp",
        success:function(data){

            //성공
            if(data.result == "success"){
                    $('#tObChildInfo').empty();
                    var childID   = data.data.id;
                    var imageName = data.data.imageName;
                    var childNum  = data.data.childNum;
                    var childName = data.data.childName;

                    var imgs = $("<img />").addClass("write_ImageName").attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                    var names = $("<p></p>").addClass("write_ChildName").text(childName);
                    var namesDiv = $("<div></div>").addClass("write_ChildNameDiv").append(names);

                    $("#tObChildInfo").addClass('write_ImgAndName');
                    $("<div></div>").addClass("write_ImageNameDiv").append(imgs).append(namesDiv).appendTo(".write_ImgAndName");


                    // 저장 된 텍스트 보여주기 실행
                    showSavedTexts(childID);
            }
            //오류
            else {
                window.alert("오류가 발생하였습니다.");
            }
        }, error: function(){
            window.alert("서버 접속 오류가 발생하였습니다.");
        }
    });




      // 관찰일지 텍스트 부분
    // 텍스트 취소 버튼
    $('#tObCancelBtn1').unbind("click").bind("click", function(){
      selectChildView("box1");
    });

    // 텍스트 저장 버튼
    $('#tObSaveBtn1').unbind("click").bind("click", function(){
      saveText(childID);
    });

    // 텍스트 저장
    function saveText(childID){
      var textMemo = $('#textMemo').val();

      $.ajax({
        dataType:"jsonp",
        data: {
          childID: childID,
          textMemo : textMemo,
        },
          url:'https://chesyu.run.goorm.io/MyProject/ni/uploadTextMemo.php',

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



      $.ajax({
        dataType:"jsonp",
        data:{
          childID: childID
        },
        url:'https://chesyu.run.goorm.io/MyProject/ni/getSavedTextsApp.php',
        success:function(data){

          var cnt = data.data.length;

          // var savedTextsTileDiv = $("<div></div>").addClass("savedTextsTileDiv");
          // var savedTexts = $("<p></p>").addClass('savedTextsTitle').text("오늘 작성한 메모");
          //
          // $("#tObSavedText").append(savedTextsTileDiv);
          // $(".savedTextsTileDiv").append(savedTexts);


          for(var i = 0; i < cnt; i++){
            var id        = data.data[i].id;
            var textValue = data.data[i].textValue;

            var savedTexts = $("<p></p>").addClass('savedTextMemos'+id).text(textValue);

              // $('.savedTextMemos').
              $("#tObSavedText").append(savedTexts);

              (function(id){
                  $('.savedTextMemos'+id).unbind("click").bind("click",function(){
                    deleteUploadedTexts(id, childID);
                  });
              }(id));

          }
        },
        error:function(){
          alert('error');
        }
      });
    }


    // 저장된 텍스트 지우기
    function deleteUploadedTexts(id, childID){

      var deleteFlag = confirm("댓글을 삭제하시겠습니까?");

      if(deleteFlag){
        $.ajax({
          dataType:"jsonp",
          data:{
            id: id
          },
          url:'https://chesyu.run.goorm.io/MyProject/ni/delUploadedTextsApp.php',
          success:function(data){
            // alert('삭제하였습니다.');
            showSavedTexts(childID);
          }, error:function(){
            alert('error');
          }
        });
      } else{

      }
    }


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
                childID : childID
              },

              // dataType:'jsonp',
              // data: {
              //   imgUpload:drawCanvas.toDataURL('image/png'),
              //   childID : childID
              // },


              	url:'https://chesyu.run.goorm.io/MyProject/ni/uploadImageMemo.php',
                // url:'./testphp.php',

          		 success:function(result){
          		 	alert("이미지 메모를 등록했습니다");
                clearCanvas();
          		 }, error:function(result){
                 alert("error");
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

          function getUploadedImageApp(){
            $.ajax({
              dataType:"jsonp",
              data:{
                childID: childID
              },
              url:'https://chesyu.run.goorm.io/MyProject/ni/getUploadedImageApp.php',
              success:function(data){

                var cnt = data.data.length;

                for(var i = 0; i < cnt ; i++){

                    var id        = data.data[i].id;
                    var imageName = data.data[i].imageName;
                    var path = data.data[i].imgPath;

                    var imgs = $("<img />").attr("src","https://chesyu.run.goorm.io/MyProject/ni/"+path+"/"+imageName);
                    // var imgsDiv = $("<div></div>").addClass("uploadedImgDiv").append(imags);
                    $("<div></div>").addClass("uploadedImgDiv"+id).append(imgs).appendTo("#showSavedImagesDiv");

                    (function(id, childId, path, imageName){
                      $(".uploadedImgDiv"+id).unbind("click").bind("click",function(){
                        deleteUploadedImages(id, childID, path, imageName);
                      });
                    }(id, childID, path, imageName));
                }
              }, error:function(){

              }
            });
        }

          function deleteUploadedImages(id, childID, path, imageName){

            var deleteFlag = confirm("이미지를 삭제하시겠습니까?");

            if(deleteFlag){
              $.ajax({
                dataType:"jsonp",
                data:{
                  id: id,
                  path: path,
                  imageName: imageName
                },
                url:'https://chesyu.run.goorm.io/MyProject/ni/delUploadedImagesApp.php',
                success:function(data){
                  // alert('삭제하였습니다.');
                  $("#showSavedImagesDiv").empty();
                  getUploadedImageApp();
                  $("#showSavedImages").show();
                }, error:function(){
                  alert('error');
                }
              });
            } else{

            }
          }

          // 다시 돌아가기
          $("#backTObDraw").unbind("click").bind("click", function(){
            reStartTodDraw(childID);
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
  function reStartTodDraw(childID){
    allHide();
    tObservation(childID);
    $('#tObText').hide();
    $('#tObDraw').show();
  }



  // 발달 행동 체크 클릭
  $('#box2').unbind("click").bind("click", function(){
    var whatIsBox = "box2";
    selectChildView(whatIsBox);
  });

  // 발달 행동 체크
  function developCheck(childID){
    $('#childSelectBox1').hide();
    $('#tDevelopCheck').show();
    var cnt;
    // 선택한 원아 이름, 이미지 출력
  $.ajax({
      url:"https://chesyu.run.goorm.io/MyProject/ni/selectedChildImage.php",
      data:{
        childID: childID
      },
      dataType:"jsonp",
      success:function(data){

          //성공
          if(data.result == "success"){
                  $('#tDevelopChildInfo').empty();
                  var id        = data.data.id;
                  var imageName = data.data.imageName;
                  var childNum = data.data.childNum;
                  var childName = data.data.childName;

                  var imgs = $("<img />").addClass("develop_ImageName").attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                  var names = $("<p></p>").addClass("develop_ChildName"+id).text(childName);
                  var namesDiv = $("<div></div>").addClass("develop_ChildNameDiv"+id).append(names);

                  $("#tDevelopChildInfo").append("<div></div>").addClass('develop_ImgAndName'+id);
                  $("<div></div>").addClass("develop_ImageNameDiv"+id).append(imgs).append(namesDiv).appendTo(".develop_ImgAndName"+id);
                  // 발달 사항 체크 저장버튼 클릭
                  $('#tDevelopCheckSaveBtn').unbind("click").bind("click", function(){
                    tDevelopCheckSave(childID);
                  });
          }
          //오류
          else {
              window.alert("오류가 발생하였습니다.");
          }
      }, error: function(){
          window.alert("서버 접속 오류가 발생하였습니다.");
      }
  });


    // 항목 표시
  $.ajax({
      url:"https://chesyu.run.goorm.io/MyProject/ni/developCheckList.php",
      data:{
        childID: childID
      },
      dataType:"jsonp",
      success:function(data){
          if(data.result == "success"){
            cnt = data.data.length;

            $('#tDevelopCheckDiv').empty();


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

            var tDevelopCheckSet = $("<div></div>").addClass("tDevelopCheckSet"+id).appendTo('#tDevelopCheckDiv');
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

    // // 발달 사항 체크 저장버튼 클릭
    // $('#tDevelopCheckSaveBtn').unbind("click").bind("click", function(){
    //   tDevelopCheckSave(childNum);
    // });

    // 발달 사항 체크 취소버튼 클릭
    $('#tDevelopCheckCancelBtn').unbind("click").bind("click", function(){
      selectChildView("box2");
    });


    // 발달 사항 체크 저장
    function tDevelopCheckSave(childID){
      var checkName  = new Array();
      var checkValues = new Array();


      // radio버튼 중 선택한 항목의 값만 뽑아오기
      for(var id = 1; id < cnt+1; id++){

        checkName.push($('.tDevelopCheckNameP'+id).text());

        // 선택하지 않았다면 Default값
        if($('.tr'+id).find('input'+':checked').parent().text() == ""){
          checkValues.push("3");
        } else{
          checkValues.push($('.tr'+id).find('input'+':checked').parent().text());
        }
      }

    // for(var i=0; i < checkValues.length; i++){
    //   alert("배열에 들어간 값은 : " + checkValues[i]);
    // }

      $.ajax({
          url:"https://chesyu.run.goorm.io/MyProject/ni/developCheck.php",
          data:{
            childID : childID,
            checkName : checkName,
            checkValues : checkValues,
            row : cnt
          },
          dataType:"jsonp",
          success:function(data){
              if(data.result == "success"){
                alert("체크사항을 저장하였습니다.");
                selectChildView("box2");
              } else{
                alert(data.result);
                selectChildView("box2");
              }
          }

      })// ajax끝부분


    }// 발달사항체크저장 끝부분

  }


  // I-Check 클릭
  $('#box3').unbind("click").bind("click", function(){
    var whatIsBox = "box3";
    selectChildView(whatIsBox);
  });



  // I-Check
  function tICheck(childID){
    allHide();
    $('#ICheck').show();
    $('#tICheckMain').show();
    $('#modeBtns').show();

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

              if($("#modeContents").children().hasClass("notification_div") === true){
                // alert('알림내용');
                notification(dateValue);
              }

              if($("#modeContents").children().hasClass("developGraph_div1") === true){
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
  $.ajax({
      url:"https://chesyu.run.goorm.io/MyProject/ni/selectedChildImage.php",
      data:{
        childID: childID
      },
      dataType:"jsonp",
      success:function(data){

          //성공
          if(data.result == "success"){
                  $('#tICheck_childBox_div').empty();

                  var id        = data.data.id;
                  var imageName = data.data.imageName;
                  var childNum = data.data.childNum;
                  var childName = data.data.childName;

                  var imgs = $("<img />").attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                  var names = $("<p></p>").text(childName);

                  $("<div></div>").addClass("tICheck_childBox").appendTo("#tICheck_childBox_div");
                  var imgsDiv = $("<div></div>").addClass("tICheck_imgsDiv").appendTo(".tICheck_childBox");
                  var namesDiv = $("<div></div>").addClass("tICheck_namesDiv").appendTo(".tICheck_childBox");
                  imgsDiv.append(imgs);
                  namesDiv.append(names);
          }
          //오류
          else {
              window.alert("오류가 발생하였습니다.");
          }
      }, error: function(){
          window.alert("서버 접속 오류가 발생하였습니다.");
      }
  });

    //  날짜 조회버튼 클릭
    // $("#dateSetBtn").unbind("click").bind("click", function(){
    //   var value = $(".dateValueP").text();
    //   var explodeValue = value.split(" - ");
    //   dateValue = explodeValue[0]+"-"+explodeValue[1]+"-"+explodeValue[2];
    //
    //
    //   if($("#modeContents").children().hasClass("notification_div") === true){
    //     // alert('알림내용');
    //     notification(dateValue);
    //   }
    //
    //   if($("#modeContents").children().hasClass("developGraph_div1") === true){
    //     // alert('발달사항');
    //     developGraph(dateValue);
    //   }
    //
    //   if($("#modeContents").children().hasClass("significant_div") === true){
    //     // alert('특이사항');
    //     significant(dateValue);
    //   }
    //
    // });

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

    // $("<div></div>").addClass("tICheck_Notification_btn2").text('알림내용').appendTo("#tICheck_Notification_btn");

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
    // $("<div></div>").addClass("tICheck_DevelopGraph_btn2").text('발달사항').appendTo("#tICheck_DevelopGraph_btn");


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
    // $("<div></div>").addClass("tICheck_Significant_btn2").text('특이사항').appendTo("#tICheck_Significant_btn");

    //  알림내용 모드 컨텐츠 보여주기
    function notification(dateValue){

      $("#modeContents").empty();
      $("#notificationComments_div").empty();

      // 알림내용 div
      $("<div></div>").addClass("notification_div").appendTo("#modeContents");

      // 알림내용의 댓글 div
      $("<div></div>").addClass("notificationComments_div").appendTo("#modeContents");
      $("<div></div>").addClass("viewUploadedComment_div").appendTo(".notificationComments_div");
      $("<div></div>").addClass("uploadComment_div").appendTo(".notificationComments_div");
      $("<p></p>").text("작성").appendTo(".uploadComment_div");

      // 댓글보기 함수
      showComments(childID, dateValue);

      // 알림내용의 댓글작성 버튼 클릭
      $('.uploadComment_div').unbind("click").bind("click", function(){
        var comment = prompt('댓글을 입력하세요.');
        $.ajax({
          dataType:'jsonp',
          data: {
            childID: childID,
            comment: comment,
            teacherTrue: 1,
            dateValue: dateValue
          },
            url:"https://chesyu.run.goorm.io/MyProject/ni/tCommentsUpload.php",
           success:function(result){
              $('.viewUploadedComment_div').empty();
             showComments(childID, dateValue);
           }, error:function(){
            //  alert('실패');
           }

        });
      });
    }


    //  발달그래프 모드 컨텐츠 보여주기
    function developGraph(dateValue){
      $("#modeContents").empty();
      $("<div></div>").addClass("developGraph_div1").appendTo("#modeContents");
      $("<div></div>").addClass("developGraph_div2").appendTo("#modeContents");
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
      $("#modeContents").empty();
      $("<div></div>").addClass("significant_div").appendTo("#modeContents");

    }

    function showComments(childID, dateValue){
      $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/commentsView.php",
        data:{
          childID:childID,
          dateValue:dateValue
        },
        dataType:"jsonp",
          success:function(data){
            var cnt = data.data.length;

            // 아래 for 문에서 댓글 생성 중에서
            // hidden 으로 댓글번호 같은걸 불러온 다음.
            // 클릭하면 본인일 경우, 댓글 삭제 가능하도록 하는
            // 기능도 만들면 괜찮을것 같음.

            for(var i = 0; i < cnt; i++){
              // 댓글 입력한 것이 교사라면.
              if(data.data[i].teacherTrue == 1){

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

            $(".viewUploadedComment_div").scrollTop($(document).height());


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
  function photoUpload(childID){
    allHide();
    $("#photoUpload").show();


    // 선택한 원아 이름, 이미지 출력
    $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/selectedChildImage.php",
        data:{
          childID: childID
        },
        dataType:"jsonp",
        success:function(data){


            //성공
            if(data.result == "success"){
                    $('#photoUpload_childBox_div').empty();
                    var childID   = data.data.id;
                    var imageName = data.data.imageName;
                    var childNum  = data.data.childNum;
                    var childName = data.data.childName;

                    var imgs = $("<img />").addClass("photoUpload_ImageName").attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                    var names = $("<p></p>").addClass("photoUpload_ChildName").text(childName);
                    var namesDiv = $("<div></div>").addClass("photoUpload_ChildNameDiv").append(names);

                    $("#photoUpload_childBox_div").addClass('photoUpload_ImgAndName');
                    $("<div></div>").addClass("photoUpload_ImageNameDiv").append(imgs).append(namesDiv).appendTo(".photoUpload_ImgAndName");



            }
            //오류
            else {
                window.alert("오류가 발생하였습니다.");
            }
        }, error: function(){
            window.alert("서버 접속 오류가 발생하였습니다.");
        }
    });



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

    // 이미지 저장1 (카메라로 찍은 base64)
    function uploadPhoto(childID) {
        var viewPhotoDataUrl = $(".GalleryImageView").attr('src');
        var photoMemo = $("#photoMemo").val();

      // 그림으로 보내는 데이터양이 많으면 get으로 주고받을수가
      // 없기 때문에 POST를 사용해야 한다.
        $.ajax({
          type:'POST',
          data: {
            childID : childID,
            photoMemo: photoMemo,
            viewPhotoDataUrl: viewPhotoDataUrl
          },
            url:'https://chesyu.run.goorm.io/MyProject/ni/uploadPhotoApp.php',
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
  function showAlbum(childID, optionValue){
    $("#albumChildSelectBox1").hide();
    $("#showAlbum").show();

    switch (optionValue) {
      case 1:
          showAlbumOption1(childID, optionValue);
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
          showAlbumOption2(childID, optionValue);
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
    function showAlbumOption1(childID, optionValue){

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
    function showAlbumOption2(childID, optionValue){
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

});
