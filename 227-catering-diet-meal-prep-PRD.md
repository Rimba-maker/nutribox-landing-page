# PRD: NutriBox — Catering Diet & Meal Prep Sehat

## 1. Brand Identity

**Nama Brand:** NutriBox
**Alasan Naming:** "Nutri" = nutrisi/gizi, "Box" = kotak meal prep yang dikirim. Langsung communicate produk (meal delivery) + value proposition (bergizi). Modern, clean, mudah diingat, terdengar health-tech friendly. Cocok untuk positioning di segmen health-conscious urban.

**Tagline:** *"Makan Sehat Itu Gampang. Tinggal Buka, Langsung Makan."*

**Target Audience:**
- Profesional sibuk yang tidak ada waktu masak tapi mau makan sehat
- Yang sedang diet (weight loss, low carb, kalori terhitung)
- Ibu muda post-pregnancy (turun berat badan setelah melahirkan)
- Atlet & fitness enthusiast (high protein, macro-tracked)
- Penderita diabetes, kolesterol, atau hipertensi (menu medis)
- Corporate karyawan (order makan siang sehat untuk kantor)
- SES B sampai A, usia 22-45, urban, health-conscious

**Brand Voice:**
- Tone: Supportive, science-backed tapi accessible, encouraging (bukan judging)
- Style copywriting: Practical, data-driven (kalori, protein, karbo), relatable tanpa toxic positivity
- Avoid: Body shaming, diet culture toxic, "kurus cepat dalam 7 hari"

---

## 2. Tech Stack

- **Framework:** Astro 5 (SSG)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript (strict)
- **Animation:** Framer Motion via React islands
- **Deploy:** Netlify (static)
- **Images:** Unsplash + Pexels (clean healthy food, meal prep, fresh ingredients)

---

## 3. Section Breakdown

| # | Section | Type | Tujuan |
|---|---------|------|--------|
| 1 | Navbar | `.astro` static | Logo clean, nav, CTA "Mulai Sekarang" |
| 2 | Hero | React island `client:load` | Clean food photography + value prop |
| 3 | Why NutriBox | React island `client:visible` | 4 alasan kenapa meal prep delivery |
| 4 | Program Plans | React island `client:visible` | 5 program diet spesifik |
| 5 | Sample Menu | React island `client:visible` | Showcase menu minggu ini |
| 6 | Nutritional Transparency | React island `client:visible` | Setiap makanan ada nutrition facts |
| 7 | How It Works | `.astro` static | 3 langkah mudah |
| 8 | Subscription Plans | React island `client:visible` | Paket harian/mingguan/bulanan |
| 9 | Our Kitchen | React island `client:visible` | Dapur bersih & certified |
| 10 | Delivery Coverage | `.astro` static | Area delivery & jadwal |
| 11 | Testimonial & Results | React island `client:visible` | Before/after cerita customer |
| 12 | Corporate Meal Plan | `.astro` static | Paket untuk kantor |
| 13 | FAQ | React island `client:visible` | FAQ diet & langganan |
| 14 | CTA Subscribe | React island `client:idle` | Form subscribe meal plan |
| 15 | Footer | `.astro` static | Kontak, sosmed, sertifikasi |

---

## 4. Copywriting

### Navbar
- Menu: Program • Menu • Harga • Corporate • Blog
- CTA: **Mulai Meal Plan**

### Hero
- **Headline:** Makan Sehat Setiap Hari. Tanpa Masak. Tanpa Hitung Kalori.
- **Subheadline:** Meal prep bergizi yang dikirim langsung ke rumah atau kantor. Kalori terhitung, bahan segar, dimasak oleh ahli gizi kami. Tinggal buka — langsung makan.
- **CTA Primary:** Pilih Program Diet
- **CTA Secondary:** Lihat Sample Menu

Trust badges: "Diracik Ahli Gizi (RD)" • "Bahan Segar Tiap Hari" • "Bebas Pengawet & MSG" • "2.000+ Subscriber Aktif"

### Why NutriBox
- **Heading:** Kenapa Meal Prep Delivery Adalah Solusinya?
- **Subheading:** Bukan soal males masak. Ini soal tidak punya waktu untuk makan sehat secara konsisten.

4 reason cards:

