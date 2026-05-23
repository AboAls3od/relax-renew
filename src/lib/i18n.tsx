import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ar" | "en";

type Dir = "ltr" | "rtl";

export const translations = {
  en: {
    dir: "ltr" as Dir,
    brand: "Mesk",
    tagline: "Massage & Wellness",
    nav: { services: "Services", why: "Why Mesk", booking: "Book", contact: "Contact" },
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
      desc: "All prices in SAR. Inspired by our full in-studio menu — massage, Moroccan hammam, couples rituals & pedicure.",
      currency: "SAR",
      min: "min",
      book: "Book",
      items: [
        { name: "Relaxation Massage 40 min", desc: "A short, restorative session to unwind body and mind.", duration: 40, price: 80 },
        { name: "Relaxation Massage", desc: "A full hour of slow, flowing strokes to release everyday tension.", duration: 60, price: 100 },
        { name: "Swedish Massage", desc: "Classic European technique — gentle, rhythmic, restoring.", duration: 60, price: 120 },
        { name: "Thai Massage", desc: "Assisted stretching that wakes up tired joints.", duration: 60, price: 120 },
        { name: "Shiatsu Massage", desc: "Japanese pressure-point therapy for deep balance.", duration: 60, price: 120 },
        { name: "Hot Stone Massage", desc: "Warm basalt stones melt deep muscle tension.", duration: 60, price: 140 },
        { name: "Signature Full Massage", desc: "Our complete signature ritual head to toe.", duration: 60, price: 140 },
        { name: "Moroccan Hammam — Face Scrub", desc: "Authentic Moroccan soap with steam and a face scrub.", duration: 45, price: 80 },
        { name: "Moroccan Hammam + Body Scrub", desc: "Original Moroccan soap, steam, body & face scrub.", duration: 60, price: 100 },
        { name: "Moroccan Hammam VIP", desc: "Full body scrub with original Moroccan clay — the VIP ritual.", duration: 75, price: 160 },
        { name: "Bridal Ritual — 40 min Massage", desc: "40-min massage with full Moroccan hammam, scrub & hair-oil bath.", duration: 90, price: 150 },
        { name: "Bridal Ritual — 1 hour Massage", desc: "1-hour massage with full Moroccan hammam, scrub & hair-oil bath.", duration: 120, price: 200 },
        { name: "Bridal Ritual VIP", desc: "Body scrub, 1-hour massage and VIP Moroccan clay hammam.", duration: 150, price: 230 },
        { name: "Classic Pedicure", desc: "Traditional hand & foot pedicure.", duration: 45, price: 60 },
        { name: "Heritage Pedicure", desc: "Old-style pedicure with extra care for hands and feet.", duration: 45, price: 70 },
        { name: "Combined Pedicure", desc: "Modern and classic pedicure techniques combined.", duration: 60, price: 110 },
        { name: "VIP Package", desc: "Signature full massage, full hammam & combined pedicure.", duration: 180, price: 350 },
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
      phone: "+966 53 363 3048",
      address: "Riyadh, KSA",
      cta: "Book on WhatsApp",
    },
    footer: { rights: "All rights reserved." },
    switchLang: "العربية",
    booking: {
      eyebrow: "Booking",
      title: "Reserve your session",
      desc: "Tell us a little about your visit — we'll confirm by WhatsApp within minutes.",
      name: "Full name",
      namePh: "Your name",
      email: "Email",
      emailPh: "you@example.com",
      duration: "Duration",
      service: "Treatment",
      time: "Preferred time",
      timePh: "e.g. Saturday, 7:00 PM",
      submit: "Send booking request",
      sending: "Sending…",
      success: "Thanks! Opening WhatsApp to confirm your booking.",
      errors: {
        name: "Please enter your name.",
        email: "Please enter a valid email.",
        time: "Please share a preferred time.",
      },
      msgTemplate: (name: string, email: string, service: string, duration: number, time: string) =>
        `New booking request from Mesk website:\nName: ${name}\nEmail: ${email}\nTreatment: ${service} (${duration} min)\nPreferred time: ${time}`,
    },
  },
  ar: {
    dir: "rtl" as Dir,
    brand: "مِسك",
    tagline: "مساج وعافية",
    nav: { services: "الخدمات", why: "لماذا مِسك", booking: "احجز", contact: "تواصل" },
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
      desc: "جميع الأسعار بالريال السعودي · مساج، حمّام مغربي، باقات العرسان، وبدكير.",
      currency: "ريال",
      min: "دقيقة",
      book: "احجز",
      items: [
        { name: "مساج استرخائي ٤٠ دقيقة", desc: "جلسةٌ قصيرة تُعيد التوازن للجسد والذهن.", duration: 40, price: 80 },
        { name: "مساج استرخائي ساعة", desc: "ساعةٌ كاملة من الحركات المنسابة لتحرير التوتر.", duration: 60, price: 100 },
        { name: "مساج سويدي ساعة", desc: "تقنيةٌ كلاسيكية لطيفة تُجدّد الجسد بإيقاعٍ هادئ.", duration: 60, price: 120 },
        { name: "مساج تايلندي ساعة", desc: "تمديداتٌ موجهة تُنشّط المفاصل المُتعبة.", duration: 60, price: 120 },
        { name: "مساج شياتسو ساعة", desc: "تقنيةٌ يابانية بالضغط على نقاط الطاقة لتوازنٍ عميق.", duration: 60, price: 120 },
        { name: "مساج أحجار ساخنة ساعة", desc: "أحجار بازلت دافئة تُذيب توتر العضلات العميق.", duration: 60, price: 140 },
        { name: "المساج الشامل ساعة", desc: "طقسنا المميز من الرأس حتى أخمص القدمين.", duration: 60, price: 140 },
        { name: "حمام مغربي مع صنفرة وجه", desc: "بالصابون المغربي الأصلي مع بخار وصنفرة وجه.", duration: 45, price: 80 },
        { name: "حمام مغربي مع صنفرة جسم ووجه", desc: "بالصابون المغربي الأصلي مع بخار وصنفرة جسم ووجه.", duration: 60, price: 100 },
        { name: "حمام مغربي VIP", desc: "صنفرة جسم كاملة مع الطين المغربي الأصلي — تجربة VIP.", duration: 75, price: 160 },
        { name: "باقة العرسان — مساج ٤٠ دقيقة", desc: "مساج ٤٠ دقيقة مع حمام مغربي وصنفرة وحمام زيت شعر.", duration: 90, price: 150 },
        { name: "باقة العرسان — مساج ساعة", desc: "مساج ساعة مع حمام مغربي كامل وصنفرة وحمام زيت شعر.", duration: 120, price: 200 },
        { name: "باقة العرسان VIP", desc: "صنفرة وجه وجسم مع مساج ساعة وحمام مغربي VIP.", duration: 150, price: 230 },
        { name: "بدكير قديم", desc: "بدكير تقليدي لليدين والقدمين.", duration: 45, price: 60 },
        { name: "بدكير يد وقديم", desc: "بدكير قديم بعنايةٍ إضافية لليدين والقدمين.", duration: 45, price: 70 },
        { name: "بدكير مدمج (يد وقديم)", desc: "دمج التقنيات الحديثة والكلاسيكية في جلسةٍ واحدة.", duration: 60, price: 110 },
        { name: "باقة VIP", desc: "المساج الشامل، حمام كامل وبدكير يد وقديم.", duration: 180, price: 350 },
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
      phone: "‎+966 53 363 3048",
      address: "الرياض، المملكة العربية السعودية",
      cta: "احجز عبر واتساب",
    },
    footer: { rights: "جميع الحقوق محفوظة." },
    switchLang: "English",
    booking: {
      eyebrow: "الحجز",
      title: "احجز جلستك",
      desc: "أخبرنا قليلًا عن زيارتك — سنؤكّد الحجز عبر واتساب خلال دقائق.",
      name: "الاسم الكامل",
      namePh: "اسمك",
      email: "البريد الإلكتروني",
      emailPh: "you@example.com",
      duration: "المدة",
      service: "الجلسة",
      time: "الوقت المفضل",
      timePh: "مثال: السبت، الساعة ٧ مساءً",
      submit: "إرسال طلب الحجز",
      sending: "جارٍ الإرسال…",
      success: "شكرًا! سنفتح واتساب لتأكيد حجزك.",
      errors: {
        name: "يرجى إدخال اسمك.",
        email: "يرجى إدخال بريد إلكتروني صحيح.",
        time: "يرجى تحديد وقت مفضل.",
      },
      msgTemplate: (name: string, email: string, service: string, duration: number, time: string) =>
        `طلب حجز جديد من موقع مِسك:\nالاسم: ${name}\nالبريد: ${email}\nالجلسة: ${service} (${duration} دقيقة)\nالوقت المفضل: ${time}`,
    },
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