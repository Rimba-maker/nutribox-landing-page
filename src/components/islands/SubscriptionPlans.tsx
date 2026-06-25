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
      className="py-20 md:py-28"
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

        {/* Plan cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {plans.slice(0, 3).map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i} visible={isInView} />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 gap-5 lg:w-2/3 lg:mx-auto mb-10">
          {plans.slice(3).map((plan, i) => (
            <PlanCard key={plan.id} plan={plan} index={i + 3} visible={isInView} />
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
      whileHover={{ y: -5, boxShadow: isFeatured ? "0 20px 48px rgba(203,162,88,0.2)" : "0 12px 32px rgba(0,0,0,0.10)" }}
      className="relative flex flex-col gap-4 p-6"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "14px",
        border: isFeatured ? "2px solid #cba258" : "1px solid #ebebeb",
        boxShadow: isFeatured
          ? "0 4px 24px rgba(203,162,88,0.15)"
          : "0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)",
        transition: "box-shadow 0.25s ease",
      }}
    >
      {/* Badge */}
      {plan.badge && (
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={visible ? { scale: 1, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 400, damping: 20, delay: index * 0.07 + 0.3 }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-bold rounded-full whitespace-nowrap"
          style={{ backgroundColor: "#cba258", color: "#ffffff" }}
        >
          {plan.badge}
        </motion.div>
      )}

      {/* Header */}
      <div className="flex items-start gap-3 pt-2">
        <span className="text-2xl">{plan.emoji}</span>
        <div>
          <h3 className="font-bold text-base leading-snug" style={{ color: "#222" }}>{plan.name}</h3>
          <p className="text-xs mt-0.5" style={{ color: "#717171" }}>{plan.tagline}</p>
        </div>
      </div>

      {/* Price */}
      <div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={visible ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.07 + 0.2 }}
          className="text-3xl font-black leading-none"
          style={{ color: isFeatured ? "#cba258" : "#059669" }}
        >
          {formatRp(plan.price)}
        </motion.p>
        <p className="text-xs mt-1" style={{ color: "#717171" }}>
          {plan.unit}
          {plan.perDay && ` · Rp ${(plan.perDay / 1000).toFixed(0)}k/hari`}
        </p>
        {plan.savings && (
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={visible ? { scale: 1, opacity: 1 } : {}}
            transition={{ type: "spring", stiffness: 350, damping: 22, delay: index * 0.07 + 0.35 }}
            className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mt-2"
            style={{ backgroundColor: "rgba(62,207,142,0.1)", color: "#3ecf8e" }}
          >
            🎉 {plan.savings}
          </motion.span>
        )}
      </div>

      {/* Divider */}
      <div className="h-px" style={{ backgroundColor: "#f0f0f0" }} />

      {/* Perks */}
      <ul className="flex flex-col gap-2 flex-1">
        {plan.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2 text-sm" style={{ color: "#444" }}>
            <span className="mt-0.5 shrink-0" style={{ color: "#3ecf8e" }}>✓</span>
            {perk}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#subscribe-form"
        className="mt-2 inline-flex items-center justify-center h-10 text-sm font-semibold transition-transform duration-150 active:scale-95"
        style={{
          backgroundColor: isFeatured ? "#cba258" : "#3ecf8e",
          color: "#ffffff",
          borderRadius: "50px",
        }}
      >
        Pilih Paket Ini
      </a>
    </motion.div>
  );
}
