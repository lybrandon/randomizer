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

function setup() {
  createCanvas(400, 400);
  background(220);


  //skate[1] ="treflip flip";
  //console.log(skate);
  //console.log("initial arrays is ");
  //console.log(skate);

  //skate.splice(4,1);
  //console.log("array after splice")
  //console.log(skate);

  //skate.unshift("fakieflip");
  //console.log("array after unshift")
  //console.log(skate);

}

function draw() {
  //square(60, 55, 55);
}

function mousePressed(){
  background(random(200,250));
  randomIndex = int(random(skate.length))
  //console.log(skate[randomIndex].name);
  text(skate[randomIndex].name, 100, 100);
  skate.splice(randomIndex, 1);
}
