import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "@/app/modeToggle";
import Link from "next/link";
export default function NavBar() {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-md dark:bg-background border-b-2 z-50">
            <div className="flex items-center justify-between p-4 max-w-6xl w-full mx-auto">
                <div className="flex items-center space-x-4">
                    <Image src="/pencil.ico" alt="Logo" width={32} height={32} />
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">Notes</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Link href="/login">
                        <Button>Login</Button>
                    </Link>
                    <Link href="/signup">
                        <Button variant="outline" className="hidden sm:inline-block">Signup</Button>
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
}