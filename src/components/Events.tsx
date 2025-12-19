import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import event1 from "@/assets/event-1.png";
import event2 from "@/assets/event-2.png";
import event3 from "@/assets/event-3.png";
import marketCarousel from "@/assets/market-carousel.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const Events = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const events = [
    { 
      title: "Aneka Jajanan Pasar", 
      description: "Tersedia aneka jajanan pasar dengan harga yang terjangkau",
      image: event1
    },
    { 
      title: "Sentra Kue Subuh", 
      description: "Tersedia aneka jajanan pasar dengan harga yang terjangkau",
      image: event2
    },
    { 
      title: "Kebutuhan Rumah Tangga", 
      description: "Tersedia aneka jajanan pasar dengan harga yang terjangkau",
      image: event3
    },
  ];

  return (
    <section id="event" className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-primary">MACAM-MACAM</h2>
          <div className="h-1 w-24 bg-[#FEA500] mt-2 rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-xl">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">{event.title}</h3>
                    <p className="text-white/90 text-sm mb-4">{event.description}</p>
                    <Button size="sm" className="w-full rounded-lg bg-white text-primary hover:bg-white/90">
                      Lihat
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Link to="/Event" className="block">
          <div className="flex justify-end mb-12">
            <Button size="lg" className="rounded-lg">
              Lihat Selengkapnya
            </Button>
          </div>
        </Link>
        
        <div className="relative">
          {/* Header tetap (tidak ikut carousel) */}
          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl font-bold text-primary">Galeri Kegiatan</h2>
            <div className="h-1 w-24 bg-[#FEA500] mt-2 rounded-full"></div>
          </div>

          <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
              {[1, 2, 3].map((index) => (
                <CarouselItem key={index}>
                    <Link to="/info-product" className="block">
                      <div className="relative rounded-3xl h-96 overflow-hidden group cursor-pointer isolate">
                      <img 
                        src={marketCarousel} 
                        alt={`Pusat Perbelanjaan Depok ${index}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
          <div className="flex gap-2 justify-center mt-4">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? "bg-primary w-8" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
