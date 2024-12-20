"use client";
import { JSX } from 'react/jsx-runtime';

export function FeatureCard({ title, description, icon }: { title: string; description: string; icon: JSX.Element; }) {
  return (
    <div className="flex flex-col items-center text-center bg-card shadow-md rounded-md p-6 border border-border hover:shadow-lg transition">
      {icon}
      <h3 className="text-xl font-semibold mt-4 text-primary">
        {title}
      </h3>
      <p className="mt-2 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
