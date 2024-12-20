"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "@/app/modeToggle";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-background border-b-2">
            <div className="flex items-center space-x-4">
                <Image src="/pencil.ico" alt="logo" width={32} height={32} />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">Journal</span>
            </div>

            {/* Breadcrumb Button*/}
            <div className="sm:hidden">
                <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                >
                <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    {isOpen ? (
                    <path
                        fillRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 1 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                    />
                    ) : (
                    <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                    />
                    )}
                </svg>
                </button>
            </div>

            {/* Main Navigation and Buttons */}
            <div
                className={`absolute top-16 left-0 w-full bg-white dark:bg-background shadow-md sm:relative sm:top-0 sm:left-0 sm:w-auto sm:bg-transparent sm:shadow-none flex flex-col sm:flex-row items-center sm:space-x-4 space-y-2 sm:space-y-0 transition-all duration-300 ${
                isOpen ? "block" : "hidden sm:flex"
                }`}
            >
                <Button className="w-full sm:w-auto">Login</Button>
                <Button variant="outline" className="w-full sm:w-auto">
                Signup
                </Button>
                <ModeToggle />
            </div>
        </nav>
    );
}
