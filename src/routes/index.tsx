import { createFileRoute } from "@tanstack/react-router";
import { LanguageProvider, useLang } from "@/lib/i18n";
import heroImg from "@/assets/hero-spa.jpg";
import roomImg from "@/assets/spa-room.jpg";
import { BookingForm } from "@/components/mesk/BookingForm";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mesk — Massage & Wellness · مِسك" },
      { name: "description", content: "Mesk is a quiet wellness studio offering Swedish, deep tissue, hot stone, aromatherapy and Thai massage. مركز مِسك للمساج والعافية." },
      { property: "og:title", content: "Mesk — Massage & Wellness" },
      { property: "og:description", content: "A quiet wellness studio. Unhurried massage rituals, organic oils, private suites." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}

function Page() {
  const { t, lang, toggle } = useLang();
  const isAr = lang === "ar";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-display text-2xl tracking-wide text-primary">{t.brand}</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">· {t.tagline}</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#services" className="transition hover:text-foreground">{t.nav.services}</a>
            <a href="#why" className="transition hover:text-foreground">{t.nav.why}</a>
            <a href="#booking" className="transition hover:text-foreground">{t.nav.booking}</a>
            <a href="#contact" className="transition hover:text-foreground">{t.nav.contact}</a>
          </nav>
          <button
            onClick={toggle}
            className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-medium text-foreground transition hover:bg-accent"
          >
            {t.switchLang}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
          <div className={isAr ? "text-right" : "text-left"}>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">{t.hero.eyebrow}</p>
            <h1 className="text-balance text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              {t.hero.desc}
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90"
              >
                {t.hero.cta}
              </a>
              <a
                href={`tel:${t.contact.phone.replace(/\s/g, "")}`}
                className="rounded-full border border-border bg-card px-7 py-3 text-sm font-medium text-foreground transition hover:bg-accent"
              >
                {t.hero.ctaAlt}
              </a>
            </div>
          </div>
          <div className="relative">
            <div
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-60 blur-3xl"
              style={{ background: "var(--gradient-sage)" }}
            />
            <img
              src={heroImg}
              alt={isAr ? "أحجار مساج وأوراق إيكاليبتوس" : "Massage stones and eucalyptus leaves"}
              width={1536}
              height={1536}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-border/60 bg-card/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">{t.services.eyebrow}</p>
            <h2 className="text-4xl text-foreground md:text-5xl">{t.services.title}</h2>
            <p className="mt-4 text-muted-foreground">{t.services.desc}</p>
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border/60 md:grid-cols-2 lg:grid-cols-3">
            {t.services.items.map((s) => (
              <article
                key={s.name}
                className="group flex flex-col gap-5 bg-card p-8 transition hover:bg-accent/40"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl text-foreground">{s.name}</h3>
                  <span className="font-display text-xl text-primary">
                    {s.price} <span className="text-xs text-muted-foreground">{t.services.currency}</span>
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-auto flex items-center justify-between border-t border-border/60 pt-5 text-sm">
                  <span className="text-muted-foreground">{s.duration} {t.services.min}</span>
                  <a
                    href="#booking"
                    className="text-primary transition group-hover:translate-x-0.5"
                  >
                    {t.services.book} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section id="why" className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <img
              src={roomImg}
              alt={isAr ? "غرفة علاج مِسك" : "Mesk treatment room"}
              loading="lazy"
              width={1280}
              height={1280}
              className="aspect-square w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">{t.why.eyebrow}</p>
            <h2 className="text-4xl text-foreground md:text-5xl">{t.why.title}</h2>
            <ul className="mt-10 space-y-6">
              {t.why.items.map((w, i) => (
                <li key={w.t} className="flex gap-5">
                  <span className="font-display text-xl text-primary/60">0{i + 1}</span>
                  <div>
                    <h3 className="text-lg text-foreground">{w.t}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{w.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">{t.contact.eyebrow}</p>
          <h2 className="text-balance text-4xl text-foreground md:text-5xl">{t.contact.title}</h2>
          <div className="mx-auto mt-10 grid max-w-2xl gap-6 text-muted-foreground sm:grid-cols-3">
            <div>
              <div className="text-xs uppercase tracking-wider text-primary/80">{isAr ? "العنوان" : "Address"}</div>
              <div className="mt-2 text-foreground">{t.contact.address}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary/80">{isAr ? "الهاتف" : "Phone"}</div>
              <div className="mt-2 text-foreground" dir="ltr">{t.contact.phone}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary/80">{isAr ? "الأوقات" : "Hours"}</div>
              <div className="mt-2 text-foreground">{t.contact.hours}</div>
            </div>
          </div>
          <a
            href={`https://wa.me/${t.contact.phone.replace(/[^0-9]/g, "")}`}
            target="_blank"
            rel="noreferrer"
            className="mt-12 inline-flex rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90"
          >
            {t.contact.cta}
          </a>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
          <span className="font-display text-base text-primary">{t.brand}</span>
          <span>© {new Date().getFullYear()} {t.brand}. {t.footer.rights}</span>
        </div>
      </footer>
    </div>
  );
}
