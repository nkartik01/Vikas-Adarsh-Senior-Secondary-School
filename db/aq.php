<?php
{
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
    //$sql='select * from student';
       $sql='select (@row_number:=@row_number + 1) AS num,time,name,father,mother,mobile,class,address,uid,dob from student';
    $result=$conn->query($sql);

    if ($result->num_rows > 0) {
      // output data of each row
echo "<table border='2px solid black'><tr><td>Sr</td><td>timestamp</td><td>name</td><td>father</td><td>mother</td><td>mobile</td><td>class</td><td>address</td><td>uid</td><td>dob</td></tr>";
      while($row = $result->fetch_assoc()) {
          echo "<tr><td>".$row['num']."</td><td>".$row['time']."</td><td>".$row['name'].'</td><td>'.$row['father'].'</td><td>'.$row['mother'].'</td><td>'.$row['mobile'].'</td><td>'.$row['class'].'</td><td>'.$row['address'].'</td><td>'.$row['uid'].'</td><td>'.$row['dob'].'</td></tr>';
      }
      echo "</table>";
    }
    else {
        echo "<h1>No entry</h1>";
    }
    $conn->close();

  }
?>
