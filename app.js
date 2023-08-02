let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

// GAme starts when we press any key on the document(key must not be pressed in console window)

document.addEventListener("keypress", function () {
    // Step 1
    if (started == false) {
        console.log("Game started");
        started = true;

        // Step 2
        levelUp();

    }
});
function checkAns(ind) {
    if (userSeq[ind] === gameSeq[ind]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
        
    }
    else {
        h2.innerHTML = `Game over.Your score was <u>${level}</u><br>Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `Level ${level}`;
    // Button flashes when a user clicks it and also when the level raises
    let randInd = Math.floor(Math.random() * 3);
    let randColor = btns[randInd];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);   //Step 4
    console.log(gameSeq);

    btnFlash(randbtn);
}
// Step 3
function btnPress() {
    let btn = this;
    btnFlash(btn);

    // step 4
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);

    // Step 5
    checkAns(userSeq.length - 1);
}
let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click",btnPress);
}
function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}