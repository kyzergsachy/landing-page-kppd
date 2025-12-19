import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const base = "px-4 py-2";
  // active navigation: keep text style but set border color to #FEA500
  const active = "text-primary font-semibold border-b-2 border-[#FEA500]";
  const inactive = "text-foreground hover:text-primary transition-colors";
  const mobileActive = "text-primary font-semibold bg-primary/10";
  const mobileInactive = "text-foreground hover:bg-accent";
  
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl">
      <div className="bg-white/60 backdrop-blur-md rounded-[2rem] shadow-lg px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src={logo} alt="KPPD Logo" className="w-12 h-12 object-contain" />
          <span className="font-bold text-lg">KPPD</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
          >
            Beranda
          </NavLink>
          <NavLink
            to="/sejarah"
            end
            className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
          >
            Sejarah
          </NavLink>
          <NavLink
            to="/struktur"
            end
            className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
          >
            Struktur
          </NavLink>
          <NavLink
            to="/event"
            end
            className={({ isActive }) => `${base} ${isActive ? active : inactive}`}
          >
            Kegiatan
          </NavLink>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col gap-4 mt-8">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-3 rounded-lg transition-colors ${isActive ? mobileActive : mobileInactive}`
                }
              >
                Beranda
              </NavLink>
              <NavLink
                to="/sejarah"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-3 rounded-lg transition-colors ${isActive ? mobileActive : mobileInactive}`
                }
              >
                Sejarah
              </NavLink>
              <NavLink
                to="/struktur"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-3 rounded-lg transition-colors ${isActive ? mobileActive : mobileInactive}`
                }
              >
                Struktur
              </NavLink>
              <NavLink
                to="/event"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-3 rounded-lg transition-colors ${isActive ? mobileActive : mobileInactive}`
                }
              >
                Kegiatan
              </NavLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navigation;
