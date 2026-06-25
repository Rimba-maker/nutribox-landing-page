// Section 8 — Subscription Plans (client:visible)
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { programs } from "../../data/programs";

const plans = [
  {
    id: "trial",
    emoji: "🌱",
    name: "Trial 5 Hari",
    tagline: "Coba dulu sebelum commit",
    price: 425000,
    unit: "5 hari",
    perDay: 85000,
    savings: null,
    badge: null,
    perks: ["3x makan/hari", "Senin–Jumat", "Free tote bag NutriBox", "Delivery pagi atau all-at-once"],
  },
  {
    id: "weekly-5",
    emoji: "🌿",
    name: "Mingguan 5 Hari",
    tagline: "Untuk yang mulai konsisten",
    price: 800000,
    unit: "per minggu",
    perDay: 160000,
    savings: null,
    badge: null,
    perks: ["Senin–Jumat, 3x makan/hari", "Free water tracker NutriBox", "Pause H-2 sebelum minggu berikutnya"],
  },
  {
    id: "weekly-7",
    emoji: "🌿",
    name: "Mingguan 7 Hari",
    tagline: "Termasuk sabtu & minggu",
    price: 1050000,
    unit: "per minggu",
    perDay: 150000,
    savings: null,
    badge: null,
    perks: ["7 hari, 3x makan/hari", "Rp 150k/hari", "Cocok untuk yang full-week"],
  },
  {
    id: "monthly",
    emoji: "🌳",
    name: "Bulanan 22 Hari",
    tagline: "Hasil paling nyata di sini",
    price: 3100000,
    unit: "per bulan",
    perDay: 140000,
    savings: "Hemat 17% vs trial",
    badge: "⭐ Terlaris",
    perks: [
      "22 hari kerja, 3x makan/hari",
      "Konsultasi ahli gizi 1x/bulan",
      "Progress tracking sheet",
      "Priority delivery slot",
      "Pause hingga 4 hari/bulan",
    ],
  },
  {
    id: "premium",
    emoji: "💎",
    name: "Premium Plus",
    tagline: "All-in, tidak ada yang perlu difikirin",
    price: 3900000,
    unit: "per bulan",
    perDay: null,
    savings: null,
    badge: null,
    perks: [
      "Semua benefit Bulanan +",
      "2x snack sehat/hari",
      "Konsultasi ahli gizi 2x/bulan",
      "Personalized nutrition report",
      "WhatsApp support nutrisi",
    ],
  },
  {
    id: "annual",
    emoji: "👑",
    name: "Tahunan",
    tagline: "Komitmen terbaik, harga terbaik",
    price: 29900000,
    unit: "per tahun",
    perDay: 113000,
    savings: "Hemat 20% vs bulanan",
    badge: null,
    perks: [
      "264 hari kerja, 3x makan/hari",
      "Semua benefit Premium Plus",
      "2 bulan gratis vs bayar bulanan",
      "Dedicated nutrition consultant",
      "Annual meal planning report",
    ],
  },
];

const addons = [
  { label: "Snack box tambahan", price: "+Rp 30k/hari" },
  { label: "Upgrade porsi 150% kalori", price: "+Rp 20k/hari" },
  { label: "Jus cold press add-on", price: "+Rp 28k/hari" },
];

function formatRp(n: number) {
  if (n >= 1000000) return `Rp ${(n / 1000000).toFixed(1).replace(".", ",")} jt`;
  return `Rp ${(n / 1000).toFixed(0)}k`;
}

