import Link from "next/link";

const cerita = [
  {
    id: 1,
    title: "Persiapan Pergi ke Pantai",
    date: "05 April 2025",
    image: "/images/pantai2.jpeg",
    description:
      "Sebelum pergi ke pantai, saya mempersiapkan berbagai keperluan dan mengajak beberapa teman untuk menikmati liburan bersama.",
  },
  {
    id: 2,
    title: "Perjalanan Menuju Pantai",
    date: "07 April 2025",
    image: "/images/pantai3.jpeg",
    description:
      "Perjalanan menuju pantai terasa menyenangkan karena saya bisa menghabiskan waktu bersama teman-teman sambil menikmati pemandangan.",
  },
  {
    id: 3,
    title: "Menikmati Suasana Pantai",
    date: "08 April 2025",
    image: "/images/pantai4.jpeg",
    description:
      "Sesampainya di pantai, saya menikmati pemandangan laut, bermain di sekitar pantai, dan mengabadikan berbagai momen.",
  },
  {
    id: 4,
    title: "Kenangan di Pantai",
    date: "09 April 2025",
    image: "/images/pantai5.jpeg",
    description:
      "Pergi ke pantai menjadi pengalaman yang menyenangkan dan memberikan kenangan yang ingin saya ingat kembali.",
  },
];

export default function CeritaPage() {
  return (
    <main className="min-h-screen bg-slate-950">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link
            href="/"
            className="text-2xl font-bold text-white"
          >
            My<span className="text-cyan-400">Story</span>
          </Link>

          <nav>
            <ul className="flex gap-8 font-medium text-white">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-cyan-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/cerita"
                  className="text-cyan-400"
                >
                  Cerita Kami
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </header>


      {/* JUDUL */}
      <section className="px-6 pb-12 pt-20 text-center">

    

        <h1 className="mt-3 text-4xl font-bold text-white md:text-5xl">
          Menikmati Indahnya Senja di Pantai
        </h1>

        <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-400">
          Cerita tentang pengalaman saya menikmati suasana pantai
          bersama teman-teman.
        </p>

      </section>


      {/* CARD CERITA */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {cerita.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/50"
            >

              {/* FOTO */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>


              {/* ISI */}
              <div className="p-6">

                <p className="text-sm text-cyan-400">
                  {item.date}
                </p>

                <h2 className="mt-2 text-xl font-bold text-white">
                  {item.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>

                <Link
                  href={`/cerita/${item.id}`}
                  className="mt-5 inline-block font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Baca Cerita →
                </Link>

              </div>

            </article>
          ))}

        </div>

      </section>


    
      <footer className="mt-10 border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 MyStory — Pengalaman Saya
      </footer>

    </main>
  );
}