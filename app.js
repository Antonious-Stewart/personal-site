document.querySelector(".container").style.display = "none";
document.querySelector(".bg").style.display = "none";
document.querySelector(".menu").style.display = "none";
window.onload = () =>{
  setTimeout(()=>{
    document.querySelector(".load-wrapper").style.display = "none";
    document.querySelector(".container").style.display = "block";
    document.querySelector(".menu").style.display = "block";
    document.querySelector(".bg").style.display = "block";
  },8000);
}
function toogleDiv(){
  const element = document.querySelector(".menu");
  element.classList.toggle("active");
}
function hideElement(elem){
  if(document.querySelector(elem).style.display === "none") {
    document.querySelector(elem).style.display = "block";
  } else {
    document.querySelector(".bg").style.display = "none";
  }
}