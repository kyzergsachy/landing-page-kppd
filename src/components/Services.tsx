import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import iconPinjaman from "@/assets/icon-pinjaman.png";
import iconSimpanan from "@/assets/icon-simpanan.png";
import iconTransaksi from "@/assets/icon-transaksi.png";

const Services = () => {
  const services = [
    {
      icon: iconPinjaman,
      title: "Pinjaman",
      description: "Solusi dana cepat untuk kebutuhan harian maupun usaha.",
    },
    {
      icon: iconSimpanan,
      title: "Simpanan",
      description: "Ruang aman untuk menyimpan dana dan membangun rencana keuangan.",
    },
    {
      icon: iconTransaksi,
      title: "Transaksi Tunai",
      description: "Layanan penerimaan dan pencairan dana secara langsung, cepat, dan terpercaya.",
    },
  ];

  return (
    <section className="pt-12 pb-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-primary">
            Layanan Kami
          </h2>
          <div className="h-1 w-24 bg-[#FEA500] mt-2 rounded-full"></div>
        </div>
        <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto mb-12">
          Kami hadir untuk membantu anggota dalam mengelola keuangan melalui layanan pinjaman, tabungan, dan transaksi tunai.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <img src={service.icon} alt={service.title} className="w-25 h-25 mx-auto mb-1" />
                <CardTitle className="text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/70 mt-0">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
