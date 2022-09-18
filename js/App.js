import Game from './Game.js'
import Player from './models/Player.js'

const playerOne = new Player('#player-one', 'John')
const playerTwo = new Player('#player-two', 'Jane')

const rulesButton = document.querySelector('.rules-link')
console.log(rulesButton)
rulesButton.addEventListener('click', (e) => {
    e.preventDefault()

    const myModal = new bootstrap.Modal(document.getElementById('mainModal'), {
        backdrop: 'static',
    })
    const target = document.querySelector('#mainModal')
    target.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                
            <div class="modal-header">
                <h2 class="fw-bold">Rules in Dice Game</h2>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
                <p>The game includes 2 players on a single screen.</p>
               <p> Each player has a temporary score (ROUND) and an overall score (GLOBAL).</p>
               <p> At each turn, the player has his ROUND initialized to 0 and can roll a die as many times as he wishes. the
                result of a throw is added to the ROUND.</p>
                <p>During his turn, the player can decide at any time to:</p>
                <ul>
                    <li>Click on the “Hold” option, which sends the points of the ROUND to the GLOBAL. It will then be the
                    other player's turn.</li>
                    <li>Roll the dice. If he rolls a 1, his ROUND score is lost and his turn ends.</li>
                </ul>
                <p>The first player to reach 100 points on global wins the game.</p>
                
            </div>
        </div>
        `
    myModal.show()
})

const game = new Game(playerOne, playerTwo)
