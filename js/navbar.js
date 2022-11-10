

window.onscroll = () => stickyNav();

var mynavbar = document.getElementById("my-header");

var sticky = mynavbar.offsetTop;

function stickyNav() {

  if (window.pageYOffset > sticky) mynavbar.classList.add("fixed");
    
  else  mynavbar.classList.remove("fixed");

} 