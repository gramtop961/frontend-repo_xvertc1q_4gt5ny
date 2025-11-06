import React from 'react';

export default function Header() {
  return (
    <header className="w-full py-10 bg-gradient-to-b from-indigo-600 to-indigo-500 text-white rounded-b-3xl shadow-lg">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Pulizie di Casa: Calcolatore Annuo di Costi e Tempo
        </h1>
        <p className="mt-3 text-indigo-100 leading-relaxed">
          Inserisci i prodotti che acquisti e le attività che svolgi per le pulizie domestiche. 
          Ti mostreremo quanto spendi in un anno e quante ore impieghi complessivamente.
        </p>
      </div>
    </header>
  );
}
