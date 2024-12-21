import { FeatureCard } from "@/components/FeatureCard";
import { Cloud, Folder, Lock } from "lucide-react";

export default function FeatureSection() {
    return(
        <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            <FeatureCard
                title="Cloud Sync"
                description="Sync your notes across all your devices effortlessly."
                icon={<Cloud size={50} className="text-primary" />}
            />
            <FeatureCard
                title="Secure Storage"
                description="Keep your notes safe with end-to-end encryption."
                icon={<Lock size={50} className="text-primary" />}
            />
            <FeatureCard
                title="Easy Organization"
                description="Tag and categorize your notes for quick access."
                icon={<Folder size={50} className="text-primary" />}
            />
        </section>
    );
}