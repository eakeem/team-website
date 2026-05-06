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





/* document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent actual submission for demo
  var toastEl = document.getElementById("successToast");
  var toast = new bootstrap.Toast(toastEl);
  toast.show();
  this.reset(); // clear form fields
});
 */

document.getElementById("newsletterForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent actual submission
  var toastEl = document.getElementById("successToast");
  var toast = new bootstrap.Toast(toastEl, { delay: 5000 }); // auto-dismiss after 5s
  toast.show();
  this.reset(); // clear form fields
});


















