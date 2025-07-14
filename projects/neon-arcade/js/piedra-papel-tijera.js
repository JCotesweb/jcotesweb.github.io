// PIEDRA PAPEL TIJERA - Batalla contra la IA
let playerScore = 0;
let computerScore = 0;

function playRPS(playerChoice) {
    sounds.beep();
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
    const choiceNames = {
        rock: 'PIEDRA',
        paper: 'PAPEL',
        scissors: 'TIJERA'
    };
    
    const choiceEmojis = {
        rock: '🗿',
        paper: '📄',
        scissors: '✂️'
    };
    
    let result = '';
    let resultClass = '';
    
    if (playerChoice === computerChoice) {
        result = 'EMPATE DIGITAL';
        resultClass = 'tie';
        sounds.click();
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = '¡VICTORIA HUMANA!';
        resultClass = 'win';
        playerScore++;
        sounds.success();
    } else {
        result = 'SUPREMACÍA ARTIFICIAL';
        resultClass = 'lose';
        computerScore++;
        sounds.error();
    }
    
    // Efecto visual en botones
    document.querySelectorAll('.rps-btn').forEach(btn => {
        btn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 100);
    });
    
    document.getElementById('rps-result').innerHTML = `
        <div style="font-size: 2rem; margin-bottom: 15px;">
            <strong>HUMANO:</strong> ${choiceEmojis[playerChoice]} ${choiceNames[playerChoice]} | 
            <strong>IA:</strong> ${choiceEmojis[computerChoice]} ${choiceNames[computerChoice]}
        </div>
        <div style="font-size: 2rem; font-weight: bold; color: var(--neon-yellow);">
            ${result}
        </div>
    `;
    
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
}

function resetRPS() {
    sounds.click();
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('rps-result').innerHTML = 'SELECCIONA TU ARMA DIGITAL';
}