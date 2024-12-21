"use client";
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import CallAction from './CallAction';

export default function LandingPage() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-background text-foreground">
      {/* Background Grid */}
      <div
        className="absolute inset-0 bg-grid-pattern pointer-events-none"
        aria-hidden="true"
      ></div>
      <HeroSection/>
      <FeatureSection/>
      <CallAction/>
    </main>
  );
}