**⏰ Hemat 2 Jam Per Hari**
Rata-rata orang menghabiskan 2 jam sehari untuk belanja, masak, dan beres-beres. Dengan NutriBox, 2 jam itu bisa kamu pakai untuk hal lain — atau tidur yang cukup.

**🎯 Kalori Sudah Dihitung**
Tidak perlu timbang nasi atau scan barcode. Setiap box NutriBox sudah dihitung makronya — kalori, protein, karbohidrat, dan lemak. Tersedia di label dan aplikasi kami.

**🥦 Bahan Segar, Dimasak Hari Ini**
Tidak ada frozen food yang dihangatkan ulang. Semua dimasak pagi hari dan dikirim fresh. Sayur dari supplier lokal, protein berkualitas, tanpa pengawet.

**🧑‍⚕️ Dirancang Ahli Gizi**
Setiap program NutriBox dirancang bersama Registered Dietitian. Bukan "menu diet dari internet" — ini meal plan berbasis evidence.

### Program Plans
- **Heading:** Pilih Program Sesuai Goalmu.
- **Subheading:** 5 program berbeda, semua dirancang untuk result yang nyata — bukan sekadar kenyang.

Grid 5 program cards:

**🔥 Weight Loss Program**
*Target: turun berat badan secara sustainable*
- 1.200–1.500 kkal/hari
- High fiber, low refined carb
- Protein adequate untuk jaga muscle
- 3x makan + 1x snack/hari
- Sample: Nasi merah ayam panggang + salad, Oat overnight + buah, Ikan kukus bayam bawang putih

**💪 High Protein Program**
*Target: muscle building & body recomposition*
- 1.800–2.200 kkal/hari
- Protein 30–35% dari total kalori
- Complex carb untuk energi latihan
- 3x makan + 2x protein snack/hari
- Sample: Grilled chicken breast + quinoa, Egg white omelette + ubi rebus, Salmon bowl + edamame

**🩺 Diabetic Friendly Program**
*Target: kontrol gula darah — cocok untuk diabetes tipe 2 & pre-diabetes*
- Low GI food only
- Refined sugar free
- Portion-controlled carb
- Disupervisi rekomendasi dokter gizi
- 3x makan + 2x snack rendah gula/hari

**❤️ Healthy Heart Program**
*Target: kontrol kolesterol & tekanan darah*
- Low sodium, low saturated fat
- High omega-3 (ikan, flaxseed)
- Fiber tinggi untuk LDL
- Cocok untuk kolesterol tinggi & hipertensi
- 3x makan + 1x snack/hari

**🤰 Post-Partum Recovery**
*Target: ibu menyusui & recovery pasca melahirkan*
- Kalori adequate untuk produksi ASI (1.800–2.000 kkal)
- Tinggi kalsium, zat besi, dan folat
- Anti-inflammatory ingredients
- Tanpa pantangan berlebihan — berbasis evidence, bukan mitos
- 3x makan + 2x snack/hari

*Tidak yakin program mana yang cocok? Isi konsultasi singkat 5 menit — kami rekomendasikan yang tepat.*

**CTA:** Konsultasi Gratis Program

### Sample Menu
- **Heading:** Menu Minggu Ini.
- **Subheading:** Ganti setiap minggu. Tidak ada yang bosan, karena menunya selalu fresh.

Tab hari: Senin • Selasa • Rabu • Kamis • Jumat • Sabtu • Minggu

**Contoh hari Senin (Weight Loss Program):**

| Waktu | Menu | Kalori | Protein |
|-------|------|--------|---------|
| 🌅 Sarapan | Overnight oats + chia seed + blueberry | 380 kkal | 14g |
| 🌞 Makan Siang | Nasi merah 150g + ayam panggang + buncis tumis + sambal tomat | 520 kkal | 35g |
| 🌙 Makan Malam | Sup ayam sayuran + tahu kukus + nasi merah 100g | 380 kkal | 28g |
| 🍌 Snack | Apple + almond 15 butir | 180 kkal | 4g |
| **Total** | | **1.460 kkal** | **81g protein** |

Per menu card: foto makanan + nama menu + nutrition facts ringkas

### Nutritional Transparency
- **Heading:** Kamu Berhak Tahu Apa Yang Kamu Makan.
- **Subheading:** Setiap box NutriBox punya label nutrisi lengkap. Tidak ada yang disembunyikan.

