// function includeHTML() {
//   var z, i, elmnt, file, xhttp;
//   /* Loop through a collection of all HTML elements: */
//   z = document.getElementsByTagName("*");
//   for (i = 0; i < z.length; i++) {
//     elmnt = z[i];
//     /*search for elements with a certain atrribute:*/
//     file = elmnt.getAttribute("w3-include-html");
//     if (file) {
//       /* Make an HTTP request using the attribute value as the file name: */
//       xhttp = new XMLHttpRequest();
//       xhttp.onreadystatechange = function () {
//         if (this.readyState == 4) {
//           if (this.status == 200) {
//             elmnt.innerHTML = this.responseText;
//           }
//           if (this.status == 404) {
//             elmnt.innerHTML = "Page not found.";
//           }
//           /* Remove the attribute, and call this function once more: */
//           elmnt.removeAttribute("w3-include-html");
//           includeHTML();
//         }
//       };
//       xhttp.open("GET", file, true);
//       xhttp.send();
//       /* Exit the function: */
//       return;
//     }
//   }
// }


document.write(`
    
    <!-- My header starts from here -->
    <header class="my-header" id="my-header">
    <!-- End of navigation bar -->
        <nav class="nav-bar flex flex-jc-sb">
            <a class="logo" href="#">AD<span id="red">FE</span>H</a>
            <div class="hide-for-mobile links">
            <a href="index.html">Accueil</a>
            <a href="programme.html">Programme</a>
            <a href="apropos.html">A propos</a>
            <a href="contact.html">Contact</a>

            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-whatsapp"></i>
            <!-- Social links: twitter, facebook, instagram, whatsapp -->
            </div>

            <div class="hide-for-desktop"><i class="fa-solid fa-bars menu"></i></div>
        </nav>
    <!-- End of navigation bar -->

        <div class="side">
            <div class="close"><i class="fa-solid fa-xmark"></i></div>

            <div class="test">
                <a href="index.html">Accueil</a>
                <a href="programme.html">Programme</a>
                <a href="apropos.html">A propos</a>
                <a href="contact.html">Contact</a>
            </div>
        </div>
    </header>

    <!-- My header ends from here -->

`)
