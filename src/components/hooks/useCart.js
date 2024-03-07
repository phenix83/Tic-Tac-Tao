
import {setGameInfo,setStepCount,setGameHistory,setPlayer,increaseXWins as increaseXWinsAction,increaseOWins as increaseOWinsAction,setSettings as setSettingsAction, reset as resetAction, setBoardSize as setBoardSizeAction, newGame as newGameAction} from '../Store/actions'

import {useDispatch} from 'react-redux'


const useCart = () => {

    const dispatch=useDispatch();

    // const setGame=(item)=>{
    //     dispatch(setGameInfo(item));
    // }


    const addItemToStorage = (item) => {
        //setGame(item);
        dispatch(setGameInfo(item));
    };

    const addStepCount = (item) => {
        //setStep(item);
        dispatch(setStepCount(item));
    };

    const addHistory = (item) => {
        //setGameHistoryCount(item);
        dispatch(setGameHistory(item));
    };

    const addPlayer = (item) => {
        dispatch(setPlayer(item));
    };

    const resetGame=()=>{
        dispatch(setGameInfo([null,null,null,null,null,null,null,null,null]));
        dispatch(setStepCount(0));
        dispatch(setGameHistory([Array(9).fill(null)]));
        dispatch(setPlayer(true));
    }

    const increaseXWins = () => {
        dispatch(increaseXWinsAction())
    }

    const increaseOWins = () => {
        dispatch(increaseOWinsAction())
    }

    const setSettings = (active) => {
        dispatch(setSettingsAction(active))
    }

    const reset = () => {
        dispatch(resetAction())
    }

    const setBoardSize = (size) => {
        dispatch(setBoardSizeAction(size))
    }

    const newGame = ()=>{
        dispatch(newGameAction())
    }



    return {
        addItemToStorage,
        addStepCount,
        addHistory,
        addPlayer,
        resetGame,
        increaseXWins,
        increaseOWins,
        setSettings,
        reset,
        setBoardSize,
        newGame
    }


} //use cart ends

export default useCart;