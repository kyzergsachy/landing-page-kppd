import iconLocation from "@/assets/icon_location.png";
import iconTelephone from "@/assets/icon_telephone.png";
import iconMail from "@/assets/icon_mail.png";
import iconClock from "@/assets/clock.png";
import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Kontak Kami</h2>
          <div className="h-1 w-24 bg-[#FEA500] mt-2 rounded-full"></div>
        </div>
        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Untuk informasi lebih lanjut mengenai kegiatan dan layanan Koperasi, Anda dapat menghubungi kami melalui kontak di bawah ini.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="rounded-3xl overflow-hidden h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.5892435196874!2d106.81391724407844!3d-6.393705435215708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e959ce587ac9%3A0x4f0297b2725f3657!2sPasar%20Depok%20Jaya!5e1!3m2!1sen!2sid!4v1761643035242!5m2!1sen!2sid"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src={iconLocation} alt="Location" className="w-12 h-12" />
              </div>
              <div>
                <p className="text-muted-foreground">
                  Jl. Nusantara Raya, Gedung Pasar Depok Jaya Lantai 4, Depok Jaya, Kec. Pancoran Mas, Kota Depok, Jawa Barat 16432
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src={iconTelephone} alt="Phone" className="w-12 h-12" />
              </div>
              <div>
                <p className="text-muted-foreground">08123456789</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src={iconMail} alt="Email" className="w-12 h-12" />
              </div>
              <div>
                <p className="text-muted-foreground">kpppddd@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src={iconClock} alt="Clock" className="w-12 h-12" />
              </div>
              <div>
                <p className="text-muted-foreground">Pukul 09.30 s/d 15.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
