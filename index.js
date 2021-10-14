var arrayOfButtons = document.querySelectorAll('.drum'); // array of all drum buttons;

//detecting button press

for (var i = 0; i < arrayOfButtons.length; i++){
    arrayOfButtons[i].addEventListener("click", function(){
        buttonText = this.innerText;
        makeSound(buttonText);
        buttonAnimation(buttonText);

    })
}

//dectecting keypress

document.addEventListener('keypress', function(event){

    makeSound(event.key)
    buttonAnimation(event.key);
})


function buttonAnimation (currentKey) {
   var animation = document.querySelector('.' + currentKey);
   animation.classList.add('pressed');

   setTimeout(function(){
    animation.classList.remove('pressed')
   }, 500);
}


function makeSound(sound){
    switch (sound) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        
        case "l":
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            break;

        default:
            break;
    }
}

