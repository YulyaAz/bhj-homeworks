const timerElement = document.getElementById('timer');

let timeLeft = parseInt(timerElement.textContent);

const timerInterval = setInterval(() => {

  timeLeft--;
  
  timerElement.textContent = timeLeft;
  
  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    alert('Вы победили в конкурсе!');
  }
}, 1000);