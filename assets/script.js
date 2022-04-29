// Initial variables
let bodyEl = document.querySelector(".body");
const homeTitle = document.createElement("h1");
homeTitle.innerHTML = "Mad Lib<br>Cheeseburger Mishap";
const startBtn = document.createElement("button");
startBtn.classList.add('btn')
startBtn.innerHTML = "Begin";
bodyEl.appendChild(homeTitle);
bodyEl.appendChild(startBtn);

// Button event
startBtn.addEventListener('click', startLib);

function startLib() {
    startBtn.innerHTML = "Restart";
    // Words for the Mad Lib
    let bodyEl = document.querySelector(".body");
    let day = prompt("Day of the Week");
    let bodyPart = prompt("Part of the Body");
    let restaurant = prompt("Name of Restaurant");
    let smellAdj = prompt("Type of Smell");
    let technology = prompt("Type of Technology");
    let friend = prompt("Name");
    let show = prompt("TV Show Name");
    let friendActionIng = prompt("Action ending with ING");
    let numberMinutes = prompt("Numbner");
    let adj1 = prompt("Adjective");
    let adj2 = prompt("Adjective");
    let color = prompt("Type of Color");
    let clothing = prompt("Piece of Clothing");
    let verbEd1 = prompt("Verb Ending with ED");
    let verbEd2 = prompt("Verb Ending with ED");
    let verb1 = prompt("Verb");
    let verbIng = prompt("Verb Ending with ING");
    let publicTransport = prompt("Type of Public Transportation");
    let adjLy1 = prompt("Adjective Ending with LY");
    let verbEd3 = prompt("Verb Ending with ED");
    let yell = prompt("Funny Phrase");
    let verb2 = prompt("Verb");
    let nounS = prompt("Noun Ending with S");
    let bodyPart2 = prompt("Part of the Body");
    let food = prompt("Food");
    let verb3 = prompt("Verb");


    let madLib = document.createElement("p");
    
    madLib.innerHTML = "Someone stole my cheeseburger yesterday. It was a " + day + " afternoon. The rain was so bad that I couldn't see my " + bodyPart + ". I went to " + restaurant + " to get a cheeseburger and keep dry. When I got inside, it smelled like " + smellAdj + " and my stomach grumbled. Once I ordered my cheeseburger, I stood by to pick it up. My " + technology + " began to ring. It was my friend, " + friend + ". They wanted to update me on the latest episode of " + show + ". I turned around so I could hear them better. They wouldn't stop " + friendActionIng + " even when I asked them to stop. " + numberMinutes + " minutes passed by and I still haven't gotten my order. I went up to the counter and asked where my cheeseburger was. They looked at my receipt and told me that a " + adj1 + " " + adj2 + " man with a " + color + " " + clothing + " came up and " + verbEd1 + " my cheeseburger. I " + verbEd2 + " and " + verb1 + " out of the restaurant to see if I could find the culprit. I saw him " + verbIng + " my cheeseburger as he waited for the " + publicTransport + ". I ran as " + adjLy1 + " as I could before he got away for good. He " + verbEd3 + " and yelled, " + yell + "! I quickly snatched my cheeseburger back and " + verb2 + " on the ground. He looked at me with " + nounS + " in his " + bodyPart2 + ". It turns out he couldn't afford to get any " + food + " until his next paycheck. I " + verb3 + " back to " + restaurant + "'s and got him a whole meal. He thanked me and went on his way. I told him to keep in touch just in case he was in the area. We became good friends after that Cheeseburger Mishap.";

    bodyEl.appendChild(madLib);
}