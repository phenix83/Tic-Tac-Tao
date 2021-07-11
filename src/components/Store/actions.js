export const setGameInfo= game=>{
    return{
        type:"SET_GAME_INFO",
        payload:game,
    }
}


export const setStepCount= step=>{
    return{
        type:"SET_STEP",
        payload:step,
    }
}

export const setGameHistory= gameHistory=>{
    return{
        type:"SET_HISTORY",
        payload:gameHistory,
    }
}

export const setPlayer= xIsNext=>{
    return{
        type:"SET_PLAYER",
        payload:xIsNext,
    }
}