Visual nutrition label sample:

```
NUTRIBOX — AYAM PANGGANG NASI MERAH
──────────────────────────────────
Kalori: 520 kkal
Protein: 35g
Karbohidrat: 58g (serat: 6g)
Lemak: 12g (jenuh: 2g)
Sodium: 480mg
──────────────────────────────────
Bahan: Nasi merah (150g), dada ayam
tanpa kulit (120g), buncis (80g),
tomat, bawang putih, olive oil
Bebas: MSG, pengawet, pewarna buatan
```

3 komitmen transparansi:
- 📊 **Nutrition facts di setiap box** — scan QR code untuk info lengkap
- 🌿 **Ingredient list tersedia** — tahu apa yang masuk ke tubuhmu
- 🔬 **Diverifikasi ahli gizi** — bukan klaim sembarangan

### How It Works
- **Heading:** Semudah 3 Langkah.
- Timeline:

1. **🎯 Pilih Program & Durasi** — Sesuaikan dengan goal dan budget. Bisa mulai dari 5 hari trial.
2. **📦 Kami Siapkan & Kirim** — Dimasak pagi hari, dikirim ke alamatmu sesuai slot yang dipilih.
3. **🥗 Buka & Makan** — Makananmu sudah siap. Tidak perlu masak, tidak perlu hitung kalori.

### Subscription Plans
- **Heading:** Pilih Paket Yang Cocok.
- **Subheading:** Semakin lama berlangganan, semakin hemat. Dan semakin konsisten, semakin nyata hasilnya.

**Pilih dulu program:** (toggle/tab) Weight Loss • High Protein • Diabetic • Healthy Heart • Post-Partum

Kemudian pilih paket:

**🌱 Trial 5 Hari — Rp 425k**
*Coba dulu sebelum commit*
- 5 hari makan (Senin–Jumat)
- 3x makan/hari (breakfast, lunch, dinner)
- Rp 85k/hari
- Free: tote bag NutriBox
- Delivery: setiap pagi atau all-at-once hari Senin

**🌿 Mingguan 5 Hari — Rp 800k/minggu**
*Untuk yang mulai konsisten*
- Senin–Jumat, 3x makan/hari
- Rp 160k/hari (hemat vs trial)
- Free: water tracker NutriBox
- Pause bisa H-2 sebelum minggu berikutnya

**🌿 Mingguan 7 Hari — Rp 1.050k/minggu**
*Termasuk sabtu & minggu*
- 7 hari, 3x makan/hari
- Rp 150k/hari

**🌳 Bulanan (22 hari) — Rp 3.1 jt/bulan** ⭐ Terlaris
*Hasil paling nyata di sini*
- 22 hari kerja, 3x makan/hari
- Rp 140k/hari (hemat 17% vs trial)
- Free: konsultasi ahli gizi 1x per bulan
- Free: progress tracking sheet
- Priority delivery slot
- Pause hingga 4 hari per bulan

**💎 Premium Plus (22 hari + snack) — Rp 3.9 jt/bulan**
*All-in, tidak ada yang perlu difikirin*
- Semua Bulanan +
- 2x snack sehat/hari
- Konsultasi ahli gizi 2x/bulan
- Personalized nutrition report bulanan
- WhatsApp support untuk tanya nutrisi

**Opsi tambahan:**
- Tambah snack box: +Rp 30k/hari
- Upgrade ukuran porsi (150% kalori): +Rp 20k/hari
- Jus cold press add-on: +Rp 28k/hari

### Our Kitchen
- **Heading:** Dari Dapur Bersih, Ke Meja Makanmu.
- **Subheading:** Kami tidak titip produksi ke luar. Semua dimasak di central kitchen kami — yang bisa kamu kunjungi.

4 kitchen standards:
- 🏭 **Central Kitchen 200 m²** — Dedicated, bukan dapur rumahan
- 🧼 **HACCP Certified** — Standar keamanan pangan internasional
- ❄️ **Cold Chain Management** — Dari dapur ke tanganmu, suhu terjaga
- 👨‍🍳 **Tim Ahli Gizi + Chef** — Kolaborasi gizi dan rasa, bukan pilih salah satu

