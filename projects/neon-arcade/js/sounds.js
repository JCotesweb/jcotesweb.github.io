// Sistema de efectos de sonido retro
const sounds = {
    beep: () => playTone(800, 0.1, 'square'),
    success: () => playSuccessSound(),
    error: () => playTone(150, 0.4, 'sawtooth'),
    click: () => playTone(600, 0.08, 'triangle'),
    hover: () => playTone(400, 0.05, 'sine'),
    win: () => playWinSound(),
    flip: () => playTone(1200, 0.15, 'square'),
    match: () => playMatchSound()
};

function playTone(frequency, duration, waveType = 'square') {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = waveType;
        
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    } catch (e) {
        console.log('Audio no disponible');
    }
}

function playSuccessSound() {
    playTone(523, 0.15);
    setTimeout(() => playTone(659, 0.15), 150);
    setTimeout(() => playTone(784, 0.2), 300);
}

function playWinSound() {
    const notes = [523, 659, 784, 1047];
    notes.forEach((note, index) => {
        setTimeout(() => playTone(note, 0.2), index * 200);
    });
}

function playMatchSound() {
    playTone(880, 0.1);
    setTimeout(() => playTone(1100, 0.15), 100);
}