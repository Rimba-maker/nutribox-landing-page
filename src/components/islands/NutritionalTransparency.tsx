// Section 6 — Nutritional Transparency (client:visible)
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconChartBar, IconLeaf, IconMicroscope } from "@tabler/icons-react";

const labelLines = [
  { label: "Kalori", value: "520 kkal", bold: true },
  { label: "Protein", value: "35g", bold: false },
  { label: "Karbohidrat", value: "58g", bold: false },
  { label: "  Serat", value: "6g", bold: false, sub: true },
  { label: "Lemak", value: "12g", bold: false },
  { label: "  Lemak Jenuh", value: "2g", bold: false, sub: true },
  { label: "Sodium", value: "480mg", bold: false },
];

const macros = [
  { label: "Protein", value: 35, unit: "g", max: 50, color: "#3b82f6", pct: 70 },
  { label: "Karbohidrat", value: 58, unit: "g", max: 275, color: "#f97316", pct: 21 },
  { label: "Lemak", value: 12, unit: "g", max: 78, color: "#a855f7", pct: 15 },
  { label: "Serat", value: 6, unit: "g", max: 28, color: "#22c55e", pct: 21 },
];

const commitments = [
  {
    Icon: IconChartBar,
    title: "Nutrition facts di setiap box",
    body: "Scan QR code untuk info lengkap — kalori, makro, sampai bahan per gram.",
  },
  {
    Icon: IconLeaf,
    title: "Ingredient list tersedia",
    body: "Tahu apa yang masuk ke tubuhmu. Tidak ada yang disembunyikan.",
  },
  {
    Icon: IconMicroscope,
    title: "Diverifikasi ahli gizi",
    body: "Bukan klaim sembarangan — setiap angka diverifikasi Registered Dietitian.",
  },
];

// Minimal QR-like grid
function QRPlaceholder() {
  return (
    <div
      className="w-16 h-16 grid grid-cols-8 gap-px p-1"
      style={{ backgroundColor: "#222", borderRadius: "6px" }}
    >
      {Array.from({ length: 64 }).map((_, i) => (
        <div
          key={i}
          style={{
            backgroundColor: Math.random() > 0.45 ? "#222" : "#fff",
            borderRadius: "1px",
          }}
        />
      ))}
    </div>
  );
}

export default function NutritionalTransparency() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="nutritional-transparency"
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
          className="max-w-2xl mb-14"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#3ecf8e" }}
          >
            Transparansi Nutrisi
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#222222" }}
          >
            Kamu Berhak Tahu
            <br />
            Apa Yang Kamu Makan.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#717171" }}>
            Setiap box NutriBox punya label nutrisi lengkap. Tidak ada yang
            disembunyikan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Nutrition label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div
              className="p-6 max-w-sm"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                border: "2px solid #222222",
                boxShadow: "0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)",
              }}
            >
              {/* Label header */}
              <div className="border-b-8 border-black pb-2 mb-2">
                <p className="text-2xl font-black leading-none" style={{ color: "#222" }}>
                  Nutrition Facts
                </p>
              </div>
              <p className="text-xs mb-1" style={{ color: "#444" }}>
                1 porsi per box
              </p>
              <p className="text-xs font-bold mb-1" style={{ color: "#444" }}>
                Ukuran porsi: 1 box (±420g)
              </p>
              <div className="border-t-4 border-black pt-1 mb-2">
                <p className="text-xs" style={{ color: "#444" }}>
                  Jumlah per porsi
                </p>
              </div>

              {/* Name banner */}
              <div
                className="text-center py-2 mb-3 rounded-md"
                style={{ backgroundColor: "#134e4a" }}
              >
                <p className="text-xs font-bold text-white tracking-wider uppercase">
                  NutriBox — Ayam Panggang Nasi Merah
                </p>
              </div>

              {/* Nutrient rows */}
              <div className="flex flex-col divide-y" style={{ borderColor: "#e5e5e5" }}>
                {labelLines.map((line, i) => (
                  <motion.div
                    key={line.label}
                    initial={{ opacity: 0, x: -8 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                    className="flex justify-between items-center py-1.5"
                  >
                    <span
                      className={`text-sm ${line.sub ? "pl-4" : ""}`}
                      style={{
                        color: "#222",
                        fontWeight: line.bold ? 700 : 400,
                        fontSize: line.bold ? "18px" : "13px",
                      }}
                    >
                      {line.label}
                    </span>
                    <span
                      className="text-sm font-semibold tabular-nums"
                      style={{ color: "#222", fontSize: line.bold ? "18px" : "13px" }}
                    >
                      {line.value}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t-4 border-black mt-3 pt-3">
                <p className="text-xs leading-relaxed" style={{ color: "#555" }}>
                  <span className="font-semibold">Bahan:</span> Nasi merah (150g), dada
                  ayam tanpa kulit (120g), buncis (80g), tomat, bawang putih, olive oil
                </p>
                <p className="text-xs mt-1.5 font-semibold" style={{ color: "#059669" }}>
                  ✓ Bebas MSG · ✓ Bebas Pengawet · ✓ Bebas Pewarna Buatan
                </p>
              </div>

              {/* QR code row */}
              <div className="flex items-center gap-3 mt-4 pt-3 border-t" style={{ borderColor: "#e5e5e5" }}>
                <motion.div
                  animate={{ scale: [1, 1.04, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <QRPlaceholder />
                </motion.div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: "#222" }}>
                    Scan untuk info lengkap
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#717171" }}>
                    Allergen · Sumber bahan · Sertifikasi
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Macros + commitments */}
          <div className="flex flex-col gap-8">
            {/* Macro progress bars */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              className="p-6"
              style={{
                backgroundColor: "#ffffff",
                borderRadius: "14px",
                boxShadow: "0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)",
              }}
            >
              <p className="text-sm font-bold mb-5" style={{ color: "#222" }}>
                % Kecukupan Gizi Harian
              </p>
              <div className="flex flex-col gap-5">
                {macros.map((macro, i) => (
                  <div key={macro.label}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-medium" style={{ color: "#222" }}>
                        {macro.label}
                      </span>
                      <span className="text-sm font-bold tabular-nums" style={{ color: macro.color }}>
                        {macro.value}{macro.unit}
                        <span className="text-xs font-normal ml-1" style={{ color: "#717171" }}>
                          ({macro.pct}% AKG)
                        </span>
                      </span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: "#f0f0f0" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: macro.color }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${macro.pct}%` } : {}}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 + i * 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs mt-4" style={{ color: "#717171" }}>
                *AKG = Angka Kecukupan Gizi. Berdasarkan kebutuhan 2.000 kkal/hari.
              </p>
            </motion.div>

            {/* Commitments */}
            <div className="flex flex-col gap-4">
              {commitments.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + i * 0.1 }}
                  className="flex gap-4 items-start p-4"
                  style={{
                    backgroundColor: "#ffffff",
                    borderRadius: "14px",
                    boxShadow: "0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)",
                  }}
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(62,207,142,0.08)" }}>
                    <c.Icon size={18} stroke={1.5} color="#059669" />
                  </div>
                  <div>
                    <p className="text-sm font-bold mb-1" style={{ color: "#222" }}>
                      {c.title}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: "#717171" }}>
                      {c.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
