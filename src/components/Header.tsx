interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-[#C9A84C] text-xl font-heading uppercase tracking-widest font-bold">
          ClickCash
        </div>
        <nav className="flex gap-8">
          <a
            href="#how"
            className="text-[#C9A84C] hover:text-white transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Как это работает
          </a>
          <a
            href="#download"
            className="text-[#C9A84C] hover:text-white transition-colors duration-300 uppercase text-sm tracking-wide"
          >
            Скачать
          </a>
        </nav>
      </div>
    </header>
  );
}
