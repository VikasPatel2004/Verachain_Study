"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Clock, ArrowRight } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Supplier Vetting",
    description:
      "Analyze supplier reviews and ratings using AI to determine reliability and ensure you work with the best.",
    gradient: "from-blue-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Consolidated Risk Score",
    description:
      "We combine supplier, weather, and news data into a single, weighted percentage for clear, actionable insights.",
    gradient: "from-green-500 to-teal-600",
  },
  {
    icon: Clock,
    title: "Real-Time Monitoring",
    description:
      "Gather live data from weather and news APIs to assess route-specific risks like storms, accidents, or strikes.",
    gradient: "from-orange-500 to-red-600",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="features"
      className="py-20 md:py-28 bg-gradient-to-br from-neutral-950 to-black"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-amber-50">
            Why Choose VeraChain?
          </h2>
          <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-300">
            Our AI-powered platform transforms complex logistics data into
            simple, actionable insights.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative group rounded-2xl p-8 bg-neutral-900/80 border border-neutral-800 backdrop-blur-md transition-all duration-500 hover:shadow-xl hover:shadow-primary/20"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="mb-6 relative z-10 bg-gradient-to-br from-primary/30 to-primary/10 p-4 rounded-2xl w-16 h-16 flex items-center justify-center"
                >
                  <Icon className="w-10 h-10 text-primary" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-400 leading-relaxed mb-6 relative z-10">
                  {feature.description}
                </p>

                {/* Learn More */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className="flex items-center text-primary font-semibold text-sm relative z-10"
                >
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
