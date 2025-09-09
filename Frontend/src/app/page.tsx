// src/app/page.tsx
'use client';
import FAQ from '@/components/Faq';
// import SplitText from "@/components/SplitText";
// import ChromaGrid from './ChromaGrid';
// import TiltedCard from '@/components/TiltedCard';
// import TextType from '@/components/TextType';
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
       <main className="flex flex-col items-center justify-center">
      <HeroSection />
      <Features />
      <FAQ />
      {/* <Footer /> */}
    </main>


      
    </div>
  );
}