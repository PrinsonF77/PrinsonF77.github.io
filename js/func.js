window.onload= function(){
var btn = document.getElementById("btn");
console.log(btn)
//Gets the element with id=btn
//When the user scrolls the window,following function is executed
window.onscroll= function() {scrollFunction()};
function scrollFunction(){
  if(document.body.scrollTop>20 || document.documentElement.scrollTop>20){
    btn.style.display = "block";
  }
  else{
    btn.style.display = "none";
  }
}

//When the user clicks on back to top button the following function is executed
btn.onclick=function(){
  document.body.scrollTop=0;//For Safari
  document.documentElement.scrollTop=0;//For Chrome,Firefox
}
}
