import React from "react";
import { useSelector} from "react-redux";



const Square = ({ value, onClick }) => {
  const {boardSize}=useSelector(state=> state);
  const style = value ? `squares ${value}` : `squares`;

  return (
    <button className={style} style={{ fontSize: boardSize >= 5 ? "4rem" : "5rem" }} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
