$(document).ready(function(){

  // 실행시 바로 로그인화면 보여주기
    // $('#notLoginTop').show();
    // $('#notLoginView').show();


  // 실행시 바로 교사메인 보여주기
  // $('#notLoginTop').hide();
  // $('#notLoginView').hide();

  allHide();
  $('#tLoginTop').show();
  $('#teacherMain').show();

  function setEvent(){

  }



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
    $('#tObChildInfo').empty();



  }

// 사이드메뉴 슬라이드
  $("#sideMenuBtn").unbind("click").bind("click", function(){
      $("#sideMenuListDiv").toggle("slide",{direction:"left"},500,null);
  });

  $("#mainContent").unbind("click").bind("click", function(){
      $("#sideMenuListDiv").hide("slide",{direction:"left"},500,null);
  });


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

  // 관찰일지 작성 도우미 클릭
  $('#box1').unbind("click").bind("click", function(){
    selectChildView();
  });

  // 원아 선택화면
  function selectChildView(){
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
                    var childName = data.data[i].childName;
                    var imageComment = data.data[i].imageComment;

                    var imgs = $("<img />").addClass("imageName"+id).attr("src","https://chesyu.run.goorm.io/MyProject/ni/image/"+imageName);
                    var names = $("<p></p>").addClass("childName"+id).text(childName);
                    var namesDiv = $("<div></div>").addClass("childNameDiv"+id).append(names);

                    $("#childSelect1").append("<div></div>").addClass('selectImgAndName'+id);
                    $("<div></div>").addClass("imageNameDiv"+id).append(imgs).append(namesDiv).appendTo(".selectImgAndName"+id);

                    (function(id){

                    $(".imageNameDiv"+id).unbind("click").bind("click",function(){
                      // alert(id);
                        tObservation(id, childName);
                    });

                  }(id));
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

  // 관찰일지 작성 도우미
  function tObservation(id, childName){
      // alert(id);
      $('#childSelectBox1').hide();
      $('#tObservation').show();
      $('#tObText').show();
    $.ajax({
        url:"https://chesyu.run.goorm.io/MyProject/ni/selectedChildImage.php",
        data:{
          id: id,
          childName
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

      // 관찰일지 텍스트 부분
    // 텍스트 취소 버튼
    $('#tObCancelBtn1').unbind("click").bind("click", function(){
      selectChildView();
    });

    // 텍스트 저장 버튼
    $('#tObSaveBtn1').unbind("click").bind("click", function(){
      alert();
    });

    // 관찰일지 텍스트에서 그리기로 전환
    $('#tObChangeDrawBtn').unbind("click").bind("click", function(){
      $('#tObText').hide();
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
      		function saveImage(id) {
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
                childName : childName
              },
          		// url:'../attach/canvasupload.php',
              	url:'https://chesyu.run.goorm.io/MyProject/ni/uploadImage.php',
                // url:'./testphp.php',

          		 success:function(result){
          		 	alert("이미지 메모를 등록했습니다"+result);
                selectChildView();
          		 }, error:function(result){
                 alert("error" + result);
                 selectChildView();
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
            selectChildView();
          });

          // 그리기 저장버튼
      		$('#tObSaveBtn2').unbind("click").bind("click", function() {
      			saveImage(id);
      		});
  	}
    //////////


  });

    // 관찰일지 그리기에서 텍스트로 전환
    $('#tObChangeTextBtn').unbind("click").bind("click", function(){
      $('#tObDraw').hide();
      $('#tObText').show();
    });

  }





  // 발달 행동 체크 클릭

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
