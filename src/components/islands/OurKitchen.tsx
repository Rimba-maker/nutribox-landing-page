// Section 9 — Our Kitchen (client:visible)
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconBuildingFactory2, IconShieldCheck, IconSnowflake, IconChefHat } from "@tabler/icons-react";

const standards = [
  {
    Icon: IconBuildingFactory2,
    title: "Central Kitchen 200 m²",
    body: "Dedicated production kitchen — bukan dapur rumahan. Kapasitas besar, standar industri.",
  },
  {
    Icon: IconShieldCheck,
    title: "HACCP Certified",
    body: "Hazard Analysis Critical Control Points — standar keamanan pangan internasional. Bukan klaim, ada sertifikatnya.",
  },
  {
    Icon: IconSnowflake,
    title: "Cold Chain Management",
    body: "Dari dapur ke tanganmu, suhu selalu terjaga. Tidak ada jeda yang membiarkan makanan di zona bahaya.",
  },
  {
    Icon: IconChefHat,
    title: "Tim Ahli Gizi + Chef",
    body: "Kolaborasi nutrisi dan rasa — bukan pilih salah satu. Makanan sehat yang enak dimakan.",
  },
];

const certBadges = [
  { label: "HACCP Certified", color: "#059669" },
  { label: "Halal Certified", color: "#059669" },
  { label: "BPOM Compliant", color: "#3b82f6" },
  { label: "Registered Dietitian", color: "#a855f7" },
  { label: "ISO 22000", color: "#f97316" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop&q=80",
    alt: "Central kitchen NutriBox",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=600&h=300&fit=crop&q=80",
    alt: "Food preparation",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1484980972926-edee96e0960d?w=600&h=300&fit=crop&q=80",
    alt: "Clean kitchen equipment",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&h=400&fit=crop&q=80",
    alt: "Chef preparing healthy food",
    tall: true,
  },
];

export default function OurKitchen() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="our-kitchen"
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
          className="max-w-2xl mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#3ecf8e" }}>
            Dapur Kami
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#222222" }}>
            Dari Dapur Bersih,
            <br />
            Ke Meja Makanmu.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#717171" }}>
            Kami tidak titip produksi ke luar. Semua dimasak di central kitchen
            kami — yang bisa kamu kunjungi.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Gallery */}
          <div className="grid grid-cols-2 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                className={`relative overflow-hidden group ${img.tall ? "row-span-2" : ""}`}
                style={{ borderRadius: "14px", aspectRatio: img.tall ? "3/4" : "4/3" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
                >
                  <p className="text-white text-xs font-medium">{img.alt}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — Standards + certs */}
          <div className="flex flex-col gap-6">
            {/* Standard items */}
            {standards.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
                className="flex gap-4 items-start p-5"
                style={{
                  backgroundColor: "#f9f9f8",
                  borderRadius: "14px",
                  border: "1px solid #ebebeb",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(62,207,142,0.1)" }}
                >
                  <s.Icon size={20} stroke={1.5} color="#059669" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-sm mb-1" style={{ color: "#222" }}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#717171" }}>
                    {s.body}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Certification badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="p-5"
              style={{
                backgroundColor: "#f2f0eb",
                borderRadius: "14px",
                border: "1px solid #e0ded9",
              }}
            >
              <p className="text-xs font-semibold mb-3 uppercase tracking-wide" style={{ color: "#717171" }}>
                Sertifikasi & Standar
              </p>
              <div className="flex flex-wrap gap-2">
                {certBadges.map((badge, i) => (
                  <motion.span
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ type: "spring", stiffness: 300, damping: 22, delay: 0.5 + i * 0.08 }}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full"
                    style={{
                      backgroundColor: `${badge.color}12`,
                      color: badge.color,
                      border: `1px solid ${badge.color}30`,
                    }}
                  >
                    ✓ {badge.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Kitchen visit CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="flex items-center gap-4 p-4 rounded-2xl"
              style={{ backgroundColor: "#134e4a" }}
            >
              <span className="text-2xl">🏠</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">Mau lihat dapurnya langsung?</p>
                <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Kitchen visit tersedia setiap Sabtu pagi. Hubungi kami untuk jadwal.
                </p>
              </div>
              <a
                href="https://wa.me/"
                className="shrink-0 text-xs font-semibold px-4 py-2 rounded-full transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#3ecf8e", color: "#ffffff" }}
              >
                Book Visit
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
