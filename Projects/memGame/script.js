// Global variables

let setting;

// Game logic and functionality

function themeHandler(){
    document.querySelectorAll('.theme-option').forEach(img => {
        img.addEventListener('click', function() {
            document.querySelectorAll('.theme-option').forEach(i => i.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
}
/*
function playersInpt(){

}

function newGame(){
    setting = new Setting(players, theme);
    setting.assignAPI();
}
*/

themeHandler();
