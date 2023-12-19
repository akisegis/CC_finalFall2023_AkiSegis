/* 
Aki Segismundo
LadyK
Creative Coding A
Final Progression Day 10
14 December 2023
*/

let txtColor = 255;
let txtMsg = 12;
let movie = []
let gameStart = false;

function setup{

}

function draw {

}

function game(){
    intro();
}

function intro(){

}

function starterDia(){

}


class Scene{
    outcomes = []; // array of next possible scenes
    choices = []; // array of your choices in the scene
    bubbles = []; // array of speech bubbles in scene

    constructor (x, y, z){
        this.outcomes = x;
        this.choices = y;
        this.bubbles = z;
    }

    goTo(num){
        return outcomes[num];
    }

}

class Dialogue{
    constructor (isYou, str) { // is you checks if the message is from you or asa
        this.isYou = isYou;
        this.str = str;
        this.posBubble = 90;
        this.posText = 115;
      }
  
    moveUp() {
    this.posBubble -= 60;
    this.posText -= 60;
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
    left = -100;
    right = 100;
    constructor(dir, str) {
        this.dir = dir; // boolean for left or right. right means true, left means false
        this.str = str;
    }

    choose(){
        let button1 = createButton('1');
        button1.position(177,350);

        let button2 = createButton('2');
        button2.position(377,350);

        button1.mousePressed(() => {
            return false;
        });

        button2.mousePressed(()=> {
            return true;
        });
    }

    display(){
        push();
        translate(200,200);
        fill(txtColor);
        textFont(font1);
        textSize(txtMsg);
        textAlign(LEFT, CENTER);

        if (this.dir){
            text(this.str, left, 175);
        }
        else{
            text(this.str, right, 175);
        }
        pop();
    }
}