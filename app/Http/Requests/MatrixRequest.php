<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class MatrixRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'matrixA' => 'required|array',
            'matrixA.rows' => 'required|integer|min:1',
            'matrixA.columns' => 'required|integer|min:1',
            'matrixA.values' => 'required|array',
            'matrixB' => 'required|array',
            'matrixB.rows' => 'required|integer|min:1',
            'matrixB.columns' => 'required|integer|min:1',
            'matrixB.values' => 'required|array'
        ];
    }
}
