const init={
    game:[null,null,null,null,null,null,null,null,null],
    step:0,
    gameHistory:[Array(9).fill(null)],
    xIsNext:true,

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


        default:
            return state;
    }
}

export default reducer;