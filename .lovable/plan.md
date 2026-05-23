
# Mesk Massage – Landing Page

موقع هبوط أنيق وهادئ لمركز المساج **Mesk** بأجواء طبيعية (Sage Spa)، يدعم العربية (RTL) والإنجليزية (LTR) مع زر تبديل اللغة.

## الهيكل (صفحة واحدة)

1. **Header ثابت** – شعار Mesk + روابط (Services / Book / Contact) + زر تبديل اللغة (AR / EN).
2. **Hero** – عنوان كبير ("سكون يبدأ من اللمسة" / "Stillness begins with touch") + وصف قصير + زرّا CTA ("احجز جلستك" + رقم هاتف) + صورة كبيرة (yoga stones / spa).
3. **Services & Pricing** – شبكة بطاقات لخدمات المساج مع المدة والسعر:
   - Swedish Massage – 60 min
   - Deep Tissue – 60/90 min
   - Hot Stone
   - Aromatherapy
   - Thai Massage
   - Couples Massage
4. **Why Mesk** – شريط بسيط بـ 3–4 مزايا (معالجون معتمدون، زيوت عضوية، أجواء هادئة، حجز سهل).
5. **Footer** – معلومات تواصل + ساعات العمل + روابط اجتماعية.

## اللغة والاتجاه

- Hook بسيط `useLanguage` يخزّن الاختيار في `localStorage` ويبدّل `dir="rtl|ltr"` و `lang` على `<html>`.
- قاموس `translations.ts` يحوي كل النصوص بمفتاحَي `ar` و `en`.
- الخط: **Tajawal** للعربية + **Cormorant Garamond** للعناوين الإنجليزية + **Inter** للنصوص.

## التصميم (Sage Spa)

نضيف tokens في `src/styles.css`:
- `--background`: كريمي فاتح `#f5f0e8`
- `--secondary`: أخضر زاهق فاتح `#dce5d4`
- `--accent`: سيج `#a8c0a0`
- `--primary`: سيج غامق `#7d9b76`
- `--foreground`: بني داكن هادئ
- `radius` كبير (1rem) + ظلال ناعمة + `--gradient-sage`

## الملفات

- `src/routes/index.tsx` – استبدال الـ placeholder بالصفحة الكاملة
- `src/routes/__root.tsx` – تحديث `head()` (title + meta + og لـ Mesk)
- `src/styles.css` – tokens Sage Spa + استيراد خطوط Google
- `src/lib/i18n.ts` – hook + قاموس الترجمة
- `src/components/mesk/Header.tsx`
- `src/components/mesk/Hero.tsx`
- `src/components/mesk/Services.tsx`
- `src/components/mesk/WhyUs.tsx`
- `src/components/mesk/Footer.tsx`
- `src/components/mesk/LanguageToggle.tsx`
- صور: 2–3 صور تُولَّد عبر imagegen (hero spa scene + massage stones) وتُحفظ في `src/assets/`

## SEO

- `<h1>` واحد في الـ Hero
- title: "Mesk – Massage & Wellness" / description قصيرة
- alt للصور بكلا اللغتين حسب الاتجاه الحالي
