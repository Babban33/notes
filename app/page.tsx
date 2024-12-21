"use client";
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import CallAction from './CallAction';

export default function LandingPage() {
  return (
    <div className="bg-background text-foreground">
      <HeroSection/>
      <FeatureSection/>
      <CallAction/>
    </div>
  );
}