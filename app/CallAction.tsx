import { Button } from "@/components/ui/button";

export default function CallAction() {
    return(
        <div className="mt-20 text-center bg-card py-12 px-6 rounded-md shadow-lg w-full max-w-4xl border border-border">
            <h2 className="text-3xl font-semibold mb-4">
                Ready to Simplify Your Life?
            </h2>
            <p className="mb-6">
                Join thousands of users who are taking control of their productivity with Notes WebApp.
            </p>
            <Button className="bg-primary text-primary-foreground">Sign Up Now</Button>
        </div>
    );
}
