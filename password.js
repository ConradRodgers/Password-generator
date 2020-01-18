//Generate random password
function generate() {
  //sets password length and complexity
  let complexity = document.getElementById("slider").value;

  //password values??????????<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<,
  let values =
    "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890!@!#$%^&*()";
  let password = "";

  // for loop for chooing chars have question
  for (var i = 0; i <= complexity; i++) {
    password =
      password +
      values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }

  // insert password to display

  document.getElementById("display").value = password;

  //list out/ PRINT TO SCREEN old passwords
  document.getElementById("lastNums").innerHTML +=
    password + "<br />" + "<br />";
}

// default slider setting
document.getElementById("length").innerHTML = "Length: 8";

//slider readout display

document.getElementById("slider").oninput = function() {
  if (document.getElementById("slider").value > 0) {
    document.getElementById("length").innerHTML =
      "Length:" + document.getElementById("slider").value;
  } else {
    document.getElementById("length").innerHTML = "Length: 1";
  }
};

function copyPassword() {
  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Your Password has been copied");
}
