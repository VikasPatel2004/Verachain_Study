"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "VeraChain has completely transformed our logistics operations. The AI-powered risk assessment helped us avoid a major supply chain disruption during the recent port strikes. We've reduced delivery delays by 45% in just 3 months.",
    name: "Sarah Chen",
    title: "Chief Operations Officer",
    company: "Global Logistics Inc.",
    rating: 5,
    image: "/consumer.jpg",
  },
  {
    quote:
      "As a logistics manager, I've never had access to such comprehensive risk data. The consolidated risk score gives me confidence in every shipping decision. Our on-time delivery rate has improved from 78% to 94% since implementation.",
    name: "Michael Rodriguez",
    title: "Logistics Director",
    company: "TechSupply Chain",
    rating: 5,
    image: "/supplier.jpg",
  },
  {
    quote:
      "The real-time monitoring feature is incredible. We were able to reroute shipments during unexpected weather events, saving thousands in potential losses. VeraChain pays for itself many times over.",
    name: "Emily Johnson",
    title: "Supply Chain Manager",
    company: "FreshGoods Market",
    rating: 5,
    image: "/consumer.jpg",
  },
  {
    quote:
      "The supplier vetting system is exceptional. We've eliminated unreliable partners and built relationships with top-performing carriers, improving our overall supply chain efficiency by 30%.",
    name: "David Kim",
    title: "Procurement Manager",
    company: "Retail Giant Corp",
    rating: 5,
    image: "/supplier.jpg",
  },
  {
    quote:
      "VeraChain's predictive analytics helped us anticipate market changes and adjust our logistics strategy accordingly. This proactive approach has been a game-changer for our business.",
    name: "Lisa Wang",
    title: "Operations Director",
    company: "E-Commerce Solutions",
    rating: 5,
    image: "/consumer.jpg",
  },
  {
    quote:
      "The integration was seamless and the results were immediate. We now have complete visibility into our supply chain risks and can make data-driven decisions with confidence.",
    name: "Robert Thompson",
    title: "Supply Chain Director",
    company: "Manufacturing Corp",
    rating: 5,
    image: "/supplier.jpg",
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % testimonials.length),
      5000 // Auto-slide every 5s
    );
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-secondary/10 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-amber-50"
        >
          Trusted by Industry Leaders
        </motion.h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
          See what logistics professionals are saying about their experience
          with VeraChain
        </p>

        {/* Testimonial Slider */}
        <div className="relative mt-16 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-background/70 backdrop-blur-md rounded-2xl p-10 shadow-xl border border-primary/10"
            >
              {/* Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl text-foreground leading-relaxed mb-6">
                “{testimonial.quote}”
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col items-center">
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/20 mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.title}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-primary scale-110" : "bg-primary/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
