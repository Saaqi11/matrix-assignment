import React from "react";

export interface Matrix {
    rows: number;
    columns: number;
    values: number[][];
}

export type ResultMatrix = string[][] | null;

export interface MatrixProps {
    matrix: Matrix;
    handleMatrixChange: (e: React.ChangeEvent<HTMLInputElement>, rowIndex: number, colIndex: number) => void;
    handleMatrixSizeChange: (rows: number, columns: number) => void;
}
export interface MatrixTypeStatic {
    rows: number;
    columns: number;
    values: number[][];
}