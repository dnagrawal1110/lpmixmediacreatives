import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const forYou = [
  "You're a D2C brand spending ₹5L+ on Meta/Google ads",
  "Your ROAS is declining and you suspect creative fatigue",
  "You need 20–100 new creatives per month",
  "You want AI speed without sacrificing strategy",
  "You're scaling toward ₹10Cr+ revenue",
  "You're tired of agencies that take 3 weeks",
];
const notForYou = [
  "You're pre-revenue or testing your first product",
  "You want static, generic, template-based creatives",
  "You want guaranteed ROAS (nobody can promise that)",
  "You're looking for the cheapest possible option",
  "You're not ready to test and iterate fast",
];

export default function WhoItsFor() {
  return (
    <section className="section-padding">
      <SectionHeading label="FIT CHECK" title="BUILT FOR BRANDS WHO PLAY TO WIN" />
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card border border-border rounded-lg p-7"
        >
          <h3 className="font-heading text-2xl text-success mb-5">✅ THIS IS FOR YOU IF:</h3>
          <ul className="flex flex-col gap-3">
            {forYou.map((f) => (
              <li key={f} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-success mt-0.5">✅</span> {f}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-lg p-7"
        >
          <h3 className="font-heading text-2xl text-destructive mb-5">❌ NOT FOR YOU IF:</h3>
          <ul className="flex flex-col gap-3">
            {notForYou.map((f) => (
              <li key={f} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-destructive mt-0.5">❌</span> {f}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className="section-divider mt-20" />
    </section>
  );
}
