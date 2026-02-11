document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.tab__navigation').forEach(nav => {
    const tabs = nav.querySelectorAll('.tab');
    const contents = nav.nextElementSibling.querySelectorAll('.tab__content');
    
    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tab_active'));
        contents.forEach(c => c.classList.remove('tab__content_active'));
        tab.classList.add('tab_active');
        contents[i].classList.add('tab__content_active');
      });
    });
  });
});