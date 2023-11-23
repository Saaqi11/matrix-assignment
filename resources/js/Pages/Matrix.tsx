import { MatrixProps } from '@/types/matrix.type';
import React from 'react';

const Matrix: React.FC<MatrixProps> = ({ matrix, handleMatrixChange, handleMatrixSizeChange}) => {
    return (
        <div className='mat-holder'>
            <div className='matrix-header'>
            <div className="mb-2">
                <label className="mr-2">Rows:</label>
                <input
                    type="number"
                    value={matrix.rows}
                    onChange={(e) => handleMatrixSizeChange(parseInt(e.target.value), matrix.columns)}
                    className="w-16 text-center border p-1"
                />
            </div>
            <div className="mb-2">
                <label className="mr-2">Columns:</label>
                <input
                    type="number"
                    value={matrix.columns}
                    onChange={(e) => handleMatrixSizeChange(matrix.rows, parseInt(e.target.value))}
                    className="w-16 text-center border p-1"
                />
            </div>
            </div>
            <div className='mat-block'>
            {matrix.values.map((row: any[], i: React.Key | null | undefined) => (
                <div key={i} className="flex matrix-body">
                    {row.map((value, j) => (
                        <input
                            key={j}
                            type="number"
                            value={value}
                            onChange={(e) => handleMatrixChange(e, i as number, j as number)}
                            className="w-16 text-center border p-1"
                        />
                    ))}
                </div>
            ))}
            </div>
        </div>
    );
};
export default Matrix;
