import { Button } from "@/components/ui/button";
import { Key, ShieldCheck, Smile } from "lucide-react";

export default function HeroSection() {
    return(
        <div className="text-center h-screen flex flex-col justify-center">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">
                Simplify Your Notes
            </h1>
            <p className="text-lg mb-8">
                Organize, access, and manage your notes from anywhere, anytime.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-primary text-primary-foreground">Get Started</Button>
                <Button variant="outline">Learn More</Button>
            </div>
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-center">
                <div className="flex flex-col items-center">
                    <ShieldCheck size={40} className="text-primary" />
                    <p className="mt-2 text-muted-foreground">Enhanced Privacy</p>
                </div>
                <div className="flex flex-col items-center">
                    <Smile size={40} className="text-primary" />
                    <p className="mt-2 text-muted-foreground">User Comfort</p>
                </div>
                <div className="flex flex-col items-center">
                    <Key size={40} className="text-primary" />
                    <p className="mt-2 text-muted-foreground">Secure Access</p>
                </div>
            </div>
        </div>
    );
}
