import Image from "next/image";
import {
  Award,
  BadgeCheck,
  BookOpenCheck,
  CalendarCheck,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  ExternalLink,
  Gauge,
  Globe2,
  GraduationCap,
  HeartHandshake,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  TrafficCone,
  UserRound,
  UsersRound,
} from "lucide-react";

const phoneDisplay = "0401 314 073";
const phoneHref = "tel:0401314073";
const whatsappUrl =
  "https://wa.me/61401314073?text=Hi%20Luxmy%20Driving%20School%2C%20I%20would%20like%20to%20book%20a%20driving%20lesson.";
const facebookUrl = "https://www.facebook.com/luxmydrivingschool/";
const googleReviewUrl = "#";

const navLinks = [
  ["Lessons", "#lessons"],
  ["Overseas Licence", "#overseas-licence"],
  ["Test Prep", "#test-preparation"],
  ["Service Areas", "#service-areas"],
  ["Reviews", "#reviews"],
  ["Contact", "#contact"],
];

const trustItems = [
  { icon: Star, title: "5.0 Google Rating", detail: "81 five-star reviews" },
  { icon: Car, title: "Automatic Lessons", detail: "Beginner to test-ready" },
  { icon: Globe2, title: "Overseas Licence", detail: "NSW conversion support" },
  { icon: MapPin, title: "Blacktown & St Marys", detail: "Practical test preparation" },
];

const services = [
  {
    id: "automatic-lessons",
    icon: Car,
    title: "Automatic Driving Lessons",
    text: "Calm, step-by-step automatic lessons for beginners, logbook hours, refresher drivers and confidence building.",
    cta: "Book Automatic Lesson",
  },
  {
    id: "overseas-licence",
    icon: Globe2,
    title: "Overseas Licence Conversion",
    text: "Practical NSW road-rule guidance, local driving correction and test preparation for overseas licence holders.",
    cta: "Get Overseas Licence Help",
  },
  {
    id: "test-preparation",
    icon: ClipboardCheck,
    title: "Driving Test Preparation",
    text: "Focused practice for observations, manoeuvres, lane changes, speed management and common test mistakes.",
    cta: "Book Test Preparation",
  },
  {
    id: "test-day-vehicle",
    icon: Car,
    title: "Test Day Vehicle Hire",
    text: "Use the driving school vehicle on test day with a warm-up lesson before your practical test where available.",
    cta: "Book Test Day Vehicle",
  },
  {
    id: "pre-test-assessment",
    icon: Route,
    title: "Pre-Test Assessment",
    text: "Identify weak areas before test day with structured feedback and practical correction from Krishna.",
    cta: "Book Assessment",
  },
  {
    id: "nervous-driver-lessons",
    icon: HeartHandshake,
    title: "Nervous Driver Lessons",
    text: "Patient support for learners who need confidence, calm coaching, parking practice or refresher lessons.",
    cta: "Build Confidence",
  },
];

const whoWeHelp = [
  { icon: GraduationCap, title: "First-time learners" },
  { icon: HeartHandshake, title: "Nervous drivers" },
  { icon: Globe2, title: "Overseas licence holders" },
  { icon: ClipboardCheck, title: "Test-ready students" },
  { icon: Gauge, title: "Refresher drivers" },
  { icon: UsersRound, title: "Parents booking lessons" },
];

const testMistakes = [
  "Missing head checks",
  "Not checking mirrors regularly",
  "Speeding or driving too slowly",
  "Poor gap selection",
  "Unsafe lane changes",
  "Rolling stops",
  "Not giving way correctly",
  "Parking control issues",
  "School zone mistakes",
  "Roundabout and intersection errors",
];

const checklist = [
  "Valid learner licence or overseas licence documents",
  "Driving test booking confirmation",
  "Logbook if required",
  "Glasses or contact lenses if required",
  "Arrive early and stay calm",
  "Practise observation checks",
  "Practise parking and manoeuvres",
  "Follow examiner instructions carefully",
];

