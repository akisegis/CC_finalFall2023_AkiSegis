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

function preload(){
    font1 = loadFont('assets/CourierPrime-Bold.ttf');
    font2 = loadFont('assets/PixelifySans-VariableFont_wght.ttf');
    font3 = loadFont('assets/Trispace-Regular.ttf');
}

function setup(){
    createCanvas(800,400);
    background(0);
    conversation = new Messages();
}

function draw() {
    game();
}

function game(){
    print("I'm doing the intro rn. My current state is : " + currState + ". The time is " + millis());
    if (currState == 0){ // intro
        if (millis() > 0 && millis()  < 4000) { startGame(); }
        if (millis() > 3999 && millis() < 8000) { intro(); }
        if (millis() > 7999 && millis() < 14000) { awaken(); }
        if(millis() > 13999 && millis() < 16000) { leftUI(); }
        if(millis() > 15999 && millis() < 17000) { currState += 1; currTime = millis(); }
        print("I'm doing the intro rn. My current state is : " + currState + ". The time is " + millis());
    } else if (currState == 1) { // scene 1

        if (millis() > currTime + 999 && millis() < currTime + 4000){ 
            conversation.newMessage(false, "Good morning, Captain. It has been a while");
            conversation.displayAll();
        }

        if (millis() > currTime + 3999 && millis() < currTime + 6000){ 
            conversation.newMessage(false, "My name is Asa, your second-in-command");
            conversation.displayAll();
        }

        if (millis() > currTime + 5999 && millis() < currTime + 7000){
            conversation.newMessage(false, "How was your sleep?");
            conversation.displayAll();
            you1 = new Choice(false, "Good morning, Asa");
            you2 = new Choice(true, "Where am I?");
            you1.display();
            you2.display();
        }


        // you need to choose a message to send back and add to the messages array and print out

        print("I'm doing scene 1 rn. My current state is : " + currState + ". The time is " + millis() + " but my current time is " + currTime);
    } else if(currState == 2){ // scene 2
        youPrev = new Message(true, "Good morning, Asa");
        messages.push(youPrev);
        letsMove(messages);
        asa4 = new Messages(false, "How are you feeling?");
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
    text('You awaken in a dark, cold, container with a', 0,-5);
    text('bright blaring light staring you down', 0,20);
    text('A loud ding rings from the light above you', 0,45);
    text("as your eyes adjust.", 0, 70);
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
    if(key == 'a'){
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

    newMessage(who, str){
      for (let h = 0; h < count; h++){ // have to check for duplicates or else the array will work unintendedly but every message has to be unique
        if (this.messages[h].str = str){
            print("this is the same");
            return this; // exits function
        }
      }
      let m = new Message(who, str); // creates a new object given it is not the same 
      print("pt 1 the array is " + count);
      if (count >= 1){
        print("super");
        for (let i = 0; i < count; i++){
            print("shy");
          this.messages[i].moveUp(60);
        }
      }
      this.messages.push(m);
      count+=1;
      print("pt 2 the array is " + count);
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

    displayAll(){
      clearConvo();
      for (let i = 0; i < count; i++){
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