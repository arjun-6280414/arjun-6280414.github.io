// This code will make the logo follow the user's scroll position.
window.onscroll = function() {
  var logo = document.getElementById("logo");
  var top = window.pageYOffset;
  logo.style.top = top + "px";
};

