<?php

namespace App\Http\Controllers\Student;

use App\Enums\FeeStatus;
use App\Enums\StudyPlanStatus;
use App\Http\Controllers\Controller;
use App\Models\Fee;
use App\Models\StudyPlan;
use Illuminate\Support\Facades\Auth;
use Inertia\Response;

class DashboardStudentController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(): Response
    {
        return Inertia('Students/Dashboard', [
            'page_settings' => [
                'title' => 'Dashboard Students',
                'subtitle' => 'Menampilkan semua statistik pada platfrom ini.',
            ],
            'count' => [
                'study_plans_approved' => StudyPlan::query()
                    ->where('status', StudyPlanStatus::APPROVED->value)
                    ->count(),
                'study_plans_reject' => StudyPlan::query()->where('status', StudyPlanStatus::REJECT->value)->count(),
                'total_payments' => Fee::query()
                    ->where('student_id', Auth::user()->student->id)
                    ->where('status', FeeStatus::SUCCES->value)
                    ->with('feeGroup')
                    ->get()
                    ->sum(fn($fee) => $fee->feeGroup->amount),
            ],
        ]);
    }
}
