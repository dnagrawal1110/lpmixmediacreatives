import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const services = [
  {
    icon: "🎬",
    title: "AI VIDEO ADS",
    desc: "Scroll-stopping 15–30 sec vertical videos for Instagram Reels, YouTube Shorts, Meta Ads. Problem-solution hooks, UGC style, cinematic — we test every format.",
    tags: ["Reels", "YouTube Shorts", "Meta Ads", "UGC Style"],
    stat: "⚡ 48hr turnaround on base video",
    popular: false,
  },
  {
    icon: "📊",
    title: "STATIC AD CREATIVES",
    desc: "High-CTR image ads built for performance. Hook text overlays, before/after formats, offer banners. Designed to stop the scroll and drive clicks.",
    tags: ["Meta", "Google Display", "Amazon", "Carousel"],
    stat: "⚡ 24hr turnaround",
    popular: true,
  },
  {
    icon: "🔄",
    title: "VARIATION TESTING ENGINE",
    desc: "Take 1 winning concept and generate 10–30 variations. Different hooks, CTAs, colour palettes, formats. Feed Meta's algorithm what it craves: data.",
    tags: ["Hook Testing", "A/B Creatives", "Winning Iterations"],
    stat: "⚡ Scale winners 10x faster",
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <SectionHeading
        label="OUR SERVICES"
        title="WHAT WE BUILD FOR YOU"
        sub="Three weapons in your creative arsenal"
      />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative bg-card border border-border rounded-lg p-7 hover:border-primary hover:glow-orange-subtle hover:scale-[1.02] transition-all group"
          >
            {s.popular && (
              <span className="absolute top-4 right-4 bg-primary text-primary-foreground font-body text-[10px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                Most Popular
              </span>
            )}
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-5">
              {s.icon}
            </div>
            <h3 className="font-heading text-[28px] text-foreground mb-3">{s.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="font-body text-[11px] border border-border text-muted-foreground px-2.5 py-1 rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="font-body text-primary text-sm font-medium">{s.stat}</p>
          </motion.div>
        ))}
      </div>
      <div className="section-divider mt-20" />
    </section>
  );
}
