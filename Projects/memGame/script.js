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

function playersInpt(){
    document.querySelectorAll('.form-check-input').forEach(option => {
        option.addEventListener('click', function(event){
            if (event.target.id == 'singlePlayer'){
                document.getElementById('playerNames').innerHTML = `
                <div class="form-group">
                    <input type="text" class="form-control form-control-sm" id="player1Name" name="player1Name" placeholder="Player 1 Name">
                </div>
                `
            } else {
                document.getElementById('playerNames').innerHTML = `
                <div class="form-group">
                    <input type="text" class="form-control form-control-sm" id="player1Name" name="player1Name" placeholder="Player 1 Name">
                </div>
                <div class="form-group">
                    <input type="text" class="form-control form-control-sm" id="player2Name" name="player2Name" placeholder="Player 2 Name">
                </div>
                `
            }

        })
    })
}

function newGame(){
    const players = Array.from(document.querySelectorAll(".form-control")).map(inpt => inpt.value);
    const theme = /*document.querySelector(".selected").id;*/ "s"
    // console.log(theme)
    // console.log(players);
    setting = new Setting(players, theme);
    // setting.assignAPI();
}


themeHandler();
playersInpt();
