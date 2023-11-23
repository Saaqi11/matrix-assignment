import {Matrix as MatrixType, ResultMatrix, MatrixTypeStatic} from '@/types/matrix.type';
import MatrixService from '@/services/MatrixServices'
import React, { useState, useCallback } from 'react';
import Matrix from '@/Pages/Matrix';
const initializeMatrix = (rows: number, columns: number): MatrixType => {
    const values: number[][] = [];

    for (let i = 0; i < rows; i++) {
        values.push(Array(columns).fill(null));
    }

    return {
        rows,
        columns,
        values,
    };
};
const Welcome: React.FC = () => {
    const [matrixA, setMatrixA] = useState<MatrixType>(initializeMatrix(3, 3));
    const [matrixB, setMatrixB] = useState<MatrixType>(initializeMatrix(3, 3));
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [resultMatrix, setResultMatrix] = useState<ResultMatrix | null>(null);

    /**
     * Hanlde
     */
    const multiplyMatrixHandleChange = useCallback((matrix: MatrixType, setMatrix: React.Dispatch<React.SetStateAction<MatrixType>>) =>
        (event: React.ChangeEvent<HTMLInputElement>, rowIndex: number, colIndex: number) => {
            const newValue = parseFloat(event.target.value);
            const newValues = [...matrix.values];
            newValues[rowIndex][colIndex] = newValue;
            setMatrix({ ...matrix, values: newValues });
            setErrorMessage(null);
            setResultMatrix(null);
        }, [setErrorMessage, setResultMatrix]);

    /**
     * Change size of matrix
     */
    const multiplyMatrixSizeChange = useCallback((matrix: MatrixType, setMatrix: React.Dispatch<React.SetStateAction<MatrixType>>) =>
        (rows: number, columns: number) => {
            const newRows = Math.max(1, rows);
            const newColumns = Math.max(1, columns);
            setMatrix(initializeMatrix(newRows, newColumns));
            setErrorMessage(null);
            setResultMatrix(null);
        }, [setErrorMessage, setResultMatrix]);

    const multiplyMatrices = useCallback(async () => {
        if (hasEmptyOrInvalidValues(matrixA) || hasEmptyOrInvalidValues(matrixB)) {
            setErrorMessage('Matrices cannot be empty.');
            setResultMatrix(null);
            return;
        }
        try {
            const result = await new MatrixService().multiplyMatrices(matrixA, matrixB);
            if (result) {
                setErrorMessage(null)
                setResultMatrix(result);
            } else {
                setErrorMessage('Matrices are not compatible for multiplication. Please make sure the rows of first matrix are equal to the columns of second matrix');
            }
        } catch (error) {
            console.error('Error multiplying matrices:', error);
            setErrorMessage('Matrices are not compatible for multiplication. Please make sure the rows of first matrix are equal to the columns of second matrix');
        }
    }, [matrixA, matrixB]);

    const hasEmptyOrInvalidValues = (matrix: MatrixTypeStatic): boolean => {
        for (let i = 0; i < matrix.rows; i++) {
            for (let j = 0; j < matrix.columns; j++) {
                const value = matrix.values[i][j];
                if (value === null || isNaN(value)) {
                    return true; // Found an empty or invalid value
                }
            }
        }
        return false; // No empty or invalid values found
    };

    return (
        <div className="App">
            <div className='header'>
                <div className='container'>
                    <h1>Matrices Multiplication</h1>
                </div>
            </div>
            <div className='content'>
            <div className='container'>
            <div className='matrix-holder'>
            <div className='matrix matrix-1'>
                <h2 className="text-xl font-bold mb-2">Matrix A</h2>
                <Matrix
                    matrix={matrixA}
                    handleMatrixChange={multiplyMatrixHandleChange(matrixA, setMatrixA)}
                    handleMatrixSizeChange={multiplyMatrixSizeChange(matrixA, setMatrixA)}
                />
            </div>
            <div className='matrix matrix-2'>
                <h2 className="text-xl font-bold mb-2">Matrix B</h2>
                <Matrix
                    matrix={matrixB}
                    handleMatrixChange={multiplyMatrixHandleChange(matrixB, setMatrixB)}
                    handleMatrixSizeChange={multiplyMatrixSizeChange(matrixB, setMatrixB)}
                />
            </div>
            </div>
            {errorMessage && <p className="text-red-500 error-message container">{errorMessage}</p>}
            <div className='multiply-btn'>
            <button onClick={multiplyMatrices} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Multiply Matrices</button>
            </div>

            {resultMatrix && (
                <div className="mt-4 result-holder">
                    <h2 className="text-xl font-bold mb-2">Result Matrix</h2>
                    <div className='result-matrix'>
                    {resultMatrix.map((row, i) => (
                        <div key={i} className="flex">
                            {row.map((value, j) => (
                                <input
                                    key={j}
                                    type="text" // Change to "text" for non-numeric values
                                    value={value}
                                    className="w-16 text-center border p-1"
                                    readOnly
                                />
                            ))}
                        </div>
                    ))}
                    </div>
                </div>
            )}
            </div>
            </div>
        </div>
    );
};
export default Welcome;
