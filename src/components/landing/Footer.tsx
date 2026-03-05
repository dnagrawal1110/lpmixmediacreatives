const services = ["AI Videos", "Static Ads", "Variations", "Strategy"];
const company = ["About", "Portfolio", "Blog", "Careers"];

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,2%)] border-t border-border">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1 */}
        <div className="col-span-2 lg:col-span-1">
          <div className="font-heading text-xl text-foreground mb-3">
            <span>MIX MEDIA </span><span className="text-primary">CREATIVES</span>
          </div>
          <p className="font-body text-muted-foreground text-sm mb-4">
            We Don't Make Ads. We Make Weapons.
          </p>
          <div className="flex gap-4">
            {["Instagram", "LinkedIn", "YouTube"].map((s) => (
              <a key={s} href="#" className="font-body text-xs text-muted-foreground hover:text-primary transition-colors" aria-label={s}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-heading text-sm text-foreground mb-4">SERVICES</h4>
          <ul className="flex flex-col gap-2">
            {services.map((s) => (
              <li key={s}><a href="#services" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-heading text-sm text-foreground mb-4">COMPANY</h4>
          <ul className="flex flex-col gap-2">
            {company.map((c) => (
              <li key={c}><a href="#" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">{c}</a></li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-heading text-sm text-foreground mb-4">CONTACT</h4>
          <ul className="flex flex-col gap-2 font-body text-sm text-muted-foreground">
            <li>+91 XXXXXXXXXX</li>
            <li>hello@mixmedia.in</li>
            <li>Pune, Maharashtra</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-muted-foreground">© 2025 Mix Media Creatives. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
