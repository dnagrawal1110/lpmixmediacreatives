import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const steps = [
  { num: "01", icon: "💳", title: "PAY & BRIEF", day: "Day 0", desc: "Pay online → Fill 2-min intake form → Our Creative Strategist reviews your brand, product, and competitors" },
  { num: "02", icon: "🔍", title: "RESEARCH & BRIEF", day: "Day 1", desc: "We dig into Meta Ad Library, competitor hooks, top-performing angles for your category. Then write a production-ready creative brief." },
  { num: "03", icon: "🎬", title: "AI PRODUCTION", day: "Day 2–3", desc: "Our AI creators use Google Veo, Runway, and proprietary workflows to generate your videos. Editors QA every frame." },
  { num: "04", icon: "🚀", title: "DELIVER & SCALE", day: "Day 4", desc: "You receive final videos + performance predictions + a scale roadmap. Upload, test, scale winners." },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding">
      <SectionHeading label="THE PROCESS" title="FROM BRIEF TO DEPLOYED IN 4 DAYS" />
      <div className="max-w-5xl mx-auto relative">
        {/* Dotted line for desktop */}
        <div className="hidden lg:block absolute top-10 left-0 right-0 h-px border-t-2 border-dashed border-primary/30" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="relative bg-card border border-border rounded-lg p-6 overflow-hidden"
            >
              <span className="absolute -top-2 -right-2 font-heading text-7xl text-primary/10 leading-none select-none">
                {s.num}
              </span>
              <div className="text-2xl mb-3">{s.icon}</div>
              <span className="font-body text-xs text-primary font-medium">{s.day}</span>
              <h3 className="font-heading text-xl text-foreground mt-1 mb-2">{s.title}</h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed relative z-10">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="section-divider mt-20" />
    </section>
  );
}
