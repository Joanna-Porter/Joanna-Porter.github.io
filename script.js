function showit(var1){
	console.log(var1)
  document.getElementById("divvy1").style.display = "none";
  document.getElementById("divvy2").style.display = "none";
  document.getElementById("divvy3").style.display = "none";
  document.getElementById("divvy4").style.display = "none";
  document.getElementById("divvy5").style.display = "none";
  document.getElementById("divvy6").style.display = "none";
  document.getElementById(var1).style.display = "block";
} 
