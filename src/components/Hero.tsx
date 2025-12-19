import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] pt-24 pb-20 px-4 bg-gradient-to-br from-blue-100 via-blue-50 to-green-100 flex items-center">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              KOPERASI PUSAT<br />PERBELANJAAN DEPOK
            </h1>
            <p className="text-lg text-foreground/70 max-w-lg">
              Bersama pedagang Pusat Perbelanjaan Depok, tumbuh menuju kesejahteraan ekonomi mandiri.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="bg-white rounded-full p-8 shadow-2xl">
              <img src={logo} alt="KPPD Logo" className="w-56 h-56 object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
