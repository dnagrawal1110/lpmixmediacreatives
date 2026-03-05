import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Check, X } from "lucide-react";

const rows = [
  ["Turnaround Time", "2–4 weeks", "4 days"],
  ["Cost per video", "₹15,000–50,000", "₹999–3,000"],
  ["Monthly output", "5–10 videos", "20–100 videos"],
  ["Strategy included", "Extra charge", "Included"],
  ["Variation testing", "Not offered", "Core service"],
  ["Performance tracking", "Rarely", "Always"],
  ["Revisions", "1–2 rounds", "Unlimited in package"],
  ["Brand ownership", "Shared", "100% yours"],
];

export default function ComparisonTable() {
  return (
    <section className="section-padding">
      <SectionHeading label="THE COMPARISON" title="WHY AI CREATIVES WIN" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto overflow-x-auto"
      >
        <table className="w-full border-collapse font-body text-sm">
          <thead>
            <tr>
              <th className="text-left p-4 text-muted-foreground font-medium border-b border-border">Feature</th>
              <th className="p-4 text-muted-foreground font-medium border-b border-border text-center">
                <span className="flex items-center justify-center gap-1"><X size={14} className="text-destructive" /> Traditional Agency</span>
              </th>
              <th className="p-4 font-medium border-b border-border text-center bg-primary/10 rounded-t-lg">
                <span className="flex items-center justify-center gap-1 text-primary"><Check size={14} /> Mix Media AI</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([feature, trad, ai], i) => (
              <tr key={feature} className={i % 2 === 0 ? "bg-card" : "bg-background"}>
                <td className="p-4 text-muted-foreground border-b border-border">{feature}</td>
                <td className="p-4 text-center text-muted-foreground/60 border-b border-border">
                  <span className="flex items-center justify-center gap-2"><X size={12} className="text-destructive" />{trad}</span>
                </td>
                <td className="p-4 text-center text-foreground font-medium border-b border-border bg-primary/5">
                  <span className="flex items-center justify-center gap-2"><Check size={12} className="text-success" />{ai}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
      <div className="section-divider mt-20" />
    </section>
  );
}
