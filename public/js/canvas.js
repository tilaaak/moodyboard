function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElemntById("myForm").button.style.visibility = "hidden";
}

function openImg() {
	document.getElementById("img-search").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

$('.img-popup img').draggable();
$('#text-example').draggable();

function textTool() {
	document.getElementById("text-example").style.display = "block";
}