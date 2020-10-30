function game() { /* alle Funktionen von game() werden bei dessen aufruf durchlaufen */
    let container = document.getElementById("game");
    let output = container.querySelector("#output");
    let btnRocks = container.querySelector("#rock");
    let btnPaper = container.querySelector("#paper");
    let btnScissors = container.querySelector("#scissors");

    let roundCount = 10;
    let currentRound = 1;
    let currentWins = 0;
	let currentLoses = 0;
	let currentUndecided = 0;								/* selbst hinzugefügt */
    let aiOptions = ["rock", "paper", "scissors"];
    let currentAiOption;									/* unbenutzt */
    let currentPlayerOption;
    let waitForInput = false;

    function startGame() {				<!-- Wird aufgerugen -->
        currentRound = 1;
        addLine("--------------------------------------------");
        addLine("Neues Spiel gestartet");
        addLine("--------------------------------------------");
        runRound();
    }

    function runRound() {		/* aufgerugen durch function startGame() */ 
        addLine("Runde " + currentRound + " von " + roundCount + " - Wähle deine Option"); /* ausgabe von  Runde x von y - wähle deine Option*/
        waitForInput = true;
    }

    function addLine(msg) {
        output.innerHTML += msg + "<br />";
    }

    function scoreMove() {  /* Funktion prüft Spieler eingabe gegen noch zu generierenden Wert */
		if (roundCount != currentRound)			/* stellt sicher dass Ablauf nicht zu oft durchgeführt wird */
		{ 
		let RandomComputerOption = aiOptions[Math.floor(Math.random() * aiOptions.length)];
		if (RandomComputerOption == "rock") 
		{
			if (currentPlayerOption == "rock") { currentUndecided++; }
			if (currentPlayerOption == "scissors") { currentLoses++; }
			if (currentPlayerOption == "paper") { currentWins++; }
		}
		if (RandomComputerOption == "paper") 
		{
			if (currentPlayerOption == "rock") { currentLoses++; }
			if (currentPlayerOption == "scissors") { currentWins++; }
			if (currentPlayerOption == "paper") { currentUndecided++; }
		}
		if (RandomComputerOption == "scissors") 
		{
			if (currentPlayerOption == "rock") { currentWins++; }
			if (currentPlayerOption == "scissors") { currentUndecided++; }
			if (currentPlayerOption == "paper") { currentLoses++; }
		}
		waitForInput = true;			/* es wird eine neue Antwort erwartet*/
		currenRound++;				/* Rundenanzahl wird hochgezählt */
		}
		
		
		
		
		

    }

    function processInput(value) {
        console.log("clicked on ", value, waitForInput);
        if (waitForInput) {
            currentPlayerOption = value; /* enthält nach Durchlauf User Eingabe */
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