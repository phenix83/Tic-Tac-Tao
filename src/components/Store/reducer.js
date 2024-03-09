const init={
    game:[null,null,null,null,null,null,null,null,null],
    step:0,
    gameHistory:[Array(9).fill(null)],
    xIsNext:true,
    xWins:0,
    oWins:0,
    settings:false,
    boardSize:3
}



const reducer=(state=init,action)=>{
    switch (action.type) {
        case "SET_GAME_INFO":
            return{
                ...state,
                game: action.payload
            }
        case "SET_STEP":
            return{
                ...state,
                step: action.payload
            }
        case "SET_HISTORY":
            return{
                ...state,
                gameHistory: action.payload
            }
        case "SET_PLAYER":
            return{
                ...state,
                xIsNext: action.payload
            }
        case "INCREASE_X_WINS":
            return{
                ...state,
                xWins: state.xWins + 1
            }

        case "INCREASE_O_WINS":
            return{
                ...state,
                oWins: state.oWins + 1
            }

        case "SET_SETTINGS":
            if (state.step){
                return state;
            }

            return{
                ...state,
                settings:action.payload
            }

        case "RESET":
            return init

        case "NEW_GAME":
            return{
                ...state,
                step: 0,
                game:Array(state.boardSize * state.boardSize).fill(null),
                gameHistory:[Array(state.boardSize * state.boardSize).fill(null)]
            }            

        case "SET_BOARD_SIZE":
            return{
                ...state,
                boardSize:action.payload,
                game:Array(action.payload*action.payload).fill(null),
                gameHistory:[Array(action.payload*action.payload).fill(null)]
            }

        default:
            return state;
    }
}

export default reducer;