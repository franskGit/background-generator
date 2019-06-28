var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("button");


function setGradient(){
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = body.style.background + ";";
}

function set2digits(){
    var i = getRndInteger(0, 99);
    if (i.toString(16).length < 2) {
        return "0"+i.toString(16)
    } else {
        return i.toString(16)
    }
}

function setColor(){
    return "#" + set2digits()+set2digits()+set2digits();
}

function setRandom(){
    color1.value = setColor();
    color2.value = setColor();
    setGradient();
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", setRandom);
