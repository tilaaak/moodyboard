function openForm() {
  document.getElementById("myForm").style.display = "block";
  document.getElemntById("myForm").button.style.visibility = "hidden";
}

function openImg() {
	document.getElementById("img-search").style.display = "block";
}

function penTool() {
  document.getElementById("myCanvas").style.display = "block";
}

function openShape() {
  document.getElementById("square").style.display = "block";
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
$('#square').draggable();
$('.WIP img').draggable();
$('.WIP p').draggable();
$('.WIP li').draggable();
$('#text-example').draggable();

function textTool() {
	document.getElementById("text-example").style.display = "block";
}

function openCanvas() {
  document.getElementById("myCanvas").style.display = "block";
}

// function addTool(){
//   document.getElementById("dropdown-content").style.display = "block";
// }
// canvasEl = document.getElementById('myCanvas');
// canvasEl.width = document.body.clientWidth;
// canvasEl.height = document.body.clientHeight;
// canvas = canvasEl.getContext('2d');

// canvasEl.addEventListener('touchstart', function(e){
//   draw(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
//   draw(e.changedTouches[1].pageX, e.changedTouches[1].pageY);
// });

// canvasEl.addEventListener('touchmove', function(e){
//   e.preventDefault();
//   draw(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
//   draw(e.changedTouches[1].pageX, e.changedTouches[1].pageY);
// });

// draw = function(x, y){
//   canvas.beginPath();
//   canvas.fillStyle = '#ff8330';
//   canvas.arc(x, y, 30, 0, 2 * Math.PI);
//   canvas.fill();
//   canvas.closePath();
// };

  
  
(function() {
  
  // Get a regular interval for drawing to the screen
  window.requestAnimFrame = (function (callback) {
    return window.requestAnimationFrame || 
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimaitonFrame ||
          function (callback) {
            window.setTimeout(callback, 1000/60);
          };
  })();

  // Set up the canvas
  var canvas = document.getElementById("myCanvas");
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  canvas.width = 700;
  canvas.height = 1000;
  var ctx = canvas.getContext("2d");
  ctx.strokeStyle = "#222222";
  ctx.lineWith = 2;

  // Set up the UI
  // var sigText = document.getElementById("sig-dataUrl");
  // var sigImage = document.getElementById("sig-image");
  // var clearBtn = document.getElementById("sig-clearBtn");
  // var submitBtn = document.getElementById("sig-submitBtn");
  // clearBtn.addEventListener("click", function (e) {
  //   clearCanvas();
  //   sigText.innerHTML = "Data URL for your signature will go here!";
  //   sigImage.setAttribute("src", "");
  // }, false);
  // submitBtn.addEventListener("click", function (e) {
  //   var dataUrl = canvas.toDataURL();
  //   sigText.innerHTML = dataUrl;
  //   sigImage.setAttribute("src", dataUrl);
  // }, false);

  // Set up mouse events for drawing
  var drawing = false;
  var mousePos = { x:0, y:0 };
  var lastPos = mousePos;
  canvas.addEventListener("mousedown", function (e) {
    drawing = true;
    lastPos = getMousePos(canvas, e);
  }, false);
  canvas.addEventListener("mouseup", function (e) {
    drawing = false;
  }, false);
  canvas.addEventListener("mousemove", function (e) {
    mousePos = getMousePos(canvas, e);
  }, false);

  // Set up touch events for mobile, etc
  canvas.addEventListener("touchstart", function (e) {
    mousePos = getTouchPos(canvas, e);
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousedown", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
  }, false);
  canvas.addEventListener("touchend", function (e) {
    var mouseEvent = new MouseEvent("mouseup", {});
    canvas.dispatchEvent(mouseEvent);
  }, false);
  canvas.addEventListener("touchmove", function (e) {
    var touch = e.touches[0];
    var mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY
    });
    canvas.dispatchEvent(mouseEvent);
  }, false);

  // Prevent scrolling when touching the canvas
  document.body.addEventListener("touchstart", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  document.body.addEventListener("touchend", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);
  document.body.addEventListener("touchmove", function (e) {
    if (e.target == canvas) {
      e.preventDefault();
    }
  }, false);

  // Get the position of the mouse relative to the canvas
  function getMousePos(canvasDom, mouseEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: mouseEvent.clientX - rect.left,
      y: mouseEvent.clientY - rect.top
    };
  }

  // Get the position of a touch relative to the canvas
  function getTouchPos(canvasDom, touchEvent) {
    var rect = canvasDom.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top
    };
  }

  // Draw to the canvas
  function renderCanvas() {
    if (drawing) {
      ctx.moveTo(lastPos.x, lastPos.y);
      ctx.lineTo(mousePos.x, mousePos.y);
      ctx.stroke();
      lastPos = mousePos;
    }
  }

  function clearCanvas() {
    canvas.width = canvas.width;
  }

  // Allow for animation
  (function drawLoop () {
    requestAnimFrame(drawLoop);
    renderCanvas();
  })();

})();