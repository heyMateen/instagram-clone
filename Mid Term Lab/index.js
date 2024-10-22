document
  .getElementById("side_bar_image")
  .addEventListener("mouseover", function () {
    document.getElementById("hoverText").style.display = "block";
  });

document
  .getElementById("side_bar_image")
  .addEventListener("mouseout", function () {
    document.getElementById("hoverText").style.display = "none";
  });
