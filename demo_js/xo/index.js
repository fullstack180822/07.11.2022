
const game_data = { }

function initGame() {
    game_data.board = [undefined, undefined, undefined,
        undefined, undefined, undefined,
        undefined, undefined, undefined]
}

function check_if_win() {
    return false;
}
function board_is_full() {
    return false;
}
function computer_play() {
    content = 'X'
    let position
    while (content != undefined) {
        position = Math.floor(Math.random() * game_data.board.length)
        content = game_data.board[position]
    }
    game_data.board[position] = 'O'
    $(`#btn${position + 1}`).text('O')
}
function show_tie() {

}
function board_is_full() {
    for (let e of game_data.board) {
        if (e == undefined)
            return false
    }
    return true;
}

function click_square(i) {
    if (!board_is_full()) {
        game_data.board[i - 1] = 'X'
        $(`#${event.target.id}`).text('X')
        if (check_if_win('X')) {
            show_player_won('X')
            game_data.game_over = true;
            game_data.winner = 'player';
        }
        else if (board_is_full()) {
            show_tie()
            game_data.game_over = true;
        }
        else {
            computer_play()
            if (check_if_win('O')) {
                show_player_won('O')
                game_data.game_over = true;
                game_data.winner = 'computer';
            }
        }
    }
}

initGame()