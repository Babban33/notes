"use client";
import { motion } from 'framer-motion';
import { Cloud, Lock, Folder, ShieldCheck, Smile, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FeatureCard } from '../components/FeatureCard';

export default function LandingPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-background text-foreground mb-16">
      {/* Hero Section */}
      <motion.div
        className="text-center h-screen flex flex-col justify-center -mt-[52px]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
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
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
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
        </motion.div>
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

