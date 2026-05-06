import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/a4028629-4e20-4a16-9a19-6da80fd3ce58/files/7c21fbaf-a87f-40b7-8ba5-d91e68979df5.jpg"
          alt="Cinematic casino atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      <div className="relative z-10 text-center px-6">
        <p className="text-[#C9A84C] uppercase tracking-[0.4em] text-sm md:text-base mb-4 font-medium">
          Карты на стол
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight mb-6 text-white leading-none">
          КЛИКАЙ.<br />
          <span className="text-[#C9A84C]">ЗАБИРАЙ.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-80 text-[#e8d5a3] mb-10">
          Скачай приложение — и каждый клик превращается в реальные деньги на твоём счёте
        </p>
        <a
          href="#download"
          className="inline-block bg-[#C9A84C] text-black font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-white transition-all duration-300"
        >
          Скачать приложение
        </a>
      </div>
    </div>
  );
}
