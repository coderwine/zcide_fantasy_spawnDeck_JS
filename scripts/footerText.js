export const lastCardDisplay = (no, threat) => {
    let isIncluded = ['Fatty', 'Orc Fatty', 'Wolvz', 'Swarm of Ratz', 'Murder of Crow'];
    let specialCase = ['Nothing', 'Double Spawn', 'Enter the Horde', 'Necromancer', 'Abomination', 'Walker Activation', 'Runner Activation', 'Fatty Activation','Orc Walker Activation', 'Orc Runner Activation', 'Orc Fatty Activation', 'Wolfbomination', 'Orc Abomination', 'Tainted Abomination', 'Necromantic Dragon']

    console.log('Last Card: ', no, threat);

    if(no > 1) {
        if(isIncluded.includes(threat)) {
            switch(threat) {
                case 'Fatty':
                        return(`
                            Last Card: ${no} Fatties.
                        `);
                        break;
                    case 'Orc Fatty':
                        return(`
                            Last Card: ${no} Orc Fatties.
                        `);
                        break;
                    case 'Wolvz':
                        return(`
                            Last Card: ${no} Wolvz.
                        `);
                        break;
                    case 'Swarm of Ratz':
                        return(`
                            Last Card: ${no} Swarm of Ratz.
                        `);
                        break;
                    default:
                        return(`
                            Last Card: ${no} Murders of Crows.
                        `);
            } 
        } else {
            return `Last Card: ${no} ${threat}s.`
        }

    } else {
        if(specialCase.includes(threat)) {
            return `Last Card: ${threat}.`;
        } else {
            return `Last Card: ${no} ${threat}.`;
        }
    }
}