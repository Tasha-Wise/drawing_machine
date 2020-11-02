let array = [];
let slider;
let r = 100;
let g = 100;
let b = 100;
let backgroundColor = (220, 50, 133);
let noiseOffset = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
  
  drawGrid();
  strokeWeight(5);
  noFill();

   createP("stroke weight:");
  slider = createSlider(0, 30, 5);

}


function draw() {
	background(220, 50, 133, 5);
	strokeWeight(strokeWidth);

	noiseOffset += 0.05;
	strokeWidth = noise(noiseOffset) * 100;


	let lineWidth = slider.value();
	strokeWeight(lineWidth);
	 stroke(r, g, b);
	 // check to see if a key is pressed 
  if (keyIsPressed === true) {
    // nested if statement checks to see what key is pressed
    if (key === 'a') {
      // increase r   
      r += 5;
    } else if (key === 's') {
      // increase g
      g += 5;
    } else if (key === 'd') {
      //increase b
      b += 5;
    } else if (key === 'z') {
      r -= 5;
    } else if (key === 'x') {
      //increase b
      g -= 5;
    } else if (key === 'c') {
      // increase g
      b -= 5;

    }
	}


	if (mouseIsPressed){
		stroke(map(mouseX, 0, 600, 0, 255, true))
		background(backgroundColor);
		//backgroundColor -= 5;
    line(mouseX, mouseY, pmouseX, pmouseY );
		line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    
		
		
		array.push([mouseX, mouseY])

		beginShape();
		for(let i = 0; i < array.length - 1; i++ ){
			console.log(i);
			//line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1],);
			curveVertex (array[i][0], array[i][1]);
		}
endShape();
	}
  
}
function increaseStrokeWeight(){
	strokeWeight(10);
}

function changeStrokeColor(){
	stroke(30, 255, 40);
}
function keyTyped() {
  if (key === 's') {
    //save this image
    saveCanvas('fileName', 'PNG');
  } else if (key === 'd') {
    //display image
    background(220, 50, 133); 

    } else if (key === 'c') {
      //clear the image
      clear();
    }

  beginShape();
  for (let i = 0; i < array.length - 1; i++) {
    console.log(i);
    //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1],);
    curveVertex(array[i][0], array[i][1]);
  }
  endShape();
	{
return false;
}
}
	
function mousePressed(){
array = [];	
backgroundColor = (30, 255, 40);

}

function drawGrid(){
	numCells= 20
	fillColor = 255
	strokeWeight(0);
	for (let i = 0; i <= width; i += width / numCells){
		for (let j = 0; j <= height; j += height/ numCells){
			if (fillColor === 255){
				fillColor = 200;

		}else {
			fillColor = 255;
		}
		fill(fillColor);		
		rect(i, j, width / numCells, height / numCells);
		}
	}
	strokeWeight(5);
}

