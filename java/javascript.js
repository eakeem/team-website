function emailnews(){
    document.getElementById("email").innerHTML
    alert("You have subscribe to our newsletter");
}
var Mainimage= document.getElementById("Mainimage");
var smallimg= document.getElementsByClassName("smallimg");
smallimg[0].onclick=function(){
  Mainimage.src= smallimg[0].src;  
}
smallimg[1].onclick=function(){
  Mainimage.src= smallimg[1].src;  
}
smallimg[2].onclick=function(){
  Mainimage.src= smallimg[2].src;  
}
smallimg[3].onclick=function(){
  Mainimage.src= smallimg[3].src;  
}
smallimg[4].onclick=function(){
  Mainimage.src= smallimg[4].src;  
}








var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}






function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




var modal2 = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}



function MyFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}













