<?php

namespace App\Services;

use App\Interfaces\MatrixServiceInterface;

class MatrixService implements MatrixServiceInterface
{
    /**
     * Matrix Multiplication
     * @param array $matrixA
     * @param array $matrixB
     * @return array
     */
    public function multiplyMatrices(array $matrixA, array $matrixB): array
    {
        $result = [];

        if ($matrixA['columns'] !== $matrixB['rows']) {
            throw new \InvalidArgumentException('Matrices cannot be multiplied. Number of columns in Matrix A must be equal to the number of rows in Matrix B.');
        }

        for ($i = 0; $i < $matrixA['rows']; $i++) {
            $result[$i] = [];
            for ($j = 0; $j < $matrixB['columns']; $j++) {
                $sum = 0;
                for ($k = 0; $k < $matrixA['columns']; $k++) {
                    $sum += $matrixA['values'][$i][$k] * $matrixB['values'][$k][$j];
                }
                $result[$i][$j] = $sum;
            }
        }

        return $result;
    }
}
