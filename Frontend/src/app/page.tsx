// src/app/page.tsx
'use client';
import dynamic from 'next/dynamic';
import ProjectCard from '@/components/ProjectCard';
import FAQ from '@/components/Faq';

const LightRays = dynamic(() => import('@/components/LightRays'), { ssr: false });

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightRays raysColor="#00ffff" raysOrigin="top-center" />
      </div>

      <div className="relative z-10 p-8 space-y-12">
        <h1 className="text-4xl font-bold text-center">Welcome to Verachain</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard title="Trust Token" description="Verified by community" />
          <ProjectCard title="Secure Identity" description="Blockchain-backed ID" />
          <ProjectCard title="Open Verification" description="Transparent workflows" />
        </div>
        <FAQ />
      </div>
    </div>
  );
}