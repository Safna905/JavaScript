let buttons = document.querySelectorAll('.btn_option');
let board = ["", "", "", "", "", "", "", "", "",];
let message = document.getElementById('message');
let popup = document.getElementById('popup');
let restart = document.getElementById('restart').addEventListener("click", restartF);
let user_count1 = document.getElementById('user_count1');
let user_count2 = document.getElementById('user_count2');

let count1 = 0;
let count2 = 0;
let current_palyer = 'X';
let game_over = false;


for (let i = 0; i < buttons.length; i++) {
    let btn = buttons[i];
    btn.addEventListener("click", function() {
        main(btn);
    });
}


function main(btn) {
    btn.innerHTML = current_palyer;
    board[btn.id - 1] = current_palyer;
    check();
    change_player();

}

function change_player() {
    if (current_palyer == "O") {
        current_palyer = "X";
    }
    else {
        current_palyer = "O";
    }
}

function check() {
    check_horizontal();
    check_vertical();
    check_diagonal();
    check_draw();
}

function check_horizontal() {
    if (allEqual([board[0], board[1], board[2], current_palyer])) {
        message.innerHTML = current_palyer + ' Won';
        popup.classList.remove('hide');
        count_points();
        game_over = true;
    }
    else if (allEqual([board[3], board[4], board[5], current_palyer])) {
        message.innerHTML = current_palyer + ' Won';
        popup.classList.remove('hide');
        count_points();
        game_over = true;

    } else if (allEqual([board[6], board[7], board[8], current_palyer])) {
        message.innerHTML = current_palyer + ' Won';
        popup.classList.remove('hide');
        count_points();
        game_over = true;
    }
}

function check_vertical() {
    if (allEqual([board[0], board[3], board[6], current_palyer])) {
        message.innerHTML = current_palyer + ' Won';
        popup.classList.remove('hide');
        count_points();
        game_over = true;
    }
    else if (allEqual([board[1], board[4], board[7], current_palyer])) {
        message.innerHTML = current_palyer + ' Won';
        popup.classList.remove('hide');
        count_points();
        game_over = true;

    } else if (allEqual([board[2], board[5], board[8], current_palyer])) {
        message.innerHTML = current_palyer + ' Won';
        popup.classList.remove('hide');
        count_points();
        game_over = true;
    }
}

function check_diagonal() {
    if (allEqual([board[0], board[4], board[8], current_palyer])) {
        message.innerHTML = current_palyer + ' Won';
        popup.classList.remove('hide');
        count_points();
        game_over = true;
    }
    else if (allEqual([board[2], board[4], board[6], current_palyer])) {
        message.innerHTML = current_palyer + ' Won';
        popup.classList.remove('hide');
        count_points();
        game_over = true;

    }
}

    function check_draw() {
        let check_if_exists = board.includes("");
        if (allEqual(board) == false && check_if_exists == false) {
            if (game_over != true) {
                message.innerHTML = 'Draw';
                popup.classList.remove("hide");
                game_over = true;
            }
        }
    }

    function allEqual(array) {
        const result = array.every(element => {
            if (element === array[0]) {
                return true;
            }
        });
        return result;
    }

    function restartF() {
        popup.classList.add("hide");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].innerHTML = "";
            board[i] = "";
        }
        game_over = false;
    }

    function count_points() {
        if (current_palyer == 'O') {
            count1 += 1;
            user_count1.innerHTML = count1;
        } else {
            count2 += 1;
            user_count2.innerHTML = count2;
        }
    }