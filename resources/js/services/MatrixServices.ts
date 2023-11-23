// MatrixService.ts
import {Matrix, ResultMatrix} from "@/types/matrix.type";
import ApiService from "./AxiosService";

class MatrixService {
    /**
     * Multiply Matrices
     * @param matrixA
     * @param matrixB
     */
    multiplyMatrices = async (matrixA: Matrix, matrixB: Matrix): Promise<ResultMatrix | null> => {
        try {
            const response = await ApiService.post('/api/multiply-matrices', { matrixA, matrixB });
            const resultMatrix = response.data.result;

            console.log(resultMatrix);
            if (resultMatrix) {
                console.log(resultMatrix)
                return this.convertToExcelFormat(resultMatrix);
            } else {
                return null;
            }
        } catch (error) {
            console.error('Error multiplying matrices:', error);
            return null;
        }
    };

    /**
     * Convert to Excel Format
     * @param matrix
     */
    private convertToExcelFormat = (matrix: number[][]): string[][] => {
        const excelFormatMatrix: string[][] = [];

        for (let i = 0; i < matrix.length; i++) {
            const row = matrix[i].map(value => this.convertToExcelColumn(value));
            excelFormatMatrix.push(row);
        }

        return excelFormatMatrix;
    };

    /**
     * Convert To Excel column
     * @param value
     */
    private convertToExcelColumn = (value: number): string => {
        let result = '';
        let num = value;

        while (num > 0) {
            const remainder = (num - 1) % 26;
            result = String.fromCharCode(65 + remainder) + result;
            num = Math.floor((num - 1) / 26);
        }

        return result;
    };
}

export default MatrixService;
