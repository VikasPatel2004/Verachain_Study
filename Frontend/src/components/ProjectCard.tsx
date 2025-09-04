// src/components/ProjectCard.tsx
'use client';
export default function ProjectCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}