export default function SubscriptionPlans() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeProgram, setActiveProgram] = useState(0);
  const [addonOpen, setAddonOpen] = useState(false);

  const program = programs[activeProgram]!;

  return (
    <section
      id="subscription-plans"
      ref={ref}
      className="py-12 md:py-28"
      style={{ backgroundColor: "#f2f0eb" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-2xl mb-10"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#3ecf8e" }}>
            Harga & Paket
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#222222" }}>
            Pilih Paket Yang Cocok.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#717171" }}>
            Semakin lama berlangganan, semakin hemat. Dan semakin konsisten, semakin nyata hasilnya.
          </p>
        </motion.div>

        {/* Program selector */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-3"
        >
          <p className="text-xs font-semibold mb-3" style={{ color: "#717171" }}>
            Pilih program kamu:
          </p>
          <div className="flex gap-2 overflow-x-auto pb-1 flex-wrap">
            {programs.map((p, i) => (
              <button
                key={p.id}
                onClick={() => setActiveProgram(i)}
                className="relative shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 border"
                style={{
                  color: activeProgram === i ? "#ffffff" : "#717171",
                  borderColor: activeProgram === i ? p.color : "#dddddd",
                  backgroundColor: activeProgram === i ? p.color : "transparent",
                }}
              >
                {p.emoji} {p.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Selected program note */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="mb-8 text-sm"
            style={{ color: "#717171" }}
          >
            Program dipilih:{" "}
            <span className="font-semibold" style={{ color: program.color }}>
              {program.emoji} {program.name}
            </span>{" "}
            — {program.tagline}.
          </motion.div>
        </AnimatePresence>

        {/* Plan cards — horizontal scroll on mobile, grid on md+ */}
        <div className="flex items-stretch gap-4 overflow-x-auto pb-3 -mx-6 px-6 snap-x snap-mandatory md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 mb-10">
          {plans.map((plan, i) => (
            <div key={plan.id} className="shrink-0 w-72 md:w-auto snap-start md:h-auto">
              <PlanCard plan={plan} index={i} visible={isInView} />
            </div>
          ))}
        </div>

        {/* Add-ons accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="rounded-2xl overflow-hidden"
          style={{ border: "1px solid #dddddd", backgroundColor: "#ffffff" }}
        >
          <button
            onClick={() => setAddonOpen((o) => !o)}
            className="w-full flex items-center justify-between px-6 py-4 text-left"
          >
            <span className="font-semibold text-sm" style={{ color: "#222" }}>
              ➕ Opsi Tambahan (Add-on)
            </span>
            <motion.span
              animate={{ rotate: addonOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="text-xs"
              style={{ color: "#717171" }}
            >
              ▼
            </motion.span>
          </button>
          <AnimatePresence>
            {addonOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 flex flex-col gap-3">
                  <div className="h-px" style={{ backgroundColor: "#ebebeb" }} />
                  {addons.map((a) => (
                    <div key={a.label} className="flex items-center justify-between">
                      <span className="text-sm" style={{ color: "#444" }}>{a.label}</span>
                      <span className="text-sm font-semibold" style={{ color: "#059669" }}>{a.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a
            href="#subscribe-form"
            className="inline-flex items-center gap-2 px-8 h-13 text-sm font-semibold transition-transform duration-150 active:scale-95"
            style={{ backgroundColor: "#3ecf8e", color: "#0e0f0c", borderRadius: "50px", height: "52px" }}
          >
            Subscribe Sekarang →
          </a>
          <p className="text-xs mt-3" style={{ color: "#717171" }}>
            Atau{" "}
            <a href="https://wa.me/" className="underline" style={{ color: "#3ecf8e" }}>
              WhatsApp Konsultasi
            </a>{" "}
            kalau belum yakin pilih paket mana.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlanCard({ plan, index, visible }: { plan: (typeof plans)[0]; index: number; visible: boolean }) {
  const isFeatured = plan.badge === "⭐ Terlaris";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.07 }}
      whileHover={{ y: -4 }}
      className="flex flex-col h-full overflow-hidden"
      style={{
        borderRadius: "16px",
        backgroundColor: isFeatured ? "#134e4a" : "#ffffff",
        border: isFeatured ? "none" : "1px solid #ebebeb",
        boxShadow: isFeatured
          ? "0 8px 32px rgba(19,78,74,0.28)"
          : "0 0 0.5px rgba(0,0,0,0.14), 0 1px 4px rgba(0,0,0,0.08)",
      }}
    >
      {/* Featured header band */}
      {isFeatured && (
        <div
          className="flex items-center justify-between px-6 py-3"
          style={{ backgroundColor: "rgba(62,207,142,0.18)" }}
        >
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "#6ee7b7" }}>
            ⭐ Terlaris
          </span>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
            style={{ backgroundColor: "#3ecf8e", color: "#0e0f0c" }}
          >
            Hemat 17%
          </span>
        </div>
      )}

      {/* Card body */}
      <div className="flex flex-col flex-1 gap-5 p-6">
        {/* Plan name + tagline */}
        <div className="flex items-start gap-3">
          <span className="text-2xl leading-none mt-0.5">{plan.emoji}</span>
          <div>
            <h3 className="font-bold text-base leading-snug" style={{ color: isFeatured ? "#ffffff" : "#222" }}>
              {plan.name}
            </h3>
            <p className="text-xs mt-0.5" style={{ color: isFeatured ? "rgba(255,255,255,0.6)" : "#717171" }}>
              {plan.tagline}
            </p>
          </div>
        </div>

        {/* Price */}
        <div>
          <p className="text-4xl font-black leading-none tabular-nums" style={{ color: isFeatured ? "#6ee7b7" : "#059669" }}>
            {formatRp(plan.price)}
          </p>
          <p className="text-xs mt-1.5" style={{ color: isFeatured ? "rgba(255,255,255,0.5)" : "#717171" }}>
            {plan.unit}
            {plan.perDay && ` · Rp ${(plan.perDay / 1000).toFixed(0)}k/hari`}
          </p>
        </div>

        {/* Divider */}
        <div className="h-px" style={{ backgroundColor: isFeatured ? "rgba(255,255,255,0.1)" : "#f0f0f0" }} />

        {/* Perks */}
        <ul className="flex flex-col gap-2.5 flex-1">
          {plan.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-sm leading-snug" style={{ color: isFeatured ? "rgba(255,255,255,0.82)" : "#444" }}>
              <span className="mt-px shrink-0 font-bold text-xs" style={{ color: isFeatured ? "#6ee7b7" : "#3ecf8e" }}>✓</span>
              {perk}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#subscribe-form"
          className="inline-flex items-center justify-center h-11 text-sm font-semibold transition-transform duration-150 active:scale-95"
          style={{
            backgroundColor: isFeatured ? "#3ecf8e" : "rgba(62,207,142,0.1)",
            color: isFeatured ? "#0e0f0c" : "#059669",
            borderRadius: "50px",
          }}
        >
          {isFeatured ? "Mulai Sekarang →" : "Pilih Paket Ini"}
        </a>
      </div>
    </motion.div>
  );
}
