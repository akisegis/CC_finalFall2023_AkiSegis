/* 
Aki Segismundo
LadyK
Creative Coding A
Final Progression Day 2
1 December 2023
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
- windows will be sized 400x400 so the total canvas is 800x400
- all font will be the same
- 
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
asa 
- messages align left
methods 
- move messages upwards (user can move forward)
- adds to an array of messages to store them
- moves messages downwards (user can view past messages)
*/

// Global Variables
let font;
let fontsize = 12;

function preload(){
    font = loadFont();
}

function setup(){
    createCanvas(800,400);
    
    textFont(font);
    textSize(fontsize);
}

function draw(){

}

class Messages{
    
}