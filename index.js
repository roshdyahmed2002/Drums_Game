

var buttons= document.querySelectorAll(".btn");
for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click", function (){
        var textContentP= this.firstElementChild.textContent;
        searchKey(textContentP);
    })


    document.addEventListener("keydown",function(event){
       var key= event.key;
       searchKey(key);
    })
}


function searchKey(textContentP){
    if(textContentP==="w"){
        var audio= new Audio("sounds/tom-1.mp3");
        audio.play();
        }
        else if(textContentP==="a"){
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
        }
        else if(textContentP==="s"){
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
        }
        else if(textContentP==="d"){
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
        }
        else if(textContentP==="j"){
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
        }
        else if(textContentP==="k"){
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
        }
        else if(textContentP==="l"){
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
        }
}
