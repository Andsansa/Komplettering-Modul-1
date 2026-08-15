document.addEventListener("DOMContentLoaded", function() {
  var picker = document.getElementById("style-picker");
  var menuBtn = document.getElementById("menu-btn");
  var menu = menuBtn.nextElementSibling;

  try {
    var saved = localStorage.getItem("styleChoice");
    if (saved) {
      picker.value = saved;
      changeColorNow();
    }
  } catch (e) {}

  picker.addEventListener("change", changeColorNow);

  menuBtn.addEventListener("click", function() {
    if (window.getComputedStyle(menu).display === "none") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});

  window.addEventListener("resize", function() {
    menu.style.display = "";
  });
});

function changeColorNow() {
  var picker = document.getElementById("style-picker");

  var colors = {
    standard: "#f7f4f480",
    blue: "#0070f8",
    red: "#ff0000",
    green: "#029902"
  };

  var color = colors[picker.value] || colors.standard;
  document.body.style.backgroundColor = color;

  try {
    localStorage.setItem("styleChoice", picker.value);
  } catch (e) {}
}