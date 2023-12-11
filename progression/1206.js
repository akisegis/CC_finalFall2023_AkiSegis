/* 
Aki Segismundo
LadyK
Creative Coding A
Final Progression Day 5
6 December 2023
*/

/*
Starter Diaglogue
ASA - Hello Captain, wake up!
You - 1. what 2.hi
ASA - Well there's impending doom so choose!
You - 1. Stay in ship 2. Leave ship
wooooo ending!
*/

/*
basics:
- UI theme is black, white, grey, with a red accent
- windows will be sized 400x400 so the total canvas is 800x400
- all font will be the same
fonts
- courierprime bold is for the messages themselves
- pixelify is for the title screen(s)
- trispace is for everything else
*/

/*
Class Messages
- message you
- message asa
messages store two things
- content
- size that they are
you
- messages align right
- messages are red
asa 
- messages align left
- messages are grey/white
methods 
- move messages upwards (user can move forward)
- adds to an array of messages to store them
- moves messages downwards (user can view past messages)
*/

// Global Variables
let font1, font2, font3;
let fontsize = 12;
let menu = true;
let warning = false;
let allMessages; // array for holding all messages in the game

function preload(){
    font1 = loadFont('assets/CourierPrime-Bold.ttf');
    font2 = loadFont('assets/PixelifySans-VariableFont_wght.ttf');
    font3 = loadFont('assets/Trispace-Regular.ttf');}

function setup(){
    createCanvas(800,400);
    background(0);
}
  
  function draw() {
    startGame();
  }

  function startGame(){
    push();
    translate(400,200);
    textFont(font2);
    textSize(80);
    textAlign(CENTER,CENTER);

    if(mouseY < 200){
    background(0);
    fill(255);
    text('Nothing',71.5,0);
    } else {
    background(0);
    fill(255,0,0);
    text('Everything',0,0);
    }

    fill(255);
    textSize(16);
    textFont(font3);
    text('Press 1 to start game', 0, 150);
    pop();
    
    if(key == '1' && menu){
      intro();
      menu = false;
      warning = true;
    }
  }

  function intro(){
    background(0);
    push();
    translate(400,200);
    fill(255);
    textSize(20);
    textFont(font3);
    textAlign(CENTER,CENTER);
    text('Be careful. Every decision matters...', 0,0);
    textSize(16);
    textFont(font3);
    text('Press 2 to continue', 0, 150);
    pop();

    if(key == '2' && warning == true && menu == false){
      leftUI();
      warning = false;
    }
  }

  function leftUI(){
    background(0);
    stroke(255);
    line(400,0,400,800);

    push();
    translate(200,200);
    fill(255);
    line(0,150,0,200);
    line(-200,150, 200,150);
    pop();

  }

/*
class Messages{

    constructor
    - you or asa boolean (solved with if-else)
    - content of message
    noStroke();
    fill(86,0,0)
    fill(126)
    setters for position
    - screen can only have 5 messages at a time
    rect(-190, 90, 380, 50, 20, 20, 20, 3);
    rect(-190, 30, 380, 50, 20, 20, 3, 20);
    rect(-190, -30, 380, 50, 20, 20, 20, 3);
    rect(-190, -90, 380, 50, 20, 20, 3, 20);
    rect(-190, -150, 380, 50, 20, 20, 20,3);

}*/