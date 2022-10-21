export const setBackground = (type) => {

    let check = type.toLowerCase();
    console.log(check);
    /*
        Types of Spawns:
        All - Nothing
        BP
            - Walkers, Walker Activation, Runners, Runner Activation, Fatties, Fatty Activation, Double-Spawn, Necro, Abom.
        GH
            - Orc Walker, Orc Runners, Orc Fatties (missing), Orc Necro, Orc Abom (Missing)
        WB
            - Wolves - Wolf Abom
        NR
            - Rats, Specters, Necro Dragon
        FF
            - Tainted Orc, Tainted Abom
        MC
            - Crows
    */
    let image;
    let posX;
    let posY;

    switch(check) {
        // BP
        case "double spawn":
            // return('../assets/zombieImages/bp_walker-removebg.png');
            // need to add a new image
            break;
        case "walker":
            image = '../assets/zombieImages/bp_walker-removebg.png';
            posX = '-100px';
            // return('../assets/zombieImages/bp_walker-removebg.png');
            break;
        case "runner":
            image = '../assets/zombieImages/bp_runner-removebg.png';
            posX = '-60px';
            // return('../assets/zombieImages/bp_runner-removebg.png');
            break;
        case "fatty":
            image = '../assets/zombieImages/bp_fatty-removebg.png';
            posX = '-150px';
            // return('../assets/zombieImages/bp_fatty-removebg.png');
            break;
        case "necromancer":
            image = '../assets/zombieImages/bp_necro-removebg.png';
            posX = '120px';
            // return('../assets/zombieImages/bp_necro-removebg.png');
            break;
        case "abomination":
            image = '../assets/zombieImages/bp_abom-removebg.png';
            posX = '130px';
            posY = '100px';
            // return('../assets/zombieImages/bp_abom-removebg.png');
            break;
        case "walker activation":
            // return('../assets/zombieImages/bp_walker-removebg.png');
            // need to add a new image
            break;
        case "runner activation":
            // return('../assets/zombieImages/bp_runner-removebg.png');
            // need to add a new image
            break;
        case "fatty activation":
            // return('../assets/zombieImages/bp_fatty-removebg.png');
            // need to add a new image
            break;
        // GH
        // WB
        // NR
        // FF
        // MC
        default:
            console.error('Nothing was passed');
    }

    let setBody = `
        background-image: url(${image});
        background-position-x: ${posX};
        background-position-y: ${posY};
    `

    return setBody;
}