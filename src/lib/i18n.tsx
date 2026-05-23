import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Dir = "ltr" | "rtl";

export const translations = {
  en: {
    dir: "ltr" as Dir,
    brand: "Mesk",
    tagline: "Massage & Wellness",
    nav: { services: "Services", why: "Why Mesk", contact: "Contact" },
    hero: {
      eyebrow: "A quiet space for the body",
      title: "Stillness begins with a single touch.",
      desc: "At Mesk, every session is an unhurried ritual — warm oils, soft light, and trained hands that listen to your body.",
      cta: "Book a session",
      ctaAlt: "Call us",
    },
    services: {
      eyebrow: "Treatments",
      title: "Crafted treatments, honest pricing",
      desc: "All prices in AED. Add 15 minutes to any session for AED 60.",
      currency: "AED",
      min: "min",
      book: "Book",
      items: [
        { name: "Swedish Relaxation", desc: "Long, flowing strokes to release everyday tension.", duration: 60, price: 240 },
        { name: "Deep Tissue", desc: "Focused pressure for chronic knots and stiff shoulders.", duration: 60, price: 280 },
        { name: "Hot Stone", desc: "Warm basalt stones melt deep muscle tension.", duration: 75, price: 320 },
        { name: "Aromatherapy", desc: "A blend of essential oils chosen for your mood.", duration: 60, price: 260 },
        { name: "Thai Stretch", desc: "Assisted stretching that wakes up tired joints.", duration: 90, price: 340 },
        { name: "Couples Ritual", desc: "Side-by-side massage in our garden suite.", duration: 60, price: 520 },
      ],
    },
    why: {
      eyebrow: "Why Mesk",
      title: "Quiet care, every detail considered",
      items: [
        { t: "Certified therapists", d: "Every member of our team holds international certification." },
        { t: "Organic oils", d: "Cold-pressed, sourced from small farms across the region." },
        { t: "Private suites", d: "No shared rooms — your hour is entirely yours." },
        { t: "Effortless booking", d: "Pick a time in seconds, by phone or WhatsApp." },
      ],
    },
    contact: {
      eyebrow: "Visit",
      title: "Come find your calm",
      hours: "Open daily · 10:00 — 22:00",
      phone: "+971 50 000 0000",
      address: "Jumeirah, Dubai",
      cta: "Book on WhatsApp",
    },
    footer: { rights: "All rights reserved." },
    switchLang: "العربية",
  },
  ar: {
    dir: "rtl" as Dir,
    brand: "مِسك",
    tagline: "مساج وعافية",
    nav: { services: "الخدمات", why: "لماذا مِسك", contact: "تواصل" },
    hero: {
      eyebrow: "مساحة هادئة للجسد",
      title: "السكون يبدأ بلمسةٍ واحدة.",
      desc: "في مِسك، كل جلسة طقسٌ على مهل — زيوتٌ دافئة، إضاءةٌ خافتة، وأيادٍ مدرّبة تُنصت إلى جسدك.",
      cta: "احجز جلستك",
      ctaAlt: "اتصل بنا",
    },
    services: {
      eyebrow: "الجلسات",
      title: "علاجاتٌ مختارة بعنايةٍ وأسعارٌ واضحة",
      desc: "جميع الأسعار بالدرهم الإماراتي. أضف ١٥ دقيقة لأي جلسة مقابل ٦٠ درهم.",
      currency: "د.إ",
      min: "دقيقة",
      book: "احجز",
      items: [
        { name: "المساج السويدي", desc: "حركاتٌ طويلة ومنسابة تُحرّر توتر اليوم.", duration: 60, price: 240 },
        { name: "الأنسجة العميقة", desc: "ضغطٌ مركّز للعقد المزمنة وتيبّس الأكتاف.", duration: 60, price: 280 },
        { name: "الحجر الساخن", desc: "أحجار بازلت دافئة تُذيب توتر العضلات العميق.", duration: 75, price: 320 },
        { name: "العلاج العطري", desc: "خلطةٌ من الزيوت الأساسية تُختار حسب مزاجك.", duration: 60, price: 260 },
        { name: "التايلندي بالتمدد", desc: "تمديداتٌ موجهة تُنشّط المفاصل المُتعبة.", duration: 90, price: 340 },
        { name: "طقس الثنائي", desc: "جلسةٌ جنبًا إلى جنب في جناح الحديقة.", duration: 60, price: 520 },
      ],
    },
    why: {
      eyebrow: "لماذا مِسك",
      title: "رعايةٌ هادئة، وتفاصيلٌ محسوبة",
      items: [
        { t: "معالجون معتمدون", d: "كل فردٍ في فريقنا يحمل شهادةً دولية." },
        { t: "زيوت عضوية", d: "معصورةٌ على البارد من مزارع صغيرة في المنطقة." },
        { t: "أجنحة خاصة", d: "لا غرف مشتركة — ساعتك لكَ وحدك تمامًا." },
        { t: "حجزٌ بلا عناء", d: "اختر موعدك في ثوانٍ، عبر الهاتف أو واتساب." },
      ],
    },
    contact: {
      eyebrow: "زرنا",
      title: "تعالَ تجد سكينتك",
      hours: "نفتح يوميًا · ١٠:٠٠ — ٢٢:٠٠",
      phone: "‎+971 50 000 0000",
      address: "جميرا، دبي",
      cta: "احجز عبر واتساب",
    },
    footer: { rights: "جميع الحقوق محفوظة." },
    switchLang: "English",
  },
};

type Dict = (typeof translations)["en"];

type Ctx = { lang: Lang; t: Dict; toggle: () => void };
const LangCtx = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar");

  useEffect(() => {
    const saved = (typeof window !== "undefined" && (localStorage.getItem("mesk-lang") as Lang)) || "ar";
    setLang(saved);
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir;
    try { localStorage.setItem("mesk-lang", lang); } catch {}
  }, [lang]);

  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"));
  return <LangCtx.Provider value={{ lang, t: translations[lang], toggle }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}