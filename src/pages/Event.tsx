import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import kppdBanner from "@/assets/kppd-banner.png";

const Event = () => {
  const navigate = useNavigate();

  const eventContent = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id enim vel purus dapibus efficitur. Praesent ultricies, quam lacinia consectetur imperdiet, libero nunc blandit velit, sed ornare purus massa tincidunt lectus. Phasellus vulputate luctus elit a suscipit. In ultrices eu augue sed porttitor. Pellentesque facilisis leo ac risus lacinia sagittis.",
      subtitle: "Lorem Ipsum",
      imagePosition: "right" as const
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id enim vel purus dapibus efficitur. Praesent ultricies, quam lacinia consectetur imperdiet, libero nunc blandit velit, sed ornare purus massa tincidunt lectus. Phasellus vulputate luctus elit a suscipit. In ultrices eu augue sed porttitor. Pellentesque facilisis leo ac risus lacinia sagittis.",
      subtitle: "Lorem Ipsum",
      imagePosition: "left" as const
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id enim vel purus dapibus efficitur. Praesent ultricies, quam lacinia consectetur imperdiet, libero nunc blandit velit, sed ornare purus massa tincidunt lectus. Phasellus vulputate luctus elit a suscipit. In ultrices eu augue sed porttitor. Pellentesque facilisis leo ac risus lacinia sagittis.",
      subtitle: "Lorem Ipsum",
      imagePosition: "right" as const
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${kppdBanner})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative container mx-auto max-w-6xl px-4">
          <h1 className="text-6xl font-bold text-white">Kegiatan</h1>
        </div>
      </section>

      {/* Info Kegiatan Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Info Kegiatan</h2>
          <div className="h-1 w-24 bg-[#FEA500] mt-2 rounded-full"></div>
        </div>
          
          {eventContent.map((content, index) => (
            <div key={index} className={`flex flex-col ${content.imagePosition === 'left' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-16`}>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed text-justify">
                  {content.description}
                </p>
                <h4 className="text-xl font-semibold">{content.subtitle}</h4>
              </div>
              <div className="flex-1">
                <div className="bg-muted rounded-2xl h-80 flex items-center justify-center">
                  <svg className="w-20 h-20 text-foreground/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Event;
