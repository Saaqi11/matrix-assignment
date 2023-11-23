<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface MatrixServiceInterface {
    public function multiplyMatrices(array $matrixA, array $matrixB);
}
