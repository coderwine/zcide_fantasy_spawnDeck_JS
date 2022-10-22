// Imports
import {setBackground} from "./scripts/setbackground.js";
import {grammarAdjust} from "./scripts/grammarAdjust.js";

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
    if(prepDeck.length === 0) {
        alert('Please include a deck.');
    } else {
        let shuffledGameDeck = shuffleDeck(prepDeck);
        shuffledGameDeck.forEach(c => {
            gameDeck.push(c);
        })

        toastBody.innerText = `${toastList.toString()} has been added to the deck.
        `;
        const toast = new bootstrap.Toast(toastAlert);
        toast.show();
    }

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
            body.style = setBackground(threatLevel, card.red);
            
            if(card.red.includes('Double') || card.red.includes('Activation')) {
                return(`<h3>${card.red}</h3>`)
            } else {
                let grammarSet = grammarAdjust(card.red, card.red_no);
                return(grammarSet);
            };  
            break;

        case 'orange' :
            lastCard.push(`Last Card: ${card.orange_no} ${card.orange}`);
            body.style = setBackground(threatLevel,card.orange);
            
            if(card.orange.includes('Double') || card.orange.includes('Activation')) {
                return(`<h3>${card.orange}</h3>`)
            } else {
                let grammarSet = grammarAdjust(card.orange, card.orange_no);
                return(grammarSet);
            };                
            break;

        case 'yellow' :
            lastCard.push(`Last Card:${card.yellow_no} ${card.yellow}`);
            body.style = setBackground(threatLevel, card.yellow);
            
            if(card.yellow.includes('Double') || card.yellow.includes('Activation')) {
                return(`<h3>${card.yellow}</h3>`)
            } else {
                let grammarSet = grammarAdjust(card.yellow, card.yellow_no);
                return(grammarSet);
            }
            break;

        default :
            lastCard.push(`Last Card: ${card.blue_no} ${card.blue}`);
            body.style = setBackground(threatLevel, card.blue);

            if(card.blue.includes('Nothing') || card.blue.includes('Double') || card.blue.includes('Activation') || card.blue.includes('Enter')) {
                return(`<h3>${card.blue}</h3>`)
            } else {
                let grammarSet = grammarAdjust(card.blue, card.blue_no);
                return(grammarSet);
            }
            
    }
}

const displayCard = () => {
    setThreat();

    // Should reset the deck
    if(gameDeck.length === 0) {
        console.log(discarded.length);
        
        //TODO: Loop Not Running
        // for(let i = 0; discarded.length === 0; i++){
        //     console.log('length ',discarded.length)
        //     console.log(discarded[0]);
        //     prepDeck.push(discarded[0]);
        //     discarded.shift();
        // };

        discarded.forEach(c => {
            console.log(c);
            prepDeck.push(c);
            // discarded.shift();
            discarded.slice(1);
        });
        
        // console.log("Prep: ", prepDeck);
        // console.log('End Discarded: ', discarded.length)
        discarded = [];
        readyDeck();
    }

    console.log('Game Deck', gameDeck);
    console.log('Discarded', discarded);

    let card = gameDeck[0];
    discarded.push(card);
    gameDeck.shift();

    spawnCard.innerHTML = `
        <p id="card-id">card: ${card.id}</p>
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

