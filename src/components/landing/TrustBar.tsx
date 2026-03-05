const brands = [
  "AltBeauty", "Biomystery", "Goseva", "Root n Rise Bliss", "KRAyurveda",
  "Nutravit", "Rozella", "Sabby", "Evren", "Nutrastic", "Trillion London",
  "UFF Perfume", "Dr Pallavi Skinethics", "Tushar Gems", "Glazing Beauty",
];

export default function TrustBar() {
  const list = [...brands, ...brands];
  return (
    <section className="py-10 overflow-hidden">
      <p className="font-heading text-xs text-muted-foreground text-center tracking-[0.2em] mb-6">
        TRUSTED BY D2C BRANDS ACROSS INDIA
      </p>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {list.map((b, i) => (
            <span key={i} className="font-heading text-xl text-muted-foreground mx-4 flex items-center gap-4">
              {b} <span className="text-primary text-sm">●</span>
            </span>
          ))}
        </div>
      </div>
      <div className="section-divider mt-10" />
    </section>
  );
}
