let buttons = document.querySelectorAll(".square");
let display = document.querySelector(".win");
let resetButton = document.querySelector(".reset");

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

let turnO = true;

let checkWinner = () => {
    for (let i of winningCombos) {
        if (buttons[i[0]].innerText != "" && buttons[i[1]].innerText != "" && buttons[i[2]].innerText != "") {
            if ((buttons[i[0]].innerText === buttons[i[1]].innerText) && (buttons[i[1]].innerText === buttons[i[2]].innerText)) {
                display.innerText = `Player ${buttons[i[0]].innerText} wins!`;
                alert(`Player ${buttons[i[0]].innerText} wins!`);
                buttons[i[0]].style.backgroundColor = "green";
                buttons[i[1]].style.backgroundColor = "green";
                buttons[i[2]].style.backgroundColor = "green";
                buttons.forEach((button) => {
                    button.disabled = true;
                });
                return;
            }
        }
    }
    if (Array.from(buttons).every(button => button.innerText !== "")) {
        display.innerText = "It's a draw!";
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button.id);
        if (turnO) {
            //player O's turn
            button.innerText = "O";
            turnO = false;
        } else {
            //player X's turn
            button.innerText = "X";
            turnO = true;
        }
        button.disabled = true;
        checkWinner();
    })
})

resetButton.addEventListener("click", () => {
    display.innerText = "";
    turnO = true;
    buttons.forEach(button => {
        button.disabled = false;
        button.innerText = "";
        button.style.backgroundColor = "tan";
    })
})