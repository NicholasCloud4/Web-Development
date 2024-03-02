
//Getting the length for number of buttons
var numOfDrumButtons = document.querySelectorAll(".drum").length;

//Looping through for each button that will be clicked
for (var i = 0; i < numOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}

function handleClick(){
    
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
}

//Dealing with keyboard Pressing

document.addEventListener("keydown", handleKey);

function handleKey(event){
    makeSound(event.key);
    buttonAnimation(event.key);
}

// Sound
function makeSound(keyOrClick){

    switch (keyOrClick) {
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play(); 
            break;

        case "s":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play(); 
            break;
            
        case "d":
            var snare = new Audio("sounds/snare.mp3");
            snare.play(); 
            break;

        case "u":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;

        case "i":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;

        case "o":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            break;

        case "p":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;
    
        default:
            console.log(buttonInnerHtml);
            break;
    }

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");

    }, 100);

}