import Image from "next/image";
import { Button } from "./ui/button";
import { ModeToggle } from "@/app/modeToggle";

export default function NavBar() {
    return (
        <nav className="flex items-center justify-between p-4 bg-white shadow-md dark:bg-background border-b-2">
            <div className="flex items-center space-x-4">
                <Image src="/pencil.ico" alt="Logo" width={32} height={32} />
                <span className="text-2xl sm:text-sm font-bold text-gray-900 dark:text-white">MyApp</span>
            </div>
            <div className="flex items-center space-x-4">
                <Button>Login</Button>
                <Button variant="outline" className="hidden sm:inline-block">Signup</Button>
                <ModeToggle />
            </div>
        </nav>
    );
}
