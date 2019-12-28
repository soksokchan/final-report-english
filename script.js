function next() {  
    var ppt_a = document.getElementById("ppt_a");
    var ppt_b = document.getElementById("ppt_b");
        ppt_a.style.display = "none";       
        ppt_b.style.display = "block";


}
function next_1() {  
    var ppt_a = document.getElementById("ppt_a");
    var ppt_b = document.getElementById("ppt_b");
        ppt_b.style.display = "none";       
        ppt_a.style.display = "block";


}
function home() {
   var home = document.getElementById("home");
  var a = document.getElementById("part_b");
   var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  document.getElementById("iframe_a").src="";
  document.getElementById("iframe_b").src="";
  document.getElementById("play").src="";
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    b.style.display = "none";
    home.style.display = "block";
}

function section_introduction() {
  var home = document.getElementById("home");
  var a = document.getElementById("part_b");
   var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  document.getElementById("iframe_a").src="";
  document.getElementById("iframe_b").src="";
  document.getElementById("play").src="";
    home.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    b.style.display = "none";
    a.style.display = "block";
}
function section_manual() {
 var home = document.getElementById("home");
  var a = document.getElementById("part_b");
   var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  document.getElementById("iframe_a").src="";
  document.getElementById("iframe_b").src="";
  document.getElementById("play").src="";
    home.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    a.style.display = "none";
    b.style.display = "block";
  
}
function section_airport() {
   var home = document.getElementById("home");
  var a = document.getElementById("part_b");
   var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  document.getElementById("iframe_a").src="";
  document.getElementById("iframe_b").src="";
  document.getElementById("play").src="";
  var ppt_a = document.getElementById("ppt_a");
  var ppt_b = document.getElementById("ppt_b");
        ppt_b.style.display = "none";       
        ppt_a.style.display = "block";
    home.style.display = "none";
    a.style.display = "none";
    d.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
  
}

function section_different() {

   var home = document.getElementById("home");
  var a = document.getElementById("part_b");
   var b = document.getElementById("part_c");
  var c = document.getElementById("part_d");
  var d = document.getElementById("part_e");
  document.getElementById("iframe_a").src="";
  document.getElementById("iframe_b").src="";
  document.getElementById("play").src="https://drive.google.com/file/d/1kqiKlI1tFyVWrrDMTQAWP0jkJDXtqhyj/preview";
    home.style.display = "none";
    c.style.display = "none";
    b.style.display = "none";
    a.style.display = "none";
    d.style.display = "block";
}