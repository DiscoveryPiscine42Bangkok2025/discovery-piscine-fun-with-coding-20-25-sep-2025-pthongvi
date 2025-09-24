$(document).ready(function () {
  const colors = ["lightblue", "lightgreen", "lightpink", "lavender", "beige"];

  $("#changeBtn").click(function () {
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    $("body").css("background-color", randomColor);
  });
});