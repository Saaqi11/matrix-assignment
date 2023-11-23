<?php

// tests/Unit/MatrixServiceTest.php
namespace Tests\Unit;

use Tests\TestCase;
use App\Services\MatrixService;

class MatrixServiceTest extends TestCase
{
    /** @test */
    public function it_can_multiply_matrices()
    {
        $matrixService = new MatrixService();

        $matrixA = [
            'rows' => 2,
            'columns' => 2,
            'values' => [
                [1, 2],
                [3, 4],
            ],
        ];

        $matrixB = [
            'rows' => 2,
            'columns' => 2,
            'values' => [
                [5, 6],
                [7, 8],
            ],
        ];

        $result = $matrixService->multiplyMatrices($matrixA, $matrixB);

        // Add assertions based on your expectations for the result
        $this->assertEquals([[19, 22], [43, 50]], $result);
    }
}
