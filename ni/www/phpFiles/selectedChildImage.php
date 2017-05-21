<?php
  $result = array();
  $callback = $_GET['callback'];
  $id = $_GET['id'];
  $resultData = 'failed';

//   // 데이터베이스 연결
  $connection = mysqli_connect("localhost", "root", "0000", "ri");
  mysqli_query("set names utf8");

//   // id값으로 사진 찾기
  $query = mysqli_query($connection, "SELECT * FROM childImage where id = {$id}");

	// $query = mysqli_query($connection, "SELECT id FROM childImage where id=1");


  if($query){
    $resultData = "success";
    $data = array();

      mysqli_data_seek($i);
      $row = mysqli_fetch_array($query);

      $id = $row['id'];
      $imageName = $row['imageName'];
	  $childName = $row['childName'];

      $data['id'] = $id;
      $data['imageName'] = $imageName;
	  $data['childName'] = $childName;
  }

  $result = array('result' => $resultData, 'data' => $data);
 	 mysqli_close($connection);

  echo $callback."(" . json_encode($result) . ")";

?>
