// MEMORAMA - Juego de memoria con emoticonos
let memoryCards = [];
let flippedCards = [];
let matchedPairs = 0;
let attempts = 0;
let canFlip = true;

const memoryPairs = [
    { emoji: '🎮', color: '#ff00ff' },
    { emoji: '🚀', color: '#00ffff' },
    { emoji: '⚡', color: '#ffff00' },
    { emoji: '💎', color: '#00ff00' },
    { emoji: '🔥', color: '#ff0080' },
    { emoji: '🌟', color: '#0080ff' },
    { emoji: '💫', color: '#ff8000' },
    { emoji: '🎯', color: '#8000ff' }
];

function initMemoryGame() {
    const grid = document.getElementById('memory-grid');
    memoryCards = [];
    flippedCards = [];
    matchedPairs = 0;
    attempts = 0;
    canFlip = true;
    
    // Crear pares duplicados y mezclar
    const cards = [...memoryPairs, ...memoryPairs];
    shuffleArray(cards);
    
    grid.innerHTML = '';
    
    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'memory-card';
        cardElement.dataset.index = index;
        cardElement.dataset.emoji = card.emoji;
        cardElement.dataset.color = card.color;
        cardElement.addEventListener('click', flipCard);
        
        // Efecto de aparición escalonada
        cardElement.style.opacity = '0';
        cardElement.style.transform = 'scale(0.8)';
        setTimeout(() => {
            cardElement.style.opacity = '1';
            cardElement.style.transform = 'scale(1)';
        }, index * 50);
        
        grid.appendChild(cardElement);
        memoryCards.push(cardElement);
    });
    
    updateMemoryStatus();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function flipCard(e) {
    if (!canFlip) return;
    
    const card = e.target;
    
    if (card.classList.contains('flipped') || card.classList.contains('matched')) {
        return;
    }
    
    sounds.flip();
    card.classList.add('flipped');
    card.style.color = card.dataset.color;
    card.textContent = card.dataset.emoji;
    card.style.transform = 'rotateY(180deg) scale(1.05)';
    flippedCards.push(card);
    
    if (flippedCards.length === 2) {
        canFlip = false;
        attempts++;
        updateMemoryStatus();
        
        setTimeout(() => {
            checkMatch();
        }, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    
    if (card1.dataset.emoji === card2.dataset.emoji) {
        // Coincidencia
        card1.classList.add('matched');
        card2.classList.add('matched');
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        matchedPairs++;
        sounds.match();
        
        // Efecto de pulso
        card1.style.animation = 'matchedPulse 0.6s ease';
        card2.style.animation = 'matchedPulse 0.6s ease';
        
        setTimeout(() => {
            card1.style.animation = '';
            card2.style.animation = '';
        }, 600);
        
        if (matchedPairs === 8) {
            sounds.win();
            document.getElementById('memory-status').textContent = `¡MEMORIA CIBERNÉTICA COMPLETADA EN ${attempts} INTENTOS!`;
            
            // Celebración final
            setTimeout(() => {
                memoryCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transform = 'scale(1.1) rotateY(360deg)';
                        setTimeout(() => {
                            card.style.transform = 'scale(1)';
                        }, 300);
                    }, index * 50);
                });
            }, 500);
        }
    } else {
        // No coinciden
        sounds.error();
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        
        // Efecto de sacudida
        card1.style.animation = 'shake 0.5s ease';
        card2.style.animation = 'shake 0.5s ease';
        
        setTimeout(() => {
            card1.textContent = '';
            card2.textContent = '';
            card1.style.color = '';
            card2.style.color = '';
            card1.style.transform = 'scale(1)';
            card2.style.transform = 'scale(1)';
            card1.style.animation = '';
            card2.style.animation = '';
        }, 500);
    }
    
    flippedCards = [];
    setTimeout(() => {
        canFlip = true;
    }, 600);
    updateMemoryStatus();
}

function updateMemoryStatus() {
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('pairs').textContent = matchedPairs;
}

function resetMemoryGame() {
    sounds.click();
    
    // Efecto de desaparición
    memoryCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'scale(0) rotateY(180deg)';
            card.style.opacity = '0';
        }, index * 30);
    });
    
    setTimeout(() => {
        initMemoryGame();
    }, 800);
}