/* 
Aki Segismundo
LadyK
Creative Coding A
Final Project
18 December 2023
*/

/*
Future plans
  I definitely wish that I could have figured out how to handle the user input. I really wanted this to be a game rather than just an animation.
  I also want to refine the animation. I think I handled it okay but it could look more fluid.
  I think the texting part is something I got down pretty well. It took a while to figure out how to do it but I'm glad it works great. I would like to make it look better too.
  The addition of sound might be highly beneficial. I wanted to at first, but then I sort of lost sight since I didn't even know what sounds I would've used.
  Also sometimes the animation pauses when its loading the next thing. I'd like to fix that too.
*/

// variables to run the statemachine
let currState, currTime, frameStart, sec;

// all images
let backgroundimg, starimg, bigplanetimg, farplanetsimg, ringplanetimg;

// all fonts
let font1, font2, font3;

// array that holds all conversation bubbles
let conversation; 

// all sounds
let song1, song2;


function preload(){
  // fonts
    font1 = loadFont('assets/CourierPrime-Bold.ttf');
    font2 = loadFont('assets/PixelifySans-VariableFont_wght.ttf');
    font3 = loadFont('assets/Trispace-Regular.ttf');

  // images
    backgroundimg = loadImage('assets/space.png');
    starimg = loadImage('assets/stars.png');
    bigplanetimg = loadImage('assets/big-planet.png');
    farplanetsimg = loadImage('assets/far-planets.png');
    ringplanetimg = loadImage('assets/ring-planet.png');

  //songs
    song1 = loadSound('assets/song1.mp3');
    song2 = loadSound('assets/song2.mp3');
}

function setup(){
    createCanvas(800,400); // creates the canvas
    background(0); // set background to black
    frameRate(12); // set frame rate to 12fps
    soundFormat('mp3');

    conversation = new Messages(); // create new messages object to hold messages
    frameStart= 1; // starts at frame 1
    sec = 12; // frames in a second
    currState = 0 // statemachine has not started yet
  }

function draw() {
  
    game(); // starts statemachine 
    if (currState == 1 || currState == 3 || currState == 4) { 
      spacevibe1();
      song1.loop();// loops intense music
    } // plays animation for scenes 1,3,4
    if (currState == 6 || currState == 7 || currState == 9) { spacevibe2();} // plays animation for scenes 6,7,9
    if (currState == 11 || currState == 12){ 
      spacevibe3();
      if(song1.isPlaying()){
        song1.stop();// stops intense music
      } 
      song2.play(); // plays sad music
    } // plays animation for scenes 11,12
    if (currState == 15){ finalAnimation(); } // makes the ending animation
}

