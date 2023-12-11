/* 
Aki Segismundo
LadyK
Creative Coding A
Final Progression Day 4
5 December 2023
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
let font1, font2, font3, font4;
let fontsize = 12;
let accent; // accent color for UI
let allMessages; // array for holding all messages in the game

function preload(){
    font1 = loadFont('assets/CourierPrime-Bold.ttf');
    font2 = loadFont('assets/PixelifySans-VariableFont_wght.ttf');
    font3 = loadFont('assets/Trispace-Regular.ttf');
    font4 = loadFont('assets/Trispace-SemiBold.ttf');
}

function setup(){
    createCanvas(800,400);
    
    textFont(font);
    textSize(fontsize);
}
  
  function draw() {
    background(0);
    stroke(255);
    line(400,0,400,800);
    push();
    translate(200,200);
    fill(255);
    line(0,150,0,200);
    line(-200,150, 200,150);
    rect(-190, 90, 380, 50, 20, 20, 20, 3);
    rect(-190, 30, 380, 50, 20, 20, 3, 20);
    rect(-190, -30, 380, 50, 20, 20, 20, 3);
    rect(-190, -90, 380, 50, 20, 20, 3, 20);
    rect(-190, -150, 380, 50, 20, 20, 20,3);
    pop();
  }

/*class Messages{
    
}*/