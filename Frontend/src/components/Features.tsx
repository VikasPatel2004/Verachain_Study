'use client';
import ProjectCard from '@/components/ProjectCard';
import FAQ from '@/components/Faq';
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'

export default function Features() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-black">
      <main className="space-y-15 px-4 md:px-12 ">


{/* Ultra stable ScrollStack with no shaking */}
<div className="w-full bg-gradient-to-b from-black via-gray-900 to-black">
  <ScrollStack 
    useWindowScroll={true}
    className="w-full min-h-screen"
    itemDistance={100}        // Increased for better spacing
    itemStackDistance={0}    // Balanced for smooth stacking
    stackPosition="25%"       // Stable trigger position
    scaleEndPosition="15%"    // Clear scale end
    baseScale={0.96}         // Less dramatic scaling
    itemScale={0.015}        // Smaller increments for smoothness
    rotationAmount={0}       // Removed rotation to eliminate jitter
    blurAmount={0}           // No blur for better performance
    onStackComplete={() => {
      console.log('Stack animation completed smoothly and stably');
    }}
  >
    <ScrollStackItem itemClassName="max-w-7xl mx-auto px-6">
      <div 
        className="bg-gradient-to-br from-cyan-50 to-blue-100 border border-cyan-200 rounded-2xl shadow-xl p-10 h-full flex flex-col justify-center"
        style={{
          // Stabilize content rendering
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        }}
      >
        <div className="flex items-center mb-6">
          <div className="w-4 h-4 bg-cyan-400 rounded-full mr-4 flex-shrink-0"></div>
          <h2 className="text-3xl font-bold text-cyan-800 tracking-wide">🔐 Trust Token</h2>
        </div>
        <p className="text-lg text-cyan-700 leading-relaxed">
          Empower your platform with verified contributions. Verachain's trust token ensures transparency and accountability across the supply chain.
        </p>
        <div className="mt-8 w-16 h-1 bg-cyan-400 rounded-full"></div>
      </div>
    </ScrollStackItem>
           
    <ScrollStackItem itemClassName="max-w-7xl mx-auto px-6">
      <div 
        className="bg-gradient-to-br from-purple-50 to-indigo-100 border border-purple-200 rounded-2xl shadow-xl p-10 h-full flex flex-col justify-center"
        style={{
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        }}
      >
        <div className="flex items-center mb-6">
          <div className="w-4 h-4 bg-purple-400 rounded-full mr-4 flex-shrink-0"></div>
          <h2 className="text-3xl font-bold text-purple-800 tracking-wide">🧬 Secure Identity</h2>
        </div>
        <p className="text-lg text-purple-700 leading-relaxed">
          Blockchain-backed identity verification that protects user data and builds trust. No more guesswork—just secure, decentralized credentials.
        </p>
        <div className="mt-8 w-16 h-1 bg-purple-400 rounded-full"></div>
      </div>
    </ScrollStackItem>
           
    <ScrollStackItem itemClassName="max-w-7xl mx-auto px-6">
      <div 
        className="bg-gradient-to-br from-emerald-50 to-green-100 border border-emerald-200 rounded-2xl shadow-xl p-10 h-full flex flex-col justify-center"
        style={{
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        }}
      >
        <div className="flex items-center mb-6">
          <div className="w-4 h-4 bg-emerald-400 rounded-full mr-4 flex-shrink-0"></div>
          <h2 className="text-3xl font-bold text-emerald-800 tracking-wide">📊 Open Verification</h2>
        </div>
        <p className="text-lg text-emerald-700 leading-relaxed">
          Transparent workflows and real-time audit trails. Verachain makes verification seamless, scalable, and visible to all stakeholders.
        </p>
        <div className="mt-8 w-16 h-1 bg-emerald-400 rounded-full"></div>
      </div>
    </ScrollStackItem>

    <ScrollStackItem itemClassName="max-w-7xl mx-auto px-6">
      <div 
        className="bg-gradient-to-br from-orange-50 to-amber-100 border border-orange-200 rounded-2xl shadow-xl p-10 h-full flex flex-col justify-center"
        style={{
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        }}
      >
        <div className="flex items-center mb-6">
          <div className="w-4 h-4 bg-orange-400 rounded-full mr-4 flex-shrink-0"></div>
          <h2 className="text-3xl font-bold text-orange-800 tracking-wide">🚀 Smart Contracts</h2>
        </div>
        <p className="text-lg text-orange-700 leading-relaxed">
          Automated execution and self-enforcing agreements. Our smart contracts eliminate intermediaries and reduce costs while ensuring compliance.
        </p>
        <div className="mt-8 w-16 h-1 bg-orange-400 rounded-full"></div>
      </div>
    </ScrollStackItem>

    <ScrollStackItem itemClassName="max-w-7xl mx-auto px-6">
      <div 
        className="bg-gradient-to-br from-rose-50 to-pink-100 border border-rose-200 rounded-2xl shadow-xl p-10 h-full flex flex-col justify-center"
        style={{
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          textRendering: 'optimizeLegibility',
        }}
      >
        <div className="flex items-center mb-6">
          <div className="w-4 h-4 bg-rose-400 rounded-full mr-4 flex-shrink-0"></div>
          <h2 className="text-3xl font-bold text-rose-800 tracking-wide">🌐 Global Network</h2>
        </div>
        <p className="text-lg text-rose-700 leading-relaxed">
          Connect with partners worldwide through our decentralized network. Scale globally while maintaining local trust and compliance standards.
        </p>
        <div className="mt-8 w-16 h-1 bg-rose-400 rounded-full"></div>
      </div>
    </ScrollStackItem>
  </ScrollStack>
</div>

        {/* Project Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectCard title="Trust Token" description="Verified by community" />
          <ProjectCard title="Secure Identity" description="Blockchain-backed ID" />
          <ProjectCard title="Open Verification" description="Transparent workflows" />
        </section>

        {/* FAQ Section */}
        <section>
          <FAQ />
        </section>

      </main>
    </div>
  );
}