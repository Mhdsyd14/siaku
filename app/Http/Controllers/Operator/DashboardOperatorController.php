<?php

namespace App\Http\Controllers\Operator;

use App\Http\Controllers\Controller;
use Inertia\Response;

class DashboardOperatorController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke():Response
    {
        return inertia('Operators/Dashboard',[
            'page_settings' => [
                'title' => 'Dashboard',
                'subtitle' => 'Menampilkan semua statistik pada platfrom ini.'
            ]
        ]);
    }
}