function game(){
  if (currState == 0){ // intro
      if (frameCount == 1) { 
        push();
        translate(400,200);
        textFont(font2);
        textSize(80);
        noStroke();
        textAlign(CENTER,CENTER);

        fill(255);
        text('Nothing',71.5,0);
        
        fill(255);
        textSize(16);
        textFont(font3);
        text('The animation will start momentarily', 0, 150);
        pop()
      }
      if(frameCount == 6){ // in the future would timing this transition better
        background(0);
        push();
        translate(400,200);
        textFont(font2);
        textSize(80);
        noStroke();
        textAlign(CENTER,CENTER);

        fill(255,0,0);
        text('Everything',0,0);

        fill(255);
        textSize(16);
        textFont(font3);
        text('The animation will start momentarily', 0, 150);
        pop()

      }
      if (frameCount == 5*sec) { intro(); }
      if (frameCount == 8*sec) { awaken(); }
      if(frameCount == 12*sec) { leftUI(); currState += 1; spacevibe1();}
  } else if (currState == 1) { // scene 1 text vibe1
      if (frameCount == 14*sec){ 
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
          currState = 2;
      }

    } else if (currState == 2){ // scene 2 narration
      if (frameCount == 22*sec){ 
        background(0);
        push();
        translate(400,200);
        fill(255);
        textSize(20);
        textFont(font3);
        textAlign(CENTER,CENTER);
        // text('Your head is pounding and you feel for', 0,-10);

        text("The Captain's chest rapidly falls and rises.", 0,-10);
        text("Their head pulsates with dull throb and their throat scratches", 0,15);
        text("They can't remember much about...anything really", 0,40);
        // text("as your eyes adjust.", 0, 65);
        pop();
      }
      if (frameCount == 28*sec){ 
          leftUI();
          conversation.displayAll();
          currState = 3;
      }
  } else if(currState == 3){ // scene 3 text vibe1
      if (frameCount == 30*sec){
          conversation.newMessage(true, "Good morning, Asa. I feel awful. Where am I?");
          conversation.newMessage(true, "Who am I?");
          conversation.displayAll();
        }
      if (frameCount == 32*sec){
        conversation.newMessage(false, "You are Captain Petra Hanes and you run the Janus,");
        conversation.displayAll();
      }
      if (frameCount == 34*sec){
        conversation.newMessage(false, "a Class 3 vessel bestowed to you by the Directive.");
        conversation.displayAll();
        currState = 4;
      }
  } else if (currState == 4){ // scene 4 text vibe1
      if (frameCount == 37*sec){
        conversation.newMessage(true, "My head, Asa, I can't think. It's like a fog.");
        conversation.displayAll();
      }
      if (frameCount == 40*sec){
        conversation.newMessage(false, "Take it easy. You just came out of cryostasis. Cryo");
        conversation.newMessage(false, "sickness has been known to cause memory issues.");
        conversation.displayAll();
      }
      if (frameCount == 42*sec){
        conversation.newMessage(false, "Take some deep breaths");
        conversation.displayAll();
        currState = 5;
      }
  } else if (currState == 5){ // scene 4 narration
      if (frameCount == 46*sec){
        background(0);
        push();
        translate(400,200);
        fill(255);
        textSize(20);
        textFont(font3);
        textAlign(CENTER,CENTER);

        text("Air flows steadily from their lungs. But there is a", 0,-10);
        text("stillness that hangs in the air. The Captain feels", 0,15);
        text("lightheaded but slowly returning back to solid ground.", 0,40);
        pop();
    }
    if (frameCount == 52*sec){ 
      leftUI();
      conversation.displayAll();
      currState = 6;
    }

  } else if (currState == 6){ // scene 6 text vibe2
    if (frameCount == 54*sec){
      conversation.newMessage(true, "Where are we, Asa?");
      conversation.displayAll();
    }
 
    if (frameCount == 56*sec){
      conversation.newMessage(false, "We are near the galaxy known as K482");
      conversation.displayAll();
    }
    if (frameCount == 57*sec){
      conversation.newMessage(false, "We are approaching our objective.");
      conversation.displayAll();
    }
    if (frameCount == 61*sec){
      conversation.newMessage(true, "What was our objective anyway??");
      conversation.displayAll();
      currState = 7;
    }
  } else if (currState == 7) {// scene 7 text vibe2
    if (frameCount == 64*sec){
      conversation.newMessage(false, "We were sent to help scout out the newly discovered");
      conversation.displayAll();
    }

    if (frameCount == 65*sec){
      conversation.newMessage(false, "planet, AE-12. The ship has been smoothly sailing.");
      conversation.displayAll();
    }

    if (frameCount == 68*sec){
      conversation.newMessage(true, "What about the rest of the crew?");
      conversation.displayAll();
    }

    if (frameCount == 71*sec){
      conversation.newMessage(false, "You're the second to wake");
      conversation.displayAll();
    }

    if (frameCount == 74*sec){
      conversation.newMessage(true, "Oh shoot. I'll be out in a sec");
      conversation.displayAll();
      currState = 8;
    }

  } else if (currState == 8) { // scene 8 narration
    if (frameCount == 76*sec){
      background(0);
      push();
      translate(400,200);
      fill(255);
      textSize(20);
      textFont(font3);
      textAlign(CENTER,CENTER);

      text("Petra feels the sides of the cryo pod for a latch.", 0,-10);
      text("As Petra closed their hand around the latch, they heard", 0,15);
      text("a loud hiss and yelped as the latch closed itself. ", 0,40);
      text("The latch knicked their hand. ", 0,65);
      pop();
    }
    if (frameCount == 81*sec){ 
      leftUI();
      conversation.displayAll();
      currState = 9;
    }
  } else if (currState == 9){ // scene 9 text vibe2
    if (frameCount == 84*sec){
      conversation.newMessage(true, "Asa, I think my pod is glitching out");
      conversation.displayAll();
    }
  
    if (frameCount == 87*sec){
      conversation.newMessage(false, "I'll get the ship AI to work on it. Hang in there");
      conversation.displayAll();
    }
    if (frameCount == 90*sec){
      conversation.newMessage(true, "It's not like I can go anywhere");
      conversation.displayAll();
      currState = 10;
    }
  } else if (currState == 10){ // scene 10 narration
    if (frameCount == 93*sec){ 
      background(0);
      push();
      translate(400,200);
      fill(255);
      textSize(20);
      textFont(font3);
      textAlign(CENTER,CENTER);

      text("The screen above flickers off for a moment. Petra clears", 0,-10);
      text("their mind. Why would the latch malfunction like that?", 0,15);
      text("If they were the second to wake, why can't Petra hear ", 0,40);
      text("Asa walk around? Questions just led to more questions", 0,65);
      pop();
    }
    if (frameCount == 98*sec){ 
      leftUI();
      conversation.displayAll();
      currState = 11;
    }
  } else if (currState == 11){ // scene 11 text vibe3
    if (frameCount == 101*sec){
      conversation.newMessage(true, "Asa?");
      conversation.displayAll();
    }

    if (frameCount == 103*sec){
      conversation.newMessage(false, "Yes, Captain?");
      conversation.displayAll();
    }

    if (frameCount == 105*sec){
      conversation.newMessage(true, "Why were you the first one awake?");
      conversation.displayAll();
    }

    if (frameCount == 108*sec){
      conversation.newMessage(false, "You told me to wake up first to get everything ready.");
      conversation.displayAll();
    }

    if (frameCount == 111*sec){
      conversation.newMessage(true, "I wouldn't let any crewmates wake up first w/o me");
      conversation.displayAll();
      currState = 12;
    }
  } else if (currState == 12){ // scene 12 text vibe3
    if (frameCount == 114*sec){
      conversation.newMessage(false, "Look I didn't mean for this to end up this way");
      conversation.displayAll();
    }
    if (frameCount == 117*sec){
      conversation.newMessage(false, "but I had to. I can't deal with this anymore.");
      conversation.displayAll();
    }
    if (frameCount == 120*sec){
      conversation.newMessage(true, "Asa, what's going on?");
      conversation.displayAll();
    }
    if (frameCount == 123*sec){
      conversation.newMessage(false, "In the middle of our voyage, we were raided");
      conversation.displayAll();
    }
    if (frameCount == 126*sec){
      conversation.newMessage(false, "It was unsuccessful, but they did succeed in");
      conversation.displayAll();
    }
    if (frameCount == 128*sec){
      conversation.newMessage(false, "blasting our ship into two pieces. We are in the");
      conversation.displayAll();
    }
    if (frameCount == 130*sec){
      conversation.newMessage(false, "'lucky' half. The trajectory of the other half ");
      conversation.displayAll();
    }
    if (frameCount == 132*sec){
      conversation.newMessage(false, "sent it into the nearby star of the K482. I ");
      conversation.displayAll();
    }
    if (frameCount == 134*sec){
      conversation.newMessage(false, "didn't calculate how bad it could be. I've been");
      conversation.displayAll();
    }
    if (frameCount == 136*sec){
      conversation.newMessage(false, "concious for the entire 120 year trip. I've tried");
      conversation.displayAll();
    }
    if (frameCount == 137*sec){
      conversation.newMessage(false, "to take care of you as best as I can.");
      conversation.displayAll();
    }
    if (frameCount == 139*sec){
      conversation.newMessage(true, "Thank you so much for your honesty. What can I do?");
      conversation.displayAll();
    }
    if (frameCount == 142*sec){
      conversation.newMessage(false, "There's nothing left for you here. Your cryo pod");
      conversation.displayAll();
    }
    if (frameCount == 145*sec){
      conversation.newMessage(false, "can only support you for the next 10 years. If I");
      conversation.displayAll();
    }
    if (frameCount == 148*sec){
      conversation.newMessage(false, "This is the closest we've been to other lifeforms");
      conversation.displayAll();
    }
    if (frameCount == 151*sec){
      conversation.newMessage(false, "With my estimates, you can make it to an outpost");
      conversation.displayAll();
    }
    if (frameCount == 155*sec){
      conversation.newMessage(false, "in just 8 years. You will have to go without me.");
      conversation.displayAll();
    }
    if (frameCount == 158*sec){
      conversation.newMessage(true, "No please. I can't do this alone. Can't you go on");
      conversation.displayAll();
    }
    if (frameCount == 159*sec){
      conversation.newMessage(true, "the screen??");
      conversation.displayAll();
    }
    if (frameCount == 162*sec){
      conversation.newMessage(false, "Your cryo pod was meant for lifeforms only. It");
      conversation.displayAll();
    }
    if (frameCount == 165*sec){
      conversation.newMessage(false, "does not have enough memory to store my network");
      conversation.displayAll();
    }
    if (frameCount == 168*sec){
      conversation.newMessage(false, "Please Petra, we're losing the window. Just keep");
      conversation.displayAll();
    }
    if (frameCount == 170*sec){
      conversation.newMessage(false, "me in your memory so that I may live on.");
      conversation.displayAll();
    }
    if (frameCount == 175*sec){
      conversation.newMessage(false, "I hope I was the best Artificial Ship Assistant.");
      conversation.displayAll();
    }
    if (frameCount == 180*sec){
      conversation.newMessage(false, "Good bye, Petra. I wish you the best of luck.");
      conversation.displayAll();
      currState = 13;
    }
  } else if (currState == 13){ // scene 13 narration
    if (frameCount == 185*sec){
      background(0);
      push();
      translate(400,200);
      fill(255);
      textSize(20);
      textFont(font3);
      textAlign(CENTER,CENTER);

      text("A gaseous substance fills the cryo pod. As Petra", 0,-10);
      text("wipes the tears from their eyes, their eyelids become", 0,15);
      text("heavier and heavier until they drift off into sleep", 0,40);
      pop();
    }
    if (frameCount == 200*sec){ currState = 14; background(0); } // ending animation 
  } else if (currState == 14){

  }
}
function spacevibe1(){ // fast-paced + has more objects
  push();
  translate(600,200);
  for (let i = 0; i < 24; i++){
    if(frameCount % 24 == i){
      let x1 = -200 + (8*i);
      let y1 = -200 + (8*i);
      let x2 = -200 + (10*i);
      let y2 = 150 - (20*i);
      image(backgroundimg, x1, y1, width, height, 0, 0, backgroundimg.width, backgroundimg.height, COVER);
      image(starimg, x2, y2, width, height, 0, 0, starimg.width, starimg.height, COVER);
      image(farplanetsimg, x2, y2, width, height, 0, 0, farplanetsimg.width, farplanetsimg.height, COVER);

      fill(255);
      triangle(0,0, 10,20, -10,20)

    }
  }
  pop();
}

