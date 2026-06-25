// Section 13 — FAQ (client:visible)
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { faqs } from "../../data/faq";
import { IconPlus, IconMinus } from "@tabler/icons-react";

function FAQItem({ item, index, visible }: { item: { question: string; answer: string }; index: number; visible: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.06 }}
      className="rounded-xl overflow-hidden"
      style={{ border: `1px solid ${open ? "#3ecf8e" : "#e5e5e5"}`, transition: "border-color 0.2s" }}
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
        style={{ backgroundColor: open ? "rgba(62,207,142,0.04)" : "#ffffff" }}
      >
        <span className="text-sm font-semibold leading-snug" style={{ color: "#222" }}>
          {item.question}
        </span>
        <div
          className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ backgroundColor: open ? "#3ecf8e" : "#f2f0eb" }}
        >
          {open
            ? <IconMinus size={14} stroke={2.5} color="#ffffff" />
            : <IconPlus size={14} stroke={2.5} color="#717171" />
          }
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4" style={{ backgroundColor: "rgba(62,207,142,0.02)" }}>
              <div className="h-px mb-3" style={{ backgroundColor: "#e5e5e5" }} />
              <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      ref={ref}
      className="py-12 md:py-28"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_1.6fr] gap-16 items-start">

          {/* Left — header + contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="lg:sticky lg:top-24"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#3ecf8e" }}>
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: "#222222" }}>
              Ada Pertanyaan?
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#717171" }}>
              Jawaban untuk pertanyaan yang paling sering kami terima. Tidak ketemu jawabannya? Chat kami langsung.
            </p>

            <div
              className="p-5 rounded-xl"
              style={{ backgroundColor: "#f2f0eb", border: "1px solid #e0ded9" }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: "#222" }}>
                Masih ada pertanyaan lain?
              </p>
              <p className="text-xs mb-4" style={{ color: "#717171" }}>
                Tim kami siap bantu via WhatsApp, setiap hari 08.00–21.00.
              </p>
              <a
                href="https://wa.me/"
                className="inline-flex items-center gap-2 px-5 h-10 text-sm font-semibold rounded-full"
                style={{ backgroundColor: "#3ecf8e", color: "#0e0f0c" }}
              >
                💬 Chat WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right — accordion */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <FAQItem key={faq.question} item={faq} index={i} visible={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
