// Section 5 — Sample Menu (client:visible)
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { weeklyMenu } from "../../data/menu";

function useCountTo(target: number, trigger: number) {
  const [val, setVal] = useState(target);
  const prev = useRef(target);

  useEffect(() => {
    const from = prev.current;
    prev.current = target;
    if (from === target) return;

    let raf: number;
    const start = performance.now();
    const dur = 500;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setVal(Math.round(from + (target - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, trigger]);

  return val;
}

export default function SampleMenu() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeDay, setActiveDay] = useState(0);

  const day = weeklyMenu[activeDay]!;
  const totalCal = day.items.reduce((s, i) => s + i.calories, 0);
  const totalProtein = day.items.reduce((s, i) => s + i.protein, 0);

  const calDisplay = useCountTo(totalCal, activeDay);
  const protDisplay = useCountTo(totalProtein, activeDay);

  return (
    <section
      id="sample-menu"
      ref={ref}
      className="py-20 md:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-2xl mb-10"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#3ecf8e" }}
          >
            Sample Menu
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#222222" }}
          >
            Menu Minggu Ini.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#717171" }}>
            Ganti setiap minggu. Tidak ada yang bosan, karena menunya selalu fresh.
          </p>
        </motion.div>

        {/* Day tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex gap-2 mb-8 overflow-x-auto pb-1 scrollbar-hide"
        >
          {weeklyMenu.map((d, i) => (
            <button
              key={d.day}
              onClick={() => setActiveDay(i)}
              className="relative shrink-0 px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200"
              style={{
                color: activeDay === i ? "#ffffff" : "#717171",
                zIndex: 1,
              }}
            >
              {activeDay === i && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: "#3ecf8e" }}
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{d.day}</span>
            </button>
          ))}
        </motion.div>

        {/* Menu cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
          >
            {day.items.map((item, i) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="flex flex-col overflow-hidden"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                  boxShadow: "0 0 0.5px rgba(0,0,0,0.10), 0 1px 2px rgba(0,0,0,0.08)",
                }}
              >
                {/* Food photo */}
                <div className="relative overflow-hidden" style={{ height: "160px" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Meal time badge */}
                  <div
                    className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: "rgba(19,78,74,0.85)", backdropFilter: "blur(4px)" }}
                  >
                    <span className="text-sm leading-none">{item.emoji}</span>
                    <span className="text-xs font-semibold text-white uppercase tracking-wide">
                      {item.time}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3 p-4">
                  <p
                    className="text-sm font-medium leading-snug flex-1"
                    style={{ color: "#222222" }}
                  >
                    {item.name}
                  </p>

                  {/* Nutrition pills */}
                  <div className="flex gap-2 flex-wrap">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(62,207,142,0.08)", color: "#059669" }}
                    >
                      {item.calories} kkal
                    </span>
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: "rgba(59,130,246,0.08)", color: "#2563eb" }}
                    >
                      {item.protein}g protein
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Total bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 rounded-2xl"
          style={{
            backgroundColor: "#134e4a",
          }}
        >
          <p className="text-sm font-semibold text-white">
            Total {day.day} · Weight Loss Program
          </p>
          <div className="flex gap-6">
            <div className="text-center">
              <p
                className="text-2xl font-bold tabular-nums leading-none"
                style={{ color: "#6ee7b7" }}
              >
                {calDisplay.toLocaleString("id-ID")}
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                kkal/hari
              </p>
            </div>
            <div className="w-px" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
            <div className="text-center">
              <p
                className="text-2xl font-bold tabular-nums leading-none"
                style={{ color: "#6ee7b7" }}
              >
                {protDisplay}g
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                protein/hari
              </p>
            </div>
            <div className="w-px" style={{ backgroundColor: "rgba(255,255,255,0.15)" }} />
            <div className="text-center">
              <p
                className="text-2xl font-bold leading-none text-white"
              >
                {day.items.length}x
              </p>
              <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
                waktu makan
              </p>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <p className="text-xs text-center mt-4" style={{ color: "#717171" }}>
          ✨ Menu di atas untuk Weight Loss Program. Setiap program punya menu yang berbeda dan disesuaikan dengan kebutuhan kalorinya.
        </p>
      </div>
    </section>
  );
}
