// Targeted Elements
const body = document.querySelector('body');
const mkDeck = document.getElementById('mkDeck');
const resetDeck = document.getElementById('reset');
const bpBtn = document.getElementById('bpBtn');
const ghBtn = document.getElementById('ghBtn');
const wbBtn = document.getElementById('wbBtn');
const nrBtn = document.getElementById('nrBtn');
const mcBtn = document.getElementById('mcBtn');
const ffBtn = document.getElementById('ffBtn');
const pullDeck = document.getElementById('pull-deck');
const spawnCard = document.getElementById('threat-card');
const threatInput = document.getElementsByName('threat-level');
const foot = document.querySelector('footer');
const toastAlert = document.getElementById('toast-alert');
const toastBody = document.getElementById('toast-body');

// Card Links
const bpCards = './sampleObjs/bp.json';
const ghCards = './sampleObjs/gh.json';
const wbCards = './sampleObjs/wb.json';
const nrCards = './sampleObjs/nr.json';
const mcCards = './sampleObjs/mc.json';
const ffCards = './sampleObjs/ff.json';

// Fetch
let fetchCards = async (url) => {
    const response = await fetch(url);
    let results = await response.json();
    let data = results;
    return data;
}

// Base Variables
let prepDeck = [];
let gameDeck = [];
const bpDeck = fetchCards(bpCards);
const ghDeck = fetchCards(ghCards);
const wbDeck = fetchCards(wbCards);
const nrDeck = fetchCards(nrCards);
const mcDeck = fetchCards(mcCards);
const ffDeck = fetchCards(ffCards);
let discarded = [];
let threatLevel;
let lastCard = []; 
let toastList = [];

// Functions
const addDeck = async array => {
    let deck = await array;
    let shuffled = shuffleDeck(deck);
    toastList.push(shuffled[0].set);

    shuffled.forEach(card => {
        prepDeck.push(card);
    });
}

const shuffleDeck = (deck) => {
    let toShuffle = deck;
    let forShuffle = [];

    for(let i = 0; toShuffle.length !== 0; i++) {
        let randNum = Math.floor(Math.random() * toShuffle.length);
        forShuffle.push(toShuffle[randNum]);
        toShuffle.splice(randNum, 1);
    }

    return forShuffle;
}

const readyDeck = () => {
    let shuffledGameDeck = shuffleDeck(prepDeck);
    shuffledGameDeck.forEach(c => {
        gameDeck.push(c);
    })

    toastBody.innerText = `${toastList.toString()} has been added to the deck.
    `;

    const toast = new bootstrap.Toast(toastAlert);

    toast.show();
}

const setThreat = () => {
    // Checks the input field to assess what threat should be displayed.
    for(let i = 0; i < threatInput.length; i++) {
        if(threatInput[i].checked) {
            threatLevel = threatInput[i].value;
        }
    }
}

const threatDisplay = (card) => {
    switch(threatLevel) {
        case 'red' :
            lastCard.push(`Last Card: ${card.red_no} ${card.red}`);
            return(
                `<h3>${card.red}</h3>
                <p>${card.red_no}</p>`
            );
            break;
        case 'orange' :
            lastCard.push(`Last Card: ${card.orange_no} ${card.orange}`);
            return(
                `<h3>${card.orange}</h3>
                <p>${card.orange_no}</p>`
            );
            break;
        case 'yellow' :
            lastCard.push(`Last Card:${card.yellow_no} ${card.yellow}`);
            return(
                `<h3 style="color: black;">${card.yellow}</h3>
                <p>${card.yellow_no}</p>`
            );
            break;
        default :
            lastCard.push(`Last Card: ${card.blue_no} ${card.blue}`);
            return(
                `<h3>${card.blue}</h3>
                <p>${card.blue_no}</p>`
            )
    }
}

const displayCard = () => {
    setThreat();

    if(gameDeck.length === 0) {
        discarded.forEach(c => {
            prepDeck.push(c);
            discarded.shift();
        })

        readyDeck();
    }

    console.log('Game Deck', gameDeck)

    let card = gameDeck[0];
    discarded.push(card);
    gameDeck.shift();

    // Will need to add a card image to match the threat
    // spawnCard.style = `
    //     background-color: ${threatLevel};
    //     opacity: .8;
    // `;
    body.style = `
        background-color: ${threatLevel};
        opacity: .9;
    `

    spawnCard.innerHTML = `
        <p id="card-id">id: ${card.id}</p>
        ${threatDisplay(card)}
    `;

    foot.firstElementChild.innerText = 
    lastCard.length < 2 ? null : lastCard[lastCard.length-2];
}

// Event Listeners
mkDeck.addEventListener('click', readyDeck);
bpBtn.addEventListener('click', () => addDeck(bpDeck));
ghBtn.addEventListener('click', () => addDeck(ghDeck));
wbBtn.addEventListener('click', () => addDeck(wbDeck));
nrBtn.addEventListener('click', () => addDeck(nrDeck));
mcBtn.addEventListener('click', () => addDeck(mcDeck));
ffBtn.addEventListener('click', () => addDeck(ffDeck));
pullDeck.addEventListener('click', displayCard);

reset.addEventListener('click', () => {
    confirm('Are you sure?');
    location.reload();
});

