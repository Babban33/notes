"use client";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., API calls)
        console.log('Form submitted:', formData);
    };

    return (
        <main className="flex items-center justify-center min-h-screen px-4 bg-background text-foreground">
        <Card className="w-full max-w-md border border-border shadow-lg">
            <CardHeader>
            <CardTitle className="text-center text-2xl font-bold">Log In</CardTitle>
            <p className="text-sm text-center text-muted-foreground">
                Don&apos;t have an account? <a href="/signup" className="text-primary">Sign Up</a>
            </p>
            </CardHeader>

            <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Field */}
                <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                </div>

                {/* Password Field */}
                <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                </div>

                {/* Submit Button */}
                <Button className="w-full bg-primary text-primary-foreground" type="submit">
                Log In
                </Button>
            </form>

            {/* Social Sign-In Buttons */}
            <div className="mt-4 space-y-2">
                <p className="text-center text-sm text-muted-foreground">OR<br />Continue with</p>
                <Button className="w-full bg-blue-600 text-white" onClick={() => console.log('Google Sign In')}>
                Sign in with Google
                </Button>
                <Button className="w-full bg-gray-800 text-white" onClick={() => console.log('GitHub Sign In')}>
                Sign in with GitHub
                </Button>
                <Button className="w-full bg-blue-500 text-white" onClick={() => console.log('Microsoft Sign In')}>
                Sign in with Microsoft
                </Button>
            </div>
            </CardContent>

            <CardFooter className="text-center">
            {/* Empty footer for consistency in layout */}
            </CardFooter>
        </Card>
        </main>
    );
}