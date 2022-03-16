function convertlbs(a){
	document.getElementById("gram").value = a/0.0022046;
	document.getElementById("kg").value = a/2.2046;
	document.getElementById("ou").value = a*16;
}
function convertgram(a){
	document.getElementById("lbs").value = a*0.0022046;
	document.getElementById("kg").value = a/1000;
	document.getElementById("ou").value = a*0.035274;
}
function convertkg(a){
	document.getElementById("lbs").value = a*2.2046;
	document.getElementById("gram").value = a*1000;
	document.getElementById("ou").value = oa*35.274;
}
function convertounces(a){
	document.getElementById("lbs").value = a/0.0625;
	document.getElementById("gram").value = a/0.035274;
	document.getElementById("kg").value = a/35.274;
}
