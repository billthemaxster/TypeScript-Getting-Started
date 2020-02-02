function startGame() {

    let playerName: string | undefined = getInputValue('playerName')
    logPlayer(playerName)

    postScore(80, playerName)
    postScore(-5, playerName)
}

function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`)
}

function getInputValue(elementId: string): string | undefined {
    const inputElement: HTMLInputElement = document.getElementById(elementId) as HTMLInputElement

    if (inputElement.value === '') {
        return undefined
    } else {
        return inputElement.value;
    }
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {
    let logger: (value: string) => void

    if (score < 0){
        logger = logError
    }else {
        logger = logMessage
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores')
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`)
}

document.getElementById('startGame')!.addEventListener('click', startGame);

const logMessage = (message: string) => console.log(message)

function logError(err: string): void {
    console.error(err)
}

const firstPlayer: Player = new Player()

firstPlayer.name = 'Bob'
console.log(firstPlayer.formatName())
