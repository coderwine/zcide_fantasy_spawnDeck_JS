const zombieDeck = {
    title: "string", // ex: Standard Zombie Invasion
    cardNumber: 1, // each card is noted with a number to help locate.
    desc: "string", // some careds will have special instructions - ex: Necromancer info
    zombiesAdded: [ // cards will need to detail different values for the 4 different level ranges.
        {
            color: "string", // depending on players highest level - ex: yellow
            zombies: "string", // notes what type enters - ex: orc walker
            qty: 2, // how many enter
            horde: { // some cards will add zombies to the horde per The Green Horde rule set.
                add: false,
                value: 0, // how many will be added
            },
        }
    ],
    hordeEffect: false, // some cards utilize Green Horde rules without adding zombies - ex: Enter the Horde
    note: "string", // mainly available for custom cards.
    box: "string" // ex: Black Plague
}