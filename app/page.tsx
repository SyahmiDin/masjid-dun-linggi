"use client";

import Image from "next/image";

export default function Home() {
  // Fungsi scroll manual yang kebal
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    console.log("CLICKED", id);

    const element = document.getElementById(id);
    console.log("ELEMENT FOUND:", element);

    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="w-full font-sans relative">

      {/* HEADER STICKY */}
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="hidden lg:flex flex-1"></div>

          <div className="flex-1 flex justify-start lg:justify-center items-center">
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, 'hero')}
              className="flex items-center gap-3"
            >
          <div className="w-15 h-15 bg-[#934C93] rounded-full flex items-center justify-center shadow-inner overflow-hidden">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="w-full h-full object-contain" 
            />
          </div>
              <span className="font-bold text-[#3A243A] hidden sm:block">Masjid Kuala Linggi</span>
            </a>
          </div>

          <nav className="flex-1 flex justify-end items-center gap-6 text-sm font-semibold text-[#3A243A]">
            <a
              href="#pengenalan"
              onClick={(e) => handleScroll(e, 'pengenalan')}
              className="hidden md:block hover:text-[#934C93] transition-colors cursor-pointer"
            >
              Pengenalan
            </a>
            <a
              href="#objektif"
              onClick={(e) => handleScroll(e, 'objektif')}
              className="hidden md:block hover:text-[#934C93] transition-colors cursor-pointer"
            >
              Objektif
            </a>
            <a
              href="#cadangan"
              onClick={(e) => handleScroll(e, 'cadangan')}
              className="hidden lg:block hover:text-[#934C93] transition-colors cursor-pointer"
            >
              Cadangan
            </a>
            <a
              href="#sumbang"
              onClick={(e) => handleScroll(e, 'sumbang')}
              className="bg-[#934C93] text-white px-6 py-2.5 rounded-full hover:scale-105 hover:bg-[#7A3E7A] transition-all shadow-md cursor-pointer"
            >
              Sumbang
            </a>
          </nav>

        </div>
      </header>

      {/* SECTION 1: HERO BANNER */}
      <section id="hero" className="min-h-screen lg:h-screen flex flex-col items-center justify-center bg-[#934C93] text-white p-8 pt-28 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-md">
          Masjid Jamek DUN Kuala Linggi
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl font-light">
          Kempen Kutipan Dana Pembangunan & Penambahbaikan Fasiliti Masjid. Bersama kita membina saham akhirat.
        </p>
        <a
          href="#sumbang"
          onClick={(e) => handleScroll(e, 'sumbang')}
          className="bg-white text-[#934C93] font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-105 cursor-pointer"
        >
          Sumbang Sekarang
        </a>
      </section>

      {/* SECTION 2: PENGENALAN */}
      <section id="pengenalan" className="min-h-screen lg:h-screen flex flex-col items-center justify-center bg-white text-[#3A243A] p-8 md:p-24 pt-28 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8">Pengenalan</h2>
        <div className="max-w-4xl text-lg md:text-xl leading-relaxed space-y-6">
          <p>
            Masjid merupakan institusi utama dalam pembentukan masyarakat Islam yang sejahtera, berfungsi bukan sahaja sebagai tempat ibadah, tetapi juga pusat ilmu, sosial dan perpaduan ummah. Seiring dengan peningkatan bilangan penduduk di kawasan Kuala Linggi serta keperluan kepada kemudahan ibadah yang lebih selesa dan strategik, pembinaan sebuah Masjid Jamek baharu di DUN Kuala Linggi amat diperlukan
          </p>
          <p>
            Masjid sedia ada, iaitu Masjid As-Sakinah Kampung Baru, kini tidak lagi mampu menampung jumlah jemaah yang semakin bertambah, terutamanya dari kampung-kampung dan taman-taman berhampiran. Lokasi masjid tersebut yang terletak di kawasan padat dengan kediaman menyebabkan proses pembesaran masjid tidak dapat dilaksanakan. Selain itu, ketiadaan kawasan parkir yang mencukupi turut menimbulkan kesulitan kepada para jemaah.
          </p>
        </div>
      </section>

      {/* SECTION 3: OBJEKTIF */}
      <section id="objektif" className="min-h-screen lg:h-screen flex flex-col items-center justify-center bg-gray-50 text-[#3A243A] p-8 md:p-24 pt-28 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-12">Objektif Kutipan Dana</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-[#934C93] mb-4">Keselesaan</h3>
            <p>Menyediakan tempat ibadah yang selesa dan kondusif untuk penduduk setempat.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-[#934C93] mb-4">Kapasiti</h3>
            <p>Menjadi pusat pengembangan ilmu, dakwah, dan aktiviti kemasyarakatan.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-[#934C93] mb-4">Fasiliti</h3>
            <p>Menggalakkan perpaduan umat Islam melalui pelbagai program yang akan dijalankan di masjid.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold text-[#934C93] mb-4">Fasiliti</h3>
            <p>Berpotensi untuk menjadi Masjid Pelancongan kerana terletak di laluan ke kawasan pelancongan seperti pantai Telok Gong dan Sungai Tuang</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CADANGAN PEMBINAAN */}
      <section id="cadangan" className="min-h-screen lg:h-screen flex flex-col items-center justify-center bg-white text-[#3A243A] p-8 md:p-24 pt-28">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Cadangan Pembinaan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl w-full">
          <div className="flex items-start space-x-4 p-6 bg-[#934C93]/5 rounded-xl border border-[#934C93]/10">
            <div className="bg-[#934C93] text-white p-3 rounded-lg text-xl font-bold">1</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Peluasan Ruang Solat Utama</h4>
              <p>Menambah keluasan dewan solat bagi menampung kapasiti jemaah yang padat.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-[#934C93]/5 rounded-xl border border-[#934C93]/10">
            <div className="bg-[#934C93] text-white p-3 rounded-lg text-xl font-bold">2</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Dewan Serbaguna</h4>
              <p>Pembinaan dewan baharu untuk majlis ilmu, kenduri, dan aktiviti kemasyarakatan.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-[#934C93]/5 rounded-xl border border-[#934C93]/10">
            <div className="bg-[#934C93] text-white p-3 rounded-lg text-xl font-bold">3</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Pusat Wuduk & Tandas</h4>
              <p>Menaik taraf dan menambah bilangan pili wuduk serta bilik air yang lebih mesra OKU.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-6 bg-[#934C93]/5 rounded-xl border border-[#934C93]/10">
            <div className="bg-[#934C93] text-white p-3 rounded-lg text-xl font-bold">4</div>
            <div>
              <h4 className="text-xl font-bold mb-2">Kawasan Letak Kereta</h4>
              <p>Penurapan semula dan pembesaran kawasan parkir untuk kelancaran lalu lintas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SURAT KEBENARAN PUNGUTAN */}
      <section id="surat" className="min-h-screen lg:h-screen flex flex-col items-center justify-center bg-[#3A243A] text-white p-8 md:p-24 pt-28 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Surat Kebenaran Pungutan Dana</h2>
        <p className="max-w-2xl text-lg mb-12 text-gray-300">
          Bagi memastikan ketelusan, kutipan dana ini telah mendapat kelulusan rasmi daripada pihak berkuasa agama negeri.
        </p>

      </section>

      {/* SECTION 6: MAKLUMAT AKAUN & SUMBANGAN */}
      <section id="sumbang" className="min-h-screen lg:h-screen flex flex-col items-center justify-center bg-gray-50 text-[#3A243A] p-8 md:p-24 pt-28 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Salurkan Sumbangan Anda</h2>
        <p className="max-w-2xl text-lg mb-12 text-gray-600">
          Sumbangan ikhlas anda boleh disalurkan terus ke akaun rasmi masjid atau melalui imbasan kod QR di bawah. Semoga Allah membalas kebaikan anda berlipat kali ganda.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-4xl">

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 w-full md:w-1/2 text-left hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#934C93] mb-6 border-b pb-4">Pindahan Bank Dalam Talian</h3>
            <div className="space-y-5">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Nama Bank</p>
                <p className="text-xl font-bold">Bank Simpanan Nasional (BSN)</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Nama Akaun</p>
                <p className="text-xl font-bold">JAWATANKUASA PENAJA MASJID JAMEK DUN KUALA LINGGI</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">No. Akaun</p>
                <p className="text-3xl font-extrabold text-[#934C93] tracking-widest">0411 7411 0004 7363</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100 w-full md:w-1/2 flex flex-col items-center justify-center hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-[#934C93] mb-6">Imbas DuitNow QR</h3>

            <div className="w-56 aspect-square bg-gray-50 border-2 border-dashed border-gray-400 rounded-2xl flex items-center justify-center mb-6">
              <span className="text-gray-400 text-sm text-center px-6">Muat Naik Gambar QR Code Di Sini</span>
            </div>

            <p className="text-sm text-gray-500 font-medium">Boleh diimbas menggunakan semua aplikasi perbankan & e-Wallet.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-[#3A243A] text-gray-400 py-8 text-center border-t border-white/10">
        <p className="text-sm font-light tracking-wide">
          Copyright 2026 &copy; Masjid Jamek DUN Kuala Linggi
        </p>
      </footer>

    </main>
  );
}