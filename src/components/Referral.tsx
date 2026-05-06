import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Получи ссылку", desc: "Уникальная реферальная ссылка генерируется в приложении за секунду" },
  { num: "02", title: "Поделись с другом", desc: "Отправь ссылку — другу нужно просто скачать VPN по ней" },
  { num: "03", title: "+1 USDT на счёт", desc: "Как только друг подключится, деньги мгновенно приходят тебе" },
];

export default function Referral() {
  return (
    <div
      id="referral"
      className="min-h-screen flex flex-col lg:flex-row"
      style={{ backgroundColor: "#08120a" }}
    >
      <div className="flex-1 relative overflow-hidden h-[40vh] lg:h-auto">
        <img
          src="https://cdn.poehali.dev/projects/a4028629-4e20-4a16-9a19-6da80fd3ce58/files/a5888e2d-1781-43f9-bc60-0734f9a6b086.jpg"
          alt="Referral program"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#08120a] hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08120a] to-transparent lg:hidden" />
      </div>

      <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-sm mb-4">
            Реферальная программа
          </p>
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight mb-4">
            ПРИГЛАШАЙ.<br />
            <span className="text-[#C9A84C]">ЗАРАБАТЫВАЙ.</span>
          </h2>
          <p className="text-[#a89060] text-lg mb-12 max-w-md">
            За каждого друга, который подключит VPN по твоей ссылке — ты получаешь <span className="text-[#C9A84C] font-bold">1 USDT</span>. Без лимитов на количество.
          </p>

          <div className="flex flex-col gap-6 mb-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-5 items-start border-b border-[#C9A84C]/15 pb-6"
              >
                <span className="text-[#C9A84C] text-3xl font-heading font-bold leading-none shrink-0 w-10">
                  {step.num}
                </span>
                <div>
                  <h4 className="text-white font-bold uppercase tracking-wide mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[#a89060] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-6 p-6 border border-[#C9A84C]/30 mb-8" style={{ backgroundColor: "#0d1a0f" }}>
            <div className="text-center shrink-0">
              <p className="text-[#C9A84C] text-4xl font-heading font-bold">1</p>
              <p className="text-[#C9A84C] text-lg font-bold">USDT</p>
            </div>
            <div className="w-px h-12 bg-[#C9A84C]/30" />
            <p className="text-[#e8d5a3] text-sm leading-relaxed">
              За каждого приглашённого друга — без ограничений. Пригласи 10 друзей — получи 10 USDT прямо сейчас.
            </p>
          </div>

          <a
            href="#download"
            className="inline-block bg-[#C9A84C] text-black font-bold uppercase tracking-widest px-10 py-4 text-sm hover:bg-white transition-all duration-300"
          >
            Получить реферальную ссылку
          </a>
        </motion.div>
      </div>
    </div>
  );
}
