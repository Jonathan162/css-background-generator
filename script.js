

let output = document.querySelector("h3");
let colorOne = document.querySelector(".color1");
let colorTwo = document.querySelector(".color2");
let body = document.getElementById("color_changed");

setGradient = () => {
    body.style.background = "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";
    
    output.textContent = body.style.background + ";";
}

colorOne.addEventListener("input", setGradient);

colorTwo.addEventListener("input", setGradient);