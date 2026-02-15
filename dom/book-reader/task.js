const book = document.getElementById('book');

const fontSizes = document.querySelectorAll('.font-size');

fontSizes.forEach(size => {
    size.addEventListener('click', (event) => {
        event.preventDefault();
        
        fontSizes.forEach(btn => btn.classList.remove('font-size_active'));

        size.classList.add('font-size_active');
        
        book.classList.remove('book_fs-small', 'book_fs-big');
        
        const sizeValue = size.dataset.size;
        
        if (sizeValue === 'small') {
            book.classList.add('book_fs-small');
        } else if (sizeValue === 'big') {
            book.classList.add('book_fs-big');
        }
    
    });
});