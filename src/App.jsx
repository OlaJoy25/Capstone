import { useEffect } from "react";
import Services from "./components/services";
import Hero from "./components/hero";
import Newsletter from "./components/newsletter";
import Testimonials from "./components/testimonials";
import Zigzag from "./components/zigzag";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

import AOS from "aos";
import "aos/dist/aos.css";
import PageIllustration from "./components/page-illustration";
import { Navbar } from "./components/Navbar";
import Footer from "./components/ui/footer";
import { Routes, Route } from "react-router-dom";
import { Experts } from "./components/pages/experts";
import { Faq } from "./components/pages/faq";
import { Blog } from "./components/pages/blog";

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
    <main className="grow overflow-hidden">
      <div className="App">
        <TawkMessengerReact
          propertyId="65f73745cc1376635adb91e2"
          widgetId="1hp6qvr59"
        />
      </div>
      <PageIllustration />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Services />
              <Zigzag />
              <Testimonials />
              <Newsletter />
              <Footer />
            </main>
          }
        />

        <Route path="/experts" element={<Experts />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </main>
  );
}
