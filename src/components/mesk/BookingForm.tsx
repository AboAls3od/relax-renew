import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { useLang } from "@/lib/i18n";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  service: z.string().min(1).max(80),
  duration: z.coerce.number().int().min(30).max(180),
  time: z.string().trim().min(2).max(120),
});

export function BookingForm() {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [service, setService] = useState(t.services.items[0].name);
  const [duration, setDuration] = useState<number>(t.services.items[0].duration);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      service: String(fd.get("service") ?? ""),
      duration: String(fd.get("duration") ?? ""),
      time: String(fd.get("time") ?? ""),
    };
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      const e: Record<string, string> = {};
      const issues = parsed.error.issues;
      for (const i of issues) {
        const key = i.path[0] as string;
        if (key === "name") e.name = t.booking.errors.name;
        else if (key === "email") e.email = t.booking.errors.email;
        else if (key === "time") e.time = t.booking.errors.time;
      }
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const { name, email, service, duration, time } = parsed.data;
    const msg = t.booking.msgTemplate(name, email, service, duration, time);
    const phone = t.contact.phone.replace(/[^0-9]/g, "");
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
    toast.success(t.booking.success);
    window.open(url, "_blank", "noopener,noreferrer");
    setTimeout(() => setSubmitting(false), 600);
  }

  const inputBase =
    "w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition";

  return (
    <form onSubmit={onSubmit} className={`grid gap-5 ${isAr ? "text-right" : "text-left"}`} noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-wider text-primary/80">
            {t.booking.name}
          </label>
          <input id="name" name="name" type="text" placeholder={t.booking.namePh} maxLength={80} className={inputBase} />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-wider text-primary/80">
            {t.booking.email}
          </label>
          <input id="email" name="email" type="email" placeholder={t.booking.emailPh} maxLength={160} className={inputBase} dir="ltr" />
          {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-wider text-primary/80">
            {t.booking.service}
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(e) => {
              const v = e.target.value;
              setService(v);
              const found = t.services.items.find((s) => s.name === v);
              if (found) setDuration(found.duration);
            }}
            className={inputBase}
          >
            {t.services.items.map((s) => (
              <option key={s.name} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="duration" className="mb-2 block text-xs uppercase tracking-wider text-primary/80">
            {t.booking.duration}
          </label>
          <select
            id="duration"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className={inputBase}
          >
            {[30, 45, 60, 75, 90, 120].map((d) => (
              <option key={d} value={d}>
                {d} {t.services.min}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="time" className="mb-2 block text-xs uppercase tracking-wider text-primary/80">
          {t.booking.time}
        </label>
        <input id="time" name="time" type="text" placeholder={t.booking.timePh} maxLength={120} className={inputBase} />
        {errors.time && <p className="mt-1 text-xs text-destructive">{errors.time}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition hover:opacity-90 disabled:opacity-60"
      >
        {submitting ? t.booking.sending : t.booking.submit}
      </button>
    </form>
  );
}