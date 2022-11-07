
const game_data = {}

function init_game() {
    game_data.player_score = 0
    game_data.computer_score = 0
    game_data.player_card = 0
    game_data.computer_card = 0
    game_data.winner = undefined
    game_data.game_over = false
}

function getRandomCard() {
    const card = Math.floor(Math.random() * 13) + 2;
    return card
}

function draw_card(id_img, card) {
    let actual_card = card
    switch (card) {
        case 11:
            actual_card = 'J'
            break;
        case 12:
            actual_card = 'Q'
            break;
        case 13:
            actual_card = 'K'
            break;
        case 14:
            actual_card = 'A'
            break;
    }
    //console.log(`${msg} ${actual_card}`);
    $(`#${id_img}`).attr('src', `images/${actual_card}.png`)

}

function draw_round_winner(result) {
    switch (true) {
        case result == 'computer':
            $('#winner').text('Computer has won this  (maybe he cheats)...')
            break;
        case result == 'player':
            $('#winner').text('Player has won this (human brain is smarter than the machine)...')
            break;
        default:
            $('#winner').text('Its a tie !');
            break;
    }
}

function draw_score() {
    $(`#myScore`).text(game_data.player_score)
    $(`#compScore`).text(game_data.computer_score)
}

function flip_cards() {
    game_data.player_card = getRandomCard()
    game_data.computer_card = getRandomCard()
    draw_card('my_card_img', game_data.player_card)
    draw_card('comp_card_img', game_data.computer_card)
    switch (true) {
        case game_data.computer_card > game_data.player_card:
            game_data.computer_score++
            draw_round_winner('computer')
            break
        case game_data.player_card > game_data.computer_card:
            game_data.player_score++
            draw_round_winner('player')
            break
        default:
            draw_round_winner('tie')
    }
    draw_score()
    game_data.winner = game_data.player_score >= 5 ? 'player' : game_data.winner
    game_data.winner = game_data.computer_score >= 5 ? 'computer' : game_data.winner
    game_data.game_over = game_data.winner != undefined


    if (game_data.game_over) {
        $(`#draw_button`).attr('disabled', true)
        setTimeout(() => {
            draw_winner();
        }, 3000);
    }
}

function draw_winner() {
    $('#winner').text(game_data.winner == 'player' ? 'The winner is the player !!! haerrey !' :
        'The winner in the computer ... cheater ... machine');
    $('#winner').css({ color: 'red', 'font-weight': 'bold' })
}

init_game();

// flip_cards()
// while (!game_data.game_over) {
//     console.log('=====================================');
//     flip_cards();
// }
// draw_winner()