import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls window to the top on route change.
 * Place inside <BrowserRouter>, typically above <Routes />.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instant scroll to top on every pathname change
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
