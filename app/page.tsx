"use client";
// Import necessary libraries
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function LandingPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-background text-foreground">
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-grid-pattern pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Hero Section */}
      <motion.div
        className="text-center h-screen flex flex-col justify-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold tracking-tight mb-6">
          Simplify Your Notes
        </h1>
        <p className="text-lg mb-8">
          Organize, access, and manage your notes from anywhere, anytime.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button className="bg-primary text-primary-foreground">Get Started</Button>
          <Button variant="outline">Learn More</Button>
        </div>
      </motion.div>

      {/* Features Section */}
      <motion.section
        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <FeatureCard
          title="Cloud Sync"
          description="Sync your notes across all your devices effortlessly."
          icon="/images/cloud-icon.svg"
        />
        <FeatureCard
          title="Secure Storage"
          description="Keep your notes safe with end-to-end encryption."
          icon="/images/security-icon.svg"
        />
        <FeatureCard
          title="Easy Organization"
          description="Tag and categorize your notes for quick access."
          icon="/images/organize-icon.svg"
        />
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.div
        className="mt-20 text-center bg-card py-12 px-6 rounded-md shadow-lg w-full max-w-4xl border border-border"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Simplify Your Life?
        </h2>
        <p className="mb-6">
          Join thousands of users who are taking control of their productivity with Notes WebApp.
        </p>
        <Button className="bg-primary text-primary-foreground">Sign Up Now</Button>
      </motion.div>
    </main>
  );
}

// Feature Card Component
function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="flex flex-col items-center text-center bg-card shadow-md rounded-md p-6 border border-border hover:shadow-lg transition">
      <Image src={icon} alt={`${title} icon`} width={50} height={50} />
      <h3 className="text-xl font-semibold mt-4 text-primary">
        {title}
      </h3>
      <p className="mt-2 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}