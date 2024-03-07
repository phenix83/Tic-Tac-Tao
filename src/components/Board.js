import React from "react";
import Square from "./Square";
import {useSelector} from "react-redux";




const Board = ({ onClick }) => {

    const {game}=useSelector(state=> state);
    const cols_rows = Math.sqrt(game.length);

    const boardStyle = { gridTemplate: `repeat(${cols_rows}, 1fr) / repeat(${cols_rows}, 1fr)` };
    //const { addItemToStorage }=useCart();
    // useEffect(() => {
    //     addItemToStorage([...game])
    // }, []);


    //addItemToStorage(squares);

  return (
      <>
          <div className="board" style={boardStyle}>
              {game.map((square, i) => (
                  <Square key={i} value={square} onClick={() => onClick(i)} />
              ))}
          </div>
      </>
  );
};

export default Board;
