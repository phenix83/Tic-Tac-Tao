import React, {useEffect} from "react";
import Board from "./Board";

import useCart from "./hooks/useCart";
import { useSelector} from "react-redux";
import useHook from "./hooks/helper";



const Game = () => {
  const { addItemToStorage,addStepCount,addHistory,addPlayer,setSettings, increaseOWins, increaseXWins, reset, setBoardSize, newGame }=useCart();
  const { calculateWinner }=useHook();
  const {step,gameHistory,xIsNext,xWins,oWins,settings, boardSize}=useSelector(state=> state);
  //const [history, setHistory] = useState([Array(9).fill(null)]);
  const history=[Array(9).fill(null)];
  const winner = calculateWinner();



  const xO = xIsNext ? "X" : "O";

  useEffect(()=>{
    if (winner === 'X'){
      increaseXWins();
    }
  
    if (winner === "O"){
      increaseOWins();
    }
  }, [winner]);



  const handleClick = (i) => {

    const historyPoint = gameHistory.length > 0 ? gameHistory.slice(0,step + 1): history.slice(0,step + 1);

    const current = historyPoint[step];

    const squares = [...current];



    if (winner || squares[i]) return;
    // select square
    squares[i] = xO;

    // store game data to redux
    addItemToStorage(squares);
    // store game step history to redux
    addHistory([...historyPoint, squares]);
    // store step count to redux
    addStepCount(historyPoint.length);
    // store next player history
    addPlayer(!xIsNext);
  };

  return (
    
    <>
        { !settings ?
        <>
          <h1>Tic Tac Tao with React-Redux</h1>
          <div className="top-navigation">
            <h4 onClick={()=>{setSettings(true)}} style={{cursor:"pointer"}}>Settings</h4>
            <h4 onClick={reset} style={{cursor:"pointer"}}>Reset</h4>
          </div>
          <Board   onClick={handleClick} />
          <div className="info-wrapper">
            <div className="game-info">
              <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
              <h3>O player wins: {oWins}</h3>
              <h3>X player wins: {xWins}</h3>
            </div>
            <h4 onClick={()=>{newGame()}} style={{cursor:"pointer", display: "flex", alignSelf: "flex-start"}}>New game</h4>
          </div>
        </> :
         <>
          <h1>Tic Tac Tao with React-Redux</h1>
          <div style={{margin:"2rem"}}>
            <h3>Settings</h3>
            <label htmlFor="" style={{padding:"1rem"}}>Board size: </label>
            <select name="" id="" value={boardSize} onChange={(event) => {setBoardSize(parseInt(event.target.value))}}>
              {[3,4,5].map((value)=>{
                return <option key={value} value={value}>{value}</option>
              })}
            </select>
            <h4 onClick={()=>{setSettings(false)}} style={{cursor:"pointer", marginTop:"2rem"}} >Back</h4>
          </div>
         </> }        
    </>
  );
};

export default Game;
