import ApplicationLogo from '@/Components/ApplicationLogo';
import NavigationMenu from '@/Components/NavigationMenu';
import { Avatar, AvatarFallback } from '@/Components/ui/avatar';
import { Button } from '@/Components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/Components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Disclosure } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/react';
import { IconChevronCompactDown, IconLayoutSidebar, IconLogout2, IconX } from '@tabler/icons-react';

export default function HeaderStudentLayout({ url }) {
    const auth = usePage().props.auth.user;
    console.log(auth);
    

    return (
        <>
            <Disclosure
                as="nav"
                className="border-blue-300/25 bg-linear-to-r from-blue-500 via-blue-600 to-blue-700 py-4 lg:border-none"
            >
                {({ open }) => (
                    <>
                        <div className="px-6 lg:px-24">
                            <div className="relative flex h-16 items-center justify-between">
                                {/* Logo */}
                                <div className="flex items-center">
                                    <ApplicationLogo
                                        bgLogo="from-orange-500 via-orange-600 to-orange-600"
                                        colorLogo="text-white"
                                        colorText="text-white"
                                    />
                                </div>

                                {/* Mobile Button */}
                                <div className="flex lg:hidden">
                                    <Disclosure.Button
                                        aria-label="Toggle navigation"
                                        className="relative inline-flex items-center justify-center rounded-xl p-2 text-white transition hover:bg-white/10 focus:outline-none"
                                    >
                                        {open ? <IconX className="size-6" /> : <IconLayoutSidebar className="size-6" />}
                                    </Disclosure.Button>
                                </div>

                                {/* Desktop Navigation */}
                                <div className="hidden lg:block">
                                    <div className="flex items-center gap-6">
                                        {/* Navigation */}
                                        <div className="flex items-center gap-2">
                                            <NavigationMenu
                                                url="#"
                                                active={url.startsWith('students/dashboard')}
                                                title="Dashboard"
                                            />

                                            <NavigationMenu
                                                url="#"
                                                active={url.startsWith('students/schedules')}
                                                title="Jadwal"
                                            />

                                            <NavigationMenu
                                                url="#"
                                                active={url.startsWith('students/study-plans')}
                                                title="Kartu Rencana Studi"
                                            />

                                            <NavigationMenu
                                                url="#"
                                                active={url.startsWith('students/study-results')}
                                                title="Kartu Hasil Studi"
                                            />

                                            <NavigationMenu
                                                url="#"
                                                active={url.startsWith('students/fees')}
                                                title="Pembayaran"
                                            />
                                        </div>

                                        {/* Profile Dropdown */}
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button
                                                    variant="blue"
                                                    size="xl"
                                                    className="gap-3 data-[state=open]:bg-orange-500 data-[state=open]:text-white"
                                                >
                                                    <Avatar className="size-8 rounded-lg">
                                                        <AvatarFallback className="rounded-lg text-blue-600">
                                                            MI
                                                        </AvatarFallback>
                                                    </Avatar>

                                                    <div className="grid min-w-0 flex-1 text-left leading-tight">
                                                        <span className="truncate text-sm font-semibold">
                                                            {auth.name}
                                                        </span>

                                                        <span className="truncate text-xs">{auth.email}</span>
                                                    </div>

                                                    <IconChevronCompactDown className="size-4 shrink-0" />
                                                </Button>
                                            </DropdownMenuTrigger>

                                            <DropdownMenuContent
                                                align="end"
                                                side="bottom"
                                                sideOffset={6}
                                                className="min-w-64 rounded-xl"
                                            >
                                                <DropdownMenuGroup>
                                                    {/* User Information */}
                                                    <DropdownMenuLabel className="p-0">
                                                        <div className="flex items-center gap-3 px-2 py-2.5">
                                                            <Avatar className="size-10 rounded-lg">
                                                                <AvatarFallback className="rounded-lg text-blue-600">
                                                                    MI
                                                                </AvatarFallback>
                                                            </Avatar>

                                                            <div className="grid min-w-0 flex-1 text-left leading-tight">
                                                                <span className="truncate text-sm font-semibold text-foreground">
                                                                    {auth.name}
                                                                </span>

                                                                <span className="truncate text-xs text-muted-foreground">
                                                                    {auth.email}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </DropdownMenuLabel>

                                                    <DropdownMenuSeparator />

                                                    {/* Logout */}
                                                    <DropdownMenuItem asChild className="cursor-pointer">
                                                        <Link
                                                            href={route('logout')}
                                                            method="post"
                                                            as="button"
                                                            className="flex w-full items-center gap-2"
                                                        >
                                                            <IconLogout2 className="size-4" />
                                                            <span>Logout</span>
                                                        </Link>
                                                    </DropdownMenuItem>
                                                </DropdownMenuGroup>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith('students/dashboard')
                                            ? 'bg-blue-500 text-white'
                                            : 'text-white hover:bg-blue-500',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    Dashboard
                                </Disclosure.Button>
                            </div>
                        </Disclosure.Panel>
                        <Disclosure.Panel className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith('students/schedules')
                                            ? 'bg-blue-500 text-white'
                                            : 'text-white hover:bg-blue-500',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    Jadwal
                                </Disclosure.Button>
                            </div>
                        </Disclosure.Panel>
                        <Disclosure.Panel className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith('students/study-plans')
                                            ? 'bg-blue-500 text-white'
                                            : 'text-white hover:bg-blue-500',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    Kartu Rencana Studi
                                </Disclosure.Button>
                            </div>
                        </Disclosure.Panel>
                        <Disclosure.Panel className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith('students/study-results')
                                            ? 'bg-blue-500 text-white'
                                            : 'text-white hover:bg-blue-500',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    Kartu Hasil Studi
                                </Disclosure.Button>
                            </div>
                        </Disclosure.Panel>
                        <Disclosure.Panel className="lg:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className={cn(
                                        url.startsWith('students/fees')
                                            ? 'bg-blue-500 text-white'
                                            : 'text-white hover:bg-blue-500',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                >
                                    Pembayaran
                                </Disclosure.Button>
                            </div>
                            <div className="pt-4 pb-3">
                                <div className="flex items-center px-5">
                                    <div className="shrink-0">
                                        <Avatar>
                                            <AvatarFallback>x</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium text-white">{auth.name}</div>
                                        <div className="text-sm font-medium text-white">{auth.email}</div>
                                    </div>
                                </div>
                                <div className="px-2 mt-3 space-y-1.5">
                                    <Link
                                        href={route('logout')}
                                        method="post"
                                        as="button"
                                        className="block w-full px-3 py-2 text-left text-base font-medium text-white rounded-md hover:bg-blue-500"
                                    >
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <header className="py-6 "></header>
        </>
    );
}
