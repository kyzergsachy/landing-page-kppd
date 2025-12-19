import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";


import event1 from "@/assets/event-1.png";
import event2 from "@/assets/event-2.png";
import event3 from "@/assets/event-3.png";

const newsItems = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Kami merangkum beberapa pertanyaan yang paling sering diajukan oleh masyarakat terkait layanan dan aktivitas KPPD.",
    image: event1,
  },
  {
    id: 2,
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Kami merangkum beberapa pertanyaan yang sering diajukan terkait kegiatan pasar.",
    image: event2,
  },
  {
    id: 3,
    title: "Lorem Ipsum Dolor Sit Amet",
    description:
      "Kami merangkum beberapa pertanyaan seputar fasilitas dan aktivitas di area KPPD.",
    image: event3,
  },
];

const News = () => {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-primary">
            Berita Terbaru
          </h2>
          <div className="w-24 h-1 bg-[#FEA500] mx-auto mt-3 rounded-full" />
        </div>

        {/* === NEWS GRID === */}
        <div className="grid sm:grid-cols-2 gap-6 items-stretch">

          {/* ================= LEFT CARD ================= */}
          <Card className="bg-card border-0 shadow-sm h-full flex flex-col shadow-md hover:shadow-lg transition h-full">
            <CardContent className="p-6 flex flex-col flex-1">

              {/* IMAGE DI DALAM CARD */}
              <div className="aspect-[16/8] w-full rounded-lg overflow-hidden mb-4">
                <img
                  src={newsItems[0].image}
                  alt={newsItems[0].title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                {newsItems[0].title}
              </h3>

              <p className="text-muted-foreground text-sm flex-1 mb-4">
                {newsItems[0].description}
              </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 leading-none text-[#1E3A5F] text-sm font-small group"
                    >
                      <span>Selengkapnya</span>
                    <ArrowRight
                      size={16}
                      className="translate-y-[1px] transition-transform group-hover:translate-x-1"
                    />
                    </a>
            </CardContent>
          </Card>


          {/* ================= RIGHT SIDE ================= */}
          <div className="grid grid-rows-2 gap-6 h-full">
            {newsItems.slice(1).map((item) => (
              <Card
                key={item.id}
                className="border-0 shadow-md hover:shadow-lg transition h-full"
              >
                <div className="flex gap-4 p-6 h-full">
                  {/* image KECIL & STABIL */}
                  <div className="w-35 h-40 rounded-md overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col flex-1">
                    <h3 className="text-base text-xl font-bold text-foreground mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                      {item.description}
                    </p>

                    <a
                      href="#"
                      className="inline-flex items-center gap-2 leading-none text-[#1E3A5F] text-sm font-small group"
                    >
                      <span>Selengkapnya</span>
                    <ArrowRight
                      size={16}
                      className="translate-y-[1px] transition-transform group-hover:translate-x-1"
                    />
                    </a>


                  </div>
                </div>
              </Card>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default News;
