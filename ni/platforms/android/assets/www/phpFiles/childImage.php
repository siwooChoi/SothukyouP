<?php
  $result = array();
  $callback = $_GET['callback'];
  $id = $_GET['id'];
  $resultData = 'failed';

  // 데이터베이스 연결
  $connection = mysqli_connect("localhost", "root", "0000", "ri");
  mysqli_query("set names utf8");

	$query = mysqli_query($connection, "SELECT * FROM childImage");

  if($query){
    $resultData = "success";
    $data = array();

    $num = mysqli_num_rows($query);

    for($i = 0; $i < $num; $i++){
      mysqli_data_seek($i);
      $row = mysqli_fetch_array($query);

      $id = $row['id'];
      $imageName = $row['imageName'];
	  $childName = $row['childName'];

      $data[$i] = array();
      $data[$i]['id'] = $id;
      $data[$i]['imageName'] = $imageName;
	  $data[$i]['childName'] = $childName;
    }
  }

  $result = array('result' => $resultData, 'data' => $data);

  mysqli_close($connection);

  echo $callback. "(" . json_encode($result) . ")";

?>
