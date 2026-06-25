// Section 11 — Testimonials (client:visible)
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "../../data/testimonials";
import { programs } from "../../data/programs";

const avatarColors = ["#f97316", "#3b82f6", "#22c55e", "#a855f7"];

function getProgramColor(programId: string) {
  const p = programs.find((x) => x.id === programId);
  return p?.color ?? "#059669";
}

function Initials({ name }: { name: string }) {
  const parts = name.replace("Pak ", "").replace("Bu ", "").split(" ");
  return <>{parts.map((p) => p[0]).join("").slice(0, 2).toUpperCase()}</>;
}

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="testimonials"
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
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#3ecf8e" }}>
            Hasil Nyata
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#222222" }}>
            Real People. Real Results.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#717171" }}>
            Bukan hasil instan — tapi sustainable. Cerita dari customer yang sudah merasakan bedanya.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-5 space-y-5">
          {testimonials.map((t, i) => {
            const color = t.program === "corporate" ? "#059669" : getProgramColor(t.program);
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                className="break-inside-avoid flex flex-col gap-4 p-6"
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "14px",
                  boxShadow: "0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)",
                }}
              >
                {/* Quote mark */}
                <span className="text-4xl leading-none font-black" style={{ color: `${color}30` }}>"</span>

                {/* Quote */}
                <p className="text-sm leading-relaxed" style={{ color: "#444" }}>
                  "{t.quote}"
                </p>

                {/* Result stat */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 22, delay: i * 0.1 + 0.3 }}
                  className="px-3 py-2 rounded-xl text-center"
                  style={{ backgroundColor: `${color}10`, border: `1px solid ${color}25` }}
                >
                  <p className="text-base font-black" style={{ color }}>
                    {t.result}
                  </p>
                </motion.div>

                {/* Author */}
                <div className="flex items-center gap-3 pt-1">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ backgroundColor: color }}
                  >
                    <Initials name={t.name} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#222" }}>
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "#717171" }}>
                      {t.program === "corporate"
                        ? "Corporate Client"
                        : programs.find((p) => p.id === t.program)?.name + " Program"}
                      {t.age ? `, ${t.age} tahun` : ""}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social proof bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5"
        >
          {[
            { stat: "2.000+", label: "Subscriber aktif" },
            { stat: "4.8/5", label: "Rating rata-rata" },
            { stat: "92%", label: "Perpanjang langganan" },
            { stat: "< 1%", label: "Complaint rate" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.5 + i * 0.08 }}
              className="text-center p-5 rounded-xl"
              style={{ backgroundColor: "#ffffff", border: "1px solid #ebebeb" }}
            >
              <p className="text-3xl font-black" style={{ color: "#059669" }}>
                {item.stat}
              </p>
              <p className="text-xs mt-1" style={{ color: "#717171" }}>
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
