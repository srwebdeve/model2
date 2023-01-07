var a = document.querySelector(".a");
var b = document.querySelector(".b");
var main = document.querySelector(".main");

window.addEventListener("scroll", function(e){
  var scrol = window.scrollY;

  console.log(scrol);
  if(scroll => 1){
    a.style.opacity="0%";
    a.style.zIndex="0";
  }
  if(scrol <= 5){
    a.style.opacity="100%";
    a.style.zIndex="4";
  }
   
});


var ab = document.querySelector(".ab")
var bb=document.querySelector(".bb")
var cb=document.querySelector(".cb")
var maina = document.querySelector(".maina")
var mainb=document.querySelector(".mainb")
var mainc=document.querySelector(".mainc")

ab.addEventListener("click",function(){
  maina.style.zIndex="1";
  mainb.style.zIndex="0";
  mainc.style.zIndex="0";
  maina.style.opacity="100%";
  mainb.style.opacity="0%";
  mainc.style.opacity="0%";
});
bb.addEventListener("click",function(){
  maina.style.zIndex="0";
  mainb.style.zIndex="1";
  mainc.style.zIndex="0";
  maina.style.opacity="0%";
  mainb.style.opacity="1000%";
  mainc.style.opacity="0%";

});
cb.addEventListener("click",function(){
  maina.style.zIndex="0";
  mainb.style.zIndex="0";
  mainc.style.zIndex="1";
  maina.style.opacity="0%";
  mainb.style.opacity="0%";
  mainc.style.opacity="100%";

});