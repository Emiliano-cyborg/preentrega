document.addEventListener("DOMContentLoaded", function() {
    var dropdownToggle = document.querySelector(".dropdown__link");
    var megamenu = document.querySelector(".megamenu");
  
    dropdownToggle.addEventListener("click", function() {
      megamenu.classList.toggle("active");
    });
  });
  