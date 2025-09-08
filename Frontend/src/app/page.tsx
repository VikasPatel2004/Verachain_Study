// src/app/page.tsx
'use client';
import dynamic from 'next/dynamic';
import ProjectCard from '@/components/ProjectCard';
import FAQ from '@/components/Faq';
import SplitText from "@/components/SplitText";
// import ChromaGrid from './ChromaGrid';
import TiltedCard from '@/components/TiltedCard';
import TextType from '@/components/TextType';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'


const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};


const LightRays = dynamic(() => import('@/components/LightRays'), { ssr: false });

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LightRays raysColor="#ffffff" raysOrigin="top-center" />
      </div>

      <div className="relative text-center text-cyan-100 z-10 pt-25 space-y-12">
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
<div className = "text-center text-amber-300 text-3xl">
  <TextType 
  text={["Detect supply chain risks in real time", "Empower decisions with trusted insights", "Verachain: resilience starts here!"]}
  typingSpeed={100}
  pauseDuration={1500}
  showCursor={true}
  cursorCharacter="|"
/>
</div>

<div className="flex flex-wrap gap-4 justify-center items-center">
  <TiltedCard
    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
    altText="Supplier"
    captionText="Supplier"
    containerHeight="400px"
    containerWidth="500px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        
      </p>
    }
  />

  <TiltedCard
    imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
    altText="Customer"
    captionText="Customer"
    containerHeight="400px"
    containerWidth="500px"
    imageHeight="300px"
    imageWidth="300px"
    rotateAmplitude={12}
    scaleOnHover={1.2}
    showMobileWarning={false}
    showTooltip={true}
    displayOverlayContent={true}
    overlayContent={
      <p className="tilted-card-demo-text">
        
      </p>
    }
  />

</div>

<div className="min-h-[600px] bg-gray-100 p-10"> <ScrollStack>
  <ScrollStackItem>
    <h2>Card 1</h2>
    <p>This is the first card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 2</h2>
    <p>This is the second card in the stack</p>
  </ScrollStackItem>
  <ScrollStackItem>
    <h2>Card 3</h2>
    <p>This is the third card in the stack</p>
  </ScrollStackItem>
</ScrollStack>
</div>
  

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