// Section 3 — Why NutriBox (client:visible)
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { IconClock, IconTarget, IconLeaf, IconStethoscope } from "@tabler/icons-react";

const cards = [
  {
    Icon: IconClock,
    title: "Hemat 2 Jam Per Hari",
    body: "Rata-rata orang menghabiskan 2 jam sehari untuk belanja, masak, dan beres-beres. Dengan NutriBox, 2 jam itu bisa kamu pakai untuk hal lain — atau tidur yang cukup.",
  },
  {
    Icon: IconTarget,
    title: "Kalori Sudah Dihitung",
    body: "Tidak perlu timbang nasi atau scan barcode. Setiap box NutriBox sudah dihitung makronya — kalori, protein, karbohidrat, dan lemak. Tersedia di label dan aplikasi kami.",
  },
  {
    Icon: IconLeaf,
    title: "Bahan Segar, Dimasak Hari Ini",
    body: "Tidak ada frozen food yang dihangatkan ulang. Semua dimasak pagi hari dan dikirim fresh. Sayur dari supplier lokal, protein berkualitas, tanpa pengawet.",
  },
  {
    Icon: IconStethoscope,
    title: "Dirancang Ahli Gizi",
    body: 'Setiap program NutriBox dirancang bersama Registered Dietitian. Bukan "menu diet dari internet" — ini meal plan berbasis evidence.',
  },
];

function ReasonCard({
  card,
  index,
  sectionVisible,
}: {
  card: (typeof cards)[0];
  index: number;
  sectionVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={sectionVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.12)" }}
      className="flex flex-col gap-4 p-6 cursor-default"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "14px",
        boxShadow: "0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)",
        transition: "box-shadow 0.25s ease",
      }}
    >
      <motion.div
        whileHover={{ scale: 1.15 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        style={{ backgroundColor: "rgba(62,207,142,0.08)" }}
      >
        <card.Icon size={24} stroke={1.5} color="#059669" />
      </motion.div>

      <h3 className="text-lg font-bold leading-snug min-h-[52px] flex items-start" style={{ color: "#222222" }}>
        {card.title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#717171" }}>
        {card.body}
      </p>
    </motion.div>
  );
}

export default function WhyNutriBox() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="why-nutribox"
      ref={ref}
      style={{ backgroundColor: "#f2f0eb" }}
      className="py-12 md:py-28"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="max-w-2xl mb-12"
        >
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#3ecf8e" }}
          >
            Kenapa NutriBox?
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#222222" }}
          >
            Kenapa Meal Prep Delivery
            <br />
            Adalah Solusinya?
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#717171" }}>
            Bukan soal males masak. Ini soal tidak punya waktu untuk makan sehat
            secara konsisten.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <ReasonCard
              key={card.title}
              card={card}
              index={i}
              sectionVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
