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
    $sql='select * from feedback';
    $result=$conn->query($sql);

    if ($result->num_rows > 0) {
      // output data of each row
echo "<table border='2px solid black'><tr><td>Date-time</td><td>class</td><td>mobile</td><td>feedback</td></tr>";
      while($row = $result->fetch_assoc()) {
          echo "<tr><td>".$row['time'].'</td><td>'.$row['class'].'</td><td>'.$row['mobile'].'</td><td>'.$row['feedback'].'</td></tr>';
      }
      echo "</table>";
    }
    else {
        echo "<h1>No entry</h1>";
    }
    $conn->close();

  }
?>
