/* 
const spinner = document.querySelector(".spinner p");
const spinnerContainer = document.querySelector(".spinner");
const button = document.querySelector("button");
const result = document.querySelector(".result");

let rotateCount = 0;
let startTime = null;
let rAF;


result.style.display = "none";
spinnerContainer.style.display = "none";


function random(min, max) {
    let num = Math.floor(Math.random() * (max - min )) + min;
    console.log(num);
    return num;
}


function draw(timeStamp) {
    if (!startTime) {
        startTime = timeStamp;
    }
    
    rotateCount = (timeStamp - startTime) / 3;

    if(rotateCount > 360) {
        rotateCount = rotateCount % 360;
    }

    spinner.style.transform = `rotate(${rotateCount}deg)`;

    rAF = requestAnimationFrame(draw);
}


function reset() {
    button.style.display = "block";
    result.style.display = "none";
    result.textContent = "";
}


function start() {
    draw();

    spinnerContainer.style.display = "block";
    button.style.display = "none";
    
    setTimeout(setEndgame, random(5000, 10000));//setTimeout kann nur geloescht werden wenn es einer variable zugewiesen wird aber in diesem Fall ist das nicht noetig
}


function setEndgame() {
    
    cancelAnimationFrame(rAF);

    spinnerContainer.style.display = "none";
    result.style.display = "block";
    result.textContent = "!PLAYERS GO!";

    document.addEventListener("keydown", keyHandler) 

    function keyHandler(e) {
        let isOver = false;
        console.log(e.key);

        if (e.key === "a") {
            result.textContent = "Player 1 won!!";
            isOver = true;
        }
        else if (e.key === "l") {
            result.textContent = "Player 2 won!!";
            isOver = true;
        }

        if (isOver) {
            document.removeEventListener("keydown", keyHandler);
            setTimeout(reset, 5000);
        }
    }
}


button.addEventListener("click", start);

*/






const button = document.querySelector("button");
const spinnerContainer = document.querySelector(".spinner");
const spinner = document.querySelector(".spinner p"); 
const result = document.querySelector(".result");

let rAF;
let startTime = null;
let rotateAngel = 0;

spinnerContainer.style.display = "none";
result.style.display = "none";


button.addEventListener("click", start);


function random(min, max) {
    let num = Math.floor(Math.random() * (max - min)) + min;
    return num;
} 


function start() {
    button.style.display = "none";
    spinnerContainer.style.display = "block";
    
    draw();

    setTimeout(setEndgame, random(5000, 10000));
}


function draw(timeStamp) {
    if (!startTime) {
        startTime = timeStamp;
    }

    rotateAngel = (timeStamp - startTime) / 3;

    if (rotateAngel > 360) {
        rotateAngel %= 360; 
    }

    spinner.style.transform = `rotate(${rotateAngel}deg)`;
    
    rAF = requestAnimationFrame(draw);
}


function setEndgame() {
    spinnerContainer.style.display = "none";
    cancelAnimationFrame(rAF);

    result.style.display = "block";
    result.innerHTML = "!!PLAYERS GO!!";
    
    //!document.addEventListener(), um Event auszuloesen muss document focusiert sein
    //!gilt auch fuer window.addEventListener()
    window.addEventListener("keydown", keyHandler);

    //! keyHandler() kann natuerlich auch auserhalb von setEndgame() geschrieben werden
    function keyHandler(e) {//e := keybordevent, entspricht dem keybord event -This-, wird mitgeliefert und kann verarabeitet werden
        let isOver = false;
        console.log(e);
        console.log(e.key);


        if (e.key === "a") {
            isOver = true;
            result.innerHTML = "Player 1 won!!"
        }
        else if (e.key === "l") {
            isOver = true;
            result.innerHTML = "Player 2 won";
        }

        if(isOver) {
            window.removeEventListener("keydown", keyHandler);
            setTimeout(reset, 5000);
        }
    }
}


function reset() {
    result.style.display = "none";
    result.innerHtml = "";
    button.style.display = "block";
}