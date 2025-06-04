function toggleLight(){
    let isGreen = Math.floor(Math.random()*2)+1; 
    let randomSeconds = Math.floor(Math.random()*6)+1; 

    document.querySelector(".img").setAttribute("src", `./images/doll${isGreen}.png`);


    if (isGreen==1){
        document.querySelector("h1").innerHTML="🟢Green Light";
        document.querySelector("p").innerHTML="Run";
        document.querySelector("button").innerHTML="Click to Stop";
    }
    else{
        document.querySelector("h1").innerHTML="🔴Red Light";
        document.querySelector("p").innerHTML="HOLD";
        document.querySelector("button").innerHTML="Click to Move";
    }
    setTimeout(toggleLight, randomSeconds*1000)

}

toggleLight();

let toggleRunning = false;

document.getElementById("movePlayer").addEventListener("click", function(){
    toggleRunning = !toggleRunning;
    if(toggleRunning){
        document.querySelector(".imgPlayer").setAttribute("src","./images/run.gif");
    } else {
        document.querySelector(".imgPlayer").setAttribute("src","./images/stand.png");
    }

});
