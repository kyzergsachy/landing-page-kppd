import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import marketCarousel from "@/assets/market-carousel.png";

const InfoProduct = () => {
  const categories = [
    { title: "Kategori 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Kategori 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Kategori 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  const products = [
    { title: "Produk 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Produk 2", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Produk 3", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Produk 4", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Produk 5", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { title: "Produk 6", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative h-[400px] w-full">
        <img 
          src={marketCarousel} 
          alt="Pusat Perbelanjaan Depok" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* Ada apa aja di Pasar Depok Jaya */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Ada apa aja di Pusat Perbelanjaan Depok?</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-foreground rounded flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6 border-t">
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Harga Sembako Terbaru */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12">Lantai Dasar</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden shadow-lg">
                <div className="bg-background h-48 flex items-center justify-center border-b">
                  <div className="w-16 h-16 border-4 border-foreground rounded flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lantai Satu */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-2">Lantai Satu</h2>
          <div className="w-24 h-1 bg-[#FEA500] rounded-full mb-12"></div>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Row 1 - Large left card */}
            <div className="col-span-2 row-span-1">
              <Card className="overflow-hidden shadow-lg h-full">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-foreground rounded flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Card>
            </div>
            {/* Row 1-2 - Tall right card */}
            <div className="col-span-1 row-span-2">
              <Card className="overflow-hidden shadow-lg h-full">
                <div className="bg-muted h-64 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-foreground rounded flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Card>
            </div>
            {/* Row 2 - Two small cards */}
            <div className="col-span-1">
              <Card className="overflow-hidden shadow-lg h-full">
                <div className="bg-muted h-32 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-foreground rounded flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Card>
            </div>
            <div className="col-span-1">
              <Card className="overflow-hidden shadow-lg h-full">
                <div className="bg-muted h-32 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-foreground rounded flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Card>
            </div>
            {/* Row 3 - Full width card */}
            <div className="col-span-3">
              <Card className="overflow-hidden shadow-lg">
                <div className="bg-muted h-48 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-foreground rounded flex items-center justify-center">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InfoProduct;
