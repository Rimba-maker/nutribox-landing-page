// Section 14 — Subscribe Form (client:idle)
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { programs } from "../../data/programs";

type Step = 1 | 2 | 3;

const plans = [
  { id: "trial", label: "Trial 5 Hari", price: "Rp 425k" },
  { id: "weekly-5", label: "Mingguan 5 Hari", price: "Rp 800k/minggu" },
  { id: "weekly-7", label: "Mingguan 7 Hari", price: "Rp 1.050k/minggu" },
  { id: "monthly", label: "Bulanan 22 Hari", price: "Rp 3,1 jt/bulan" },
  { id: "premium", label: "Premium Plus", price: "Rp 3,9 jt/bulan" },
];

const slots = [
  { id: "pagi", label: "🌅 Slot Pagi (06.30–07.30)" },
  { id: "siang", label: "🌞 Slot Siang (11.00–12.00)" },
  { id: "all", label: "📦 All-at-once (semua pagi)" },
];

const stepTitles: Record<Step, string> = {
  1: "Pilih Program",
  2: "Pilih Paket",
  3: "Data & Delivery",
};

const slide = {
  initial: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  animate: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
};

export default function SubscribeForm() {
  const [step, setStep] = useState<Step>(1);
  const [dir, setDir] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [selectedProgram, setSelectedProgram] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "", slot: "", notes: "",
  });

  const goTo = (next: Step) => {
    setDir(next > step ? 1 : -1);
    setStep(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const program = programs.find((p) => p.id === selectedProgram);
  const plan = plans.find((p) => p.id === selectedPlan);

  if (submitted) {
    return (
      <section id="subscribe-form" className="py-20 md:py-28" style={{ backgroundColor: "#f2f0eb" }}>
        <div className="max-w-[560px] mx-auto px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
          >
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#222" }}>
              Pendaftaran Diterima!
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#717171" }}>
              Tim kami akan menghubungi kamu via WhatsApp dalam 1×24 jam untuk konfirmasi dan jadwal pengiriman pertama.
            </p>
            <div className="p-4 rounded-xl text-left" style={{ backgroundColor: "#fff", border: "1px solid #ebebeb" }}>
              <p className="text-xs font-semibold mb-2" style={{ color: "#717171" }}>Ringkasan pesanan:</p>
              <p className="text-sm font-medium" style={{ color: "#222" }}>{program?.emoji} {program?.name} · {plan?.label}</p>
              <p className="text-xs mt-1" style={{ color: "#717171" }}>a.n. {form.name} · {form.phone}</p>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="subscribe-form" className="py-20 md:py-28" style={{ backgroundColor: "#f2f0eb" }}>
      <div className="max-w-[640px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#3ecf8e" }}>
            Subscribe
          </p>
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#222" }}>
            Mulai Perjalanan Sehatmu Hari Ini.
          </h2>
          <p className="text-sm" style={{ color: "#717171" }}>
            Tidak perlu commit panjang. Mulai dengan trial 5 hari — cukup untuk merasakan bedanya.
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {([1, 2, 3] as Step[]).map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300"
                style={{
                  backgroundColor: step >= s ? "#3ecf8e" : "#e5e5e5",
                  color: step >= s ? "#fff" : "#717171",
                }}
              >
                {step > s ? "✓" : s}
              </div>
              <span className="text-xs hidden sm:block" style={{ color: step === s ? "#222" : "#aaa" }}>
                {stepTitles[s]}
              </span>
              {s < 3 && <div className="w-8 h-px mx-1" style={{ backgroundColor: step > s ? "#3ecf8e" : "#e5e5e5" }} />}
            </div>
          ))}
        </div>

        {/* Form card */}
        <div className="p-6 md:p-8 rounded-2xl overflow-hidden" style={{ backgroundColor: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
          <AnimatePresence mode="wait" custom={dir}>
            {/* Step 1 — Program */}
            {step === 1 && (
              <motion.div key="step1" custom={dir} variants={slide} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.28 }}>
                <p className="text-sm font-semibold mb-4" style={{ color: "#222" }}>Pilih program yang sesuai goalmu:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {programs.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedProgram(p.id)}
                      className="flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-200"
                      style={{
                        border: `2px solid ${selectedProgram === p.id ? p.color : "#e5e5e5"}`,
                        backgroundColor: selectedProgram === p.id ? `${p.color}08` : "#fafafa",
                      }}
                    >
                      <span className="text-xl">{p.emoji}</span>
                      <div>
                        <p className="text-sm font-semibold" style={{ color: "#222" }}>{p.name}</p>
                        <p className="text-xs mt-0.5" style={{ color: "#717171" }}>{p.calories}</p>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => selectedProgram && goTo(2)}
                  className="w-full h-11 text-sm font-semibold rounded-full transition-opacity"
                  style={{ backgroundColor: "#3ecf8e", color: "#0e0f0c", opacity: selectedProgram ? 1 : 0.4, cursor: selectedProgram ? "pointer" : "not-allowed" }}
                >
                  Lanjut Pilih Paket →
                </button>
              </motion.div>
            )}

            {/* Step 2 — Plan */}
            {step === 2 && (
              <motion.div key="step2" custom={dir} variants={slide} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.28 }}>
                <p className="text-sm font-semibold mb-4" style={{ color: "#222" }}>
                  Pilih durasi langganan untuk{" "}
                  <span style={{ color: program?.color }}>{program?.emoji} {program?.name}</span>:
                </p>
                <div className="flex flex-col gap-3 mb-6">
                  {plans.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => setSelectedPlan(p.id)}
                      className="flex items-center justify-between p-4 rounded-xl text-left transition-all duration-200"
                      style={{
                        border: `2px solid ${selectedPlan === p.id ? "#3ecf8e" : "#e5e5e5"}`,
                        backgroundColor: selectedPlan === p.id ? "rgba(62,207,142,0.04)" : "#fafafa",
                      }}
                    >
                      <span className="text-sm font-medium" style={{ color: "#222" }}>{p.label}</span>
                      <span className="text-sm font-bold" style={{ color: selectedPlan === p.id ? "#059669" : "#717171" }}>{p.price}</span>
                    </button>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button onClick={() => goTo(1)} className="flex-1 h-11 text-sm font-medium rounded-full" style={{ border: "1.5px solid #e5e5e5", color: "#717171" }}>
                    ← Kembali
                  </button>
                  <button
                    onClick={() => selectedPlan && goTo(3)}
                    className="flex-[2] h-11 text-sm font-semibold rounded-full transition-opacity"
                    style={{ backgroundColor: "#3ecf8e", color: "#0e0f0c", opacity: selectedPlan ? 1 : 0.4, cursor: selectedPlan ? "pointer" : "not-allowed" }}
                  >
                    Lanjut Isi Data →
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3 — Personal details */}
            {step === 3 && (
              <motion.div key="step3" custom={dir} variants={slide} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.28 }}>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold block mb-1.5" style={{ color: "#555" }}>Nama Lengkap *</label>
                      <input
                        required
                        type="text"
                        placeholder="Budi Santoso"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full h-10 px-3 text-sm outline-none transition-all"
                        style={{ border: "1.5px solid #e5e5e5", borderRadius: "10px", backgroundColor: "#fafafa" }}
                        onFocus={(e) => (e.target.style.borderColor = "#3ecf8e")}
                        onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold block mb-1.5" style={{ color: "#555" }}>WhatsApp *</label>
                      <input
                        required
                        type="tel"
                        placeholder="08xxxxxxxxxx"
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        className="w-full h-10 px-3 text-sm outline-none transition-all"
                        style={{ border: "1.5px solid #e5e5e5", borderRadius: "10px", backgroundColor: "#fafafa" }}
                        onFocus={(e) => (e.target.style.borderColor = "#3ecf8e")}
                        onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "#555" }}>Email</label>
                    <input
                      type="email"
                      placeholder="budi@email.com"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full h-10 px-3 text-sm outline-none transition-all"
                      style={{ border: "1.5px solid #e5e5e5", borderRadius: "10px", backgroundColor: "#fafafa" }}
                      onFocus={(e) => (e.target.style.borderColor = "#3ecf8e")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "#555" }}>Alamat Delivery *</label>
                    <textarea
                      required
                      rows={2}
                      placeholder="Jl. Contoh No. 1, Padang"
                      value={form.address}
                      onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                      className="w-full px-3 py-2.5 text-sm outline-none resize-none transition-all"
                      style={{ border: "1.5px solid #e5e5e5", borderRadius: "10px", backgroundColor: "#fafafa" }}
                      onFocus={(e) => (e.target.style.borderColor = "#3ecf8e")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-2" style={{ color: "#555" }}>Slot Delivery *</label>
                    <div className="flex flex-col gap-2">
                      {slots.map((s) => (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, slot: s.id }))}
                          className="text-left px-4 py-3 text-sm rounded-xl transition-all"
                          style={{
                            border: `1.5px solid ${form.slot === s.id ? "#3ecf8e" : "#e5e5e5"}`,
                            backgroundColor: form.slot === s.id ? "rgba(62,207,142,0.04)" : "#fafafa",
                            color: "#222",
                          }}
                        >
                          {s.label}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold block mb-1.5" style={{ color: "#555" }}>Catatan (alergi, preferensi)</label>
                    <textarea
                      rows={2}
                      placeholder="Misal: tidak suka pete, alergi udang..."
                      value={form.notes}
                      onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                      className="w-full px-3 py-2.5 text-sm outline-none resize-none transition-all"
                      style={{ border: "1.5px solid #e5e5e5", borderRadius: "10px", backgroundColor: "#fafafa" }}
                      onFocus={(e) => (e.target.style.borderColor = "#3ecf8e")}
                      onBlur={(e) => (e.target.style.borderColor = "#e5e5e5")}
                    />
                  </div>

                  {/* Summary */}
                  <div className="p-4 rounded-xl text-sm" style={{ backgroundColor: "#f2f0eb", border: "1px solid #e0ded9" }}>
                    <p className="font-semibold mb-1" style={{ color: "#222" }}>Ringkasan pesanan:</p>
                    <p style={{ color: "#444" }}>{program?.emoji} {program?.name} · {plan?.label} · <strong style={{ color: "#059669" }}>{plan?.price}</strong></p>
                  </div>

                  <div className="flex gap-3 mt-2">
                    <button type="button" onClick={() => goTo(2)} className="flex-1 h-11 text-sm font-medium rounded-full" style={{ border: "1.5px solid #e5e5e5", color: "#717171" }}>
                      ← Kembali
                    </button>
                    <button type="submit" className="flex-[2] h-11 text-sm font-semibold rounded-full" style={{ backgroundColor: "#3ecf8e", color: "#0e0f0c" }}>
                      Subscribe Sekarang 🎉
                    </button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WhatsApp alternative */}
        <p className="text-xs text-center mt-5" style={{ color: "#717171" }}>
          Lebih nyaman via WhatsApp?{" "}
          <a href="https://wa.me/" className="font-semibold underline" style={{ color: "#3ecf8e" }}>
            Chat langsung dengan tim kami
          </a>
        </p>
      </div>
    </section>
  );
}
