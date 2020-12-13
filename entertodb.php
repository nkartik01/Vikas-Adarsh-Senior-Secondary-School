<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
<body>
<?php
  $servername = "localhost";
  $username = "vikassc1_student";
  $password = "kartik01";
  $database = "vikassc1_student";
  // Create connection
  $conn = new mysqli($servername, $username, $password);

  // Check connection
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  $conn->query("use ".$database);
  if($_POST['uid']==''){
    $uid='NULL';
  }
  else{
    $uid=$_POST['uid'];
  }

  $sql='insert into student values("'.$_POST['name'].'","'.$_POST['father'].'","'.$_POST['mother'].'","'.$_POST['class'].'",'.$uid.',"'.$_POST['dob'].'",'.$_POST['mobile'].',"'.$_POST['address'].'","'.date('Y-m-d H:i:s').'")';
  if ($conn->query($sql) === TRUE) {
	echo '<div class="card"  id="mydiv" >
                  <div class="card-body">
                    <h5 class="card-title">
                      <h4>
                          You have been registered for Admission.
                      </h4>
                    </h5>
		<p class="card-text">Admission subject to Rules & Regulations</p>
                    <p class="card-text">Complete Fee detail for session 2020-21</p>
                    <a href="feelist.html" class="btn btn-primary">Proceed to See Fee for a class</a>
                  </div>
                </div>';
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

  $conn->close();
?>
</body>
</html>