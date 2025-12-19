import logo from "@/assets/logo.png";
import instagramIcon from "@/assets/mdi_instagram.png";
import facebookIcon from "@/assets/mingcute_facebook-line.png";
import whatsappIcon from "@/assets/ic_baseline-whatsapp.png";
import youtubeIcon from "@/assets/mingcute_youtube-line.png";

const Footer = () => {
  return (
    <footer className="bg-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12 items-start">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="KPPD Logo" className="w-12 h-12 object-contain" />
              <span className="font-bold text-xl">KPPD</span>
            </div>
            <p className="text-foreground">
              Koperasi Pedagang Pusat Perbelanjaan Depok
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 min-h-[28px]">Alamat</h3>
            <p className="text-foreground leading-relaxed">
              Jl. Nusantara Raya, Depok Jaya, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16432
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 min-h-[28px]">Links</h3>
            <ul className="space-y-2 text-foreground">
              <li><a href="/sejarah" className="hover:text-primary transition-colors">› Sejarah dan Visi Misi</a></li>
              <li><a href="/struktur" className="hover:text-primary transition-colors">› Struktur Organisasi</a></li>
              <li><a href="/event" className="hover:text-primary transition-colors">› Event</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="font-bold text-lg mb-4">Ikuti Kami</h3>
          <div className="flex gap-4">
            <a href="#" className="transition-all duration-300 hover:brightness-0 hover:saturate-100 hover:[filter:invert(70%)_sepia(90%)_saturate(500%)_hue-rotate(0deg)_brightness(105%)_contrast(101%)]">
              <img src={instagramIcon} alt="Instagram" className="w-10 h-10" />
            </a>
            <a href="#" className="transition-all duration-300 hover:brightness-0 hover:saturate-100 hover:[filter:invert(70%)_sepia(90%)_saturate(500%)_hue-rotate(0deg)_brightness(105%)_contrast(101%)]">
              <img src={whatsappIcon} alt="WhatsApp" className="w-10 h-10" />
            </a>
            <a href="#" className="transition-all duration-300 hover:brightness-0 hover:saturate-100 hover:[filter:invert(70%)_sepia(90%)_saturate(500%)_hue-rotate(0deg)_brightness(105%)_contrast(101%)]">
              <img src={youtubeIcon} alt="YouTube" className="w-10 h-10" />
            </a>
            <a href="#" className="transition-all duration-300 hover:brightness-0 hover:saturate-100 hover:[filter:invert(70%)_sepia(90%)_saturate(500%)_hue-rotate(0deg)_brightness(105%)_contrast(101%)]">
              <img src={facebookIcon} alt="Facebook" className="w-10 h-10" />
            </a>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-foreground">
          <p>KPPD All Rights Reserved - 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
