/** @type {HTMLCanvasElement} */
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 900;
const numberOfEnemies = 50;
const enemiesArray =[];

let gameFrame = 0;



class Enemy{
    constructor(){

        this.image = new Image();
        this.image.src  = 'enemy3.png';             
        this.speed = Math.random() * 2 + 1;
        this.spriteWidth = 218;
        this.spriteheight = 177;
        this.width = this.spriteWidth / 2.5;
        this.height = this.spriteheight /2.5;
        this.x= Math.random() * (canvas.width - this.width);
        this.y = Math.random() * (canvas.height - 250 - this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random ()* 4 + 1);
        this.angle = Math.random() * 2;
        this.angleSpeed = Math.random() * 2 + .7;
        //this.curve = Math.random()* 200 + 25;

    }
    update(){
         this.x = canvas.width/2 * Math.sin(this.angle * Math.PI/180) + (canvas.width/2 - this.width/2);
         this.y = canvas.height/2 * Math.cos(this.angle * Math.PI/360) + (canvas.height/2 - this.height/2);
        this.angle += this.angleSpeed;
        if(this.x + this.width  < 0 )this.x = canvas.width;
        //animate sprites
        if(gameFrame % this.flapSpeed === 0){
        this.frame > 4 ? this.frame = 0 : this.frame++;
        }
    }
    draw(){

        
        ctx.drawImage(this.image, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteheight, this.x,this.y, this.width, this.height)
    }
}



for(let i= 0; i < numberOfEnemies; i++){
    enemiesArray.push(new Enemy());
}

function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
  
    enemiesArray.forEach(enemy => {
        enemy.update();
        enemy.draw();
    })
    gameFrame++;
    requestAnimationFrame(animate);

}
animate();