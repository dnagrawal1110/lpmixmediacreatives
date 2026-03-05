import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const paths = [
  {
    icon: "🎬",
    title: "Start with ₹999",
    desc: "Get 3 AI videos, see if it works",
    cta: "Get Sample Pack →",
    href: "#sample-pack",
    style: "bg-primary text-primary-foreground glow-orange hover:glow-orange-intense",
  },
  {
    icon: "📞",
    title: "Book a Free Call",
    desc: "30-min strategy call with Deepak",
    cta: "Book on Calendly →",
    href: "https://calendly.com/mixmedia",
    style: "border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  },
  {
    icon: "💬",
    title: "WhatsApp Us",
    desc: "Message directly for quick questions",
    cta: "Open WhatsApp →",
    href: "https://wa.me/91XXXXXXXXXX",
    style: "bg-success text-success-foreground hover:opacity-90",
  },
];

export default function FinalCTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsla(18,100%,57%,0.08)_0%,_transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-6xl md:text-8xl lg:text-[96px] text-foreground leading-none"
        >
          READY TO OUTTEST YOUR COMPETITION?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-body text-muted-foreground text-lg md:text-xl mt-6 max-w-2xl mx-auto"
        >
          Your competitors are already testing 50 ads a month. Every week you wait is a week they pull further ahead.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
          {paths.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-6 text-center"
            >
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-heading text-xl text-foreground mb-1">{p.title}</h3>
              <p className="font-body text-muted-foreground text-sm mb-5">{p.desc}</p>
              <a
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={p.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`inline-flex items-center justify-center gap-2 font-body font-semibold text-sm px-6 py-3 rounded-lg transition-all min-h-[48px] w-full ${p.style}`}
                aria-label={p.cta}
              >
                {p.title === "WhatsApp Us" && <MessageCircle size={16} />}
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
