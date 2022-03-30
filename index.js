//Detecting button press


var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons ; i++) {
   
     document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        
    var buttonInnerHTML = this.innerText;
    makeSound (buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    });

}
//Detecting button keypress

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

    function makeSound(key) {
        switch (key) {
            case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;

            case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;

            case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;

            case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;

            case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

            case "k":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;

            case "l":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;

            default:
    }
}

function buttonAnimation(currentKey) {
    var activateButton = document.querySelector("." + currentKey)
    activateButton.classList.add("pressed");

    setTimeout(function(){activateButton.classList.remove("pressed");},1000)
}

