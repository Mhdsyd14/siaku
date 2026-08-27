<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Inertia\Response;

class DashboardAdminController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke():Response
    {
        return inertia('Admin/Dashboard',[
           'page_settings' => [
            'title' => 'Dashboard',
            'subtitle' => 'Menampilkan semua statistik pada platfrom ini.'
           ] 
        ]);
    }
}
