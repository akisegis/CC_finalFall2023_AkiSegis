/* 
Aki Segismundo
LadyK
Creative Coding A
Final Progression Day 11
15 December 2023
*/

let txtColor = 255;
let txtMsg = 12;

let nextScene1 = 1;
let nextScene2 = 2;

let currState = 0;
let currTime;

let frames = 1;
let myInput;

function preload(){
    font1 = loadFont('assets/CourierPrime-Bold.ttf');
    font2 = loadFont('assets/PixelifySans-VariableFont_wght.ttf');
    font3 = loadFont('assets/Trispace-Regular.ttf');
}

function setup(){
    createCanvas(800,400);
    background(0);
    conversation = new Messages();
    frameRate(12);

    sec = 12;
}

function draw() {
    game();
}

function game(){
    if (currState == 0){ // intro
        if (frameCount == 1) { startGame(); }
        if (frameCount == 4*sec) { intro(); }
        if (frameCount == 8*sec) { awaken(); }
        if(frameCount == 12*sec) { leftUI(); currState += 1; }
    } else if (currState == 1) { // scene 1
        if (frameCount == 14*sec){ 
            print("message 1");
            conversation.newMessage(false, "Good morning, Captain. It has been a while");
            conversation.displayAll();
          }
        if(frameCount == 16*sec){
            conversation.newMessage(false, "My name is Asa, your second-in-command");
            conversation.displayAll();
          }
        if (frameCount == 18*sec){
            conversation.newMessage(false, "How was your cryo sleep?");
            conversation.displayAll();
            print("this prints at: " + millis());
        }

        
        if (frameCount == 22*sec){
          background(0);
          push();
          translate(400,200);
          fill(255);
          textSize(20);
          textFont(font3);
          textAlign(CENTER,CENTER);
          // text('Your head is pounding and you feel for', 0,-10);
          text('You feel nauseous like your head is splitting', 0,15);
          text("You can't remember much about... anything really", 0,40);
          // text("as your eyes adjust.", 0, 65);
          pop();
        }
        if (frameCount == 28*sec){ 
            leftUI();
            conversation.displayAll();
            you1 = new Choice(false, "I feel awful");
            you2 = new Choice(true, "I could be better");
            you1.display();
            you2.display();
        }
        myInput = createInput();
        myInput.position(175, 375);
        myInput.size(50);
        if(myInput.value() == "I feel awful"){
          currState = 2;
        }

        if(myInput.value() == "I could be better"){
          currState = 3;
        }
        //if (28*sec < frameCount > 38*sec)
        if(frameCount == 29*sec){ // decision timer sequence
          push();
          translate(200,200);
          fill(6, 255, 0);
          rect(-200,145,50,10,15,15,1,1); // loading bar 1
          rect(-150,145,50,10,15,15,1,1); // loading bar 2
          rect(-100,145,50,10,15,15,1,1); // loading bar 3
          rect(-50,145,50,10,15,15,1,1); // loading bar 4
          rect(0,145,50,10,15,15,1,1); // loading bar 5
          rect(50,145,50,10,15,15,1,1); // loading bar 6
          rect(100,145,50,10,15,15,1,1); // loading bar 7
          rect(150,145,50,10,15,15,1,1); // loading bar 8
          pop();
          }
        if (frameCount == 30*sec){
          push();
          translate(200,200);
          fill(126, 232, 0);
          rect(-200,145,50,10,15,15,1,1); // loading bar 1
            rect(-150,145,50,10,15,15,1,1); // loading bar 2
            rect(-100,145,50,10,15,15,1,1); // loading bar 3
            rect(-50,145,50,10,15,15,1,1); // loading bar 4
            rect(0,145,50,10,15,15,1,1); // loading bar 5
            rect(50,145,50,10,15,15,1,1); // loading bar 6
            rect(100,145,50,10,15,15,1,1); // loading bar 7
            fill(0);
            rect(150,145,50,10,15,15,1,1); // loading bar 8
          pop();
        }
        if (frameCount == 31*sec){
          push();
          translate(200,200);
          fill(172, 208, 0);
          rect(-200,145,50,10,15,15,1,1); // loading bar 1
          rect(-150,145,50,10,15,15,1,1); // loading bar 2
          rect(-100,145,50,10,15,15,1,1); // loading bar 3
          rect(-50,145,50,10,15,15,1,1); // loading bar 4
          rect(0,145,50,10,15,15,1,1); // loading bar 5
          rect(50,145,50,10,15,15,1,1); // loading bar 6
          fill(0);
          rect(100,145,50,10,15,15,1,1); // loading bar 7
          rect(150,145,50,10,15,15,1,1); // loading bar 8
          pop();
        }
        if (frameCount == 32*sec){
          push();
          translate(200,200);
          fill(203, 181, 0);
          rect(-200,145,50,10,15,15,1,1); // loading bar 1
          rect(-150,145,50,10,15,15,1,1); // loading bar 2
          rect(-100,145,50,10,15,15,1,1); // loading bar 3
          rect(-50,145,50,10,15,15,1,1); // loading bar 4
          rect(0,145,50,10,15,15,1,1); // loading bar 5
          fill(0);
          rect(50,145,50,10,15,15,1,1); // loading bar 6
          rect(100,145,50,10,15,15,1,1); // loading bar 7
          rect(150,145,50,10,15,15,1,1); // loading bar 8
          pop();
        }
        if (frameCount == 33*sec){
          push();
          translate(200,200);
          fill(227, 151, 0);
          rect(-200,145,50,10,15,15,1,1); // loading bar 1
          rect(-150,145,50,10,15,15,1,1); // loading bar 2
          rect(-100,145,50,10,15,15,1,1); // loading bar 3
          rect(-50,145,50,10,15,15,1,1); // loading bar 4
          fill(0);
          rect(0,145,50,10,15,15,1,1); // loading bar 5
          rect(50,145,50,10,15,15,1,1); // loading bar 6
          rect(100,145,50,10,15,15,1,1); // loading bar 7
          rect(150,145,50,10,15,15,1,1); // loading bar 8
          pop();
        }
        if (frameCount == 34*sec){
          push();
          translate(200,200);
          fill(244, 118, 0);
          rect(-200,145,50,10,15,15,1,1); // loading bar 1
          rect(-150,145,50,10,15,15,1,1); // loading bar 2
          rect(-100,145,50,10,15,15,1,1); // loading bar 3
          fill(0);
          rect(-50,145,50,10,15,15,1,1); // loading bar 4
          rect(0,145,50,10,15,15,1,1); // loading bar 5
          rect(50,145,50,10,15,15,1,1); // loading bar 6
          rect(100,145,50,10,15,15,1,1); // loading bar 7
          rect(150,145,50,10,15,15,1,1); // loading bar 8
          pop();
        }
        if (frameCount == 35*sec){
          push();
          translate(200,200);
          fill(253, 79, 0);
          rect(-200,145,50,10,15,15,1,1); // loading bar 1
          rect(-150,145,50,10,15,15,1,1); // loading bar 2
          fill(0);
          rect(-100,145,50,10,15,15,1,1); // loading bar 3
          rect(-50,145,50,10,15,15,1,1); // loading bar 4
          rect(0,145,50,10,15,15,1,1); // loading bar 5
          rect(50,145,50,10,15,15,1,1); // loading bar 6
          rect(100,145,50,10,15,15,1,1); // loading bar 7
          rect(150,145,50,10,15,15,1,1); // loading bar 8
          pop();
        }
        if (frameCount == 36*sec){
          push();
          translate(200,200);
          fill(255, 10, 10);
          rect(-200,145,50,10,15,15,1,1); // loading bar 1
          fill(0);
          rect(-150,145,50,10,15,15,1,1); // loading bar 2
          rect(-100,145,50,10,15,15,1,1); // loading bar 3
          rect(-50,145,50,10,15,15,1,1); // loading bar 4
          rect(0,145,50,10,15,15,1,1); // loading bar 5
          rect(50,145,50,10,15,15,1,1); // loading bar 6
          rect(100,145,50,10,15,15,1,1); // loading bar 7
          rect(150,145,50,10,15,15,1,1); // loading bar 8
          pop();
        }
        if (frameCount == 37*sec){
          push();
          translate(200,200);
          fill(0);
          rect(-200,145,50,10,15,15,1,1); // loading bar 1
          rect(-150,145,50,10,15,15,1,1); // loading bar 2
          rect(-100,145,50,10,15,15,1,1); // loading bar 3
          rect(-50,145,50,10,15,15,1,1); // loading bar 4
          rect(0,145,50,10,15,15,1,1); // loading bar 5
          rect(50,145,50,10,15,15,1,1); // loading bar 6
          rect(100,145,50,10,15,15,1,1); // loading bar 7
          rect(150,145,50,10,15,15,1,1); // loading bar 8
          pop();
        }
        // 8 second timer + make decision

        // you need to choose a message to send back and add to the messages array and print out
    } else if(currState == 2){ // scene 2
      if (frameCount == 38*sec){
          conversation.newMessage(true, "Good morning, Asa. I feel awful");
          conversation.displayAll();
        }
    } else if (currState == 3){
      if (frameCount == 38*sec){
        conversation.newMessage(true, "Good morning, Asa. I could be better");
        conversation.displayAll();
      }
    }
}

