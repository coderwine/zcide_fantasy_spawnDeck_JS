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

    switch(check) {
        // BP
        case "walker":
            return('../assets/zombieImages/bp_walker-removebg.png');
            break;
        // GH
        // WB
        // NR
        // FF
        // MC
        default:
            console.error('Nothing was passed');
    }
}