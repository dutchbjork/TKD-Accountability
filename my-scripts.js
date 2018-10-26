// set count
if(localStorage.getItem("count") == null) {	localStorage.setItem("count",0)
}

console.log("is this working?")

// Update Count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count");
}
update();

// Add One to Count
function plusOne() {
 localStorage.setItem("count", (Number(localStorage.getItem("count")) + 1));
 update();
}

//Reset Count
function reset() {
if(confirm("Are you sure you want to be honest?")) {
	localStorage.setItem("count", 0);
	update();
}
}