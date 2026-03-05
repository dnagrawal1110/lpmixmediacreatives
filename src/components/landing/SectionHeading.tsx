import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
  sub?: string;
}

export default function SectionHeading({ label, title, sub }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12 md:mb-16"
    >
      <span className="font-heading text-[10px] tracking-[0.2em] text-primary uppercase block mb-3">
        {label}
      </span>
      <h2 className="font-heading text-5xl md:text-7xl text-foreground">{title}</h2>
      {sub && (
        <p className="font-body text-muted-foreground text-lg mt-3 max-w-2xl mx-auto">{sub}</p>
      )}
    </motion.div>
  );
}
