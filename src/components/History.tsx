import logo from "@/assets/logo.png";
import bannerImage from "@/assets/kppd-banner.png";
import budayaKerjaImage from "@/assets/budaya-kerja.png";

const History = () => {
  return (
    <>
      {/* Banner Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={bannerImage} 
            alt="KPPD Banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 container mx-auto max-w-6xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white">Visi & Misi</h1>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
        {/* Sejarah Perusahaan */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex justify-center">
            <img src={logo} alt="KPPD Logo" className="w-64 h-64 object-contain" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-primary">Sejarah Instansi</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Koperasi Pedagang Pusat Perbelanjaan Depok adalah sebuah koperasi yang mewadahi para pedagang yang beraktivitas di Pusat Perbelanjaan Depok, berfungsi sebagai badan yang mewakili kepentingan para pedagang.
            </p>
          </div>
        </div>

        {/* Visi dan Misi Perusahaan */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-primary text-center">Visi & Misi</h2>
          <div className="h-1 w-24 bg-[#FEA500] mt-2 rounded-full mx-auto mb-12"></div>
          <div className="grid gap-8">
            {/* Visi Card */}
            <div className="bg-muted rounded-3xl p-8 min-h-[300px] flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-center">Visi KPPD</h3>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Menjadi koperasi yang profesional, mandiri, dan berdaya saing tinggi dalam melayani anggota dan masyarakat.
                </p>
              </div>
            </div>

            {/* Misi Card */}
            <div className="bg-muted rounded-3xl p-8 min-h-[300px] flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-center">Misi KPPD</h3>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-muted-foreground text-center">
                  Meningkatkan kesejahteraan anggota melalui pelayanan yang berkualitas dan pengembangan usaha yang berkelanjutan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Budaya Kerja */}
        <div>
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-4xl font-bold text-primary text-center">Budaya Kerja</h2>
            <div className="h-1 w-24 bg-[#FEA500] mt-2 rounded-full mx-auto mb-12"></div>
          </div>
          <div className="">
            <img src={budayaKerjaImage} alt="Budaya Kerja" className="w-full h-full" />
          {/*
            <p className="text-muted-foreground text-lg text-center max-w-3xl leading-relaxed">
              Kami mengedepankan nilai-nilai gotong royong, transparansi, dan profesionalitas dalam setiap aspek pekerjaan untuk mencapai tujuan bersama.
            </p>
            */}
          </div>
        </div>

      </div>
    </section>
    </>
  );
};

export default History;