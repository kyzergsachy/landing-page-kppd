import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqItems = [
  {
    question: "Apakah dapat menyewa tenant di KPPD?",
    answer: "Ya, Anda dapat menyewa tenant di KPPD. Silakan hubungi kami untuk informasi lebih lanjut mengenai ketersediaan dan prosedur penyewaan.",
  },
  {
    question: "Apa saja syarat untuk mengajukan pinjaman?",
    answer: "Syarat untuk mengajukan pinjaman meliputi: menjadi anggota aktif koperasi, memiliki simpanan pokok dan wajib yang lengkap, serta melampirkan dokumen identitas yang valid.",
  },
  {
    question: "Apakah transaksi tunai bisa dilakukan setiap hari?",
    answer: "Ya, transaksi tunai dapat dilakukan setiap hari kerja pada jam operasional koperasi yaitu Senin-Jumat pukul 08:00-16:00.",
  },
  {
    question: "Bagaimana cara menjadi anggota koperasi?",
    answer: "Untuk menjadi anggota koperasi, Anda perlu mengisi formulir pendaftaran, membayar simpanan pokok, dan melengkapi dokumen yang diperlukan.",
  },
];

const FAQ = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("kontak");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Ada Pertanyaan?{" "}
            <span className="text-[#FEA500]">Kami Siap Bantu</span>
          </h2>
          <div className="w-24 h-1 bg-[#FEA500] mx-auto mt-2 rounded-full"></div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Kami merangkum beberapa pertanyaan yang paling sering diajukan untuk membantu Anda
            memahami layanan KPPD secara lebih mudah dan cepat.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left - Contact Card */}
          <div className="flex flex-col gap-6">
            <div className="bg-[#E8F4FD] rounded-2xl p-8 text-center shadow-lg">
              <h3 className="text-lg font-bold text-primary text-foreground mb-2">
                Masih ada pertanyaan lainnya?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Silakan hubungi kami dan ajukan pertanyaan untuk mendapatkan jawaban
              </p>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="bg-[#0A4899] border-primary text-white hover:bg-primary hover:text-primary-foreground px-8 py-2 rounded-lg"
              >
                Hubungi Kami
              </Button>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-4 bg-card shadow-md hover:shadow-lg transition-all duration-200"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
