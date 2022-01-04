const firstPaddle = document.getElementById('first-paddle');
const secondPaddle = document.getElementById('second-paddle');
let viewHight;
let vel = 50;
let firstPaddlePosition = 200;
let secondPaddlePosition = 250;

window.addEventListener('load' , () => {
    viewHight = document.documentElement.clientHeight

    // positioning the first paddle
    firstPaddle.style.left = 0
    firstPaddle.style.top = `${firstPaddlePosition}px`

    // positioning the second paddle
    secondPaddle.style.right = 0
    secondPaddle.style.top = `${secondPaddlePosition}px`
})

window.addEventListener('keyup', (event) => {
    if (event.key === 'w' && firstPaddlePosition > 0){
        firstPaddlePosition -= vel
        firstPaddle.style.top = `${firstPaddlePosition}px`
    }
    if (event.key === 's' && firstPaddlePosition < viewHight - 100){
        firstPaddlePosition += vel
        firstPaddle.style.top = `${firstPaddlePosition}px`
    }
    if (event.key === 'ArrowUp' && secondPaddlePosition > 0){
        secondPaddlePosition -= vel
        secondPaddle.style.top = `${secondPaddlePosition}px`
    }
    if (event.key === 'ArrowDown' && secondPaddlePosition < viewHight - 100){
        secondPaddlePosition += vel
        secondPaddle.style.top = `${secondPaddlePosition}px`
    }
})