window.onscroll = function() {myFunction()};

var myHeader = document.getElementById("my-header");
var sticky = myHeader.offsetTop;

function myFunction() {  // Before I used pageYOffset
  if (window.scrollY >= sticky) {
    myHeader.classList.add("sticky")
    // myHeader.classList.add("boxShadow")

  } else {
    myHeader.classList.remove("sticky");
    // myHeader.classList.remove("boxShadow")
  }
}