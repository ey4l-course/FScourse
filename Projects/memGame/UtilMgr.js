function themeHandler(){
    document.querySelectorAll('.theme-option').forEach(img => {
        img.addEventListener('click', function() {
            document.querySelectorAll('.theme-option').forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}
themeHandler();
