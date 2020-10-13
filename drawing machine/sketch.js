function setup() {
  createCanvas(600, 600);
  background(220, 50, 133);
  srokeWeight(5);
}


function draw() {
	if (mouseIsPressed){
		stroke(map(mouseX, 0, 600, 0, 255, true))
		line(width - mouseX, height - mouseY, width - pmouseX, Height - pmouseY);
		line(mouseX, mouseY, pmouseX, pmouseY);

	}
  
}