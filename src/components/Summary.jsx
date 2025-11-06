import React from 'react';

function formatCurrency(value) {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
}

export default function Summary({ products, tasks }) {
  const annualCost = products.reduce((sum, p) => sum + p.price * p.frequency, 0);
  const annualMinutes = tasks.reduce((sum, t) => sum + t.minutes * t.frequency, 0);
  const annualHours = annualMinutes / 60;

  return (
    <section className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold text-gray-800">Riepilogo Annuo</h3>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Spesa totale</p>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(annualCost)}</p>
        </div>
        <div className="rounded-lg border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Minuti totali</p>
          <p className="text-2xl font-bold text-gray-900">{annualMinutes}</p>
        </div>
        <div className="rounded-lg border border-gray-100 p-4">
          <p className="text-sm text-gray-500">Ore totali</p>
          <p className="text-2xl font-bold text-gray-900">{annualHours.toFixed(1)}</p>
        </div>
      </div>
    </section>
  );
}
