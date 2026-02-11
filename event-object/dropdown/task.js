document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.dropdown__value').forEach(btn => {
        btn.onclick = function(e) {
            e.stopPropagation();
            this.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
        };
    });
  
    document.querySelectorAll('.dropdown__link').forEach(link => {
        link.onclick = function(e) {
            e.preventDefault();
            const dropdown = this.closest('.dropdown');
            dropdown.querySelector('.dropdown__value').textContent = this.textContent;
            dropdown.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
        };
    });
});