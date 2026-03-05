import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const pains = [
  "Running the same 3–5 ads for months",
  "Agency takes 3 weeks and charges ₹30k per video",
  "Can't scale ad spend without creative burning out",
  "ROAS tanks after week 2. Every. Single. Time.",
  "Freelancers are inconsistent and slow",
  "No system — just chaos and hope",
];

export default function ProblemSection() {
  return (
    <section className="section-padding">
      <SectionHeading label="WHY IT MATTERS" title="CREATIVE FATIGUE IS KILLING YOUR ROAS" />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Pain points */}
        <div className="flex flex-col gap-4">
          {pains.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex items-start gap-3 font-body text-muted-foreground"
            >
              <span className="text-destructive mt-0.5">🔴</span>
              <span>{p}</span>
            </motion.div>
          ))}
        </div>

        {/* The fix */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card border border-border border-l-4 border-l-primary rounded-lg p-8"
        >
          <h3 className="font-heading text-3xl text-foreground mb-4">THE FIX: CREATIVE VELOCITY</h3>
          <p className="font-body text-muted-foreground leading-relaxed">
            Winners test 50–100 creative variations monthly. They don't find a
            perfect ad. They build a system that finds winners automatically.
          </p>
          <p className="font-stat font-semibold text-secondary text-lg mt-6">
            Brands testing 10x more creatives grow 3x faster
          </p>
        </motion.div>
      </div>
      <div className="section-divider mt-20" />
    </section>
  );
}
