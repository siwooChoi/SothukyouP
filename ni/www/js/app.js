$(document).ready(function(){

  // 실행시 바로 로그인화면 보여주기
    // $('#notLoginTop').show();
    // $('#notLoginView').show();

  // 실행시 바로 교사메인 보여주기
  // $('#notLoginTop').hide();
  // $('#notLoginView').hide();

  // allHide();
  $("#sideMenuListDiv").hide();
  $('#tLoginTop').show();
  $('#teacherMain').show();


  // 교사아이디로 로그인버튼 클릭
  $('#LoginBtn').unbind("click").bind("click", function(){
    $('#notLoginTop').hide();
    $('#notLoginView').hide();

    $('#tLoginTop').show();
    $('#sideMenuListDiv').hide();
    $('#teacherMain').show();
});

  // 숨기기
  function allHide(){

    $('#notLoginTop').hide();
    $('#notLoginView').hide();
    $('#sideMenuListDiv').hide();
    $('#teacherMain').hide();
    $('#albumChildSelectBox').hide();
    $('#childSelectBox1').hide();
    $('#tObservation').hide();
    $('#tObText').hide();
    $('#tObDraw').hide();
    $('#tDevelopCheck').hide();
    $('#textMemo').val('');
    // $('#tObChildInfo').empty();

  }

// 사이드메뉴 슬라이드
  $("#sideMenuBtn").unbind("click").bind("click", function(){
      $("#sideMenuListDiv").toggle("slide",{direction:"left"},500,null);
  });

  // $("#teacherMain").unbind("click").bind("click", function(){
  //     $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
  // });


  // 로그아웃 클릭
  $("#logoutBtn").unbind("click").bind("click", function(){

    $('#tLoginTop').hide();
    allHide();

    $('#notLoginTop').show();
    $('#notLoginView').show();
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

    allHide();
    $('#tLoginTop').show();
    $('#childSelectBox1').show();
    $('#childSelect1').empty();

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
                    var id        = data.data[i].id;
                    var imageName = data.data[i].imageName;
                    var childNum  = data.data[i].childNum;
                    var childName = data.data[i].childName;
                    var imageComment = data.data[i].imageComment;

                    var imgs = $("<img />").addClass("imageName"+id).attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                    var names = $("<p></p>").addClass("childName"+id).text(childName);
                    var namesDiv = $("<div></div>").addClass("childNameDiv"+id).append(names);

                    $("#childSelect1").append("<div></div>").addClass('selectImgAndName'+id);
                    $("<div></div>").addClass("imageNameDiv"+id).append(imgs).append(namesDiv).appendTo(".selectImgAndName"+id);

                    (function(id, childName){

                    $(".imageNameDiv"+id).unbind("click").bind("click",function(){
                      // alert(id);
                        // tObservation(id, childName);

                        ///
                          switch (box) {
                            case "box1":
                              tObservation(id, childNum);
                              break;
                            case "box2":
                              developCheck(id, childNum);
                              break;
                            case "box3":
                              alert("i-check");
                              break;
                            case "box4":
                              alert('원아지킴이...');
                              break;
                            case "box5":
                              alert('사진업로드');
                              break;
                            case "box6":
                              alert('앨범보기');
                              break;

                            default:
                              alert("default");
                          }
                        ///

                    });

                  }(id, childNum));
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
  function tObservation(id, childNum){
      // alert(id);
      $('#childSelectBox1').hide();
      $('#tObservation').show();
      $('#tObText').show();

      // selectedChild(id,childName );

    $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/selectedChildImage.php",
        data:{
          id: id,
          childNum: childNum
        },
        dataType:"jsonp",
        success:function(data){

            //성공
            if(data.result == "success"){
                    $('#tObChildInfo').empty();
                    var id        = data.data.id;
                    var imageName = data.data.imageName;
                    var childNum = data.data.childNum;
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




      // 관찰일지 텍스트 부분
    // 텍스트 취소 버튼
    $('#tObCancelBtn1').unbind("click").bind("click", function(){
      selectChildView("box1");
    });

    // 텍스트 저장 버튼
    $('#tObSaveBtn1').unbind("click").bind("click", function(){
      saveText(id, childNum);
    });

    // 텍스트 저장
    function saveText(id, childNum){
      var textMemo = $('#textMemo').val();

      var request = $.ajax({
        type:'POST',
        data: {
          id: id,
          textMemo : textMemo,
          childNum : childNum
        },
          url:'https://chesyu.run.goorm.io/MyProject/ni/uploadText.php',

         success:function(result){
          alert("메모를 등록했습니다"+result);
          $('#textMemo').val('');

          selectChildView("box1");
         }, error:function(result){
           alert("error" + result);
           selectChildView("box1");
         }

      });


    }

    // 관찰일지 그리기에서 텍스트로 전환
    $('#tObChangeTextBtn').unbind("click").bind("click", function(){
      $('#tObDraw').hide();
      $('#tObText').show();
    });

    // 관찰일지 텍스트에서 그리기로 전환
    $('#tObChangeDrawBtn').unbind("click").bind("click", function(){
      $('#tObText').hide();
      $('#textMemo').val('');
      $('#tObDraw').show();
      
      var drawCanvas = document.getElementById('drawCanvas');
  	   var drawBackup = new Array();

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
      		function saveImage(id, childNum) {
                // start
              // alert(id);
                var drawCanvas = document.getElementById('drawCanvas');
                // var test = document.getElementsByClass('')
                // "albumChildNameDiv"+id
          	var request = $.ajax({
          		type:'POST',
          		data: {
                imgUpload:drawCanvas.toDataURL('image/png'),
                id: id,
                childName : childNum
              },
          		// url:'../attach/canvasupload.php',


              	url:'https://chesyu.run.goorm.io/MyProject/ni/uploadImage.php',
                // url:'./testphp.php',

          		 success:function(result){
          		 	alert("이미지 메모를 등록했습니다"+result);
                selectChildView("box1");
          		 }, error:function(result){
                 alert("error" + result);
                 selectChildView("box1");
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

      		$('#btnPrev').unbind("click").bind("click", function() {
      			prevCanvas();
      		});

      		$('#btnClea').unbind("click").bind("click", function() {
      			clearCanvas();
      		});

          // 그리기 취소버튼
          $('#tObCancelBtn2').unbind("click").bind("click", function(){
            selectChildView("box1");
          });

          // 그리기 저장버튼
      		$('#tObSaveBtn2').unbind("click").bind("click", function() {
      			saveImage(id, childNum);
      		});
    	}
      //////////
    });
  }

  // 발달 행동 체크 클릭
  $('#box2').unbind("click").bind("click", function(){
    var whatIsBox = "box2";
    selectChildView(whatIsBox);
  });

  // 발달 행동 체크
  function developCheck(id, childNum){
    $('#childSelectBox1').hide();
    $('#tDevelopCheck').show();
    var cnt;
    // 선택한 원아 이름, 이미지 출력
  $.ajax({
      url:"https://chesyu.run.goorm.io/MyProject/ni/selectedChildImage.php",
      data:{
        id: id,
        childNum: childNum
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
                    tDevelopCheckSave(childNum);
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
        childNum: childNum
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
    function tDevelopCheckSave(childNum){
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
            childNum : childNum,
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

  // 원아지킴이 클릭

  // 사진 업로드 클릭

  // 앨범 보기 클릭
  $('#box6').unbind("click").bind("click", function(){
    allHide();
    $('#tLoginTop').show();
    $('#albumChildSelectBox').show();

    $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/childImage.php",
        data:{},
        dataType:"jsonp",
        success:function(data){
            //성공
            if(data.result == "success"){
                var cnt = data.data.length;

                $('#albumImageAndName').empty();

                for(var i = 0; i < cnt ; i++){
                    var id        = data.data[i].id;
                    var imageName = data.data[i].imageName;
                    var childNum = data.data[i].childNum;
                    var childName = data.data[i].childName;

                    var imgs = $("<img />").addClass("albumImageName"+id).attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                    var names = $("<p></p>").addClass("albumChildName"+id).text(childName);
                    var namesDiv = $("<div></div>").addClass("albumChildNameDiv"+id).attr("POST", "albumChildName").append(names);

                    // $("<div></div>").addClass("imageNameDiv"+id).append(imgs).appendTo("#imageAndName");
                    // $("<div></div>").addClass("childNameDiv"+id).append(names).appendTo("#imageAndName");

                    // $("<div></div>").addClass("imageNameDiv"+id).append(imgs).(append("<div></div>").append(names)).appendTo("#imageAndName");

                    // $("<div></div>").addClass("imageNameDiv"+id).append(imgs).append("<div></div>").addClass("childNameDiv"+id).appendTo("#imageAndName");
                    // $("childNameDiv"+id).append(childName);

                    // $("<div></div>").addClass("imageNameDiv"+id).append(imgs).appendTo("#imageAndName");
                    // $("<div></div>").addClass("childNameDiv"+id).append(childName).appendTo("imageNameDiv"+id);
                    $("<div></div>").addClass("albumImageNameDiv"+id).append(imgs).append(namesDiv).appendTo("#albumImageAndName");
                }


                if(cnt == 0)
                    $("<p></p>").text("업로드 된 이미지가 없습니다.").appendTo("#albumImageAndName");
            }
            //오류
            else {
                window.alert("오류가 발생하였습니다.");
            }
        }, error: function(){
            window.alert("서버 접속 오류가 발생하였습니다.");
        }
    });
  });

  // 공지사항 클릭

  // 출석체크 클릭

  // 발달체크 항목편집 클릭

});
