export default function Featured() {
  const advantages = [
    { num: "01", title: "Скачай VPN", desc: "Переходи по ссылке и устанавливай приложение за 30 секунд" },
    { num: "02", title: "Подключись", desc: "Включи VPN — твой трафик начинает работать на тебя" },
    { num: "03", title: "Получай деньги", desc: "Каждое подключение приносит реальные выплаты на счёт" },
  ];

  return (
    <div
      id="how"
      className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0"
      style={{ backgroundColor: "#0d1a0f" }}
    >
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/a4028629-4e20-4a16-9a19-6da80fd3ce58/files/44668b00-89fb-4a36-881a-233f2e747794.jpg"
          alt="VPN connection visualization"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-16 lg:order-1">
        <h3 className="uppercase mb-6 text-sm tracking-[0.3em] text-[#C9A84C]">
          Как это работает
        </h3>
        <p className="text-3xl lg:text-5xl mb-12 text-white leading-tight font-heading font-bold">
          Три шага до первых денег
        </p>

        <div className="flex flex-col gap-8">
          {advantages.map((item) => (
            <div key={item.num} className="flex gap-6 items-start border-b border-[#C9A84C]/20 pb-8">
              <span className="text-[#C9A84C] text-4xl font-heading font-bold leading-none shrink-0">
                {item.num}
              </span>
              <div>
                <h4 className="text-white text-lg font-bold mb-1 uppercase tracking-wide">
                  {item.title}
                </h4>
                <p className="text-[#a89060] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#download"
          id="download"
          className="mt-10 inline-block border border-[#C9A84C] text-[#C9A84C] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#C9A84C] hover:text-black transition-all duration-300 w-fit"
        >
          Получить ссылку
        </a>
      </div>
    </div>
  );
}