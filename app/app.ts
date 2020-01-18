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