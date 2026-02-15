function startRotator(rotatorElement) {
    const cases = rotatorElement.querySelectorAll('.rotator__case');
    let activeIndex = 0;
    
    function rotate() {
        cases[activeIndex].classList.remove('rotator__case_active');
        activeIndex = (activeIndex + 1) % cases.length;
        cases[activeIndex].classList.add('rotator__case_active');
    }

    setInterval(rotate, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    const rotators = document.querySelectorAll('.rotator');
    rotators.forEach(rotator => startRotator(rotator));
});