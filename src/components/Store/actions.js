export const setGameInfo = game => {
    return{
        type:"SET_GAME_INFO",
        payload:game,
    }
}

export const setStepCount = step => {
    return{
        type:"SET_STEP",
        payload:step,
    }
}

export const setGameHistory = gameHistory => {
    return{
        type:"SET_HISTORY",
        payload:gameHistory,
    }
}

export const setPlayer= xIsNext => {
    return{
        type:"SET_PLAYER",
        payload:xIsNext,
    }
}

export const increaseXWins = () => {
    return{
        type:"INCREASE_X_WINS",
    }
}

export const increaseOWins = () => {
    return{
        type:"INCREASE_O_WINS",
    }
}

export const setSettings = (active) => {
    return{
        type:"SET_SETTINGS",
        payload:active,
    }
}

export const reset = () => {
    return{
        type:"RESET",
    }
}

export const newGame = () => {
    return{
        type:"NEW_GAME",
    }
}

export const setBoardSize = (size) => {
    return{
        type:"SET_BOARD_SIZE",
        payload:size,
    }
}