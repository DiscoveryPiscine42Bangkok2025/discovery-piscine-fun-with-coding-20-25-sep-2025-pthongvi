$(document).ready(function () {
  // เพิ่ม Task
  $("#addTask").click(function () {
    let taskText = $("#taskInput").val();
    if (taskText !== "") {
      $("#taskList").append(
        `<li>${taskText} <button class="deleteBtn">X</button></li>`
      );
      $("#taskInput").val("");
    }
  });

  // กดที่ task → ทำเสร็จแล้ว
  $(document).on("click", "li", function () {
    $(this).toggleClass("done");
  });

  // ลบ task
  $(document).on("click", ".deleteBtn", function (e) {
    e.stopPropagation(); // ป้องกันไม่ให้ไป toggle class
    $(this).parent().remove();
  });
});