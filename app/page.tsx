import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header/Navigation */}
      <header className="fixed w-full bg-white/80 dark:bg-[#111]/80 backdrop-blur-sm z-50 border-b border-purple-100 dark:border-purple-900/30">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src="/rocs-logo.svg"
            alt="ROCS Logo"
            width={120}
            height={40}
            priority
          />
          <div className="hidden md:flex gap-8">
            <a href="#about" className="hover:text-purple-600 transition-colors">Hakkımızda</a>
            <a href="#events" className="hover:text-blue-500 transition-colors">Etkinlikler</a>
            <a href="#team" className="hover:text-indigo-500 transition-colors">Ekibimiz</a>
            <a href="#projects" className="hover:text-violet-500 transition-colors">Projeler</a>
            <a href="#contact" className="hover:text-fuchsia-500 transition-colors">İletişim</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="pt-20">
        <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-20"></div>
            <h1 className="relative text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
              ROCS - Robotics and Computer Science
            </h1>
          </div>
          <p className="text-xl mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
            Geleceğin teknolojilerini bugünden şekillendiren, robotik ve kontrol sistemleri alanında öncü öğrenci topluluğu
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-full hover:opacity-90 transition-all transform hover:scale-105"
            >
              Bize Katıl
            </a>
            <a
              href="#projects"
              className="border-2 border-purple-600 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-full hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all transform hover:scale-105"
            >
              Projelerimiz
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20">
          {/* Hakkımızda içeriği */}
        </section>

        {/* Events Section */}
        <section id="events" className="min-h-screen bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm">
          {/* Etkinlikler içeriği */}
        </section>

        {/* Team Section */}
        <section id="team" className="min-h-screen bg-gradient-to-br from-indigo-50/50 to-purple-50/50 dark:from-indigo-900/20 dark:to-purple-900/20">
          {/* Ekip içeriği */}
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm">
          {/* Projeler içeriği */}
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20">
          {/* İletişim içeriği */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 ROCS - Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  );
}
