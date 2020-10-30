
function game() {
    let container = document.getElementById("game");
    let output = container.querySelector("#output");
    let btnRocks = container.querySelector("#rock");
    let btnPaper = container.querySelector("#paper");
    let btnScissors = container.querySelector("#scissors");

    let roundCount = 10;
    let currentRound = 1;
    let currentWins = 0;
    let aiOptions = ["rock", "paper", "scissors"];
    let currentAiOption;
    let currentPlayerOption;
    let waitForInput = false;

    function startGame() {
        currentRound = 1;
        addLine("--------------------------------------------");
        addLine("Neues Spiel gestartet");
        addLine("--------------------------------------------");
        runRound();
    }

    function runRound() {
        addLine("Runde " + currentRound + " von " + roundCount + " - Wähle deine Option");
        waitForInput = true;
    }

    function addLine(msg) {
        output.innerHTML += msg + "<br />";
    }

    function scoreMove() {

    }

    function processInput(value) {
        console.log("clicked on ", value, waitForInput);
        if (waitForInput) {
            currentPlayerOption = value;
            waitForInput = false;
            scoreMove();
        }
    }

    btnPaper.addEventListener('click', function(e) {
        processInput("paper");
    });
    btnRocks.addEventListener('click', function(e) {
        processInput("rock");
    });
    btnScissors.addEventListener('click', function(e) {
        processInput("scissors");
    });

    return {
        start: function() {
            startGame();
        }
    }
}