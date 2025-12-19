import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import bannerImage from "@/assets/kppd-banner.png";
import mohammadHatta from "@/assets/mohammad-hatta.png";
import avatarPlaceholder from "@/assets/avatar-placeholder.png";
import { Card, CardContent } from "@/components/ui/card";

const Struktur = () => {
  const directors = [
    { name: "IR. Sekala Anindhita" },
    { name: "IR. Sekala Anindhita" },
  ];

  const management = [
    { name: "IR. Sekala Anindhita" },
    { name: "IR. Sekala Anindhita" },
  ];

  const marketingSupport = [
    { name: "IR. Sekala Anindhita" },
    { name: "IR. Sekala Anindhita" },
    { name: "IR. Sekala Anindhita" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
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
          <h1 className="text-5xl md:text-6xl font-bold text-white">Struktur</h1>
        </div>
      </section>

      {/* Mohammad Hatta Quote Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1 text-justify">
              <p className="text-lg leading-relaxed mb-8">
                Koperasi adalah usaha bersama untuk memperbaiki nasib penghidupan ekonomi berdasarkan tolong-menolong. 
                Semangat yang menjadi dasar koperasi adalah untuk memajukan kesejahteraan bersama, bukan untuk 
                kepentingan pribadi.
              </p>
              <div>
                <h3 className="text-2xl font-bold mb-1">Mohammad Hatta</h3>
                <p className="text-muted-foreground">Membangun Koperasi dan Koperasi Membangun, 1987</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <img 
                src={mohammadHatta} 
                alt="Mohammad Hatta" 
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary">Struktur Organisasi</h2>
            <div className="h-1 w-20 sm:w-24 md:w-32 lg:w-40 bg-[#FEA500] mt-2 rounded-full mx-auto"></div>
          </div>

          {/* Direktur */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Ketua Pengurus</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {directors.map((person, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <img 
                        src={avatarPlaceholder} 
                        alt={person.name}
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-semibold">{person.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Management */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Management</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {management.map((person, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <img 
                        src={avatarPlaceholder} 
                        alt={person.name}
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-semibold">{person.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Marketing Support */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Marketing Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {marketingSupport.map((person, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <img 
                        src={avatarPlaceholder} 
                        alt={person.name}
                        className="w-48 h-48 object-contain"
                      />
                    </div>
                    <h4 className="text-xl font-semibold">{person.name}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Struktur;
