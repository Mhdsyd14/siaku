import ApplicationLogo from '@/Components/ApplicationLogo';
import InputError from '@/Components/InputError';
import { Alert, AlertDescription } from '@/Components/ui/alert';
import { Button } from '@/Components/ui/button';
import { Checkbox } from '@/Components/ui/checkbox';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import GuestLayout from '@/Layouts/GuestLayout';
import { useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const onHandleSubmit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
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
                        <div className="space-y-3 text-center">
                            {status && (
                                <Alert variant="success">
                                    <AlertDescription>{status}</AlertDescription>
                                </Alert>
                            )}

                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tight text-foreground">Masuk</h1>

                                <p className="text-sm text-muted-foreground">
                                    Masukkan email dan password Anda untuk masuk ke akun Anda.
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={onHandleSubmit} className="space-y-6">
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
                                    onChange={(e) => setData(e.target.name, e.target.value)}
                                    className="h-10"
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
                                    autoComplete="current-password"
                                    placeholder="Masukkan password"
                                    onChange={(e) => setData(e.target.name, e.target.value)}
                                    className="h-10"
                                />

                                {errors.password && <InputError message={errors.password} />}
                            </div>

                            {/* Remember & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        id="remember"
                                        name="remember"
                                        checked={data.remember}
                                        onCheckedChange={(checked) => setData('remember', checked)}
                                    />

                                    <Label htmlFor="remember" className="cursor-pointer text-sm font-normal">
                                        Ingat saya
                                    </Label>
                                </div>
                            </div>

                            {/* Submit */}
                            <Button
                                type="submit"
                                size="xl"
                                disabled={processing}
                                className="w-full rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                {processing ? 'Memproses...' : 'Masuk'}
                            </Button>
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
                <div className="flex min-h-screen w-full items-center justify-center bg-blue-950/60 p-10">
                    <div className="max-w-lg text-center text-white">
                        <h2 className="text-4xl font-bold tracking-tight">Selamat Datang</h2>

                        <p className="mt-4 text-blue-100">
                            Kelola aktivitas Anda dengan mudah melalui sistem yang cepat, sederhana, dan terintegrasi.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

Login.layout = (page) => <GuestLayout children={page} title="Login" />;
