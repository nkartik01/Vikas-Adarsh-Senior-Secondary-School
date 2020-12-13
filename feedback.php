<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <meta charset="utf-8">
    <title>Result</title>
    <style media="screen">
      .error{
        color: red;
        text-align: left;
      }
      #myHiddenPage{
        display:none;
      }
      @media (min-width: 992px){
        .navbar li {
          margin-left : 1.8em;
          margin-right : 1.8em;
          font-weight: bold;
        }
        form{
          text-align: center;
          display: inline-block;
          align: center;
          width: 65%;
          margin-left: 15%;
          margin-right: 20%;
        }
        .col-25 {
          float: left;
          width: 25%;
          margin-top: 6px;
        }

        .col-75 {
          float: left;
          width: 75%;
          margin-top: 6px;
        }
      }
      label{
        font-weight: bold;
      }
      .nav-item{
        font-size: 20px;
      }
    </style>
    <script>
      var num=0
      var val=0
      function basic(){
        num=document.getElementById('mobile1').value;
        if (num.length!=10){
          document.getElementById("mob_error").innerHTML='Please enter a valid Mobile Number'
          e5=1;
        }
        else{
          document.getElementById("mob_error").innerHTML='';
          e5=0;
        }

        feedback=document.getElementById('feedback').value;
//        console.log(roll.length,roll.length>4,roll.length<2)

        if (feedback.length<3){
          document.getElementById("feed_error").innerHTML='Enter fedback'
          e6=1;
        }
        else{
          document.getElementById("feed_error").innerHTML='';
          e6=0;
        }
        //if(e5==0 && e6==0){
          //document.getElementById('submit').click()
        //}

         if(e5==0 && e6==0){
           var o=document.getElementById("initial")
        //   <!-- console.log(o) -->
           o.style.display='none'
           var o=document.getElementById("otp_div").removeAttribute('hidden');
           send_otp();
           return false
         }
      }
      function send_otp(){
        val = Math.floor(1000 + Math.random() * 9000);
        msg1="Dear%20Parent/Guest,%20"+val+"%20is%20the%20OTP%20for%20feedback.%20Valid%20for%205%20minutes-Vikas%20Adarsh%20S%20S%20School-www.vikasschoolabohar.com"
        msg2="http://smscgateway.com/messageapi.asp?username=kartikent&password=123456&sender=VASSSA&mobile="+num+"&message="+msg1
        $('#myHiddenPage').load(msg2);

	      // var winmsg=window.open(msg2,'_blank','location=no,scrollbars=yes,status=no,toolbar=no,addressbar=no,resizable=yes','name');
        // window.focus()
        // window.setTimeout(function () {
        //   winmsg.close()
        // }, ss);
      }
      function validate_otp(){
        var entered_otp=document.getElementById('otp').value;
        if (entered_otp==val){
	document.getElementById('submit').click();           
          
        }
        else{
          document.getElementById('otp_error').innerHTML='Wrong OTP Entered.'
        }
      }
    </script>
    <style media="screen">
      .error{
        color: red;
        text-align: left;
      }
      #myHiddenPage{
        display:none;
      }
      @media (min-width: 992px){
        .navbar li {
          margin-left : 1.8em;
          margin-right : 1.8em;
          font-weight: bold;

        }
        .form_group{
          opacity: 0.8;
        }
      }
      @media (min-width: 992px){
        form{
          text-align: center;
          display: inline-block;
          align: center;
          width: 65%;
          margin-left: 15%;
          margin-right: 20%;
        }
        td{
          font-weight: bold;
          font-size: 20px;
          color: red;
        }
        .col-25 {
          float: left;
          width: 25%;
          margin-top: 6px;
        }

        .col-75 {
          float: left;
          width: 75%;
          margin-top: 6px;
        }
      }
      label{
        font-weight: bold;
      }
      .nav-item{
        font-size: 20px;
      }
      body{
        opacity: 0.8;
      }
    </style>
    <script src="nav.js"></script>
  </head>

  <body style="background-image: url('logo1.png');background-size: 100% 100%;background-repeat:no-repeat;margin-left: auto;margin-right: auto;width: 100%;background-attachment: fixed;  ">
    <script>
      display_nav();
    </script>
    <form  id='form1' action="" method="post">
      <div id='initial'>
        <div class="form-group row">
          <div class="col-25">
            <label for="class">Class</label>
          </div>
          <div class="col-75">
            <select class="form-control" name="class">
              <option value="nur">Nursery</option>
              <option value="kg">KG</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="+1">+1</option>
              <option value="+2">+2</option>
            </select>
            <p></p>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-25">
            <label for="mobile">Mobile Number</label>
          </div>
          <div class="col-75">
            <input type="number" class="form-control" id="mobile1" name="mobile1" placeholder="Enter Mobile Number" required>
            <p id="mob_error" class="error"></p>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-25">
            <label for="feedback">Feedback/Suggession</label>
          </div>
          <div class="col-75">
            <textarea rows="5" type="text" class="form-control" id="feedback" name="feedback" placeholder="Enter Feedback/ Suggessions" required></textarea>
            <p id="feed_error" class="error"></p>
          </div>
        </div>
        <input type="submit" name="submit" id="submit" hidden>
        <button type="button" class='btn btn-primary' onclick="basic()" id="next">Next</button>
      </div>
      <div class="form-group" hidden id="otp_div">
        <label for="otp" >Enter the OTP recieved on your mobile number</label>
        <input type="number" name="otp"  class="form-control" id='otp'><br>
        <button type="button" class="btn btn-primary" onclick="validate_otp()" >Submit</button>
        <button type='button' class="btn btn-primary" onclick="send_otp()">Resend OTP</button>
        <p id="otp_error" class="error"></p>
      </div>
      <div id='myHiddenPage'></div>

    </form>

    <script>
      function send_result(){
        msg1=document.getElementById('res_to_send').innerHTML;
        num=document.getElementById('mobile_p').innerHTML;
//	sms_result(num,msg1);
      };
    </script>
    <?php
      if (isset($_POST['submit'])) {
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
        $sql='insert into feedback values("'.$_POST['class'].'",'.$_POST['mobile1'].',"'.$_POST['feedback'].'","'.gmdate_to_mydate(date('Y-m-d H:i:s')).'")';
//	echo $sql;
        $conn->query($sql);
              echo "<h3 style='text-align: center;'><br><br>Thanks for your feedback/suggessions. - Principal</h3><br><br>";
        
        
       $conn->close();

      }

function gmdate_to_mydate($gmdate){
	/* $gmdate must be in YYYY-mm-dd H:i:s format*/
	$timezone=date_default_timezone_get();
	$userTimezone = new DateTimeZone($timezone);
	$gmtTimezone = new DateTimeZone('GMT');
	$myDateTime = new DateTime($gmdate, $gmtTimezone);
	$offset = $userTimezone->getOffset($myDateTime);
	return date("Y-m-d H:i:s", strtotime($gmdate)+$offset);
}
    ?>


  </body>
</html>