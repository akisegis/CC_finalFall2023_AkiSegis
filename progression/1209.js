/* 
Aki Segismundo
LadyK
Creative Coding A
Final Progression Day 8
9 December 2023
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
let started = false;

function preload(){
    font1 = loadFont('assets/CourierPrime-Bold.ttf');
    font2 = loadFont('assets/PixelifySans-VariableFont_wght.ttf');
    font3 = loadFont('assets/Trispace-Regular.ttf');}

function setup(){
    createCanvas(800,400);
    background(0);
}
  
  function draw() {
    //if (!started){ startGame(); }
    //else { leftUI(); }

    leftUI();

  }

  function startGame(){
    if (!started) {
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
      if(key == '1'){
        intro();
      }
   }
   else { intro(); }
  }

  function intro(){
    background(0);
    push();
    translate(400,200);
    fill(255);
    textSize(20);
    textFont(font3);
    textAlign(CENTER,CENTER);
    text('Be careful. Your decisions matters...', 0,0);
    textSize(16);
    textFont(font3);
    text('Press 2 to continue', 0, 150);
    pop();

    if(key == '2'){
      background(255);
      started = true;
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

    /*message1 = new Message(true, "hi team");
    message2 = new Message(false, "goodmorning team");
    message3 = new Message(true, "what a lovely morning"); */

    let convo = new Messages();

    convo.newMessage(true, "hi team");

    convo.newMessage(false, "good morning team!");

    convo.newMessage(true, "what a lovely morning");
    convo.displayAll();

  }

  class Message{
    // posBubble = {90, 30, -30, -90, -150} [-60]
    // posText = {115, 55, -5, -65, -125} [-60]
    constructor (isYou, str){
      this.isYou = isYou;
      this.str = str;
      this.posBubble = 90;
      this.posText = 115;
    }

    moveUp(){
      this.posBubble -= 60;
      this.posText -= 60;
    }

    moveDown(){
      this.posBubble += 60;
      this.posText += 60;
    }

    display(){
      push();
      translate(200,200);
      if(this.isYou){
        noStroke();
        fill(86,0,0)
        rect(-190, this.posBubble, 380, 50, 20, 20, 20, 3);
      }
      else {
        noStroke();
        fill(126);
        rect(-190, this.posBubble, 380, 50, 20, 20, 3, 20);
      }
      fill(255);
        textSize(16);
        textAlign(LEFT,CENTER);
        text(this.str, -180, this.posText);
      pop();
    }
  }

  class Messages{
    constructor(){
      this.messages = [];
    }

    newMessage(who, str){
      let m = new Message(who, str);
      if (this.messages.length > 0){
        for (let i = 0; i < this.messages.length; i++){
          this.messages[i].moveUp();
        }
        this.messages.push(m);
      }
      else {
        this.messages.push(m);
      }
      return m;
    }

    moveAllUp(){
      for (let i = 0; i < this.messages.length; i++){
        this.messages[i].moveUp();
      }
    }

    moveAllDown(){
      for (let i = 0; i < this.messages.length; i++){
        this.messages[i].moveDown();
      }
    }

    displayAll(){
      for (let i = 0; i < this.messages.length; i++){
        this.messages[i].display();
      }
    }
  }