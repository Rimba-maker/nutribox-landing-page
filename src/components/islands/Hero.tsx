// Section 2 — Hero (client:load)
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconStethoscope, IconLeaf, IconShieldCheck, IconUsers } from "@tabler/icons-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const trustBadges = [
  { Icon: IconStethoscope, label: "Diracik Ahli Gizi (RD)" },
  { Icon: IconLeaf, label: "Bahan Segar Tiap Hari" },
  { Icon: IconShieldCheck, label: "Bebas Pengawet & MSG" },
];

function useCounter(target: number, duration = 1600) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return count;
}

export default function Hero() {
  const count = useCounter(2000, 1800);

  return (
    <section
      id="hero"
      style={{ backgroundColor: "#134e4a" }}
      className="relative overflow-hidden"
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ backgroundColor: "#3ecf8e" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-10"
        style={{ backgroundColor: "#059669" }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">

        {/* Left — copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{ backgroundColor: "rgba(62,207,142,0.3)", color: "#6ee7b7" }}
            >
              🥗 Meal Prep Delivery Padang
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white"
          >
            Makan Sehat
            <br />
            Setiap Hari.
            <br />
            <span style={{ color: "#6ee7b7" }}>Tanpa Masak.</span>
            <br />
            <span style={{ color: "#6ee7b7" }}>Tanpa Hitung Kalori.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-base md:text-lg leading-relaxed max-w-md"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Meal prep bergizi yang dikirim langsung ke rumah atau kantor. Kalori
            terhitung, bahan segar, dimasak oleh ahli gizi kami. Tinggal buka
            — langsung makan.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <a
              href="#program-plans"
              className="inline-flex items-center justify-center px-6 h-12 text-sm font-semibold transition-transform duration-150 active:scale-95"
              style={{
                backgroundColor: "#ffffff",
                color: "#134e4a",
                borderRadius: "50px",
              }}
            >
              Pilih Program Diet
            </a>
            <a
              href="#sample-menu"
              className="inline-flex items-center justify-center px-6 h-12 text-sm font-semibold border transition-all duration-150 hover:bg-white/10"
              style={{
                color: "#ffffff",
                borderColor: "rgba(255,255,255,0.4)",
                borderRadius: "50px",
              }}
            >
              Lihat Sample Menu
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={item} className="flex flex-wrap gap-2 pt-2">
            {trustBadges.map((badge) => (
              <span
                key={badge.label}
                className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.85)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                <badge.Icon size={13} stroke={2} /> {badge.label}
              </span>
            ))}
            {/* Counter badge */}
            <span
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: "rgba(110,231,183,0.12)",
                color: "#6ee7b7",
                border: "1px solid rgba(110,231,183,0.2)",
              }}
            >
              <IconUsers size={13} stroke={2} />{" "}
              <span className="font-bold tabular-nums">
                {count.toLocaleString("id-ID")}+
              </span>{" "}
              Subscriber Aktif
            </span>
          </motion.div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative"
        >
          {/* Image card */}
          <div
            className="overflow-hidden shadow-2xl"
            style={{ borderRadius: "20px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&q=80"
              alt="Healthy meal prep NutriBox"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              loading="eager"
            />
          </div>

          {/* Floating nutrition card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            className="absolute -bottom-5 -left-5 px-4 py-3 shadow-xl"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "16px",
              minWidth: "180px",
            }}
          >
            <p className="text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
              Weight Loss Plan — Hari ini
            </p>
            <div className="flex gap-3">
              <div className="text-center">
                <p className="text-lg font-bold leading-none" style={{ color: "#059669" }}>
                  1.460
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#717171" }}>kkal</p>
              </div>
              <div className="w-px" style={{ backgroundColor: "#dddddd" }} />
              <div className="text-center">
                <p className="text-lg font-bold leading-none" style={{ color: "#059669" }}>
                  81g
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#717171" }}>protein</p>
              </div>
              <div className="w-px" style={{ backgroundColor: "#dddddd" }} />
              <div className="text-center">
                <p className="text-lg font-bold leading-none" style={{ color: "#059669" }}>
                  3x
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#717171" }}>makan</p>
              </div>
            </div>
          </motion.div>

          {/* Floating delivery badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
            className="absolute -top-4 -right-4 px-4 py-2 shadow-lg"
            style={{ backgroundColor: "#3ecf8e", borderRadius: "50px" }}
          >
            <p className="text-xs font-semibold" style={{ color: "#0e0f0c" }}>🚚 Free Delivery Padang</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom wave divider */}
      <div className="w-full overflow-hidden leading-none" style={{ marginBottom: "-2px" }}>
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "60px" }}
        >
          <path
            d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
            fill="#f2f0eb"
          />
        </svg>
      </div>
    </section>
  );
}
