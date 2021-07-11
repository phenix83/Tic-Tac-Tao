import React from "react";
import Board from "./Board";

import useCart from "./hooks/useCart";
import { useSelector} from "react-redux";
import useHook from "./hooks/helper";


const Game = () => {
  const { addItemToStorage,addStepCount,addHistory,addPlayer,resetGame }=useCart();
  const { calculateWinner }=useHook();
  const {step,gameHistory,xIsNext}=useSelector(state=> state);
  //const [history, setHistory] = useState([Array(9).fill(null)]);
  const history=[Array(9).fill(null)];
  const winner = calculateWinner();

  const xO = xIsNext ? "X" : "O";


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

              <h1>Tic Tac Tao with React-Redux</h1>
              <Board   onClick={handleClick} />
              <div className="info-wrapper">

                <h3>{winner ? "Winner: " + winner : "Next Player: " + xO}</h3>
                <h4 onClick={()=>{resetGame()}} style={{cursor:"pointer"}}>Reset Game</h4>

              </div>

    </>
  );
};

export default Game;
