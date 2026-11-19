import HeaderTitle from '@/Components/HeaderTitle';
import InputError from '@/Components/InputError';
import { Button } from '@/Components/ui/button';
import { Card, CardContent } from '@/Components/ui/card';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import AppLayout from '@/Layouts/AppLayout';
import { flashMessage } from '@/lib/utils';
import { Link, useForm } from '@inertiajs/react';
import { IconArrowLeft, IconBuildingSkyscraper, IconDeviceFloppy, IconUpload } from '@tabler/icons-react';
import { toast } from 'sonner';

export default function Create(props) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        logo: null,
        _method: props.page_settings.method,
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(props.page_settings.action, {
            forceFormData: true,
            preserveState: true,
            preserveScroll: true,
            onSuccess: (success) => {
                const flash = flashMessage(success);
                if (flash) toast[flash.type](flash.message);
            },
        });
    };

    return (
        <div className="flex w-full flex-col gap-6 pb-32">
            {/* Header */}
            <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <HeaderTitle
                    title={props.page_settings.title}
                    subtitle={props.page_settings.subtitle}
                    icon={IconBuildingSkyscraper}
                />

                <Button
                    variant="blue"
                    size="lg"
                    className="w-full lg:w-auto"
                    render={<Link href={route('admin.faculties.index')} />}
                >
                    <IconArrowLeft className="size-4" />
                    Kembali
                </Button>
            </div>

            {/* Form */}
            <Card className="border shadow-sm">
                <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="border-b pb-4">
                            <h3 className="text-base font-semibold text-gray-900">Informasi Fakultas</h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Lengkapi informasi fakultas yang akan ditambahkan.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                            {/* Nama Fakultas */}
                            <div className="space-y-2">
                                <Label htmlFor="name">
                                    Nama Fakultas
                                    <span className="ml-1 text-red-500">*</span>
                                </Label>

                                <Input
                                    id="name"
                                    type="text"
                                    name="name"
                                    placeholder="Contoh: Fakultas Teknik"
                                    value={data.name}
                                    onChange={(e) => setData('name', e.target.value)}
                                />

                                {errors.name && <InputError message={errors.name} />}
                            </div>

                            {/* Logo Fakultas */}
                            <div className="space-y-2">
                                <Label htmlFor="logo">Logo Fakultas</Label>

                                <div className="relative">
                                    <Input
                                        id="logo"
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => setData('logo', e.target.files[0])}
                                        className="cursor-pointer file:mr-3 file:rounded-md file:border-0 file:bg-blue-50 file:px-3 file:py-1 file:text-sm file:font-medium file:text-blue-700"
                                    />
                                </div>

                                {errors.logo && <InputError message={errors.logo} />}
                                <p className="text-xs text-muted-foreground">Format gambar JPG, PNG, atau WEBP.</p>
                            </div>
                        </div>

                        {/* Action */}
                        <div className="flex flex-col-reverse justify-end gap-3 border-t pt-5 sm:flex-row">
                            <Button
                                type="button"
                                variant="outline"
                                className="w-full sm:w-auto"
                                render={<Link href={route('admin.faculties.index')} />}
                            >
                                Batal
                            </Button>

                            <Button type="submit" variant="blue" disabled={processing} className="w-full sm:w-auto">
                                <IconDeviceFloppy className="size-4" />
                                {processing ? 'Menyimpan...' : 'Simpan'}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

Create.layout = (page) => <AppLayout title={page.props.page_settings.title} children={page} />;
