"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the Consolidated Risk Score?",
    answer:
      "It's a single, weighted percentage that combines supplier reliability, real-time weather conditions, and news data to give you a clear, actionable risk assessment for your transportation route.",
  },
  {
    question: "How does VeraChain analyze supplier reliability?",
    answer:
      "We use advanced AI models to analyze thousands of supplier reviews and ratings from various sources, generating a reliability score that helps you choose the most dependable partners.",
  },
  {
    question: "What kind of real-time data is monitored?",
    answer:
      "Our system continuously monitors live data from trusted Weather and News APIs. This includes tracking storms, road accidents, traffic congestion, local strikes, and other events that could impact your shipment.",
  },
  {
    question: "Is the platform easy to integrate with our existing systems?",
    answer:
      "Yes, VeraChain is designed with a flexible API for easy integration into your existing logistics and supply chain management software.",
  },
  {
    question: "How accurate are the risk predictions?",
    answer:
      "Our AI models achieve over 92% accuracy in predicting potential delays and disruptions, helping you make informed decisions about your logistics operations.",
  },
  {
    question: "What industries benefit most from VeraChain?",
    answer:
      "Manufacturing, retail, e-commerce, food and beverage, pharmaceuticals, and any business that relies on timely land transportation for their supply chain operations.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-gradient-to-br from-black via-neutral-950 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
            <HelpCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-amber-50">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            Everything you need to know about VeraChain and how it transforms
            your logistics operations
          </p>
        </motion.div>

        {/* FAQ list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-xl shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between px-6 py-4 text-left text-white font-medium"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 ml-2 text-primary transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-gray-400 border-l-2 border-primary/30 ml-4">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Still have questions?
            </h3>
            <p className="text-gray-300 mb-6">
              Our team is ready to help you understand how VeraChain can
              transform your logistics operations.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-md transition"
            >
              Contact Our Team
              <ChevronDown className="w-4 h-4 ml-2 transform rotate-270" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ✅ Default export so you can import directly
export default Faq;
