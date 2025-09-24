$(document).ready(function () {
  $("#addBox").click(function () {
    $("#container").append('<div class="box"></div>');
  });

  $("#removeBox").click(function () {
    $("#container .box").last().remove();
  });
});