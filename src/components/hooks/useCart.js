
import {setGameInfo,setStepCount,setGameHistory,setPlayer} from '../Store/actions'

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



    return {
        addItemToStorage,
        addStepCount,
        addHistory,
        addPlayer,
        resetGame
    }


} //use cart ends

export default useCart;