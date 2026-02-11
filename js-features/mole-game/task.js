const deadMoleElement = document.getElementById('dead');
const lostMoleElement = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

let dead = 0;
let lost = 0;

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.onclick = function() {
        if (this.classList.contains('hole_has-mole')) {
            dead++;
            deadMoleElement.textContent = dead;
            this.classList.remove('hole_has-mole');
            if (dead === 10) {
                alert('Победа! Вы убили 10 кротов!');
                resetGame();
            }
        } else {
            lost++;
            lostMoleElement.textContent = lost;
            if (lost === 5) {
                alert('Игра окончена! Вы проиграли!');
                resetGame();
            }
        }
    };
}

function resetGame() {
    dead = 0;
    lost = 0;
    deadMoleElement.textContent = 0;
    lostMoleElement.textContent = 0;
}