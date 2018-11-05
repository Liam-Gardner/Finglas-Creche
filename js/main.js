/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("nav").style.display = "none";
    
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("nav").style.display = "inline-block";
}


/* Accordion */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}






/* reveal paragraph read more text */
/* Child's Day */
function readMore(){
	document.getElementById("extra-text").style.display = "inline";
	document.getElementById("more").style.display = "none";
    document.getElementById("babies").style.marginBottom = "15px";
    if(innerWidth <= 1279){
	document.getElementById("babies").style.maxHeight = "none";}
    else {document.getElementById("babies").style.maxHeight = "460px";
         }
    
        
}

function readMoreTwo(){
	document.getElementById("extra-text2").style.display = "inline";
	document.getElementById("more2").style.display = "none";
    document.getElementById("wobblers").style.marginBottom = "15px";
    if(innerWidth <= 1279){
    document.getElementById("wobblers").style.maxHeight = "none";}
    else {document.getElementById("wobblers").style.maxHeight = "420px";}
    
    
}

function readMoreThree(){
	document.getElementById("extra-text3").style.display = "inline";
	document.getElementById("more3").style.display = "none";
    document.getElementById("toddlers").style.marginBottom = "15px";
    if(innerWidth <= 1279){
    document.getElementById("toddlers").style.maxHeight = "none";}
    else {document.getElementById("toddlers").style.maxHeight = "440px";}
    
}
function readMoreFour(){
	document.getElementById("extra-text4").style.display = "inline";
	document.getElementById("more4").style.display = "none";
    document.getElementById("after-school").style.marginBottom = "15px";
    if(innerWidth <= 1279){
    document.getElementById("after-school").style.maxHeight = "none";}
    else {document.getElementById("after-school").style.maxHeight = "420px";}
    
}
/* Staff */
function readMoreStaff(){
	document.getElementById("staff-text").style.display = "inline";
	document.getElementById("staff-more").style.display = "none";
    document.getElementById("staff-Jane-Doe").style.marginBottom = "15px";
    if(innerWidth <= 1279){
    document.getElementById("staff-Jane-Doe").style.maxHeight = "none";}
    else {document.getElementById("staff-Jane-Doe").style.maxHeight = "420px";}
    
}

function readMoreStaffTwo(){
	document.getElementById("staff-text2").style.display = "inline";
	document.getElementById("staff-more2").style.display = "none";
    document.getElementById("staff-Julia-Doe").style.marginBottom = "15px";
    if(innerWidth <= 1279){
    document.getElementById("staff-Julia-Doe").style.maxHeight = "none";}
    else {document.getElementById("staff-Julia-Doe").style.maxHeight = "420px";}
    
}

function readMoreStaffThree(){
	document.getElementById("staff-text3").style.display = "inline";
	document.getElementById("staff-more3").style.display = "none";
    document.getElementById("staff-John-Doe").style.marginBottom = "15px";
    if(innerWidth <= 1279){
    document.getElementById("staff-John-Doe").style.maxHeight = "none";}
    else {document.getElementById("staff-John-Doe").style.maxHeight = "420px";}
    
}

function readMoreStaffFour(){
	document.getElementById("staff-text4").style.display = "inline";
	document.getElementById("staff-more4").style.display = "none";
    document.getElementById("staff-Maria-Doe").style.marginBottom = "15px";
    if(innerWidth <= 1279){
    document.getElementById("staff-Maria-Doe").style.maxHeight = "none";}
    else {document.getElementById("staff-Maria-Doe").style.maxHeight = "420px";}
    
}
/* Why Us */ 
function readMoreWhy(){
	document.getElementById("extra-text").style.display = "inline";
	document.getElementById("more").style.display = "none";
    document.getElementById("montessori-system").style.marginBottom = "15px";
    if(innerWidth <= 1279){
    document.getElementById("montessori-system").style.maxHeight = "none";}
    else {document.getElementById("montessori-system").style.maxHeight = "420px";}
    
}

function readMoreWhyTwo(){
	document.getElementById("extra-text2").style.display = "inline";
	document.getElementById("more2").style.display = "none";
    document.getElementById("outdoor-activities").style.marginBottom = "15px";
    if(innerWidth <= 1279){
    document.getElementById("outdoor-activities").style.maxHeight = "none";}
    else {document.getElementById("outdoor-activities").style.maxHeight = "420px"};
    
}
