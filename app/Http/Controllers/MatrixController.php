<?php

namespace App\Http\Controllers;

use App\Http\Requests\MatrixRequest;
use App\Services\MatrixService;
use Illuminate\Http\JsonResponse;

class MatrixController extends Controller
{
    private MatrixService $matrixService;

    public function __construct(MatrixService $matrixService) {
        $this->matrixService = $matrixService;
    }

    /**
     * Matrices multiplication
     * @param MatrixRequest $request
     * @return JsonResponse
     */
    public function multiplyMatrices(MatrixRequest $request): JsonResponse
    {
        try {
            $matrixA = $request->input('matrixA');
            $matrixB = $request->input('matrixB');

            $result = $this->matrixService->multiplyMatrices($matrixA, $matrixB);
            return $this->sendResponse($result, "Matrix multiplication has been done", 200);
        } catch (\InvalidArgumentException $e) {
            return $this->sendError([
                'error' => $e->getMessage()
            ], 409);
        }
    }
}
