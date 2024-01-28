function setup(){
  createCanvas(600, 400);
}

function draw(){
  background(200, 200, 244);
  // add your drawing code here ...
  fill (153, 102, 0);
  noStroke();
  triangle(width/2 - 45, height/2 - 55, width/2 - 25, height/2 - 40, width/2 - 45, height/2 - 20);
  // draws left ear
  triangle(width/2 + 45, height/2 - 55, width/2 + 25, height/2 - 40, width/2 + 45, height/2 - 20);
  // draws right ear
  ellipse(width/2,height/2,100);
  // draws face
  fill (0, 153, 0);
  ellipse(width/2 - 20, height/2 - 10, 10);
  // draws left eye
  ellipse(width/2 + 20, height/2 - 10, 10);
  // draws right eye
  fill("pink");
  triangle(width/2 - 5, height/2, width/2 + 5, height/2, width/2, height/2 + 8);
  // draws the nose
  stroke(255);
  strokeWeight(2);
  line(width/2 - 10, height/2 + 5, width/2 - 25, height/2); 
  // left top whisker
  line(width/2 + 10, height/2 + 5, width/2 + 25, height/2); 
  // right top whisker 
  line(width/2 - 10, height/2 + 5, width/2 - 25, height/2 + 5); 
  // left middle whisker 
  line(width/2 + 10, height/2 + 5, width/2 + 25, height/2 + 5); 
  // right middle whisker 
  line(width/2 - 10, height/2 + 5, width/2 - 25, height/2 + 10); 
  // left bottom whisker 
  line(width/2 + 10, height/2 + 5, width/2 + 25, height/2 + 10);
  // right bottom whisker  
  noFill();
  arc(width/2 - 10, height/2 + 10, 20, 20, 0, PI);
  // left part of mouth
  arc(width/2 + 10, height/2 + 10, 20, 20, 0, PI);
  // right part of mouth

}