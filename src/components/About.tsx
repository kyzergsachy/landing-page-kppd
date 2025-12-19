import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import thinkingIllustration from "@/assets/thinking-illustration.png";

const About = () => {
  return (
    
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-4 items-center">
          <div className="h-64 sm:h-72 md:h-80 flex items-center justify-center">
            <img src={thinkingIllustration} alt="Thinking illustration" className="w-full h-full object-contain" />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6">Apa Itu KPPD?</h2>
            <p className="text-foreground text-lg leading-relaxed mb-8">
              Koperasi Pusat Perbelanjaan Depok adalah sebuah koperasi yang mewadahi para pedagang yang beraktivitas di Pasar Depok Jaya, berfungsi sebagai badan yang mewakili kepentingan para pedagang.
            </p>
            <Button size="lg" className="rounded-lg" asChild>
              <Link to="/sejarah">Lihat Selengkapnya</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default About;
