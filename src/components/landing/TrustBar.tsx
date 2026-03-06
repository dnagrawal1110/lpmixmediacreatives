import altbeauty from "@/assets/logos/altbeauty.png";
import nooky from "@/assets/logos/nooky.png";
import astrotalk from "@/assets/logos/astrotalk.png";
import nutra from "@/assets/logos/nutra.png";
import goseva from "@/assets/logos/goseva.png";
import keshananda from "@/assets/logos/keshananda.png";
import rozella from "@/assets/logos/rozella.png";
import trillionLondon from "@/assets/logos/trillion-london.png";
import tusharGems from "@/assets/logos/tushar-gems.png";
import mashhoor from "@/assets/logos/mashhoor.png";

const row1 = [altbeauty, nooky, astrotalk, nutra, goseva];
const row2 = [keshananda, rozella, trillionLondon, tusharGems, mashhoor];

export default function TrustBar() {
  const list1 = [...row1, ...row1, ...row1, ...row1];
  const list2 = [...row2, ...row2, ...row2, ...row2];

  return (
    <section className="py-8 overflow-hidden">
      <p className="font-heading text-xs text-muted-foreground text-center tracking-[0.2em] mb-6">
        TRUSTED BY D2C BRANDS ACROSS INDIA
      </p>

      {/* Row 1 — moves left */}
      <div className="relative mb-4">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="animate-marquee-fast flex items-center whitespace-nowrap">
          {list1.map((src, i) => (
            <div
              key={i}
              className="mx-3 shrink-0 border border-border rounded-lg bg-card/50 px-5 py-3 flex items-center justify-center"
            >
              <img
                src={src}
                alt="Client logo"
                className="h-10 md:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — moves right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="animate-marquee-fast-reverse flex items-center whitespace-nowrap">
          {list2.map((src, i) => (
            <div
              key={i}
              className="mx-3 shrink-0 border border-border rounded-lg bg-card/50 px-5 py-3 flex items-center justify-center"
            >
              <img
                src={src}
                alt="Client logo"
                className="h-10 md:h-12 w-auto object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="section-divider mt-8" />
    </section>
  );
}
