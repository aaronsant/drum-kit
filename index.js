for (let i = 0; i <document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var buttonLetter = this.innerHTML
        handleClick(buttonLetter);
        buttonAnimation(buttonLetter);
    });
}

document.addEventListener("keydown", function(event) {
    handleKey(event.key);
    buttonAnimation(event.key)
});

function handleClick(buttonLetter) {
    
    switch (buttonLetter) {
        case "w":
            var f = "tom-1.mp3";
            break
        case "a":
            var f = "tom-2.mp3"
            break
        case "s":
            var f = "tom-3.mp3"  
            break
        case "d":
            var f = "tom-4.mp3"
            break
        case "j":
            var f = "snare.mp3"
            break
        case "k":
            var f = "kick-bass.mp3"
            break
        case "l":
            var f = "crash.mp3"
            break
        default:
            break
    }

    var audio =  new Audio("sounds/" + f + "?raw=true");
    audio.play()
}

function handleKey(key) {
    switch (key) {
        case "w":
            var f = "tom-1.mp3";
            break
        case "a":
            var f = "tom-2.mp3"
            break
        case "s":
            var f = "tom-3.mp3"  
            break
        case "d":
            var f = "tom-4.mp3"
            break
        case "j":
            var f = "snare.mp3"
            break
        case "k":
            var f = "kick-bass.mp3"
            break
        case "l":
            var f = "crash.mp3"
            break
        default:
            break
    }

    var audio =  new Audio("sounds/" + f + "?raw=true");
    audio.play()
}

function buttonAnimation(key) {
    var activeBtn = document.querySelector("."+key);
    activeBtn.classList.add("pressed")
    setTimeout(function(){activeBtn.classList.toggle("pressed");},100 )
    
    
}
