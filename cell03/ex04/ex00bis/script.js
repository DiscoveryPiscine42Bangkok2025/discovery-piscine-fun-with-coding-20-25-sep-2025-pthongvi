$(document).ready(function () {
  let size = 200;

  $("#balloon").click(function () {
    size += 10;
    if (size > 420) size = 200; // reset
    $(this).css({ width: size + "px", height: size + "px" });
  });

  $("#balloon").mouseleave(function () {
    size -= 5;
    if (size < 200) size = 200;
    $(this).css({ width: size + "px", height: size + "px" });
  });
});