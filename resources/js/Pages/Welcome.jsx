import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    Award,
    BookOpen,
    Building2,
    CalendarDays,
    CheckCircle2,
    GraduationCap,
    LayoutDashboard,
    Menu,
    Users,
    WalletCards,
    X,
} from 'lucide-react';
import { useState } from 'react';

export default function Welcome({ auth, canLogin, canRegister, laravelVersion, phpVersion }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const features = [
        {
            icon: LayoutDashboard,
            title: 'Dashboard Akademik',
            description:
                'Akses berbagai informasi akademik mahasiswa dalam satu dashboard yang sederhana dan mudah digunakan.',
        },
        {
            icon: BookOpen,
            title: 'KRS & KHS',
            description: 'Kelola Kartu Rencana Studi dan lihat hasil studi setiap semester dengan lebih praktis.',
        },
        {
            icon: CalendarDays,
            title: 'Jadwal Kuliah',
            description: 'Lihat jadwal perkuliahan, ruang, mata kuliah, dan dosen secara terpusat.',
        },
        {
            icon: WalletCards,
            title: 'Informasi Keuangan',
            description: 'Pantau informasi pembayaran dan status administrasi akademik secara mudah.',
        },
    ];

    const statistics = [
        {
            icon: Users,
            value: '5.000+',
            label: 'Mahasiswa',
        },
        {
            icon: GraduationCap,
            value: '250+',
            label: 'Dosen',
        },
        {
            icon: Building2,
            value: '20+',
            label: 'Program Studi',
        },
        {
            icon: Award,
            value: '15+',
            label: 'Tahun Akademik',
        },
    ];

    return (
        <>
            <Head title="SIAKU - Sistem Informasi Akademik" />

            <div className="min-h-screen bg-slate-50 text-slate-900">
                {/* =========================
                    NAVBAR
                ========================== */}
                <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-white/90 backdrop-blur-md">
                    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                        {/* Logo */}
                        <a href="#beranda" className="flex items-center gap-3">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-linear-to-br from-blue-600 to-indigo-700 text-white shadow-lg shadow-blue-500/20">
                                <GraduationCap className="size-6" />
                            </div>

                            <div>
                                <h1 className="text-lg font-bold tracking-tight text-slate-900">SIAKU</h1>

                                <p className="hidden text-[10px] font-medium uppercase tracking-wider text-slate-500 sm:block">
                                    Sistem Informasi Akademik
                                </p>
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden items-center gap-8 md:flex">
                            <a
                                href="#beranda"
                                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                            >
                                Beranda
                            </a>

                            <a
                                href="#tentang"
                                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                            >
                                Tentang
                            </a>

                            <a
                                href="#fitur"
                                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                            >
                                Fitur
                            </a>

                            <a
                                href="#informasi"
                                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
                            >
                                Informasi
                            </a>
                        </nav>

                        {/* Authentication */}
                        <div className="hidden items-center gap-3 md:flex">
                            {auth?.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                                >
                                    Dashboard
                                    <ArrowRight className="size-4" />
                                </Link>
                            ) : (
                                <>
                                    {canLogin && (
                                        <Link
                                            href={route('login')}
                                            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
                                        >
                                            Masuk
                                            <ArrowRight className="size-4" />
                                        </Link>
                                    )}

                                    {canRegister && (
                                        <Link
                                            href={route('register')}
                                            className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                                        >
                                            Daftar
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
                        >
                            {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {mobileMenuOpen && (
                        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
                            <nav className="flex flex-col gap-2">
                                <a
                                    href="#beranda"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                                >
                                    Beranda
                                </a>

                                <a
                                    href="#tentang"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                                >
                                    Tentang
                                </a>

                                <a
                                    href="#fitur"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                                >
                                    Fitur
                                </a>

                                <a
                                    href="#informasi"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100"
                                >
                                    Informasi
                                </a>

                                {/* Mobile Authentication */}
                                <div className="mt-2 flex flex-col gap-2">
                                    {canLogin && (
                                        <Link
                                            href={route('login')}
                                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white"
                                        >
                                            Masuk
                                            <ArrowRight className="size-4" />
                                        </Link>
                                    )}

                                    {canRegister && (
                                        <Link
                                            href={route('register')}
                                            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700"
                                        >
                                            Daftar
                                        </Link>
                                    )}
                                </div>
                            </nav>
                        </div>
                    )}
                </header>

                {/* =========================
                    HERO
                ========================== */}
                <section
                    id="beranda"
                    className="relative overflow-hidden bg-linear-to-br from-blue-600 via-blue-700 to-indigo-950 pt-32 pb-20 text-white"
                >
                    <div className="absolute -left-32 -top-32 size-96 rounded-full bg-blue-400/20 blur-3xl" />

                    <div className="absolute -bottom-40 -right-20 size-96 rounded-full bg-indigo-400/20 blur-3xl" />

                    <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                        {/* Hero Content */}
                        <div>
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                                <CheckCircle2 className="size-4 text-blue-200" />
                                Sistem Informasi Akademik
                            </div>

                            <h2 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                                Kelola Aktivitas Akademik dengan Lebih <span className="text-blue-200">Mudah</span>
                            </h2>

                            <p className="mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
                                SIAKU membantu mahasiswa dan civitas akademika mengakses informasi akademik secara
                                cepat, terintegrasi, dan mudah digunakan.
                            </p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                {canLogin && (
                                    <Link
                                        href={route('login')}
                                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 shadow-xl transition hover:bg-blue-50"
                                    >
                                        Mulai Sekarang
                                        <ArrowRight className="size-4" />
                                    </Link>
                                )}

                                <a
                                    href="#fitur"
                                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                                >
                                    Lihat Fitur
                                </a>
                            </div>
                        </div>

                        {/* Dashboard Preview */}
                        <div className="relative">
                            <div className="rounded-2xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-md">
                                <div className="overflow-hidden rounded-xl bg-white shadow-2xl">
                                    <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
                                        <div>
                                            <p className="text-xs font-medium text-slate-400">Dashboard Mahasiswa</p>

                                            <h3 className="mt-1 text-base font-bold text-slate-900">
                                                Selamat Datang 👋
                                            </h3>
                                        </div>

                                        <div className="flex size-9 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">
                                            MI
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 p-5">
                                        <div className="rounded-xl bg-blue-50 p-4">
                                            <p className="text-xs text-slate-500">IPK</p>

                                            <p className="mt-1 text-2xl font-bold text-blue-600">3.75</p>
                                        </div>

                                        <div className="rounded-xl bg-indigo-50 p-4">
                                            <p className="text-xs text-slate-500">SKS</p>

                                            <p className="mt-1 text-2xl font-bold text-indigo-600">108</p>
                                        </div>

                                        <div className="col-span-2 rounded-xl border border-slate-200 p-4">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs text-slate-400">Semester</p>

                                                    <p className="mt-1 text-sm font-semibold text-slate-800">
                                                        Semester 6
                                                    </p>
                                                </div>

                                                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                                                    Aktif
                                                </span>
                                            </div>
                                        </div>

                                        <div className="col-span-2 rounded-xl bg-slate-50 p-4">
                                            <p className="text-xs font-medium text-slate-400">Jadwal Hari Ini</p>

                                            <div className="mt-3 flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-semibold text-slate-800">
                                                        Pemrograman Web
                                                    </p>

                                                    <p className="mt-1 text-xs text-slate-500">
                                                        08:00 - 10:30 • Lab Komputer
                                                    </p>
                                                </div>

                                                <CalendarDays className="size-5 text-blue-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================
                    STATISTICS
                ========================== */}
                <section className="border-b border-slate-200 bg-white">
                    <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-200 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
                        {statistics.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.label}
                                    className="flex flex-col items-center justify-center px-4 py-8 text-center"
                                >
                                    <Icon className="mb-3 size-6 text-blue-600" />

                                    <p className="text-2xl font-bold text-slate-900">{item.value}</p>

                                    <p className="mt-1 text-xs text-slate-500 sm:text-sm">{item.label}</p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* =========================
                    ABOUT
                ========================== */}
                <section id="tentang" className="bg-white py-20 sm:py-24">
                    <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                                Tentang SIAKU
                            </p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Satu sistem untuk kebutuhan akademik
                            </h2>

                            <p className="mt-5 leading-7 text-slate-600">
                                SIAKU merupakan sistem informasi akademik yang dirancang untuk membantu civitas
                                akademika dalam mengelola dan mengakses berbagai informasi akademik secara terintegrasi.
                            </p>

                            <p className="mt-4 leading-7 text-slate-600">
                                Dengan tampilan yang sederhana dan responsif, informasi penting dapat diakses melalui
                                komputer maupun perangkat mobile.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="rounded-2xl bg-blue-50 p-6">
                                <LayoutDashboard className="size-8 text-blue-600" />

                                <h3 className="mt-5 font-bold text-slate-900">Terintegrasi</h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Data akademik tersedia dalam satu sistem.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-indigo-50 p-6">
                                <Users className="size-8 text-indigo-600" />

                                <h3 className="mt-5 font-bold text-slate-900">Terpusat</h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Informasi dapat dikelola secara terpusat.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-sky-50 p-6">
                                <BookOpen className="size-8 text-sky-600" />

                                <h3 className="mt-5 font-bold text-slate-900">Informatif</h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Informasi akademik mudah ditemukan.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-violet-50 p-6">
                                <CheckCircle2 className="size-8 text-violet-600" />

                                <h3 className="mt-5 font-bold text-slate-900">Efisien</h3>

                                <p className="mt-2 text-sm leading-6 text-slate-600">
                                    Proses akademik menjadi lebih praktis.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =========================
                    FEATURES
                ========================== */}
                <section id="fitur" className="bg-slate-50 py-20 sm:py-24">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">Fitur Utama</p>

                            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                Semua kebutuhan akademik dalam satu tempat
                            </h2>

                            <p className="mt-4 leading-7 text-slate-600">
                                SIAKU menyediakan berbagai fitur untuk membantu mahasiswa dalam menjalankan aktivitas
                                akademiknya.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <div
                                        key={feature.title}
                                        className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/50"
                                    >
                                        <div className="flex size-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                                            <Icon className="size-6" />
                                        </div>

                                        <h3 className="mt-5 text-lg font-bold text-slate-900">{feature.title}</h3>

                                        <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>

                                        <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-blue-600">
                                            Pelajari
                                            <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* =========================
                    INFORMATION
                ========================== */}
                <section id="informasi" className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
                    <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl bg-linear-to-br from-blue-600 via-blue-700 to-indigo-900 px-6 py-12 text-center text-white shadow-2xl sm:px-12 sm:py-16">
                        <GraduationCap className="mx-auto size-12 text-blue-200" />

                        <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                            Siap mengakses layanan akademik?
                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
                            Masuk ke SIAKU untuk melihat informasi akademik, jadwal kuliah, KRS, KHS, dan berbagai
                            layanan akademik lainnya.
                        </p>

                        {canLogin && (
                            <Link
                                href={route('login')}
                                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-700 shadow-xl transition hover:bg-blue-50"
                            >
                                Masuk ke SIAKU
                                <ArrowRight className="size-4" />
                            </Link>
                        )}
                    </div>
                </section>

                {/* =========================
                    FOOTER
                ========================== */}
                <footer className="border-t border-slate-200 bg-white">
                    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="flex size-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                                    <GraduationCap className="size-5" />
                                </div>

                                <div>
                                    <p className="font-bold text-slate-900">SIAKU</p>

                                    <p className="text-xs text-slate-500">Sistem Informasi Akademik</p>
                                </div>
                            </div>
                        </div>

                        <div className="text-left md:text-right">
                            <p className="mt-1 text-sm text-slate-500">
                                © {new Date().getFullYear()} SIAKU. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
