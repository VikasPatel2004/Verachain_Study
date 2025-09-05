// src/app/page.tsx
'use client';
import dynamic from 'next/dynamic';
import ProjectCard from '@/components/ProjectCard';
import FAQ from '@/components/Faq';
import SplitText from "@/components/SplitText";
import ChromaGrid from './ChromaGrid'

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


const LightRays = dynamic(() => import('@/components/LightRays'), { ssr: false });

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightRays raysColor="#00ffff" raysOrigin="top-center" />
      </div>

      <div className="relative text-center z-10 pt-35 space-y-12">
       <SplitText
  text=" WELCOME TO VERACHAIN !"
  className="text-6xl font-semibold text-center"
  delay={50}
  duration={0.4}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>

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