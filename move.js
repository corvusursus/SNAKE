document.addEventListener('keydown', function(e){
    if (steps === true){
    if(e.which === 37 && direction!= 'right'){
        direction = 'left';
        steps = false;
    }
    else if(e.which === 38 && direction!= 'down'){
        direction = 'up';
        steps = false;
    }
    else if(e.which === 39 && direction!= 'left'){
        direction = 'right';
        steps = false;
    }
    else if (e.which === 40 && direction!= 'up'){
        direction = 'down';
        steps = false;
    }}
});

let interval = setInterval(move, 500);
clearInterval(interval);