// intro sequence
function startGame(){
    push();
    translate(400,200);
    textFont(font2);
    textSize(80);
    noStroke();
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
    text('Game will start momentarily', 0, 150);
    pop()
}

function awaken(){
    background(0);
    push();
    translate(400,200);
    fill(255);
    textSize(20);
    textFont(font3);
    textAlign(CENTER,CENTER);
    text('You awaken in a dark, cold, container with a', 0,-10);
    text('bright blaring light staring you down', 0,15);
    text('A loud ding rings from the light above you', 0,40);
    text("as your eyes adjust.", 0, 65);
    pop();
  }

  function intro(){
    background(0);
    push();
    translate(400,200);
    fill(255);
    textSize(20);
    textFont(font3);
    textAlign(CENTER,CENTER);
    text('Be careful. Your decisions matter...', 0,0);
    text('Press 1 or 2 to choose between dialogue options', 0,30);
    textSize(16);
    textFont(font3);

    text("It's your choice, Captain", 0, 150);
    pop();
  }

  function leftUI(){
    /*box around*/
    background(0);
    stroke(255);
    line(400,0,400,800);
    line(0,0,800,0);
    line(0,0,0,400);
    line(0,400,800,400);
    line(800, 400, 800, 0);

    /*text options*/
    push();

    translate(200,200);
    fill(255);
    line(0,150,0,200);
    line(-200,150, 200,150);

    pop();
  }

