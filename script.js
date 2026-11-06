function calculate() {
  var obtained = Number(document.getElementById("obtained").value);
  var total = Number(document.getElementById("total").value);

  if (total <= 0) {
    document.getElementById("result").innerText = "Please enter valid total marks.";
    return;
  }

  var percentage = (obtained / total) * 100;
  document.getElementById("result").innerText = "Your percentage is " + percentage.toFixed(2) + "%";
}