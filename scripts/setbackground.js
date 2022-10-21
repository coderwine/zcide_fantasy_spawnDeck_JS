export const setBackground = (threat, type) => {

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
    let size;

    switch(check) {
        // BP
        case "double spawn":
            image = `url('../assets/zombieImages/bp_doubleSpawn-removebg.png')`;
            posX = '-10px';
            posY = '180px';
            break;
        case "walker":
            image = `url('../assets/zombieImages/bp_walker-removebg.png')`;
            posX = '-100px';
            posY = '130px';
            break;
        case "runner":
            image = `url('../assets/zombieImages/bp_runner-removebg.png')`;
            posX = '-60px';
            posY = '170px';
            break;
        case "fatty":
            image = `url('../assets/zombieImages/bp_fatty-removebg.png')`;
            posX = '-150px';
            posY = '170px';
            break;
        case "necromancer":
            image = `url('../assets/zombieImages/bp_necro-removebg.png')`;
            posX = '120px';
            posY = '150px';
            break;
        case "abomination":
            image = `url('../assets/zombieImages/bp_abom-removebg.png')`;
            posX = '-80px';
            posY = '100px';
            size = '140%';
            break;
        case "walker activation":
            image = `url('../assets/zombieImages/bp_walkerActivate-removebg.png')`;
            posX = '-60px';
            posY = '100px';
            size = '120%';
            break;
        case "runner activation":
            image = `url('../assets/zombieImages/bp_runnerActivate-removebg.png')`;
            posX = '-20px';
            posY = '300px';
            size = '120%';
            break;
        case "fatty activation":
            image = `url('../assets/zombieImages/bp_fattyActivate-removebg.png')`;
            posY = '200px';
            break;
        // GH
        // WB
        // NR
        // FF
        // MC
        default:
            image = '';
            console.error('Nothing was passed');
    }
    console.log(image);

    let setBody = `
        background: var(--${threat});
        background-image: ${image};
        background-repeat: no-repeat;
        background-position-x: ${posX};
        background-position-y: ${posY};
        background-size: ${size};
    `
    return setBody;
}