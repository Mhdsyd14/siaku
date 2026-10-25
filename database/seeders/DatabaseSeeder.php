<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(FacultySeeder::class);
        $this->call(FeeGroupSeeder::class);

        User::factory()
            ->create([
                'name' => 'Muhammad Irsyad',
                'email' => 'irsyad@gmail.com',
                'password' => Hash::make('irsyad777'),
            ])
            ->assignRole(
                Role::create([
                    'name' => 'Admin',
                ]),
            );

        $operator = User::factory()
            ->create([
                'name' => 'Indri',
                'email' => 'Indri@gmail.com',
                'password' => Hash::make('indri777'),
            ])
            ->assignRole(
                Role::create([
                    'name' => 'Operator',
                ]),
            );

        $operator->operator()->create([
            'faculty_id' => 1,
            'department_id' => 1,
            'employee_number' => str()->padLeft(mt_rand(0, 999999), 6, 'B'),
        ]);

        $teacher = User::factory()
            ->create([
                'name' => 'Tomi Wibowo',
                'email' => 'Tomi@gmail.com',
                'password' => Hash::make('tomi777'),
            ])
            ->assignRole(
                Role::create([
                    'name' => 'Teacher',
                ]),
            );

        $teacher->teacher()->create([
            'faculty_id' => 1,
            'department_id' => 1,
            'teacher_number' => str()->padLeft(mt_rand(0, 999999), 6, 'B'),
            'academic_title' => 'Asisten Ahli',
        ]);

        $student = User::factory()
            ->create([
                'name' => 'Ridho',
                'email' => 'Ridho@gmail.com',
                'password' => Hash::make('ridho777'),
            ])
            ->assignRole(
                Role::create([
                    'name' => 'Student',
                ]),
            );

        $student->student()->create([
            'faculty_id' => 1,
            'department_id' => 1,
            'fee_group_id' => rand(1, 6),
            'student_number' => str()->padLeft(mt_rand(0, 999999), 6, 'B'),
            'semester' => 1,
            'batch' => 2025,
        ]);
    }
}