const localSections = [
  {
    id: "rooty-hill-driving-lessons",
    title: "Driving Lessons in Rooty Hill",
    text: "Luxmy Driving School is based in Rooty Hill, offering patient automatic driving lessons, overseas licence conversion support and test preparation for local learners.",
  },
  {
    id: "pendle-hill-driving-lessons",
    title: "Driving Lessons in Pendle Hill",
    text: "Students around Pendle Hill can book automatic driving lessons, refresher lessons and confidence-building preparation with Krishna across nearby Western Sydney roads.",
  },
  {
    id: "blacktown-driving-lessons",
    title: "Driving Lessons in Blacktown",
    text: "Blacktown learners can prepare for real road conditions, common test mistakes, parking, observations and safe decision making before their practical driving test.",
  },
  {
    id: "st-marys-driving-lessons",
    title: "Driving Lessons in St Marys",
    text: "Luxmy supports students preparing around St Marys with calm instruction, test-day skills, lane positioning, school-zone awareness and manoeuvre practice.",
  },
];

const suburbs = [
  "Rooty Hill",
  "Mount Druitt",
  "Blacktown",
  "Doonside",
  "Plumpton",
  "Minchinbury",
  "Eastern Creek",
  "Bungarribee",
  "Glendenning",
  "Oakhurst",
  "Dean Park",
  "Quakers Hill",
  "Schofields",
  "Marsden Park",
  "St Marys",
  "Colyton",
  "Oxley Park",
  "St Clair",
  "Erskine Park",
  "Seven Hills",
  "Toongabbie",
  "Pendle Hill",
  "Wentworthville",
  "Westmead",
  "South Wentworthville",
  "Girraween",
  "Greystanes",
  "Pemulwuy",
  "Prospect",
  "Old Toongabbie",
  "Constitution Hill",
  "Winston Hills",
  "Baulkham Hills",
  "Arndell Park",
  "Huntingwood",
  "Woodcroft",
  "Marayong",
  "Kings Park",
  "Lalor Park",
  "Whalan",
  "Dharruk",
  "Hebersham",
  "Emerton",
  "Lethbridge Park",
];

const reviews = [
  {
    name: "Hemaa Subramaniam",
    text: "I’m very grateful to the instructor for being patient, supportive, and professional throughout my lessons. Their clear explanations and calm attitude helped me build confidence and pass my test.",
  },
  {
    name: "kg anjalee umedi",
    text: "I passed my driving test. A huge thank you to Krishna for being such a patient, supportive, and professional instructor. The lessons were clear, easy to follow, and really helped me build confidence on the road.",
  },
  {
    name: "Krishna Vishnumolakala",
    text: "Krishna was extremely patient and was always on time and very supportive throughout the learning process. I truly appreciate him bringing his car for my driving test, which made the entire experience smooth and stress-free.",
  },
  {
    name: "Akila Nanayakkara",
    text: "I had an excellent experience learning to drive with Kirushna. His teaching methods are clear, patient, and very effective. Thanks to his guidance, I was able to build my confidence on the road and successfully pass my driving exam.",
  },
  {
    name: "Hasitha Kothalawala",
    text: "I successfully converted my international drivers license to NSW drivers license. I highly recommend LUXMY driving school for your test preparation. I got lessons for safe and critical driving skills needed on Aussie roads.",
  },
  {
    name: "Jalleni S.A",
    text: "I had the best experience with Luxmy Driving School! Instructor always had great knowledge and clear instructions. He was very polite and encouraged me at all times.",
  },
  {
    name: "Saikiran Rao",
    text: "Kirushna Nathan was incredibly patient, knowledgeable, and supportive. He made learning to drive a stress-free and enjoyable experience.",
  },
  {
    name: "Neha Singh",
    text: "Thank you for your patience and guidance in getting my full license. Really appreciate your advice and teaching techniques. Will definitely recommend you to family and friends.",
  },
  {
    name: "lakshmi vemuri",
    text: "Kirushna Anna is a very patient, calm and competent instructor. Very punctual and professional, he will go above and beyond to make the learner comfortable behind the wheel.",
  },
];

