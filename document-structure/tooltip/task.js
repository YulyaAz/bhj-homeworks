const tooltipElements = document.querySelectorAll('.has-tooltip');

tooltipElements.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault();

        const existingTooltip = element.querySelector('.tooltip');
        
        if (existingTooltip && existingTooltip.classList.contains('tooltip_active')) {
            existingTooltip.remove();
            return;
        }
        
        document.querySelectorAll('.tooltip').forEach(tooltip => tooltip.remove());
        
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip', 'tooltip_active');
        tooltip.textContent = element.getAttribute('title');

        const elementRect = element.getBoundingClientRect();
        tooltip.style.position = 'absolute';
        tooltip.style.left = elementRect.left + 'px';
        tooltip.style.top = (elementRect.bottom + window.scrollY) + 'px';
        
        document.body.appendChild(tooltip);
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('has-tooltip') && 
        !event.target.classList.contains('tooltip')) {
        document.querySelectorAll('.tooltip').forEach(tooltip => tooltip.remove());
    }
});