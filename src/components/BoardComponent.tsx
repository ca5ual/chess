import React, { Component, FC, useState } from 'react'
import { Board } from '../models/Board';
import { Cell } from '../models/Cell';
import CellComponents from './CellComponent';

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
    const [selectedCell, setSelectedCell] = useState <Cell | null>(null);
    return (
        <div className='board'>
                    {board.cells.map((row,index) => 
                    <React.Fragment key = {index}>
                        {row.map(cell => 
                            <CellComponents
                            cell = {cell}
                            key = {cell.id}
                            />
                            )}
                    </React.Fragment>
                    )}
        </div>
    );
};

export default BoardComponent;