// src/components/FAQ.tsx
'use client';
import { useState } from 'react';

const faqs = [
  { question: 'What is Verachain?', answer: 'A trust-driven platform for verified contributions.' },
  { question: 'How does verification work?', answer: 'Projects are reviewed by trusted community members.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-gray-700 p-4 rounded">
          <button
            className="w-full text-left font-semibold"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {faq.question}
          </button>
          {openIndex === i && <p className="mt-2 text-gray-300">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}