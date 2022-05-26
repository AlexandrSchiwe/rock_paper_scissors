const options = document.querySelectorAll(".options");
let pScore = 0;
let cScore = 0;
let result = document.getElementById('result');
// let radio5 = document.getElementbyId("radio5");

// function checkValue() {
//     if (radio5.checked) {
//         console.log(radio5.value);
//     }
//     // show the output:
// };

options.forEach((option) => {
    option.addEventListener("click", function () {
        const pInput = this.value;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];

        compareInputs(pInput, cInput);
        updateScore();
        if (checkWinner()) {
            pScore = cScore = 0;
            updateScore();
        }
    });
});

function compareInputs(pInput, cInput) {
    const currentMatch = `${pInput} vs ${cInput}`;
    if (pInput === cInput) {
        result.innerHTML = ("Its a tie!")
        return;
    }

    if (pInput === "Rock") {
        if (cInput === "Scissors") {
            result.innerHTML = "You Win!";
            pScore++;
        } else {
            result.innerHTML = "You Lose!";
            cScore++;
        }
    }
    //paper
    else if (pInput === "Paper") {
        if (cInput === "Rock") {
            result.innerHTML = "You Win!";
            pScore++;
        } else {
            result.innerHTML = "You Lose!";
            cScore++;
        }
    }
    //scissors
    else {
        if (cInput === "Paper") {
            result.innerHTML = "You Win!";
            pScore++;
        } else {
            result.innerHTML = "You Lose!";
            cScore++;
        }
    }
}

function updateScore() {
    document.getElementById("p-score").textContent = pScore;
    document.getElementById("c-score").textContent = cScore;
}

// const btn = document.querySelector('#btn');
// const radioButton = document.querySelectorAll('input[name="rounds"]');


function checkWinner() {
    if (pScore === 5 || cScore === 5) {
        const winner =
            pScore === 5
                ? "You win the game! Congratulations!"
                : "Computer wins the game! Try again next time!";
        alert(winner);
        return true;
    }
    return false;
}

function restart() {
    window.location.reload();
} 