window.onscroll = function() {myFunction()};

var myHeader = document.getElementById("my-header");
var sticky = myHeader.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    myHeader.classList.add("sticky")
  } else {
    myHeader.classList.remove("sticky");
  }
}