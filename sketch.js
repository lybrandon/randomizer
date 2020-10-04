//favorite skate tricks
let skate = [{
  name: "kickflip",
  difficulty: "3"
}, {
  name: "treflip",
  diffuculty: "4"
}, {
  name: "Hardflip",
  difficulty: "5"
}, {
  name: "heelflip",
  difficulty: "3"
}, {
  name: "shuvit",
  difficulty: "2"
}, {
  name: "ollie",
  difficulty: "1"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(400, 400);
  background(220);
  textSize(22);

  text("click to randomize", 50, 50);

}

function draw() {
  if (animating == true) {
    square(random(width), random(height), random(50, 200));
  }
}

function randomizer() {
  animating = false;
  if (skate[0]) {
    background(random(200, 250));
    randomIndex = int(random(skate.length));
    //console.log(skate[randomIndex].name);
    text(`${skate[randomIndex].name}'s difficulty level is
    ${skate[randomIndex].difficulty}`, 50, 50);
    // text(skate[randomIndex].name + "'s difficulty level is " + skate[randomIndex].difficulty, 50, 50);
    skate.splice(randomIndex, 1);
  } else {
    background(random(200, 250));
    text("nothing left!", 50, 50);
  }

}

function mousePressed() {
 animating = true;
  setTimeout(randomizer, 2000);

}