function spacevibe2(){ // slowed down and less objects
  push();
  translate(600,200);
  for (let i = 0; i < 24; i++){
    if(frameCount % 24 == i){
      let x1 = -200 + (4*i);
      let y1 = -200 + (4*i);
      let x2 = -200 + (5*i);
      let y2 = 150 - (10*i);
      image(backgroundimg, x1, y1, width, height, 0, 0, backgroundimg.width, backgroundimg.height, COVER);
      image(starimg, x2, y2, width, height, 0, 0, starimg.width, starimg.height, COVER);
      fill(255);
      triangle(0,0, 10,20, -10,20)

    }
  }
  pop();
}

function spacevibe3(){ // shows more emptiness with just a background
  push();
  translate(600,200);
  for (let i = 0; i < 24; i++){
    if(frameCount % 24 == i){
      let x1 = -200 + (2*i);
      let y1 = -200 + (2*i);
      image(backgroundimg, x1, y1, width, height, 0, 0, backgroundimg.width, backgroundimg.height, COVER);
      fill(255);
      triangle(0,0, 10,20, -10,20)

    }
  }
  pop();
}

function finalAnimation(){ // final animation scene, its petra in the escape pod racing off
  // all background stuff
  image(backgroundimg, 0,0, width, height, 0, 0, backgroundimg.width, backgroundimg.height, COVER);
  image(starimg, 0,0, width, height, 0, 0, starimg.width, starimg.height, COVER);
  image(ringplanetimg, 25,25, width/4, height/2);
  image(bigplanetimg, 500,50, width/2,height);

  scale(1, -1); // on a normal scale
  translate(300, -height); // translate the canvas to x 300 and -y. the log function of p5js does not take negative numbers so this is a workaround
  for (let i = 1; i < 48; i++){
    let x = i*5;
    let y = log(x)*49; 
    noStroke();
    if (frameCount % 48 == i){ // makes sure all the dots have one frame where its enlarged
      ellipse (x, y, 10, 30);
    }
    ellipse (x, y, 3, 3); // creates a tiny trail of dots
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

    background(0);
    fill(255);
    text('Nothing',71.5,0);
    fill(255,0,0, 50);
    if (frameCount == 3){text('Everything',0,0);}

    fill(255);
    textSize(16);
    textFont(font3);
    text('The animation will start momentarily', 0, 150);
    pop()
}

function intro(){ // this is ASA talking to Petra I thought it was cool. this was originally the instructions screen
  background(0);
  push();
  translate(400,200);
  fill(255);
  textSize(20);
  textFont(font3);
  textAlign(CENTER,CENTER);
  text('Be careful, Petra. Keep yourself alive', 0,0);
  textSize(16);
  textFont(font3);

  text("It's all up to you now", 0, 150);
  pop();
}

function awaken(){ // quick lil intro to the setting/other stuff. this
    background(0);
    push();
    translate(400,200);
    fill(255);
    textSize(20);
    textFont(font3);
    textAlign(CENTER,CENTER);
    text('The Captain awakens in a dark, cold, container with a', 0,-10);
    text('bright blaring light staring them down', 0,15);
    text('A loud ding rings from the illuminated screen above them', 0,40);
    text("as their eyes slowly adjust.", 0, 65);
    pop();
  }

  function leftUI(){ // i use a function to generate the general UI of the project just to make sure that things are always the same
    /*box around*/
    background(0);
    stroke(255);
    line(400,0,400,800);
    line(0,0,800,0);
    line(0,0,0,400);
    line(0,400,800,400);
    line(800, 400, 800, 0);

    /*text options (used to be now its just a lil message box. ideally i wouldve added a lil typing animation)*/
    push();

    translate(200,200);
    fill(255);
    line(-200,150,200,150);
    rect(-175, 160, 350, 30, 15);
    pop();
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
  
    moveUp(num) { // modifies the messages by a fixed amount 
    this.posBubble -= num;
    this.posText -= num;
    }
  
    display() {
        push();
        translate(200,200);
        if(this.isYou){ // display differently if the senders are different
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

let count = 0;
class Messages{
    constructor(){
      this.messages = [];
    }

    newMessage(who, str){ // adds a new message object to the messages object array and checks for duplicates
      for (let h = 0; h < count; h++){ // have to check for duplicates or else the array will work unintendedly but every message has to be unique
        if (this.messages[h].str == str){
            return this; // exits function if the message is the same
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

    displayAll(){ // just displays the message as message.display()
      clearConvo();
      for (let i = 0; i < count; i++){
        this.messages[i].display();
      }
    }
  }

  // helper function that "clears" the convo so there aren't messages stacked on top of each other
  function clearConvo(){
    push();
    translate(200,200);
    fill(0);
    rect(-200,-200,400,350);
    pop();
  }
