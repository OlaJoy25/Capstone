import { useEffect } from "react";
import Services from "./components/services";
import Hero from "./components/hero";
import Newsletter from "./components/newsletter";
import Testimonials from "./components/testimonials";
import Zigzag from "./components/zigzag";

import AOS from "aos";
import "aos/dist/aos.css";
import PageIllustration from "./components/page-illustration";
import { Navbar } from "./components/Navbar";
import Footer from "./components/ui/footer";
import { Route, Routes } from "react-router-dom";
import { Experts} from "./components/pages/experts";
import { Booking} from "./components/pages/booking";
import { Chatbot} from "./components/pages/chatbot";




  
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
      <Navbar />
      <Routes>
          {/* <Route path ="/" element={<Welcome/>}/> */}

         
         <Route path ="/experts" element={<Experts/>}/>
         <Route path ="/booking" element={<Booking/>}/>
         <Route path ="/chatbot" element={<Chatbot/>}/> 
         
      </Routes>
      <Hero />
      <Services />
      <Zigzag />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>

  );
}