Gallery dapur: clean, bright, professional — bukan gelap dan sempit.

### Delivery Coverage
- **Heading:** Delivery Ke Mana?
- Area: (sesuaikan dengan lokasi bisnis)
  - ✅ **Padang & Koto Tangah** — Free delivery
  - ✅ **Pauh, Lubuk Begalung, Nanggalo** — Free delivery
  - ✅ **Kuranji, Kecamatan Padang Utara** — Free delivery
  - ✅ **Padang Pariaman (area tertentu)** — +Rp 15k
  - 📞 Luar area: hubungi kami

**Jadwal delivery:**
- Slot Pagi: 06.30 – 07.30 (untuk sarapan + bekal kantor)
- Slot Siang: 11.00 – 12.00 (untuk makan siang kantor)
- Atau all-at-once (semua makanan sehari dikirim pagi)

### Testimonial & Results
- **Heading:** Real People. Real Results.
- **Subheading:** Bukan hasil instan — tapi sustainable.

4 testimonial dengan foto (opsional before/after) dan stats:

> "3 bulan langganan Weight Loss program. Turun 8 kg tanpa nahan lapar, tanpa diet ekstrim. Makannya enak-enak malah. Yang penting konsisten." — **Rina, 31 tahun, -8 kg dalam 3 bulan**

> "Saya penderita diabetes tipe 2. Sejak pakai Diabetic Friendly plan, gula darah lebih stabil. Dokter saya bahkan impressed dengan progress-nya." — **Pak Wahyu, 48 tahun, HbA1c turun dari 8.2 ke 6.9**

> "High Protein plan untuk support gym 5x seminggu. Masa otot naik, lemak turun. Dan saya tidak perlu repot timbang-timbang makanan lagi." — **Andre, 28 tahun, fitness enthusiast**

> "Pesan untuk kantor — 15 orang. Lunch meeting jadi lebih healthy, dan productivitas sore hari lebih baik karena tidak ngantuk kekenyangan." — **Bu Sarah, HR Manager**

### Corporate Meal Plan
- **Heading:** Makan Siang Sehat Untuk Tim Kantormu.
- **Subheading:** Karyawan sehat = produktivitas naik. Corporate meal plan NutriBox bisa jadi salah satu wellbeing benefit terbaik.

3 corporate package:

**🏢 Starter (10–30 orang)**
- Lunch box per hari (Senin–Jumat)
- Menu rotasi mingguan
- Invoice bulanan, bisa di-reimburse
- Min. 10 orang
- *Rp 55k–75k/orang/hari*

**🏢 Standard (30–100 orang)**
- Lunch + snack box
- Konsultasi ahli gizi untuk tim (quarterly)
- Branded packaging dengan nama perusahaan
- *Rp 65k–90k/orang/hari*

**🏢 Premium (100+ orang)**
- Full meal plan (sarapan + makan siang + snack)
- Dedicated account manager
- Laporan nutrisi bulanan untuk tim
- Custom menu sesuai preferensi karyawan
- *Custom pricing*

### FAQ
Accordion:

1. Apakah makanan NutriBox menggunakan bahan pengawet? → Tidak. Semua dimasak fresh setiap hari dan tidak ada pengawet, MSG, atau pewarna buatan. Karena itu delivery dilakukan setiap hari atau paling lambat D+1.

2. Berapa lama makanan bisa disimpan? → Makanan yang dikirim pagi tahan 6–8 jam di suhu ruangan, dan 2–3 hari di kulkas. Kami rekomendasikan dimakan sesuai jadwal.

3. Apakah bisa request tidak suka bahan tertentu? → Bisa! Isi formulir preferensi saat subscribe. Kami bisa skip bahan tertentu (misal tidak mau pete, tidak suka ikan tertentu). Tapi untuk alergi serius — konsultasikan dulu dengan tim kami.

4. Apakah bisa pause langganan? → Bisa. Notifikasi H-2 sebelum jadwal pengiriman. Paket bulanan bisa pause hingga 4 hari.

5. Apakah ada konsultasi dengan ahli gizi? → Ya! Paket Bulanan & Premium Plus include konsultasi via WA. Untuk paket lain, bisa ditambahkan Rp 100k/sesi.

