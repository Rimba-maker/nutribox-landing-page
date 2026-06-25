// Section 4 — Program Plans (client:visible)
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { programs } from "../../data/programs";

function ProgramCard({
  program,
  index,
  visible,
}: {
  program: (typeof programs)[0];
  index: number;
  visible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
      className="flex flex-col gap-4 p-6 cursor-default h-full"
      style={{
        backgroundColor: "#ffffff",
        borderRadius: "14px",
        borderLeft: `4px solid ${program.color}`,
        boxShadow: "0 0 0.5px rgba(0,0,0,0.14), 0 1px 1px rgba(0,0,0,0.24)",
        transition: "box-shadow 0.25s ease",
      }}
    >
      {/* Icon + name */}
      <div className="flex items-start gap-3">
        <motion.span
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300, damping: 18 }}
          className="text-3xl leading-none"
        >
          {program.emoji}
        </motion.span>
        <div>
          <h3 className="font-bold text-base leading-snug" style={{ color: "#222222" }}>
            {program.name}
          </h3>
          <p className="text-xs mt-0.5 leading-snug" style={{ color: "#717171" }}>
            {program.tagline}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px" style={{ backgroundColor: "#f0f0f0" }} />

      {/* Stats */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: program.color }}
          />
          <span className="text-xs" style={{ color: "#717171" }}>
            {program.calories}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: program.color }}
          />
          <span className="text-xs" style={{ color: "#717171" }}>
            {program.highlight}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="inline-block w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: program.color }}
          />
          <span className="text-xs" style={{ color: "#717171" }}>
            {program.mealsPerDay}
          </span>
        </div>
      </div>

      {/* Sample menu */}
      <div className="mt-auto pt-2">
        <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "#717171" }}>
          Contoh menu
        </p>
        <ul className="flex flex-col gap-1">
          {program.sample.map((s) => (
            <li
              key={s}
              className="text-xs leading-snug py-1.5 px-2 rounded-md"
              style={{ backgroundColor: "#f9f9f8", color: "#444" }}
            >
              {s}
            </li>
          ))}
        </ul>
      </div>

      {/* Pill tag */}
      <span
        className="self-start text-xs font-semibold px-3 py-1 rounded-full mt-1"
        style={{
          backgroundColor: `${program.color}18`,
          color: program.color,
        }}
      >
        {program.name}
      </span>
    </motion.div>
  );
}

export default function ProgramPlans() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const topRow = programs.slice(0, 3);
  const bottomRow = programs.slice(3);

  return (
    <section
      id="program-plans"
      ref={ref}
      style={{ backgroundColor: "#f2f0eb" }}
      className="py-20 md:py-28"
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
            Program Diet
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold leading-tight mb-4"
            style={{ color: "#222222" }}
          >
            Pilih Program Sesuai Goalmu.
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "#717171" }}>
            5 program berbeda, semua dirancang untuk result yang nyata — bukan
            sekadar kenyang.
          </p>
        </motion.div>

        {/* Top row — 3 cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
          {topRow.map((program, i) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={i}
              visible={isInView}
            />
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="grid sm:grid-cols-2 gap-5 lg:w-2/3 lg:mx-auto">
          {bottomRow.map((program, i) => (
            <ProgramCard
              key={program.id}
              program={program}
              index={i + 3}
              visible={isInView}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="text-center mt-14"
        >
          <p className="text-sm mb-4" style={{ color: "#717171" }}>
            Tidak yakin program mana yang cocok? Isi konsultasi singkat 5 menit
            — kami rekomendasikan yang tepat.
          </p>
          <motion.a
            href="#subscribe-form"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-7 h-12 text-sm font-semibold"
            style={{ backgroundColor: "#3ecf8e", color: "#0e0f0c", borderRadius: "50px" }}
          >
            🩺 Konsultasi Gratis Program
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
