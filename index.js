// es-lint-disble

const cvs = document.getElementById("canvas");
const ctx = cvs.getContext('2d');

const bird = new Image();
const bg = new Image();
const pipeNorth = new Image();
const pipeSouth = new Image();

document.addEventListener("keydown", (e) => {
    if (e.key === " "){
        yPos -= 30;
    }
    if (e.keyCode === 32){
        isPause = !isPause;
    }
})

bird.src = "./bird.png";
bg.src = "./bg.png";
pipeNorth.src = "./pipeNorth.png";
pipeSouth.src = "./pipeSouth.png";

const gap = 50;

let xPos = 10;
let yPos = 150;
let grav = 1;

let isPause = false;

const pipes = [];
pipes[0] = {
    x: cvs.width,
    y: 0,
}

function update(state) {
    if (isPause){
        return;
    }
    pipes.forEach((pipe) => {
        pipe.x--;

        if (pipe.x === 50) {
            pipes.push({
                x: cvs.width,
                y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height,
            })
        }

    })
    grav++;

    return;
}

update(); 

spawnPos = {
    playerX : 30,
    playerY : 30,
    enemyX : 30,
    enemyY : 30,
}

function draw(newState) {
    ctx.drawImage(bg, 0, 0);

    pipes.forEach((pipe) => {
        ctx.drawImage(pipeNorth, 300, 820);
        ctx.drawImage(pipeSouth, pipe.x, pipe.y + pipeNorth.height + gap);

    })
    ctx.drawImage(bird, xPos, yPos + grav);

    requestAnimationFrame(draw);
}

draw();




// index.js
// enities/
//     Abstract.js
//     Main.js
// main.js



// gameState = "playable"; // '', '', ''


// const mapState = {
//     PLAYABLE: 'playable',
//     PAUSED: 'paused',
//     MENU: 'menu',
//     DEATH: 'death',
// }

// if (currentGameState === mapState.DEATH){

    
// }