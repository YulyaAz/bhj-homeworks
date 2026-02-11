const cookieElement = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');

let isSmall = false;

cookieElement.onclick = function() {
    let currentCount = parseInt(counterElement.textContent);
    counterElement.textContent = currentCount + 1;
    
    if (isSmall) {
        // Возвращаем нормальный размер
        cookieElement.style.width = '200px';
        cookieElement.style.height = '200px';
    } else {
        cookieElement.style.width = '150px';
        cookieElement.style.height = '150px';
    }

    isSmall = !isSmall;
};