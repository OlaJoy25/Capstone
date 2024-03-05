import { useEffect } from "react";
import Services from "./components/services";
import Hero from "./components/hero";
import Newsletter from "./components/newsletter";
import Testimonials from "./components/testimonials";
import Zigzag from "./components/zigzag";

import AOS from "aos";
import "aos/dist/aos.css";
import PageIllustration from "./components/page-illustration";
import Footer from "./components/ui/footer";

export default function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });
  return (
    <main className="grow">
      <PageIllustration />
      <Hero />
      <Services />
      <Zigzag />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
