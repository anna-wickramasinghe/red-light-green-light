let isGreen = true;
let gameRunning = true;
let toggleRunning = false;
let toggleTimeout;

function toggleLight(){
    if (!gameRunning) return;

    isGreen = Math.floor(Math.random() * 2) + 1 === 1;
    let randomSeconds = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img").setAttribute("src", `./images/doll${isGreen ? 1 : 2}.png`);

    if (isGreen) {
        document.querySelector("h1").innerHTML = "🟢 Green Light";
        document.querySelector("p").innerHTML = "Run";
    } else {
        document.querySelector("h1").innerHTML = "🔴 Red Light";
        document.querySelector("p").innerHTML = "HOLD";
    }
    toggleTimeout = setTimeout(toggleLight, randomSeconds * 1000);

}

toggleLight();

document.getElementById("movePlayer").addEventListener("click", function(){

    if (!gameRunning) return;

    toggleRunning = !toggleRunning;

    if(toggleRunning){

        if (!isGreen) {
            gameOver();
            return;
        }

        document.querySelector(".imgPlayer").setAttribute("src","./images/run.gif");
        document.getElementById("movePlayer").innerHTML="Click to Stop";
        
    } else {
        document.querySelector(".imgPlayer").setAttribute("src","./images/stand.png");
        document.getElementById("movePlayer").innerHTML="Click to Move";
    }

});

function gameOver() {
  gameRunning = false;
  clearTimeout(toggleTimeout); 
  toggleRunning = false;

  document.querySelector(".imgPlayer").setAttribute("src", "./images/dead.png");
  document.getElementById("movePlayer").innerHTML = "You are dead";
  alert("Game Over! You moved during RED light ❌");
}
