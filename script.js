function dispChar(val) {
  document.getElementById("disp").value += val;
}

function allClear() {
  const disp = document.getElementById("disp");
  disp.value = "";
  disp.placeholder = "0";
}
function deleteChar() {
  var curr_val = document.getElementById("disp").value;
  curr_val = curr_val.slice(0, -1);
  document.getElementById("disp").value = curr_val;
}
function result() {
  try {
    var exp = document.getElementById("disp").value;
    var result = math.evaluate(exp).toString();
    document.getElementById("disp").value = result;
  } catch (error) {
    document.getElementById("disp").value = "Error!!";
  }
}

function lightDarkToggle() {
  const lightDarkIcon = document.getElementById("light-dark");
  const mid = document.getElementById("mid-body");
  const navbar = document.getElementById("nav-bar");
  const textColor = document.body;
  const calcBody = document.getElementById("calc-body");

  if (lightDarkIcon.classList.contains("fa-lightbulb")) {
    lightDarkIcon.classList.remove("fa-lightbulb");
    lightDarkIcon.classList.add("fa-moon");

    textColor.style.color = "#ffffff";

    navbar.style.backgroundColor = "#444546";
    mid.style.backgroundColor = "#222223";

    calcBody.style.backgroundColor = "#3c3c8e";
    calcBody.style.boxShadow = "4px 4px 18px rgb(249, 247, 247)";
  } else {
    lightDarkIcon.classList.remove("fa-moon");
    lightDarkIcon.classList.add("fa-lightbulb");

    textColor.style.color = "#ffffff";

    navbar.style.backgroundColor = "#7fa3ff";
    mid.style.backgroundColor = "#ffffff";

    calcBody.style.backgroundColor = "#7fa3ff";
    calcBody.style.boxShadow = "4px 4px 18px rgb(0, 0, 0)";
  }
}