const faqs = [
  {
    q: "Do you offer automatic driving lessons?",
    a: "Yes. Luxmy Driving School offers automatic driving lessons for learners, refresher students and overseas licence holders across Rooty Hill, Pendle Hill and Western Sydney.",
  },
  {
    q: "Do you help with overseas licence conversion?",
    a: "Yes. Krishna helps overseas licence holders understand NSW road rules, correct local driving habits and prepare for the practical driving test.",
  },
  {
    q: "Do you prepare students for Blacktown driving test centre?",
    a: "Yes. Lessons can focus on Blacktown test preparation, observation checks, manoeuvres, parking, road positioning and common mistake areas.",
  },
  {
    q: "Do you prepare students for St Marys driving test centre?",
    a: "Yes. Luxmy Driving School helps students prepare for St Marys test conditions with safe driving habits, parking practice, school zone awareness and test-readiness coaching.",
  },
  {
    q: "Can I use your car on test day?",
    a: "Test day vehicle provision may be available with a warm-up lesson before the test, subject to Krishna’s availability and your test booking details.",
  },
  {
    q: "Do you guarantee a pass?",
    a: "No responsible driving school can guarantee a pass. Luxmy focuses on safe driving, proper preparation and helping students become confident and test-ready.",
  },
];

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center md:mb-12">
      <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-gold">{eyebrow}</p>
      <h2 className="font-display text-4xl font-black leading-[0.95] tracking-wide text-navy md:text-6xl">{title}</h2>
      {text ? <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">{text}</p> : null}
    </div>
  );
}

function Stars({ small = false }: { small?: boolean }) {
  return (
    <div className="flex items-center gap-1 text-gold" aria-label="5 star Google review">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} className={small ? "h-4 w-4 fill-current" : "h-5 w-5 fill-current"} />
      ))}
    </div>
  );
}

function CtaButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
      <a href={phoneHref} className={`btn-primary ${compact ? "px-5 py-3 text-sm" : "px-7 py-4 text-sm"}`}>
        <Phone className="h-4 w-4" /> Call Krishna
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className={`btn-whatsapp ${compact ? "px-5 py-3 text-sm" : "px-7 py-4 text-sm"}`}>
        <MessageCircle className="h-4 w-4" /> WhatsApp Krishna
      </a>
      <a href="#contact" className={`btn-secondary ${compact ? "px-5 py-3 text-sm" : "px-7 py-4 text-sm"}`}>
        <CalendarCheck className="h-4 w-4" /> Book Lesson
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Luxmy Driving School home">
            <div className="relative h-12 w-44 overflow-hidden sm:h-14 sm:w-56">
              <Image src="/luxmy-logo-transparent.png" alt="Luxmy Driving School official logo with Learn with Confidence tagline" fill className="object-contain" sizes="208px" priority />
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="text-sm font-bold text-slate-700 transition hover:text-gold">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={phoneHref} className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-navy transition hover:border-gold hover:text-gold sm:inline-flex">
              {phoneDisplay}
            </a>
            <a href="#contact" className="rounded-full bg-navy px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-navy/15 transition hover:bg-gold hover:text-navy sm:px-5 sm:text-sm">
              Book
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-site-gradient">
          <div className="absolute inset-0 road-glow" />
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 md:grid-cols-[1.05fr_0.95fr] md:py-16 lg:py-20">
            <div className="relative z-10 text-center md:text-left">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-navy shadow-sm">
                <BadgeCheck className="h-4 w-4 text-gold" /> 81 Google Reviews • 5-Star Rated
              </div>
              <h1 className="font-display text-[3.4rem] font-black leading-[0.88] tracking-wide text-navy sm:text-[4.7rem] lg:text-[6.4rem]">
                Learn to Drive with Confidence
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-700 md:mx-0 md:text-lg">
                Patient automatic driving lessons with Krishna in Rooty Hill, Pendle Hill, Blacktown, St Marys and Western Sydney. Overseas licence conversion, test preparation and test day vehicle support.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap md:justify-start justify-center">
                {["Automatic Lessons", "Overseas Licence", "Blacktown Test Prep", "St Marys Test Prep"].map((badge) => (
                  <a key={badge} href={badge.includes("Overseas") ? "#overseas-licence" : badge.includes("Blacktown") ? "#blacktown-test-centre" : badge.includes("St Marys") ? "#st-marys-test-centre" : "#automatic-lessons"} className="rounded-2xl border border-slate-200 bg-white px-3 py-2 text-center text-xs font-black text-navy shadow-sm transition hover:border-gold hover:bg-gold/10">
                    {badge}
                  </a>
                ))}
              </div>

              <div className="mt-7">
                <CtaButtons />
              </div>
            </div>

            <div className="relative z-10">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-navy/20">
                <Image src="/luxmy-brand-card.jpg" alt="Luxmy Driving School Krishna driving instructor Western Sydney promotional image" width={1280} height={778} className="h-auto w-full" priority />
              </div>
              <div className="mx-auto mt-4 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
                {trustItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-white bg-white/90 p-3 text-center shadow-lg shadow-navy/8 backdrop-blur">
                      <Icon className="mx-auto mb-2 h-5 w-5 text-gold" />
                      <p className="text-xs font-black text-navy">{item.title}</p>
                      <p className="mt-0.5 text-[10px] font-semibold text-slate-500">{item.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-soft-blue py-6">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 md:grid-cols-4">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-4 text-center shadow-sm md:justify-start">
                  <Icon className="h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="text-xs font-black text-navy md:text-sm">{item.title}</p>
                    <p className="text-[10px] font-semibold text-slate-500 md:text-xs">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section id="lessons" className="section-pad bg-soft-blue">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading
              eyebrow="Driving Lessons"
              title="Automatic Lessons, Test Prep & Licence Conversion"
              text="Choose the lesson type that matches your goal. Every card links to the correct section or booking area so students can move quickly from search to enquiry."
            />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:gap-5">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article id={service.id} key={service.id} className="premium-card group flex h-full flex-col items-center text-center">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/12 text-gold transition group-hover:bg-gold group-hover:text-navy md:h-14 md:w-14">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-black leading-tight text-navy md:text-xl">{service.title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 md:text-sm">{service.text}</p>
                    <a href="#contact" className="mt-auto pt-4 text-xs font-black uppercase tracking-wide text-gold underline decoration-gold/40 underline-offset-4 hover:text-navy">
                      {service.cta}
                    </a>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <CtaButtons compact />
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="Who We Help" title="Lessons for Every Stage" text="Krishna supports new learners, overseas licence holders, nervous drivers and students preparing for practical driving tests." />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {whoWeHelp.map((item) => {
                const Icon = item.icon;
                return (
                  <a href="#contact" key={item.title} className="rounded-3xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:border-gold hover:shadow-xl hover:shadow-navy/10">
                    <Icon className="mx-auto mb-3 h-7 w-7 text-gold" />
                    <p className="text-sm font-black text-navy">{item.title}</p>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <section id="overseas-licence" className="section-pad bg-soft-blue">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-2xl shadow-blue-900/10">
              <Globe2 className="mb-4 h-10 w-10 text-gold" />
              <h2 className="font-display text-4xl font-black leading-none tracking-wide text-navy md:text-6xl">Overseas Licence Conversion Lessons</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                If you already drive overseas, NSW road rules and practical test expectations can still be different. Krishna helps overseas licence holders correct local driving habits, understand NSW road rules and prepare for safe driving in Western Sydney.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Road positioning", "Blind spot checks", "Roundabouts", "School zones", "Lane changing", "Parking"].map((tag) => (
                  <span key={tag} className="rounded-full border border-sky-100 bg-soft-blue px-3 py-1.5 text-xs font-bold text-navy">{tag}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["NSW road rules", "Speed management", "Local test expectations", "Western Sydney roads"].map((item) => (
                <div key={item} className="rounded-3xl bg-white p-5 text-center shadow-xl shadow-black/10">
                  <ShieldCheck className="mx-auto mb-3 h-7 w-7 text-gold" />
                  <p className="text-sm font-black text-navy md:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="test-preparation" className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="Driving Test Preparation" title="Prepare for Blacktown & St Marys Test Centres" text="We help students prepare properly for practical driving tests by focusing on safe driving habits, test expectations and common mistake areas. No responsible driving school can guarantee a pass." />
            <div className="grid gap-4 md:grid-cols-2">
              {[{ id: "blacktown-test-centre", title: "Blacktown Driving Test Preparation", icon: MapPin }, { id: "st-marys-test-centre", title: "St Marys Driving Test Preparation", icon: Navigation }].map((centre) => {
                const Icon = centre.icon;
                return (
                  <article id={centre.id} key={centre.id} className="premium-card text-center md:text-left">
                    <Icon className="mx-auto mb-4 h-10 w-10 text-gold md:mx-0" />
                    <h3 className="font-display text-3xl font-black tracking-wide text-navy">{centre.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      Focused preparation covering local road conditions, observation checks, parking, intersections, roundabouts, school zones, lane positioning, mirror checks and safe decision making.
                    </p>
                    <a href="#contact" className="mt-5 inline-flex rounded-full bg-gold px-5 py-3 text-sm font-black text-navy transition hover:bg-navy hover:text-white">Book preparation lesson</a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="test-day-vehicle" className="section-pad bg-cream">
          <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-gold">Test Day Package</p>
              <h2 className="font-display text-4xl font-black leading-none tracking-wide text-navy md:text-6xl">Test Day Vehicle & Warm-Up Lesson</h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                Use the Luxmy Driving School vehicle for your practical test where available, with a warm-up lesson to settle nerves, practise final corrections and prepare confidently before your test at Blacktown or St Marys.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Instructor vehicle", "Warm-up lesson", "Final correction", "Subject to availability"].map((item) => (
                  <div key={item} className="rounded-2xl border border-slate-200 bg-white p-4 text-center text-sm font-black text-navy shadow-sm"><CheckCircle2 className="mx-auto mb-2 h-5 w-5 text-green-600" />{item}</div>
                ))}
              </div>
              <div className="mt-7"><CtaButtons compact /></div>
            </div>
            <div className="rounded-[2rem] border border-sky-100 bg-[#1557b0] p-6 text-white shadow-2xl shadow-blue-900/20">
              <TrafficCone className="mb-4 h-10 w-10 text-gold" />
              <h3 className="font-display text-4xl font-black tracking-wide">Before Your Driving Test Checklist</h3>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {checklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/12 p-3 text-sm font-semibold text-white">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="Common Test Mistakes" title="Driving Test Mistakes We Help You Fix" text="Krishna helps students identify and correct common issues before test day so they can drive more safely, confidently and test-ready." />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              {testMistakes.map((mistake) => (
                <div key={mistake} className="rounded-2xl border border-slate-200 bg-cream px-3 py-4 text-center text-xs font-black text-navy shadow-sm md:text-sm">
                  <TrafficCone className="mx-auto mb-2 h-5 w-5 text-gold" />{mistake}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about-krishna" className="section-pad bg-soft-blue">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white p-4 shadow-2xl shadow-black/20">
              <div className="flex aspect-[4/4.2] flex-col items-center justify-center rounded-[1.5rem] bg-gradient-to-br from-navy to-[#183568] text-center">
                <UserRound className="mb-5 h-20 w-20 text-gold" />
                <p className="text-xs font-black uppercase tracking-[0.24em] text-white/55">Instructor Photo</p>
                <h3 className="mt-2 font-display text-5xl font-black tracking-wide text-white">Krishna</h3>
                <p className="font-black text-gold">Driving Instructor</p>
              </div>
            </div>
            <div className="text-center lg:text-left">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-gold">About Your Instructor</p>
              <h2 className="font-display text-4xl font-black leading-none tracking-wide text-navy md:text-6xl">Learn with Krishna — Patient, Local & Test-Focused</h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-700 md:text-base">
                Krishna is the driving instructor at Luxmy Driving School, helping students learn with confidence through calm, clear and practical coaching. His lessons focus on safe driving habits, correct road positioning, confident decision making and real-world driving skills across Western Sydney.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                Whether you are a beginner, a nervous learner, an overseas licence holder or preparing for your practical test at Blacktown or St Marys, Krishna provides supportive automatic driving lessons designed to help you improve step by step.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {["Patient coaching", "Clear explanations", "Local road knowledge", "Test-day support"].map((item) => (
                  <div key={item} className="rounded-2xl border border-sky-100 bg-white p-4 text-center text-sm font-black text-navy shadow-sm"><Award className="mx-auto mb-2 h-5 w-5 text-gold" />{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad bg-cream">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="Local SEO Areas" title="Local Driving Lessons Near You" text="Short local pages on one fast landing page, internally linked for Rooty Hill, Pendle Hill, Blacktown and St Marys searches." />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-2 lg:grid-cols-4">
              {localSections.map((section) => (
                <article id={section.id} key={section.id} className="premium-card text-center">
                  <MapPin className="mx-auto mb-3 h-7 w-7 text-gold" />
                  <h3 className="text-lg font-black text-navy">{section.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{section.text}</p>
                  <a href="#contact" className="mt-4 inline-flex text-xs font-black uppercase tracking-wide text-gold underline underline-offset-4">Book in this area</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <SectionHeading eyebrow="Easy Booking" title="Book Your Lesson in 3 Simple Steps" />
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {[
                ["01", "Call or WhatsApp Krishna", "Discuss your lesson type, suburb and availability."],
                ["02", "Choose Your Lesson Type", "Automatic lesson, overseas licence conversion, test preparation or test day vehicle."],
                ["03", "Confirm Your Time", "Krishna will confirm availability and help you prepare with confidence."],
              ].map(([num, title, text], index) => (
                <div key={num} className={`premium-card text-center ${index === 2 ? "col-span-2 md:col-span-1" : ""}`}>
                  <p className="font-display text-4xl font-black text-gold">{num}</p>
                  <h3 className="mt-2 text-base font-black text-navy md:text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="service-areas" className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-8 max-w-3xl text-center">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-gold">Service Areas</p>
              <h2 className="font-display text-4xl font-black leading-none tracking-wide text-navy md:text-6xl">Rooty Hill, Pendle Hill & Western Sydney</h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">Compact service-area links for suburbs within approximately 10 km surrounding Pendle Hill and Rooty Hill.</p>
            </div>
            <div className="rounded-[2rem] border border-sky-100 bg-white p-4 shadow-lg shadow-blue-900/5 md:p-6 overflow-hidden">
              <div className="space-y-3" aria-label="Auto-scrolling service areas">
                {[0, 1].map((row) => (
                  <div key={row} className="marquee-row">
                    <div className={`marquee-track ${row === 1 ? "marquee-reverse" : ""}`}>
                      {[...suburbs, ...suburbs].map((suburb, index) => {
                        const href = suburb === "Rooty Hill" ? "#rooty-hill-driving-lessons" : suburb === "Pendle Hill" ? "#pendle-hill-driving-lessons" : suburb === "Blacktown" ? "#blacktown-test-centre" : suburb === "St Marys" ? "#st-marys-test-centre" : "#contact";
                        return (
                          <a key={`${row}-${suburb}-${index}`} href={href} className="service-chip">
                            <MapPin className="h-3.5 w-3.5 text-gold" /> {suburb}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="reviews" className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="rounded-[2.25rem] border border-sky-100 bg-white p-5 shadow-2xl shadow-blue-900/10 md:p-8 lg:p-10">
              <SectionHeading
                eyebrow="Google Reviews"
                title="5-Star Rated by Local Learners"
                text="81 Google reviews from students across Western Sydney. Students often mention Krishna’s calm teaching style, patience, clear explanations, punctuality and support with test preparation."
              />
              <div className="mb-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
                <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-3 shadow-sm">
                  <Stars />
                  <span className="text-sm font-black text-navy">5.0 Google Rating</span>
                </div>
                <a href={googleReviewUrl} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-navy shadow-sm transition hover:border-gold hover:bg-gold hover:text-navy">Read Google Reviews</a>
                <a href={googleReviewUrl} className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-black text-navy shadow-sm transition hover:border-gold hover:bg-gold hover:text-navy">Leave a Google Review</a>
              </div>
              <div className="review-marquee-row" aria-label="Auto-scrolling 5-star Google reviews">
                <div className="review-marquee-track">
                  {[...reviews, ...reviews].map((review, index) => (
                    <article key={`${review.name}-${index}`} className="review-card">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <Stars small />
                        <span className="rounded-full bg-gold/15 px-3 py-1 text-[11px] font-black uppercase tracking-wide text-gold">Google Review</span>
                      </div>
                      <p className="review-card-text">“{review.text}”</p>
                      <div className="mt-auto border-t border-white/20 pt-4">
                        <p className="font-black text-white">{review.name}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="mt-9 text-center"><a href="#contact" className="btn-primary px-7 py-4 text-sm"><Sparkles className="h-4 w-4" /> Book with Krishna</a></div>
            </div>
          </div>
        </section>

        <section id="faq" className="section-pad bg-soft-blue">
          <div className="mx-auto max-w-4xl px-4">
            <SectionHeading eyebrow="FAQ" title="Driving Lesson Questions" />
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="group rounded-3xl border border-slate-200 bg-cream p-5 open:bg-white open:shadow-lg open:shadow-navy/7">
                  <summary className="cursor-pointer list-none text-base font-black text-navy">{faq.q}</summary>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad bg-soft-blue">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="rounded-[2rem] border border-sky-100 bg-[#1557b0] p-6 text-white shadow-2xl shadow-blue-900/20">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.26em] text-gold">Contact</p>
              <h2 className="font-display text-5xl font-black leading-none tracking-wide">Book Your Driving Lesson</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">For fastest booking, call or message Krishna directly.</p>
              <div className="mt-6 space-y-3">
                <a href={phoneHref} className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 font-black text-white transition hover:bg-white hover:text-navy"><Phone className="h-5 w-5 text-gold" /> {phoneDisplay}</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 font-black text-white transition hover:bg-white hover:text-navy"><MessageCircle className="h-5 w-5 text-gold" /> WhatsApp Krishna</a>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white/8 p-4 font-black text-white transition hover:bg-white hover:text-navy"><ExternalLink className="h-5 w-5 text-gold" /> Facebook Page</a>
                <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 font-black text-white"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> 2/25 Acropolis Ave, Rooty Hill NSW 2766</div>
                <div className="flex items-start gap-3 rounded-2xl bg-white/8 p-4 font-black text-white"><BookOpenCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold" /> ACN 692 814 556</div>
              </div>
            </div>
            <form className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-navy/7 md:p-7">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ["Name", "text", "Your name"],
                  ["Phone", "tel", "0400 000 000"],
                  ["Suburb", "text", "Rooty Hill"],
                  ["Preferred Date/Time", "text", "Weekday afternoon"],
                ].map(([label, type, placeholder]) => (
                  <label key={label} className="text-sm font-black text-navy">
                    {label}
                    <input type={type} placeholder={placeholder} className="mt-2 w-full rounded-2xl border border-slate-200 bg-cream px-4 py-3 text-sm font-semibold text-navy outline-none transition focus:border-gold focus:bg-white" />
                  </label>
                ))}
                <label className="text-sm font-black text-navy">
                  Lesson Type
                  <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-cream px-4 py-3 text-sm font-semibold text-navy outline-none transition focus:border-gold focus:bg-white">
                    <option>Automatic Driving Lesson</option>
                    <option>Overseas Licence Conversion</option>
                    <option>Test Preparation</option>
                    <option>Test Day Vehicle</option>
                    <option>Refresher Lesson</option>
                    <option>Nervous Driver Lesson</option>
                  </select>
                </label>
                <label className="text-sm font-black text-navy">
                  Preferred Test Centre
                  <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-cream px-4 py-3 text-sm font-semibold text-navy outline-none transition focus:border-gold focus:bg-white">
                    <option>Blacktown</option>
                    <option>St Marys</option>
                    <option>Not sure / not booked yet</option>
                  </select>
                </label>
                <label className="text-sm font-black text-navy md:col-span-2">
                  Current Licence Status
                  <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-cream px-4 py-3 text-sm font-semibold text-navy outline-none transition focus:border-gold focus:bg-white">
                    <option>Learner licence</option>
                    <option>Overseas licence</option>
                    <option>Full licence refresher</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="text-sm font-black text-navy md:col-span-2">
                  Message
                  <textarea rows={4} placeholder="Tell us what you need help with" className="mt-2 w-full rounded-2xl border border-slate-200 bg-cream px-4 py-3 text-sm font-semibold text-navy outline-none transition focus:border-gold focus:bg-white" />
                </label>
              </div>
              <button type="button" className="btn-primary mt-5 w-full px-6 py-4 text-sm"><CalendarCheck className="h-4 w-4" /> Send Enquiry</button>
              <p className="mt-3 text-center text-xs font-semibold text-slate-500">Front-end form placeholder. For fastest booking, call or WhatsApp Krishna.</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer-blue px-4 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-8">
            <div className="col-span-2 text-center md:col-span-1 md:text-left">
              <div className="mx-auto mb-4 h-16 w-56 overflow-hidden md:mx-0">
                <Image src="/luxmy-logo-transparent.png" alt="Luxmy Driving School logo and Learn with Confidence tagline" width={2048} height={672} className="h-full w-full object-contain" />
              </div>
              <p className="font-display text-3xl font-black tracking-wide text-white">LUXMY Driving School</p>
              <p className="mt-1 text-sm font-bold text-gold">Learn with Confidence</p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">Automatic lessons, overseas licence conversion, test preparation and test day vehicle support in Western Sydney.</p>
              <p className="mt-3 text-sm font-black text-white">ACN 692 814 556</p>
            </div>

            <div className="text-left">
              <h3 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-gold">Quick Links</h3>
              <div className="grid gap-2 text-sm font-semibold text-white/75">
                {navLinks.map(([label, href]) => <a key={label} href={href} className="hover:text-gold">{label}</a>)}
              </div>
            </div>

            <div className="text-left">
              <h3 className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-gold">Services</h3>
              <div className="grid gap-2 text-sm font-semibold text-white/75">
                {services.slice(0, 6).map((s) => <a key={s.id} href={`#${s.id}`} className="hover:text-gold">{s.title}</a>)}
                <a href="#test-day-vehicle" className="hover:text-gold">Test Day Vehicle Hire</a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-center text-xs font-semibold text-white/55 md:flex md:items-center md:justify-between md:text-left">
            <p>© {new Date().getFullYear()} Luxmy Driving School. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed by <a href="https://totalbiz.com.au" target="_blank" rel="noopener noreferrer" className="font-black text-gold hover:text-white">TotalBiz</a></p>
          </div>
        </div>
      </footer>

    </>
  );
}