// controls
function keyPressed(){
    if(key == '1'){
        currState = nextScene1;
    } else if (key == '2'){
        currState = nextScene2;
    }
}

// object classes
class Message{
    // posBubble = {90, 30, -30, -90, -150} [-60]
    // posText = {115, 55, -5, -65, -125} [-60]
    constructor (isYou, str) { // is you checks if the message is from you or asa
        this.isYou = isYou;
        this.str = str;
        this.posBubble = 90;
        this.posText = 115;
      }
  
    moveUp(num) {
    this.posBubble -= num;
    this.posText -= num;
    }

    moveDown() {
    this.posBubble += 60;
    this.posText += 60;
    }
  
    display() {
        push();
        translate(200,200);
        if(this.isYou){
          noStroke();
          fill(86,0,0)
          rect(-190, this.posBubble, 380, 50, 20, 20, 0, 20);
        }
        else {
          noStroke();
          fill(126);
          rect(-190, this.posBubble, 380, 50, 20, 20, 20, 0);
        }
        fill(255);
        textFont(font1);
        textSize(12);
        textAlign(LEFT,CENTER);
        text(this.str, -180, this.posText);
        pop();
      }

}

class Choice{

    constructor(dir, str) {
        this.dir = dir; // boolean for left or right. right means true, left means false
        this.str = str;
    }

    display(){
        push();
        translate(200,200);
        fill(txtColor);
        textFont(font1);
        textSize(txtMsg);
        textAlign(CENTER, CENTER);

        text("1",177,350);
        text("2", 377,350);

        if (this.dir){
            text(this.str, -100, 175);
        }
        else{
            text(this.str, 100, 175);
        }
        pop();
    }
}

let count = 0;
class Messages{
    constructor(){
      this.messages = [];
    }

    newMessage(who, str){ // adds a new message object to the messages object array and checks for duplicates
      for (let h = 0; h < count; h++){ // have to check for duplicates or else the array will work unintendedly but every message has to be unique
        if (this.messages[h].str == str){
            return this; // exits function
        }
      }
      count++;
      for(let y = 0; y < count-1; y++){ // moves messages now that there will be a new message
        if (count != 1){
          this.messages[y].moveUp(60);
        }
      }
      let m = new Message(who, str); // creates a new object given it is not the same 
      this.messages.push(m); // adds to array
      return this;
    }

    moveAllUp(){
      for (let i = 0; i < count; i++){
        this.messages[i].moveUp(60);
      }
      return this;
    }

    moveAllDown(){
      for (let i = 0; i < count; i++){
        this.messages[i].moveDown();
      }
      return this;
    }

    displayAll(){ // have to specify when to print or else will run over and over again until the next call
      clearConvo();
      /*if (count >= 1){
        print("super");
        for (let i = count-1; i > -1; i--){
            print("shy");
          this.messages[i].moveUp(60);
        }
      }*/
      for (let i = 0; i < count; i++){
        print("repeat");
        this.messages[i].display();
      }
    }
  }

  // helper function
  function clearConvo(){
    push();
    translate(200,200);
    fill(0);
    rect(-200,-200,400,350);
    pop();
  }