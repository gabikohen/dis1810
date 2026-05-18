const items = [
  "Importación", "Distribución", "Marketing", "Logística",
  "Trade Marketing", "Alimentos & Bebidas", "Golosinas Premium", "Marcas Internacionales",
  "Importación", "Distribución", "Marketing", "Logística",
  "Trade Marketing", "Alimentos & Bebidas", "Golosinas Premium", "Marcas Internacionales",
];

export default function Ticker() {
  return (
    <div className="bg-gold-500 py-3 overflow-hidden">
      <div className="flex animate-ticker whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 shrink-0 font-condensed text-xs font-bold tracking-[0.18em] uppercase text-navy-800 px-8">
            <span className="w-1.5 h-1.5 bg-navy-800/40 rotate-45 shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
