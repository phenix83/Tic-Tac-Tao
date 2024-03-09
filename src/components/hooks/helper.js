
import { useSelector} from 'react-redux'


const useHook = () => {

    const {step,gameHistory, }=useSelector(state=> state);

    function calculateWinner(){
        let squares=gameHistory[step];
        const tableSize = Math.sqrt(squares.length);
        const winFactor = 3;

        /**
         * 
         * @param {Array} line - line (col, row, dagonal) of the board
         * @param {number} winFactor - number of the the same marks in a row
         * @returns {string|null} - mark or null
         */
        function checkLine(line, winFactor){
            let winFactorLine = 1;
            let prevElement = line[0];
            
            for (let i = 0; i < line.length; i++){
                if (!line[i]){
                    winFactorLine = 1;
                    prevElement = line[i];
                    continue;
                }
                if (line[i] === prevElement && i > 0){
                    winFactorLine++
                } else {
                    winFactorLine = 1;
                }
                if (winFactorLine >= winFactor){
                    return line[i];
                };
                prevElement = line[i];
            }
            return null;
        }

        /**
         * 
         * @param {Array} matrix - source array for finding diagonals 
         * @returns {Array} - array of diagonals
         */
        function findDiagonals(matrix) {
            const diagonals = [];
            const size = matrix.length;
        
            // primary diagonals
            for (let i = 0; i < size; i++) {
                const diagonal = [];
                for (let j = 0; j <= i; j++) {
                    diagonal.push(matrix[j][i - j]);
                }
                diagonals.push(diagonal);
            }
            for (let i = 1; i < size; i++) {
                const diagonal = [];
                for (let j = 0; j < size - i; j++) {
                    diagonal.push(matrix[i + j][size - j - 1]);
                }
                diagonals.push(diagonal);
            }
        
            // secondary diagonals
            for (let i = 0; i < size; i++) {
                const diagonal = [];
                for (let j = 0; j <= i; j++) {
                    diagonal.push(matrix[size - 1 - i + j][j]);
                }
                diagonals.push(diagonal);
            }
            for (let i = 1; i < size; i++) {
                const diagonal = [];
                for (let j = 0; j < size - i; j++) {
                    diagonal.push(matrix[size - 1 - j][i + j]);
                }
                diagonals.push(diagonal);
            }
        
            return diagonals;
        }

        /**
         * 
         * @param {Array} arr - one dimention array 
         * @param {number} size - number of cols and rows
         * @returns {Array} - two dimention array
         */
        function convertToTwoDimensionalArray(arr, size) {
            const twoDArray = [];
            let index = 0;
        
            for (let i = 0; i < size; i++) {
                const row = [];
                for (let j = 0; j < size; j++) {
                    row.push(arr[index]);
                    index++;
                }
                twoDArray.push(row);
            }
        
            return twoDArray;
        }

        const board = convertToTwoDimensionalArray(squares, tableSize);

        // Check all lines

        for (let i = 0; i < tableSize; i++) {
            const row = board[i];
            const col = [];
            for (let j = 0; j < tableSize; j++) {
                col.push(board[j][i]);
            }
            if (checkLine(row, winFactor)) return checkLine(row, winFactor);
            if (checkLine(col, winFactor)) return checkLine(col, winFactor);
        }

        const allDiagonals = findDiagonals(board);

        for (let i = 0; i < allDiagonals.length; i++){
            if (checkLine(allDiagonals[i], winFactor)) return checkLine(allDiagonals[i], winFactor);
        }

        return null;
    }

    return {
        calculateWinner
    }

} //use hook ends

export default useHook;