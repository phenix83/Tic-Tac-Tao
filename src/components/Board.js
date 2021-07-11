import React from "react";
import Square from "./Square";
import {useSelector} from "react-redux";




const Board = ({ onClick }) => {

    const {game}=useSelector(state=> state);
    //const { addItemToStorage }=useCart();
    // useEffect(() => {
    //     addItemToStorage([...game])
    // }, []);


    //addItemToStorage(squares);

  return (
      <>

          <div className="board">
              {game.map((square, i) => (
                  <Square key={i} value={square} onClick={() => onClick(i)} />
              ))}
          </div>
      </>
  );
};

export default Board;
