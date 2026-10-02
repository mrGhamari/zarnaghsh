import { Header } from '@/components/header';
import {
  ArrowIcon,
  CheckIcon,
  ChevronIcon,
  ClockIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  ServiceIcon,
  TelegramIcon,
  WhatsAppIcon,
} from '@/components/icons';
import { JsonLd } from '@/components/json-ld';
import { BoxArt, WorkArt } from '@/components/package-art';
import { Seal } from '@/components/seal';
import { faqs, features, foils, industries, keywords, services, steps, works } from '@/lib/content';
import { site } from '@/lib/site';

const fa = (n: number) => new Intl.NumberFormat('fa-IR', { useGrouping: false }).format(n);
const jalaliYear = new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(new Date());
const whatsappHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('سلام، برای سفارش طلاکوب از سایت زرنقش پیام می‌دهم.')}`;

function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold tracking-wide text-gold-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-8 text-gold-50/70">{children}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />

      <main id="top" className="overflow-x-clip pb-20 sm:pb-0">
        {/* HERO */}
        <section aria-labelledby="hero-title" className="relative isolate pt-28 pb-20 sm:pt-36 lg:pb-28">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-40 start-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-gold-400/15 blur-3xl rtl:translate-x-1/2" />
            <div className="absolute bottom-0 end-0 size-[28rem] rounded-full bg-gold-600/10 blur-3xl" />
            <div className="grain absolute inset-0 opacity-[0.06] mix-blend-overlay" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(232,194,90,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(232,194,90,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
          </div>

          <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div className="text-center lg:text-start">
              <p className="inline-flex items-center gap-2 rounded-full border border-gold-300/25 bg-gold-300/5 px-4 py-1.5 text-sm text-gold-200">
                <span className="size-1.5 rounded-full bg-gold-300" />
                تخصص طلاکوب گرم (هات‌فویل) روی بسته‌بندی
              </p>
              <h1 id="hero-title" className="mt-6 font-black leading-[1.25]">
                <span className="block text-5xl sm:text-6xl lg:text-7xl">
                  <span className="foil-text">طلاکوب</span> {site.name}
                </span>
                <span className="mt-4 block text-2xl font-bold text-gold-50/90 sm:text-3xl">
                  چاپ طلاکوب روی کارتن، جعبه و بسته‌بندی
                </span>
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-9 text-gold-50/70 lg:mx-0">
                با طلاکوبی دقیق و براق، لوگو و بج طلایی برندتان را روی کارتن، جعبه، لیبل، ساک دستی و کارت ویزیت
                ماندگار کنید. {site.name} از ساخت کلیشه تا تحویل، کنار شماست تا بسته‌بندی‌تان اولین نشانه‌ی کیفیت
                محصولتان باشد.
              </p>

              <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href={`tel:${site.phone}`}
                  className="foil-bg inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-bold text-ink-950 shadow-[0_10px_40px_-8px_rgba(232,194,90,0.55)] transition hover:scale-[1.02] sm:w-auto"
                >
                  <PhoneIcon className="size-5" />
                  مشاوره و ثبت سفارش
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold-300/30 px-7 py-4 text-base font-semibold text-gold-100 transition hover:border-gold-300/70 hover:bg-gold-300/5 sm:w-auto"
                >
                  <WhatsAppIcon className="size-5" />
                  ارسال طرح در واتساپ
                </a>
              </div>

              <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gold-50/70 lg:justify-start">
                {['ساخت کلیشه اختصاصی', 'فویل طلایی، نقره‌ای و رزگلد', 'ارسال به سراسر ایران'].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <CheckIcon className="size-4 text-gold-300" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div aria-hidden="true" className="absolute inset-10 -z-10 rounded-full bg-gold-400/20 blur-3xl" />
              <BoxArt sweepId="hero-sweep" className="animate-float w-full drop-shadow-2xl" />
              <figure className="gold-border absolute -bottom-4 start-0 hidden items-center gap-3 rounded-2xl px-4 py-3 shadow-2xl sm:flex">
                <Seal className="size-11" compact title="" aria-hidden="true" />
                <figcaption className="text-sm leading-6">
                  <span className="block font-bold text-gold-200">بج طلایی زرنقش</span>
                  <span className="text-gold-50/60">امضای ما روی هر کارتن</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* KEYWORD MARQUEE */}
        <div className="relative border-y border-gold-300/10 bg-ink-900 py-4" aria-hidden="true">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap text-gold-200/70">
            {[...keywords, ...keywords].map((k, i) => (
              <span key={i} className="flex items-center gap-10 text-sm font-semibold">
                {k}
                <span className="text-gold-400">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* SERVICES */}
        <section id="services" aria-labelledby="services-title" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold tracking-wide text-gold-300">خدمات طلاکوبی</p>
              <h2 id="services-title" className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                هر چیزی که بخواهید <span className="foil-text">طلایی</span> شود
              </h2>
              <p className="mt-4 text-base leading-8 text-gold-50/70">
                از طلاکوب روی کارتن‌های بزرگ صادراتی تا طلاکوب ظریف کارت ویزیت؛ با کلیشه‌ی اختصاصی و فویل مرغوب.
              </p>
            </div>
            <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <li key={s.id}>
                  <article className="gold-border group h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(232,194,90,0.35)]">
                    <div className="foil-bg grid size-12 place-items-center rounded-2xl text-ink-950">
                      <ServiceIcon name={s.icon} className="size-6" />
                    </div>
                    <h3 className="mt-5 text-lg font-bold text-gold-100">{s.title}</h3>
                    <p className="mt-2.5 text-sm leading-7 text-gold-50/65">{s.description}</p>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SIGNATURE BADGE */}
        <section aria-labelledby="badge-title" className="relative isolate overflow-hidden bg-kraft-200 py-24 text-ink-900">
          <div aria-hidden="true" className="grain absolute inset-0 -z-10 opacity-20 mix-blend-multiply" />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[repeating-linear-gradient(90deg,transparent_0_22px,rgba(120,80,30,0.06)_22px_24px)]"
          />
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div className="relative mx-auto">
              <div aria-hidden="true" className="absolute inset-6 rounded-full bg-ink-950/25 blur-2xl" />
              <Seal className="relative size-64 drop-shadow-[0_12px_20px_rgba(60,35,5,0.45)] sm:size-80" />
            </div>
            <div>
              <p className="text-sm font-bold text-kraft-500">امضای طلایی زرنقش</p>
              <h2 id="badge-title" className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                بج طلایی؛ کوچک، اما گویای همه‌چیز
              </h2>
              <p className="mt-5 text-lg leading-9 text-ink-800/80">
                ما روی هر کارتن، یک بج طلایی زنگ با نام {site.name} طلاکوب می‌کنیم؛ امضایی که پیش از باز شدن
                بسته، از کیفیت داخل آن خبر می‌دهد. همین امضا را می‌توانیم با نام و لوگوی برند شما، روی بسته‌بندی
                محصولاتتان طراحی و طلاکوب کنیم.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  'نشانه‌ی اصالت و تمایز محصول در قفسه',
                  'افزایش ارزش درک‌شده‌ی بسته‌بندی',
                  'براق و ماندگار، حتی روی سطح کرافت',
                  'طراحی اختصاصی بج متناسب با برند شما',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 rounded-2xl bg-white/40 p-4 text-sm font-medium leading-7">
                    <span className="foil-bg mt-0.5 grid size-6 shrink-0 place-items-center rounded-full text-ink-950">
                      <CheckIcon className="size-3.5" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FOILS */}
        <section id="foils" aria-labelledby="foils-title" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold tracking-wide text-gold-300">رنگ‌های فویل طلاکوب</p>
              <h2 id="foils-title" className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                فقط طلایی نیست؛ رنگ برندتان را انتخاب کنید
              </h2>
              <p className="mt-4 text-base leading-8 text-gold-50/70">
                فویل‌های براق، مات و هولوگرامی برای جنس‌های مختلف؛ از کارتن کرافت تا مقوای گلاسه و کاغذ فانتزی.
              </p>
            </div>
            <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {foils.map((f) => (
                <li key={f.name} className="gold-border overflow-hidden rounded-3xl">
                  <div className={`${f.className} relative h-28 overflow-hidden`}>
                    <span
                      aria-hidden="true"
                      className="animate-sweep absolute inset-y-0 start-0 w-1/4 bg-white/40 blur-md"
                    />
                  </div>
                  <p className="px-4 py-3.5 text-center text-sm font-semibold text-gold-100">{f.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* WORKS */}
        <section id="works" aria-labelledby="works-title" className="border-y border-gold-300/10 bg-ink-900 py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading eyebrow="نمونه‌کار طلاکوب" title="طلاکوب روی هر نوع بسته‌بندی">
              چند نمونه از کاربردهای طلاکوب زرنقش روی کارتن، جعبه‌ی لوکس، کارت دعوت، ساک دستی و لیبل.
            </SectionHeading>
            <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {works.map((w, i) => (
                <li key={w.title}>
                  <figure className="group overflow-hidden rounded-3xl border border-gold-300/10 bg-gradient-to-b from-ink-800 to-ink-950">
                    <div className="relative aspect-[5/4] p-6">
                      <div aria-hidden="true" className="absolute inset-x-10 top-10 bottom-16 rounded-full bg-gold-400/10 blur-2xl transition group-hover:bg-gold-400/20" />
                      <WorkArt work={w} id={`work-${i}`} className="relative size-full transition duration-500 group-hover:scale-[1.04]" />
                    </div>
                    <figcaption className="flex items-center justify-between border-t border-gold-300/10 px-6 py-4">
                      <span>
                        <span className="block font-bold text-gold-100">{w.title}</span>
                        <span className="text-sm text-gold-50/55">{w.caption}</span>
                      </span>
                      <span className="foil-bg size-2 rounded-full" aria-hidden="true" />
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" aria-labelledby="process-title" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold tracking-wide text-gold-300">مراحل سفارش طلاکوب</p>
              <h2 id="process-title" className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                از طرح شما تا بسته‌ی طلاکوب‌شده
              </h2>
            </div>
            <ol className="relative mt-16 grid gap-8 lg:grid-cols-5 lg:gap-6">
              <span aria-hidden="true" className="absolute inset-x-[10%] top-7 hidden h-px bg-gradient-to-l from-transparent via-gold-400/50 to-transparent lg:block" />
              {steps.map((s, i) => (
                <li key={s.title} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
                  <span className="foil-bg relative grid size-14 shrink-0 place-items-center rounded-full text-xl font-black text-ink-950 ring-8 ring-ink-950">
                    {fa(i + 1)}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-gold-100 lg:mt-5">{s.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-gold-50/65">{s.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHY + INDUSTRIES */}
        <section aria-labelledby="why-title" className="border-y border-gold-300/10 bg-ink-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold tracking-wide text-gold-300">چرا زرنقش؟</p>
              <h2 id="why-title" className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                طلاکوبی که دیده می‌شود و می‌ماند
              </h2>
              <dl className="mt-10 grid gap-5 sm:grid-cols-2">
                {features.map((f) => (
                  <div key={f.title} className="gold-border rounded-3xl p-6">
                    <dt className="flex items-center gap-3 font-bold text-gold-100">
                      <CheckIcon className="size-5 text-gold-300" />
                      {f.title}
                    </dt>
                    <dd className="mt-3 text-sm leading-7 text-gold-50/65">{f.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-gold-300">کاربردهای طلاکوب</p>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">طلاکوب برای چه کسب‌وکارهایی؟</h2>
              <p className="mt-4 leading-8 text-gold-50/70">
                هر برندی که بسته‌بندی‌اش باید لوکس، معتبر و به‌یادماندنی دیده شود، از طلاکوب بهره می‌برد:
              </p>
              <ul className="mt-8 flex flex-wrap gap-3">
                {industries.map((ind) => (
                  <li
                    key={ind}
                    className="rounded-full border border-gold-300/20 bg-gold-300/5 px-4 py-2 text-sm text-gold-100 transition hover:border-gold-300/60"
                  >
                    {ind}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-title" className="py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-sm font-semibold tracking-wide text-gold-300">سوالات متداول طلاکوب</p>
              <h2 id="faq-title" className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                هرچه درباره‌ی طلاکوب باید بدانید
              </h2>
            </div>
            <div className="mt-12 space-y-3">
              {faqs.map((f, i) => (
                <details key={f.q} className="gold-border group rounded-2xl" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-bold text-gold-100">
                    <h3 className="text-base">{f.q}</h3>
                    <ChevronIcon className="size-5 shrink-0 text-gold-300 transition group-open:rotate-180" />
                  </summary>
                  <p className="px-6 pb-6 leading-8 text-gold-50/70">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" aria-labelledby="contact-title" className="pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative isolate overflow-hidden rounded-[2rem] border border-gold-300/20 bg-ink-900 px-6 py-14 sm:px-12 lg:px-16">
              <div aria-hidden="true" className="absolute -top-24 end-0 -z-10 size-96 rounded-full bg-gold-400/20 blur-3xl" />
              <div aria-hidden="true" className="grain absolute inset-0 -z-10 opacity-[0.05]" />
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <h2 id="contact-title" className="text-3xl font-black leading-tight sm:text-4xl">
                    بسته‌بندی‌تان را <span className="foil-text">طلایی</span> کنید
                  </h2>
                  <p className="mt-5 max-w-lg text-lg leading-9 text-gold-50/70">
                    طرح، لوگو یا حتی ایده‌تان را برای ما بفرستید. مشاوره و استعلام قیمت طلاکوب رایگان است.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`tel:${site.phone}`}
                      className="foil-bg inline-flex items-center gap-2 rounded-full px-6 py-3.5 font-bold text-ink-950"
                    >
                      <PhoneIcon className="size-5" />
                      <span dir="ltr">{site.phoneDisplay}</span>
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-gold-300/30 px-6 py-3.5 font-semibold text-gold-100 hover:bg-gold-300/5"
                    >
                      <WhatsAppIcon className="size-5" />
                      واتساپ
                      <ArrowIcon className="size-4" />
                    </a>
                  </div>
                </div>

                <address className="grid gap-4 not-italic sm:grid-cols-2">
                  {[
                    { icon: PinIcon, label: 'آدرس', value: site.address },
                    { icon: ClockIcon, label: 'ساعت کاری', value: site.openingHours },
                    { icon: TelegramIcon, label: 'تلگرام', value: `@${site.telegram}`, href: `https://t.me/${site.telegram}` },
                    {
                      icon: InstagramIcon,
                      label: 'اینستاگرام',
                      value: `@${site.instagram}`,
                      href: `https://instagram.com/${site.instagram}`,
                    },
                    { icon: MailIcon, label: 'ایمیل', value: site.email, href: `mailto:${site.email}` },
                    { icon: PhoneIcon, label: 'تلفن', value: site.phoneDisplay, href: `tel:${site.phone}` },
                  ].map(({ icon: Icon, label, value, href }) => {
                    const body = (
                      <>
                        <Icon className="size-5 shrink-0 text-gold-300" />
                        <span>
                          <span className="block text-xs text-gold-50/50">{label}</span>
                          <span className="mt-1 block font-semibold text-gold-100" dir={href ? 'auto' : undefined}>
                            {value}
                          </span>
                        </span>
                      </>
                    );
                    return href ? (
                      <a
                        key={label}
                        href={href}
                        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="flex items-start gap-3 rounded-2xl border border-gold-300/10 bg-ink-950/60 p-4 transition hover:border-gold-300/40"
                      >
                        {body}
                      </a>
                    ) : (
                      <div key={label} className="flex items-start gap-3 rounded-2xl border border-gold-300/10 bg-ink-950/60 p-4">
                        {body}
                      </div>
                    );
                  })}
                </address>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold-300/10 bg-ink-900">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <Seal className="size-12" compact title="" aria-hidden="true" />
              <p className="foil-text text-2xl font-black">طلاکوب {site.name}</p>
            </div>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-gold-50/60">
              {site.name} مجموعه‌ای تخصصی در زمینه‌ی طلاکوب و طلاکوبی روی انواع بسته‌بندی است. خدمات ما شامل طلاکوب
              روی کارتن و کارتن صادراتی، طلاکوب جعبه شیرینی، شکلات، زعفران و عطر، طلاکوب لیبل و برچسب، طلاکوب کارت
              ویزیت و کارت دعوت، طلاکوب ساک دستی، طلاکوب برجسته (امبوس) و ساخت کلیشه طلاکوب است. سفارش‌های طلاکوب را
              در {site.city} انجام می‌دهیم و به سراسر ایران ارسال می‌کنیم.
            </p>
          </div>
          <nav aria-label="خدمات طلاکوب">
            <p className="font-bold text-gold-100">خدمات</p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-gold-50/60">
              {services.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-gold-200">
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-t border-gold-300/10 py-6 text-center text-xs text-gold-50/45">
          © {jalaliYear} طلاکوب {site.name} — تمامی حقوق محفوظ است.
        </div>
      </footer>

      {/* mobile quick-contact bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-gold-300/15 bg-ink-950/90 p-3 backdrop-blur-xl sm:hidden">
        <a href={`tel:${site.phone}`} className="foil-bg flex items-center justify-center gap-2 rounded-full py-3 font-bold text-ink-950">
          <PhoneIcon className="size-5" />
          تماس
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full border border-gold-300/30 py-3 font-semibold text-gold-100"
        >
          <WhatsAppIcon className="size-5" />
          واتساپ
        </a>
      </div>
    </>
  );
}
