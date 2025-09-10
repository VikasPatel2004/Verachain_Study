// src/app/page.tsx
'use client';
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import { Faq } from '@/components/Faq'
import TestimonialsSection from '@/components/TestimonialSection'  // ✅ default import

export default function HomePage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <Features />
        <TestimonialsSection />   {/* ✅ spelling fixed */}
        <Faq />
        {/* <Footer /> */}
      </main>
    </div>
  );
}
