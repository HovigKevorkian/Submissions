 var images = document.querySelectorAll("img");
 var x;
// imag.onmouseover = function ChangeImages() { 
    // images = document.querySelector("img");
    // images.src = "images/image1_2.jpg"; 
    // }
    function MyFunction(x) {
        images[x-1].src= "images/image" +  x + "_2.jpg";
    }