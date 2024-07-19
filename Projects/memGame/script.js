// Global variables

const cardsToMatch = ["",""];
let setting;
let cardListenersOn = true;
const pcPlayMem = ["", "", ""];

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
            document.querySelectorAll(".form-control.form-control-sm").forEach(field => {
                field.addEventListener('input', playerNameValid);
                field.addEventListener('blur', playerNameValid);
            })
        })
    })    
}

function playerNameValid (event){
    const inpt = event.target;
    const isValid = /^[a-zA-Z]{3,}$/.test(inpt.value);
    // console.log(isValid)
    if (isValid){
        inpt.classList.add('is-valid')
        inpt.classList.remove('is-invalid')        
    }else{
        inpt.classList.remove('is-valid')
        inpt.classList.add('is-invalid')            
    }
    // console.log(inpt);
}

function menuIsValid(){
    const players = document.querySelectorAll('.form-control.form-control-sm')
    const names = document.querySelectorAll('.is-valid');
    const theme = document.querySelectorAll('.selected');
    let isFormValid = JSON.parse("false");
    if (names.length !== players.length || names.length === 0)
        alert("Players names must consist of at least 3 english letters and must not contain non-alphabetical values");
    if (theme.length === 0)
        alert("Please select a theme")
    if (names.length === players.length && names.length !== 0 && theme.length !== 0){
        newGame()
        // console.log("good")
    }

}

function newGame(){
    const players = Array.from(document.querySelectorAll(".form-control")).map(inpt => inpt.value);
    const theme = document.querySelector(".selected").id;
    const mode = document.querySelector('input[type="radio"]:checked');
    if (mode.value === "singlePlayer")
        players[1] = "Computer";
    // console.log(mode.value);
    // console.log(theme)
    // console.log(players);
    setting = new Setting(players, theme, mode.value);
    setting.assignAPI();
    UI.state = "Game"
    UI.activePlayer = players[0];
    UI.init()
    setting.getThemeImages()
        .then(() => {setting.shuffleDeck();})
        .then(() => {UI.renderCards();})
        .catch(error => console.log(`An error occured ${error}`));
}

function isMatch(){
    return cardsToMatch[0].imageAlt === cardsToMatch[1].imageAlt;
}

function checkVictory(){
        return UI.board.every((card) => card.state === "up");
}

function choosePCCard(){
    const availableCards = [];
    UI.board.forEach((card, index) => {
        if (card.state === "down")
            availableCards.push(index);
    })
    return availableCards[Math.floor(Math.random() * availableCards.length)];
}

function pcMove(){
    console.log(pcPlayMem);
    let index = choosePCCard();
    const first = UI.board[index];
    console.log(`checking 1st: ${first.imageAlt}`)
    first.cardClick();
    index = choosePCCard();
    let second = pcPlayMem.find(item => item.imageAlt === first.imageAlt);
    console.log("second is: ", second);
    if (!second)
        second = UI.board[index];
    if (first.imageAlt !== second.imageAlt){
        addCard(first, pcPlayMem);
        addCard(second, pcPlayMem);
    }
    console.log(`checking 2nd: ${second}`)
    second.cardClick();
}

function addCard(card, arr){
    arr.unshift(card);
    arr.pop()
}

themeHandler();
playersInpt();
