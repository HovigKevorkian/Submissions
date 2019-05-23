var images = document.querySelectorAll("img");
 var x;

    function MyFunction(x) {
        images[x-1].src= "images/image" +  x + "_2.jpg";
    }
    function MouseOut(x) {
        images[x-1].src= "images/image" +  x + ".jpg";
    }