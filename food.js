let apple;

function createApple (){
    function generateApple(){
        let posX = Math.round(Math.random()* (10-1)+1);
        let posY = Math.round(Math.random()* (10-1)+1);
        return [posX, posY];
    }
    let appleCoordinates = generateApple();

    apple = document.querySelector('[posX = "' + appleCoordinates[0] + '"][posY = "' + appleCoordinates[1] + '"]');

    while (apple.classList.contains('snakeBody')){
        let appleCoordinates = generateApple();
        apple = document.querySelector('[posX = "' + appleCoordinates[0] + '"][posY = "' + appleCoordinates[1] + '"]');
    }

    apple.classList.add('apple');
}

createApple();
let direction = 'right';
let steps = false;