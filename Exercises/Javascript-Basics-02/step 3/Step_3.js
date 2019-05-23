 //var x=document.createElement('div');
  //  document.body.appendChild(x);
  //  var m = document.querySelector('#name');
  //  m.addEventListener('keyup',function(){
  //    x.innerHTML=m.value;
   // }) 

   var a = document.createElement("div");
   document.body.appendChild(a);
   var c = document.querySelector("div");
   
   var d = document.querySelector("#name");
   d.oninput = function() {
    c.innerHTML = d.value 
   }
   

   
