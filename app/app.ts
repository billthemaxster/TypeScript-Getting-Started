function startGame() {

    let playerName: string = 'Thomas'
    logPlayer(playerName)

    let messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name: string) {
    console.log(`New game starting for player: ${name}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame);

let myResult: Result = {
    playerName: 'Mark',
    score: 5,
    problemCount: 5,
    factor: 7
}

let player: Person = {
    name: 'Frank',
    formatName: () => 'FRANK'
}