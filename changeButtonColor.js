let allButtons = document.getElementsByTagName("button");
// console.log(allButtons);

let getButtonColors=[];

for(let i =0; i < allButtons.length; i++){
    getButtonColors.push(allButtons[i].classList[1]);
}
// console.log(getButtonColors);

function changeButtonColors(buttonValues){
    if(buttonValues.value === "red"){
        redColor();
    }  else if(buttonValues.value === "green"){
        greenColor();
    }  else if(buttonValues.value === "yellow"){
        yellowColor();
    }  else if(buttonValues.value === "reset"){
        resetColors();
    }  else if(buttonValues.value === "random"){
        randomColors();
    }  else if(buttonValues.value === "blue"){
        blueColor();
    }
}

function redColor(){
    for(let i=0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);

        allButtons[i].classList.add("btn-danger");
    }
}

function greenColor(){
    for(let i=0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);

        allButtons[i].classList.add("btn-success");
    }
}

function yellowColor(){
    for(let i=0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);

        allButtons[i].classList.add("btn-warning");
    }
}

function blueColor(){
    for(let i=0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);

        allButtons[i].classList.add("btn-primary");
    }
}

function resetColors(){
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].classList.remove(allButtons[i].classList[1]);

        allButtons[i].classList.add(getButtonColors[i]);
    }
}

function randomColors(){
    let allColorClass = ["btn-primary", "btn-danger", "btn-warning", "btn-success"];
    for(let i = 0; i < allButtons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(allColorClass[randomNumber]);
    }
}