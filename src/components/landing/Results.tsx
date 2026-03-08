import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const metrics = [
  { num: "3x", label: "Average ROAS improvement", sub: "Across Growth package clients" },
  { num: "45%", label: "Average hook rate", sub: "On top-performing AI videos" },
  { num: "4 Days", label: "Delivery SLA", sub: "Brief to final delivered files" },
  { num: "100+", label: "Brands served", sub: "D2C, wellness, fashion, beauty" },
  { num: "10x", label: "Creative output increase", sub: "vs traditional agencies" },
  { num: "80%", label: "First-pass QA rate", sub: "Quality without revisions" },
];

const testimonials = [
  {
    quote: "Mixed media delivered 20 creatives in 4 days. Our Meta ROAS went from 1.8x to 4.2x in 45 days.",
    author: "Skincare Brand Founder, Mumbai",
  },
  {
    quote: "Finally, a creative partner that thinks about performance, not just aesthetics. The variation testing framework is gold.",
    author: "D2C Wellness Brand, Bangalore",
  },
  {
    quote: "We went from 5 creatives/month to 60. Our CAC dropped 35% in 90 days.",
    author: "Supplements Brand Founder, Delhi",
  },
];

export default function Results() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="results" className="section-padding overflow-hidden">
      <SectionHeading label="PROOF" title="WHAT HAPPENS WHEN YOU TEST MORE CREATIVES" />

      <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, duration: 0.4 }}
            className="bg-card border border-border rounded-lg p-5 text-center"
          >
            <div className="font-stat font-bold text-3xl md:text-5xl text-primary">{m.num}</div>
            <div className="font-body text-foreground text-sm font-medium mt-2">{m.label}</div>
            <div className="font-body text-muted-foreground text-xs mt-1">{m.sub}</div>
          </motion.div>
        ))}
      </div>

      {/* Auto-rotating testimonial */}
      <div className="max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="bg-card border border-border border-l-4 border-l-primary rounded-lg p-6"
          >
            <p className="font-body text-foreground italic leading-relaxed text-sm md:text-base">"{testimonials[current].quote}"</p>
            <p className="font-body text-muted-foreground text-sm mt-4">— {testimonials[current].author}</p>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
}
