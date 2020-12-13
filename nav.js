function display_nav() {
  document.write(
    '\
<table style="width:100%">\
<tbody style="width:100%">\
<tr><td><img src="logo.jpg" alt="logo" style="width:80px"></td>\
       <td><h2 style="color:Red"><center><b>VIKAS ADARSH SENIOR SECONDARY SCHOOL</b></center></h2>\
	<marquee behavior="alternate" bgcolor="#bb3434" direction="left" height:="" loop="7" scrollamount="1" scrolldelay="2" width="100%" style="text-align:center">\
 <span style="font-size: 16px;color:#FFFFFF">Affiliated to Punjab School Education Board from Nur to 10+2 Arts, Medical & Non Medical</span></marquee>\
</td>\
       <td><h6><center style="color:Blue">Malout Road, NH-9, <br>ABOHAR - PUNJAB. <br>Ph 98761-25809, 01634-221143 <br>E-mail : vikasschool1972@gmail.com</h6></center></td>\
</tr>\
<tr><td colspan="3">\
  <nav id="menu">\
  <label for="tm" id="toggle-menu">Navigation <span class="btn drop-icon">Expand ▾</span></label>\
  <input type="checkbox" id="tm">\
  <ul class="main-menu clearfix">\
    <li><a href="index.html">Home \
        <label title="Toggle Drop-down" class="btn drop-icon" for="sm1">Expand ▾</label>\
      </a>\
      <input type="checkbox" id="sm1">\
      <ul class="sub-menu">\
        <li><a href="H_Soc_Regn.pdf">Society Registration</a></li>\
        <li><a href="H_reco_affi.pdf">Recognition and Affiliation</a></li>\
        <li><a href="H_open_affiliation.pdf">Affiliation Open School</a></li>\
        <li><a href="H_fire_safety.pdf">Fire Safety</a></li>\
        <li><a href="H_b_safety.pdf">Building Safety</a></li>\
        <li><a href="#">Infrastructure</a></li>\
      </ul>\
    </li>\
    <li><a href="index.html">General \
        <label title="Toggle Drop-down" class="btn drop-icon" for="sm2">Expand ▾</label>\
      </a>\
      <input type="checkbox" id="sm2">\
      <ul class="sub-menu">\
        <li><a href="syllabus.html">Syllabus</a></li>\
        <li><a href="timing.html">School Calender</a></li>\
        <li><a href="uniform.html">Uniform</a></li>\
        <li><a href="books.html">Books</a></li>\
        <li><a href="feelist.html">Fee Structure (2020-21)</a></li>\
      </ul>\
    </li>\
    <li><a href="index.html">Student-Parent Section\
        <label title="Toggle Drop-down" class="btn drop-icon" for="sm3">Expand ▾</label>\
      </a>\
      <input type="checkbox" id="sm3">\
      <ul class="sub-menu">\
        <li><a href="#">Attendance</a></li>\
        <li><a href="admission_form.html">Online Admission</a></li>\
        <li><a href="feepayment.html">Online Fee Payment</a></li>\
        <li><a href="https://www.vikasschool.moodlecloud.com/course">Daily Home Work</a></li>\
        <li><a href="feedback.php">Parent Feedback</a></li>\
      </ul>\
    </li>\
    <li><a href="index.html">Co-Curricular\
        <label title="Toggle Drop-down" class="btn drop-icon" for="sm4" align="right">Expand ▾</label>\
      </a>\
      <input type="checkbox" id="sm4">\
      <ul class="sub-menu">\
        <li><a href="#">Sports</a></li>\
        <li><a href="#">Annual Function</a></li>\
        <li><a href="uniform.html">Prize Distribution</a></li>\
        <li><a href="uniform.html">Scout-Guide Camp</a></li>\
      </ul>\
    </li>\
    <li><a href="index.html">Examination\
        <label title="Toggle Drop-down" class="btn drop-icon" for="sm5">Expand ▾</label>\
      </a>\
      <input type="checkbox" id="sm5">\
      <ul class="sub-menu">\
        <li><a class="dropdown-item" href="datesheet.html">DateSheet</a></li>\
        <li><a class="dropdown-item" href="result.php">Result</a></li>\
      </ul>\
    </li>\
    <li><a href="contact.html">Contact Us</a></li>\
  </ul>\
  </nav>\
</td>\
 <!-- <nav class="navbar navbar-expand-lg navbar-light bg-light" style="background-color:#000093>\
    //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\
    //     <span class="navbar-toggler-icon"></span>\
    //   </button>\
    //   <div class="collapse navbar-collapse" id="navbarNav">\
    //     <ul class="navbar-nav  mr-auto mt-2 mt-lg-0">\
    //       <li class="nav-item dropdown">\
    //         <a id="home_dropdown" class="nav-link" href="index.html" style="font-weight: bold;">Home</a>\
    //         <ul class="dropdown-menu " aria-labelledby="home_dropdown">\
    //           <li><a class="dropdown-item"\
    //           <li><a class="dropdown-item"\
    //           <li><a class="dropdown-item" href="H_open_affiliation.pdf">Affiliation Open School</a></li>\
    //           <li><a class="dropdown-item" href="H_fire_safety.pdf">Fire Safety</a></li>\
    //           <li><a class="dropdown-item" href="H_b_safety.pdf">Building Safety</a></li>\
    //           <li><a class="dropdown-item" href="#">Infrastructure</a></li>\
    //         </ul>\
    //       </li>\
    //       <li class="nav-item dropdown">\
    //         <a id="general_dropdown" class="nav-link" href="index.html" style="font-weight: bold;">General</a>\
    //         <ul class="dropdown-menu" aria-labelledby="general_dropdown">\
    //           <li><a class="dropdown-item" href="syllabus.html">Syllabus</a></li>\
    //           <li><a class="dropdown-item" href="timing.html">School Calender</a></li>\
    //           <li><a class="dropdown-item" href="uniform.html">Uniform</a></li>\
    //           <li><a class="dropdown-item" href="books.html">Books</a></li>\
    //           <li><a class="dropdown-item" href="feelist.html">Fee Structure (2020-21)</a></li>\
    //         </ul>\
    //       </li>\
    //       <li class="nav-item dropdown">\
    //         <a id="student_dropdown" class="nav-link" href="index.html" style="font-weight: bold;">Student-Parent Section</a>\
    //         <ul class="dropdown-menu" aria-labelledby="student_dropdown">\
    //           <li><a class="dropdown-item" href="#">Attendance</a></li>\
    //           <li><a class="dropdown-item" href="admission_form.html">Online Admission</a></li>\
    //           <li><a class="dropdown-item" href="feepayment.html">Online Fee Payment</a></li>\
    //           <li><a class="dropdown-item" href="https://www.vikasschool.moodlecloud.com/course">Daily Home Work</a></li>\
    //           <li><a class="dropdown-item" href="feedback.php">Parent Feedback</a></li>\
    //         </ul>\
    //       </li>\
    //       <li class="nav-item dropdown">\
    //         <a id="cocurricular_dropdown" class="nav-link" href="index.html" style="font-weight: bold;">Co-Curricular</a>\
    //         <ul class="dropdown-menu" aria-labelledby="cocurricular_dropdown">\
    //           <li><a class="dropdown-item" href="#">Sports</a></li>\
    //           <li><a class="dropdown-item" href="#">Annual Function</a></li>\
    //           <li><a class="dropdown-item" href="uniform.html">Prize Distribution</a></li>\
    //           <li><a class="dropdown-item" href="uniform.html">ScoutGuide Camp</a></li>\
    //         </ul>\
    //       </li>\
    //       <li class="nav-item dropdown">\
    //         <a id="examination_dropdown" class="nav-link" href="index.html" style="font-weight: bold;">Examination</a>\
    //         <ul class="dropdown-menu" aria-labelledby="examination_dropdown">\
    //           <li><a class="dropdown-item" href="datesheet.html">DateSheet</a></li>\
    //           <li><a class="dropdown-item" href="result.php">Result</a></li>\
    //         </ul>\
    //       </li>\
    //       <li class="nav-item">\
    //         <a class="nav-link" href="contact.html">Contact Us</a>\
    //       </li>\
    //     </ul>\
    //   </div>\
    // </nav>-->\
    <style media="screen">\
    #menu ul {\
  margin: 0;\
  padding: 0;\
}\
\
#menu .main-menu {\
  display: none;\
  width:100%;\
}\
\
#tm:checked + .main-menu {\
  display: block;\
}\
\
#menu input[type="checkbox"], \
#menu ul span.drop-icon {\
  display: none;\
}\
\
#menu li, \
#toggle-menu, \
#menu .sub-menu {\
  border-style: solid;\
  border-color: rgba(0, 0, 0, .05);\
}\
\
#menu li, \
#toggle-menu {\
  border-width: 0 0 1px;\
}\
\
#menu .sub-menu {\
  background-color: #444;\
  border-width: 1px 1px 0;\
  margin: 0 1em;\
}\
\
#menu .sub-menu li:last-child {\
  border-width: 0;\
}\
\
#menu li, \
#toggle-menu, \
#menu a {\
  position: relative;\
  display: block;\
  color: white;\
  text-shadow: 1px 1px 0 rgba(0, 0, 0, .125);\
}\
\
#menu, \
#toggle-menu {\
  background-color: #09c;\
}\
\
#toggle-menu, \
#menu a {\
  padding: 1em 1.5em;\
}\
\
#menu a {\
  transition: all .125s ease-in-out;\
  -webkit-transition: all .125s ease-in-out;\
}\
\
#menu a:hover {\
  background-color: white;\
  color: #09c;\
}\
\
#menu .sub-menu {\
  display: none;\
}\
\
#menu input[type="checkbox"]:checked + .sub-menu {\
  display: block;\
}\
\
label.btn{\
  align: right;\
  text-align: right;\
}\
#menu .sub-menu a:hover {\
  color: #444;\
}\
\
#toggle-menu .drop-icon, \
#menu li label.drop-icon {\
  position: absolute;\
  right: 1.5em;\
  top: 1.25em;\
}\
\
#menu label.drop-icon, #toggle-menu span.drop-icon{\
border-radius: 0%;\
  width: 8em;\
  text-align: center;\
  background-color: rgba(0, 0, 0, .125);\
  text-shadow: 0 0 0 transparent;\
  color: rgba(255, 255, 255, .75);\
}\
\
#menu .drop-icon {\
  line-height: 1;\
}\
    @media only screen and (max-width: 1480px) and (min-width: 1000px) {\
    body{\
        font-size:20px;\
    }\
  #menu li {\
    width: auto;\
  }\
\
  #menu .sub-menu li {\
    width: auto;\
  }\
}\
\
@media only screen and (min-width: 1000px) {\
  #menu .main-menu {\
    display: block;\
  }\
\
  #toggle-menu,\
  #menu label.drop-icon {\
    display: none;\
  }\
\
  #menu ul span.drop-icon {\
    display: inline-block;\
  }\
\
  #menu li {\
    float: left;\
    border-width: 0 1px 0 0;\
  }\
\
  #menu .sub-menu li {\
    float: none;\
  }\
\
  #menu .sub-menu {\
    border-width: 0;\
    margin: 0;\
    position: absolute;\
    top: 100%;\
    left: 0;\
    width: 12em;\
    z-index: 3000;\
  }\
\
  #menu .sub-menu,\
  #menu input[type="checkbox"]:checked + .sub-menu {\
    display: none;\
  }\
\
  #menu .sub-menu li {\
    border-width: 0 0 1px;\
  }\
\
  #menu .sub-menu .sub-menu {\
    top: 0;\
    left: 100%;\
  }\
\
  #menu li:hover > input[type="checkbox"] + .sub-menu {\
    display: block;\
  }\
}\
    </style>\
</tr></tbody></table>\
  '
  );
}
function sms_result(num, msg1) {
  msg2 =
    "http://smscgateway.com/messageapi.asp?username=kartikent&password=123456&sender=VASSSA&mobile=" +
    num +
    "&message=" +
    msg1;
  $("#myHiddenPage").load(msg2);
}
function otp_div() {
  document.write(
    '\
        <div class="form-group" hidden id="otp_div">\
            <label for="otp" >Enter the OTP recieved on your mobile number</label>\
            <input type="number" name="otp"  class="form-control" id="otp">\
            <br>\
            <button type="button" class="btn btn-primary" onclick="validate_otp()" >Submit</button>\
            <button type="button" class="btn btn-primary" onclick="send_otp()">Resend OTP</button>\
            <p id="otp_error" class="error"></p>\
        </div>\
    '
  );
}
function validate_otp() {
  var entered_otp = document.getElementById("otp").value;
  if (entered_otp == val) {
    document.getElementById("form1").submit();
  } else {
    document.getElementById("otp_error").innerHTML = "Wrong OTP Entered.";
  }
}
