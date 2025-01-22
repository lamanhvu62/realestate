'use client'

import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import { Close, Menu } from '@mui/icons-material'
import Link from 'next/link'

const menu = [
    { name: 'Dự án', href: '/du-an' },
    { name: 'Giới thiệu', href: '/gioi-thieu' },
    { name: 'Đối tác', href: '/doi-tac' },
    { name: 'Liên hệ', href: '/lien-he' },
]

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Land Finder</span>
                        <img
                            alt=""
                            src="https://firebasestorage.googleapis.com/v0/b/landfinder-95adb.firebasestorage.app/o/landfinder-logo.svg?alt=media&token=acfa7936-e6a9-4935-9c5f-29f35540e6c6"
                            width={90}
                            height={90}
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Menu className="size-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    {
                        menu.map((item, index) => {
                            return (
                                <Link key={index} href={item.href} className="text-sm/6 font-semibold text-gray-900">
                                    {item.name}
                                </Link>
                            )
                        })
                    }
                </PopoverGroup>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Land Finder</span>
                            <img
                                alt=""
                                src="https://firebasestorage.googleapis.com/v0/b/landfinder-95adb.firebasestorage.app/o/landfinder-logo.svg?alt=media&token=acfa7936-e6a9-4935-9c5f-29f35540e6c6"
                                width={90}
                                height={90}
                            />
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <Close aria-hidden="true" className="size-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Dự án
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Giới thiệu
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Đối tác
                                </Link>
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Liên hệ
                                </Link>
                            </div>
                            {/* <div className="py-6">
                                <Link
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    )
}
