let yoff = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvasContainer");
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(255,0);
  let xoff = 0;
  for (let y = 0; y < height; y += 5) {
    for (let x = width; x > 0; x -= 5) {
      let noiseVal = noise(xoff, yoff);
      //let hue = map(noiseVal, 0, 1, 180, 240);
      //let saturation = map(noiseVal, 0, 1, 50, 80);
      let cloudsize = map(noiseVal, 0, 1, 0, 200);
      let ranvalue = map(noise(x, y), 0, 1, -50, 50);
      //fill(hue, 90, 100,noiseVal*2);
      //fill(202,56,95,noiseVal*3);//淡蓝
      //fill(198, 59, 74, noiseVal * 6);//蓝绿
      fill(194, 63, 77, noiseVal * 6);//蓝绿
      ellipse(
        2.5 * (height - x) + y - yoff*100 + ranvalue,
        x + y - yoff*100 + ranvalue,
        cloudsize,
        cloudsize
      );
      xoff += 0.01;
    }
  }
  yoff += 0.01;
}
