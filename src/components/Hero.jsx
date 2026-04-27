import { useEffect, useState } from "react";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);



      
  return (
    <section className="h-[70vh] flex items-center justify-center overflow-hidden text-center text-white bg-cover bg-center"
      style={{
        backgroundImage: isMobile
          ? "url('/public/hero-mobile.jpg')"
          : "url('/public/hero-desktop.jpg')",
      }}>
         <div className=" absolute inset-0 bg-black/30 pointer-events-none z-0"></div>
      <div className="relative z-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-(--color-accent) uppercase">
        Delicious Catering for Every Occasion 
      </h1>

      <p className="mt-4 text-white text-lg font-bold">
         Premium catering for all your events
      </p>

      <button className="mt-6 px-6 py-3 bg-(--color-secondary) text-white rounded-lg hover:bg-(--color-accent) transition duration-300 font-bold">
        Book a Service
      </button>
      </div>
    </section>
  );
};

export default Hero;
    