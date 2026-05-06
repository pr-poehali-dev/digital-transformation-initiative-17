import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="https://cdn.poehali.dev/projects/a4028629-4e20-4a16-9a19-6da80fd3ce58/files/7c21fbaf-a87f-40b7-8ba5-d91e68979df5.jpg"
            alt="Casino atmosphere"
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-[#C9A84C] uppercase z-10 text-sm md:text-base tracking-[0.3em]">
        Правила простые
      </h3>

      <p className="absolute bottom-12 right-6 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl z-10 font-heading font-bold leading-tight">
        Скачал — кнопка<br />
        <span className="text-[#C9A84C]">стала активной.</span><br />
        Кликнул — деньги<br />
        твои.
      </p>
    </div>
  );
}
