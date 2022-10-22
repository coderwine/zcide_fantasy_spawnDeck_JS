export const grammarAdjust = (threat, no) => {
    let type = threat;
    let num = no;
    let selection = ['Fatty', 'Orc Fatty', 'Wolvz', 'Swarm of Ratz'];

    if(num > '1') {
        if(selection.includes(type)) {
            
            switch(type) {
                case 'Fatty':
                    return(`
                        <p>${num}</p>
                        <h3>Fatties</h3>
                    `);
                    break;
                case 'Orc Fatty':
                    return(`
                        <p>${num}</p>
                        <h3>Orc Fatties</h3>
                    `);
                    break;
                case 'Wolvz':
                    return(`
                        <p>${num}</p>
                        <h3>Wolvz</h3>
                    `);
                    break;
                default:
                    return(`
                        <p>${num}</p>
                        <h3>Swarm of Ratz</h3>
                    `);
            }

        } else {
            return(`
            <p>${num}</p>
            <h3>${type}s</h3>
            `);
        }
    } else {
        return( `
            <p>${num}</p>
            <h3>${type}</h3>
        `);
    }
}