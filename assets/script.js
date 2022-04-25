let bodyEl = document.querySelector(".body");
const homeTitle = document.createElement("h1");
homeTitle.innerHTML = "Mad Lib<br>Cheeseburger Mishap";
const startBtn = document.createElement("button");
startBtn.classList.add('btn')
startBtn.innerHTML = "Begin";
bodyEl.appendChild(homeTitle);
bodyEl.appendChild(startBtn);

startBtn.addEventListener('click', startLib);

function startLib() {
    homeTitle.innerHTML = "Noun";
    startBtn.classList.add('hidden');
    let Noun1 = document.createElement('input');
    Noun1.classList.add('input');
    let btn = document.createElement('button');
    btn.innerHTML = "Next";
    btn.classList.add('btn');
    bodyEl.appendChild(Noun1);
    bodyEl.appendChild(btn);
    btn.addEventListener('click', enterValue);
}

function enterValue(Noun1) {
    console.log(Noun1.innerHTML);
}