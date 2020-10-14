let array = [];
function setup() {
  createCanvas(600, 600);
  background(220, 50, 133);
  strokeWeight(5);
  noFill();
}


function draw() {
	if (mouseIsPressed){
		stroke(map(mouseX, 0, 600, 0, 255, true))
		background(0),
		line(width - mouseX, height - mouseY, width - pmouseX, Height - pmouseY);
		line(mouseX, mouseY, pmouseX, pmouseY);
		array.push([mouseX, mouseY])
	}
  
}

function keyTyped(){
	if (key === 's'){
		//save this image
		saveCanvas('fileName', 'PNG');
	}else if (key ==='d'){
		//display image
		background(220, 50, 133);
beginShape();
		for(let i = 0; i < array.length - 1; i++ ){
			console.log(i);
			//line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1],);
			curveVertex (array[i][0], array[i][1]);
		}
endShape();
		
	}


}