
function main() {
    // save all main containers
    let home = document.getElementById("home");
    let game = document.getElementById("game");
    let score = document.getElementById("score");
	let inputField = container.querySelector("#your_name");
	let inputCount = container.querySelector("#rounds");
	
	console.log(inputField);
	
	let playerName = inputField.value;
	var playerCount = inputCount.value;

    // other global stuff
    /* let playerName = null; */

    return {
        showHome: function() {
            game.classList.add("hidden");
            score.classList.add("hidden");
            home.classList.remove("hidden");
        },
        showGame: function() {
            game.classList.remove("hidden");
            score.classList.add("hidden");
            home.classList.add("hidden");
        },
        showScore: function() {
            game.classList.add("hidden");
            score.classList.remove("hidden");
            home.classList.add("hidden");
        },
        setName: function(name) {
            playerName = name;
        }
    }
};