class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timerElement = container.querySelector('.status__timer');
    
    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
    this.timerElement.textContent = 5;
    this.startTimer();
  }

  registerEvents() {
    document.addEventListener('keyup', (event) => {
      if (!this.currentSymbol) return;
      const pressedKey = event.key;
      if (pressedKey.length > 1) return;
      const currentChar = this.currentSymbol.textContent;
      if (pressedKey.toLowerCase() === currentChar.toLowerCase()) {
        this.success();
      } else {
        this.fail();
    }
  });
  }
  
  startTimer() {
    clearInterval(this.timerInterval);
    
    this.timerInterval = setInterval(() => {
      let timeLeft = parseInt(this.timerElement.textContent);
      timeLeft--;
      
      if (timeLeft <= 0) {
      this.fail();
      timeLeft = 5;
    }
    this.timerElement.textContent = timeLeft;
  }, 1000);
}

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 3) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}



new Game(document.getElementById('game'))