6. Apakah bisa ganti program di tengah langganan? → Bisa ganti mulai minggu berikutnya. Hubungi kami minimal H-3 sebelum minggu baru dimulai.

7. Apakah cocok untuk yang baru pertama kali diet? → Sangat cocok! Bahkan ini yang kami rekomendasikan untuk pemula — tidak perlu pengetahuan nutrisi, tinggal makan sesuai yang dikirim.

### CTA Subscribe
- **Heading:** Mulai Perjalanan Sehatmu Hari Ini.
- **Body:** Tidak perlu commit langsung ke paket panjang. Mulai dengan trial 5 hari — cukup untuk merasakan bedanya.
- Form: Nama, WhatsApp, Email, Program pilihan (dropdown), Paket (dropdown), Alamat delivery, Slot delivery (pagi/siang), Catatan (alergi, preferensi)
- **CTA:** Subscribe Sekarang

Alternative: **WhatsApp Konsultasi** untuk yang belum yakin pilih program mana

---

## 5. Image References

| Section | Source | URL / Search Term | Alt Text | Dimensi |
|---------|--------|-------------------|----------|---------|
| Hero | Unsplash | https://unsplash.com/s/photos/healthy-meal-prep-box | "Healthy meal prep delivery box" | 1920x1080 |
| Hero alt | Pexels | https://www.pexels.com/search/meal%20prep%20healthy%20food/ | "Healthy meal prep" | 1920x1080 |
| Why - Time saving | Unsplash | https://unsplash.com/s/photos/busy-professional-healthy | "Busy professional" | 800x600 |
| Why - Nutrition label | Pexels | https://www.pexels.com/search/nutrition%20label%20food/ | "Nutrition facts" | 800x600 |
| Why - Fresh ingredients | Unsplash | https://unsplash.com/s/photos/fresh-vegetables-ingredients | "Fresh vegetables" | 800x600 |
| Why - Dietitian | Pexels | https://www.pexels.com/search/dietitian%20nutritionist/ | "Ahli gizi" | 800x600 |
| Program - Weight Loss | Unsplash | https://unsplash.com/s/photos/low-calorie-meal-healthy | "Weight loss meal" | 800x600 |
| Program - High Protein | Pexels | https://www.pexels.com/search/high%20protein%20meal%20chicken/ | "High protein meal" | 800x600 |
| Program - Diabetic | Unsplash | https://unsplash.com/s/photos/diabetic-friendly-food | "Diabetic friendly food" | 800x600 |
| Program - Heart | Pexels | https://www.pexels.com/search/heart%20healthy%20food/ | "Heart healthy meal" | 800x600 |
| Program - Postpartum | Unsplash | https://unsplash.com/s/photos/postpartum-nutrition | "Postpartum healthy food" | 800x600 |
| Sample Menu - Oats | Pexels | https://www.pexels.com/search/overnight%20oats%20healthy/ | "Overnight oats" | 800x800 |
| Sample Menu - Nasi merah | Unsplash | https://unsplash.com/s/photos/brown-rice-chicken-bowl | "Nasi merah ayam" | 800x800 |
| Sample Menu - Soup | Pexels | https://www.pexels.com/search/chicken%20soup%20healthy/ | "Sup ayam sehat" | 800x800 |
| Nutrition - Label | Unsplash | https://unsplash.com/s/photos/food-label-nutrition | "Nutrition label" | 800x600 |
| Nutrition - Ingredients | Pexels | https://www.pexels.com/search/fresh%20ingredients%20cooking/ | "Fresh ingredients" | 800x600 |
| How it works | Unsplash | https://unsplash.com/s/photos/meal-delivery-box-opening | "Unboxing meal prep" | 1200x800 |
| Plans - Meal box | Pexels | https://www.pexels.com/search/meal%20prep%20containers/ | "Meal prep containers" | 800x600 |
| Kitchen - Central | Unsplash | https://unsplash.com/s/photos/commercial-kitchen-clean | "Clean commercial kitchen" | 1600x900 |
| Kitchen - HACCP | Pexels | https://www.pexels.com/search/food%20safety%20kitchen/ | "Food safety kitchen" | 800x600 |
| Delivery - Box | Unsplash | https://unsplash.com/s/photos/food-delivery-box | "Delivery meal box" | 800x600 |
| Delivery - Rider | Pexels | https://www.pexels.com/search/food%20delivery%20rider/ | "Delivery rider" | 800x600 |
| Testimonial - Healthy person | Unsplash | https://unsplash.com/s/photos/healthy-lifestyle-person | "Customer testimonial" | 800x800 |
| Corporate - Office lunch | Pexels | https://www.pexels.com/search/office%20lunch%20healthy/ | "Corporate lunch" | 1200x800 |

