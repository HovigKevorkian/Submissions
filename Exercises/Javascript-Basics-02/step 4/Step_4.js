 var a = document.querySelectorAll("input");
var b = document.querySelector("button");
// var c = "Do you want to delete all?"
b.addEventListener("click" , function() {
    var c = confirm("Are you sure? Yes or No"); 
      if(c == true) {
         a[0].value = " ";
         a[1].value = " ";
         a[2].value = " ";
        // document.querySelector("#name").value = " ";
        // document.querySelector("#surname").value = " ";
        // document.querySelector("#city").value = " ";
      }
    }, false );
    
    



