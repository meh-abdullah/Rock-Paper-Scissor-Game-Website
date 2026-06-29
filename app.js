let compscore = document.querySelector(".comp-count");
let userscore = document.querySelector(".user-count");
const RPS = document.querySelectorAll("#choice");
const msg = document.querySelector(".msg");

let compscores = 1;
let userscores = 1;

// Gameplay function
const gameplay = (userchoice) => {
    const comp = computerchoice();
    const user = userchoice;
    // Show user and computer choices in msg
    msg.innerText = `You chose ${user} and Computer chose ${comp}.`;

    // Game logic
    if (comp === user) {
        msg.innerText += " Game Draw.";
        msg.style.backgroundColor = "tomato";
    } else {
        let userwin = true;
        if (user === "rock") {
            // Scissor | Paper..
            userwin = comp === "paper" ? false : true;
        } else if (user === "paper") {
            // Rock | Scissor..
            userwin = comp === "rock" ? true : false;
        } else if (user === "scissor") {
            // Rock | Paper..
            userwin = comp === "paper" ? true : false;
        }
        winner(userwin);
    }
}

// Winner function
const winner = (userwin) => {
    if (userwin) {
        userscore.innerText = userscores++;
        msg.innerText += " YOU WON! 🎉";
        msg.style.backgroundColor = "lightgreen";
    } else {
        compscore.innerText = compscores++;
        msg.innerText += " YOU LOST! ☠️";
        msg.style.backgroundColor = "lightcoral";
    }
}

// Computer selection function
const computerchoice = () => {
    const options = ["rock", "paper", "scissor"];
    let compchoice = Math.floor(Math.random() * 3);
    const compselect = options[compchoice];

    console.log(compselect); // Logs the computer's choice
    return compselect;
}

// User selection event listener
RPS.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userchoice = choices.getAttribute("class");
        gameplay(userchoice);
    });
});

// Tab navigation function
function openPage(pageName, elmnt) {
    // Hide all elements with class="tabcontent" by default
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    
    // Add the background color to the button (tab link) of the active tab
    elmnt.className += " active";
}


//name input
 // Get the search input and last button
 const searchInput = document.getElementById('searchInput');
 const lastButton = document.getElementById('lastButton');

 // Add an event listener to the search input to detect when the user types
 searchInput.addEventListener('input', function() {
     // Set the text of the last button to the value typed in the search input
     lastButton.textContent = searchInput.value;
 });