---

## 6. Animation Spec (Framer Motion)

**Vibe:** Clean, fresh, modern health brand — animasi yang evoke clarity dan kemudahan. Tidak flashy, tidak terlalu playful — professional health-tech feel.

### Hero (React island, `client:load`)
```tsx
// Clean confident reveal
const cleanReveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.12 }
  }
}

// Counter: "2.000+ Subscriber" animate 0 → 2000
// Trust badges: stagger fade-in after headline
```

### Why NutriBox (React island, `client:visible`)
- 4 cards reveal stagger
- Hover: card lift + icon scale
- Number "2 jam" in card 1: counter pop

### Program Plans (React island, `client:visible`)
- 5 cards reveal stagger `staggerChildren: 0.1`
- Each card: color-coded per program (subtle left border)
- Hover: card lift + macro stats highlight
- "Konsultasi gratis" button: subtle pulse

### Sample Menu (React island, `client:visible`)
- Day tab: smooth `layoutId` indicator
- Table rows: stagger reveal
- Food images: fade-in subtle
- Calorie/protein numbers: counter animation
- Total row: emphasis highlight

### Nutrition Label (React island, `client:visible`)
- Nutrition label: typewriter reveal per line
- Progress bars (protein %, carb %): fill animation left to right
- QR code: subtle pulse

### Subscription Plans (React island, `client:visible`)
- Program toggle: smooth transition
- 5 plan cards stagger reveal
- "Terlaris" card: slightly emphasized
- Price: counter reveal
- Savings badge: pop-in spring
- Add-on section: smooth accordion

### Kitchen Gallery (React island, `client:visible`)
- Gallery grid stagger reveal
- Image hover: scale slight + overlay
- Certification badges: stagger reveal

### Testimonial (React island, `client:visible`)
- 4 cards masonry layout (bukan carousel — result stories lebih baik dibaca side-by-side)
- Cards reveal stagger
- Result stats (−8 kg, HbA1c turun): counter animation subtle
- Photo: soft fade-in

### FAQ Accordion (React island, `client:visible`)
- Height animation via `layout`
- Chevron rotate
- Clean accent on open

### Subscribe Form
- Multi-step smooth transition:
  - Step 1: Program selection (visual cards)
  - Step 2: Plan selection + duration
  - Step 3: Personal & delivery details
- Program selection: color accent per program
- Price calculator: real-time update saat pilih plan
- Submit: button morph + success state

### Scroll Reveal (reusable)
```tsx
const nutriFade = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.65, ease: "easeOut" } 
  }
}
```

### Color Palette per Program (di cards & form)
```css
--program-weightloss: #f97316;   /* orange — energi */
--program-highprotein: #3b82f6;  /* blue — strength */
--program-diabetic: #22c55e;     /* green — health */
--program-heart: #ef4444;        /* red — heart */
--program-postpartum: #a855f7;   /* purple — care */
```

### Hydration Strategy
- `client:load` → Hero
- `client:visible` → Why, Programs, Sample Menu, Nutrition, Plans, Kitchen, Testimonial, FAQ
- `client:idle` → Subscribe form
- Sisanya: static

---

## 7. SEO Meta

- **Title:** NutriBox — Catering Diet & Meal Prep Sehat [Kota] | Delivery Harian
- **Description:** Meal prep sehat dikirim harian. Program weight loss, high protein, diabetic friendly, healthy heart, post-partum. Dirancang ahli gizi, bebas pengawet. Trial 5 hari mulai Rp 425k.
- **Keywords:** catering diet sehat, meal prep delivery, makanan diet [kota], catering weight loss, meal plan sehat, makanan diabetesi, catering kantor sehat
- **OG Image:** Clean hero shot meal prep box dengan logo (1200x630)
- **Schema:** `FoodEstablishment` + `LocalBusiness` + `Service` + `Diet` schema
