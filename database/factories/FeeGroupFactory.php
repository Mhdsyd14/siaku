<?php

namespace Database\Factories;

use App\Models\FeeGroup;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<FeeGroup>
 */
class FeeGroupFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'group' => $this->faker->numberBetween(1, 10),
            'amount' => $this->faker->numberBetween(1000000, 6000000),
        ];
    }
}
