function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight &&
        rect.bottom > 0                 
    );
}

function checkReveals() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        if (isElementInViewport(reveal)) {
            reveal.classList.add('reveal_active');
        } else {
            reveal.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', checkReveals);
document.addEventListener('DOMContentLoaded', checkReveals);