const ball = document.getElementById('ball');
let positionX = 0;
let positionY = 0;
let viewWidth;
let ballSpeed = 5;
let ballDirectionX = [-1, 1];
let randIndex;


window.addEventListener('load', () => {
    ball.style.transform = `translate(${positionX}px, ${positionY}px)`;
    randIndex = Math.floor(Math.random() * 2)
})

setInterval(moveBall, 30)

function moveBall() {
    
    positionX = positionX + ballSpeed * ballDirectionX[randIndex];
    ball.style.transform = `translate(${positionX}px, ${positionY}px)`;
}