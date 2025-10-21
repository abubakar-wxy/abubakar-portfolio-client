"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const navItems = (
        <>
            <li>
                <Link href="/" className="text-base-content">
                    Home
                </Link>
            </li>
            <li>
                <Link href="/about" className="text-base-content">
                    About
                </Link>
            </li>
            <li>
                <Link href="/services" className="text-base-content">
                    Services
                </Link>
            </li>
            <li>
                <Link href="/contact" className="text-base-content">
                    Contact
                </Link>
            </li>
        </>
    );

    return (
        <div className="">
            <div className="bg-base-100 shadow-sm">
                <div className="navbar container mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <button
                                tabIndex={0}
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </button>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <Link href="/" className="ml-3 flex items-center gap-2">
                            <Image
                                src="/images/navLogo-darkMood.png"
                                alt="Logo"
                                width={160}
                                height={40}
                                className="rounded-lg"
                            />
                        </Link>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
