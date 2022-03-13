let shape = prompt("What shape do you want to Draw. Rect or Trg? ");
let color = prompt("What Color do you like to use for shape?");

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

//Triangle
//All functions with 1 are Trianlge's functions

let data1 = {
	axDelta: 0,
  ayDelta: 0,
  bxDelta: 0,
  byDelta: 0,
  cxDelta: 0,
  cyDelta: 0,
  ax: 150,
  ay: 100,
  bx: 150,
  by: 200,
	cx: 250,
  cy: 200,
  fillStyle: color
}; 

function update1() {
	data1.ax += data1.axDelta;
  data1.ay += data1.ayDelta;
  data1.bx += data1.bxDelta;
  data1.by += data1.byDelta;
  data1.cx += data1.cxDelta;
  data1.cy += data1.cyDelta;
  
}
	//a,b,c are sides of triangle,
function draw1() {
  context.fillStyle = data1.fillStyle;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
    
  context.moveTo(data1.ax, data1.ay);
  context.lineTo(data1.bx, data1.by);
  context.lineTo(data1.cx, data1.cy);
    
  context.fill(); 
}
  

  
function loop1() {
	requestAnimationFrame(loop1);
  update1();
  draw1();
}

document.addEventListener("keydown", function(evt) {

  switch(evt.key) {
    case 'ArrowRight':
    case 'd':
      data1.axDelta += 3;
      data1.bxDelta += 3;
      data1.cxDelta += 3;
      break;
    case	'ArrowLeft':
    case	'a':
      data1.axDelta -= 3;
      data1.bxDelta -= 3;
      data1.cxDelta -= 3;
      break;
    case 'ArrowUp':
    case 'w':
      data1.ayDelta -= 3;
      data1.byDelta -= 3;
      data1.cyDelta -= 3;
      break;
    case 'ArrowDown':
    case 's':
      data1.ayDelta += 3;
      data1.byDelta += 3;
      data1.cyDelta += 3;
      break;
    default:
      alert ("You pressed another keyword");
    }
});

document.addEventListener("keyup", function(evt) {
  data1.axDelta = 0;
  data1.ayDelta = 0;
  data1.bxDelta = 0;
  data1.byDelta = 0;
  data1.cxDelta = 0;
  data1.cyDelta = 0;
  });
  
  
//Rectangle
let data = {
	xDelta: 0,
  yDelta: 0,
	x: 130,
  y: 100,
  width: 150,
  height: 100,
  fillStyle: color
};

function update() {
	data.x += data.xDelta;
  data.y += data.yDelta;
}

function draw() {

context.clearRect(0, 0, canvas.width, canvas.height);
context.fillRect(data.x, data.y, data.width, data.height);
context.fillStyle = data.fillStyle;

}

function loop() {
	requestAnimationFrame(loop);
  
  update();
  draw();
}

document.addEventListener("keydown", function(evt) {
  switch(evt.key) {
    case 'ArrowRight':
    case 'd':
      data.xDelta = 3;
      break;
    case	'ArrowLeft':
    case	'a':
      data.xDelta = -3;
      break;
    case 'ArrowUp':
    case 'w':
    	data.yDelta = -3;
      break;
    case 'ArrowDown':
    case 's':
      data.yDelta = 3;
      break;
    default:
      alert ("You pressed another keyword");
    }
    
});

document.addEventListener("keyup", function(evt) {
	data.yDelta = 0;
	data.xDelta = 0;
});


if (shape === "Rect") {
  loop();
} else if (shape === "Trg") {
  loop1();
}
