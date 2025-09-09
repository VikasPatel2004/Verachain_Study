'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import SplitText from "@/components/SplitText";
import TiltedCard from '@/components/TiltedCard';
import TextType from '@/components/TextType';

const LightRays = dynamic(() => import('@/components/LightRays'), { ssr: false });

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

export default function HeroSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://as1.ftcdn.net/v2/jpg/06/27/37/36/1000_F_627373679_mBgmtPR5hGZnB53Kp4e0sxvPRAcIPnxC.jpg"
          alt="Supply Chain Risk Background"
          fill
          priority
          className="object-cover opacity-40"
        />
      </div>

      {/* Optional Light Rays Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LightRays raysColor="#ffffff" raysOrigin="top-center" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 text-center pt-20 space-y-10 px-4 md:px-12">
        {/* Animated Heading */}
        <SplitText
          text="WELCOME TO VERACHAIN!"
          className="text-5xl md:text-6xl font-bold text-blue-100"
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

        {/* Typing Text */}
        <div className="text-amber-300 text-3xl md:text-3xl">
          <TextType
            text={[
              "Detect supply chain risks in real time",
              "Empower decisions with trusted insights",
              "Verachain: resilience starts here!"
            ]}
            typingSpeed={100}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>

        {/* Tilted Cards with Buttons Below */}
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Supplier */}
          <div className="flex flex-col items-center space-y-4">
            <TiltedCard
              imageSrc="https://images.unsplash.com/photo-1714732227900-3e79c4fc3121?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              overlayContent={<p className="tilted-card-demo-text"></p>}
            />
            <button className="relative px-10 py-3 mb-4  text-sm font-medium text-blue-700 bg-blue-100 rounded-full overflow-hidden group shadow-md">
              <span className="absolute inset-0 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center rounded-full"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Supplier
              </span>
            </button>
          </div>

          {/* Customer */}
          <div className="flex flex-col items-center space-y-4">
            <TiltedCard
              imageSrc="https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              overlayContent={<p className="tilted-card-demo-text"></p>}
            />
            <button className="relative px-10 py-3 mb-4 text-sm font-medium text-green-700 bg-green-100 rounded-full overflow-hidden group shadow-md">
              <span className="absolute inset-0 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center rounded-full"></span>
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Customer
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}