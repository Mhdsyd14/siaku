import ApplicationLogo from '@/Components/ApplicationLogo';
import InputError from '@/Components/InputError';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Register" />

            <div className="min-h-screen w-full lg:grid lg:grid-cols-2">
                {/* Left Side */}
                <div className="flex min-h-screen flex-col px-6 py-6 lg:px-10">
                    <ApplicationLogo
                        bgLogo="from-blue-500 via-blue-600 to-blue-600"
                        colorLogo="text-white"
                        colorText="text-white"
                    />

                    <div className="flex flex-1 items-center justify-center">
                        <div className="w-full max-w-md space-y-8">
                            {/* Header */}
                            <div className="space-y-2 text-center">
                                <h1 className="text-3xl font-bold tracking-tight text-foreground">Buat Akun</h1>

                                <p className="text-sm text-muted-foreground">
                                    Isi data di bawah ini untuk membuat akun baru Anda.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={submit} className="space-y-5">
                                {/* Name */}
                                <div className="space-y-2">
                                    <Label htmlFor="name">Nama</Label>

                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={data.name}
                                        autoComplete="name"
                                        autoFocus
                                        placeholder="Nama lengkap"
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="h-10"
                                        required
                                    />

                                    {errors.name && <InputError message={errors.name} />}
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>

                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        value={data.email}
                                        autoComplete="username"
                                        placeholder="email@gmail.com"
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="h-10"
                                        required
                                    />

                                    {errors.email && <InputError message={errors.email} />}
                                </div>

                                {/* Password */}
                                <div className="space-y-2">
                                    <Label htmlFor="password">Password</Label>

                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        value={data.password}
                                        autoComplete="new-password"
                                        placeholder="Masukkan password"
                                        onChange={(e) => setData('password', e.target.value)}
                                        className="h-10"
                                        required
                                    />

                                    {errors.password && <InputError message={errors.password} />}
                                </div>

                                {/* Confirm Password */}
                                <div className="space-y-2">
                                    <Label htmlFor="password_confirmation">Konfirmasi Password</Label>

                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        value={data.password_confirmation}
                                        autoComplete="new-password"
                                        placeholder="Masukkan kembali password"
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        className="h-10"
                                        required
                                    />

                                    {errors.password_confirmation && (
                                        <InputError message={errors.password_confirmation} />
                                    )}
                                </div>

                                {/* Action */}
                                <div className="flex items-center justify-between pt-2">
                                    <Link
                                        href={route('login')}
                                        className="text-sm font-medium text-blue-600 hover:text-blue-500 hover:underline"
                                    >
                                        Sudah punya akun?
                                    </Link>

                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    >
                                        {processing ? 'Memproses...' : 'Daftar'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div
                    className="hidden min-h-screen bg-cover bg-center bg-no-repeat lg:flex"
                    style={{
                        backgroundImage: "url('/images/bg-login.webp')",
                    }}
                >
                    <div className="flex min-h-screen w-full items-center justify-center bg-blue-950/30 p-10">
                        <div className="max-w-lg text-center text-white">
                            <h2 className="text-4xl font-bold tracking-tight">Bergabung Bersama Kami</h2>

                            <p className="mt-4 text-blue-100">
                                Buat akun Anda dan nikmati pengalaman menggunakan sistem yang cepat, sederhana, dan
                                terintegrasi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

Register.layout = (page) => <GuestLayout children={page} title="Register" />;
