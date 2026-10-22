import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">

      {/* HEADER */}
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white"
          >
            My<span className="text-cyan-400">Story</span>
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex items-center gap-8 font-medium text-white">
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
                  className="transition hover:text-cyan-400"
                >
                  Cerita Kami
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </header>


      {/* HERO */}
      <section className="relative flex min-h-screen items-center overflow-hidden">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/pantai1.jpeg')"
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-slate-950/70" />


        {/* Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6">

          <div className="max-w-3xl">

            <p className="mb-5 font-semibold uppercase tracking-[0.3em] text-cyan-400">
              My Personal Story
            </p>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
              Selamat Datang di
              <span className="block text-cyan-400">
                Website Pribadiku
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
              Tempat saya berbagi pengalaman, perjalanan,
              dan cerita yang memberikan kesan dalam kehidupan saya.
            </p>

            <Link
              href="/cerita"
              className="mt-8 inline-flex rounded-full bg-cyan-400 px-8 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-400/20 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
             Pengalamanku
            </Link>

          </div>

        </div>

      </section>

 <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-gray-400">
        © 2026 MyStory — Cerita Perjalanan Saya
      </footer>

    </main>
  );
}