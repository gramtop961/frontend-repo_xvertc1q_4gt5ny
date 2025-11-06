import React from 'react';

function formatCurrency(value) {
  return new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'EUR' }).format(value);
}

export default function ItemsTable({ products, tasks, onRemoveProduct, onRemoveTask }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl shadow">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h4 className="font-semibold text-gray-800">Prodotti</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-50">
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">Prezzo</th>
                <th className="px-4 py-2">Acquisti/anno</th>
                <th className="px-4 py-2">Totale</th>
                <th className="px-4 py-2"/>
              </tr>
            </thead>
            <tbody>
              {products.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-500">Nessun prodotto aggiunto</td>
                </tr>
              )}
              {products.map(p => (
                <tr key={p.id} className="border-t border-gray-100">
                  <td className="px-4 py-2">{p.name}</td>
                  <td className="px-4 py-2">{formatCurrency(p.price)}</td>
                  <td className="px-4 py-2">{p.frequency}</td>
                  <td className="px-4 py-2 font-medium">{formatCurrency(p.price * p.frequency)}</td>
                  <td className="px-4 py-2 text-right">
                    <button onClick={() => onRemoveProduct(p.id)} className="text-red-600 hover:underline">Rimuovi</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <h4 className="font-semibold text-gray-800">Attività</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left bg-gray-50">
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">Minuti/volta</th>
                <th className="px-4 py-2">Frequenza/anno</th>
                <th className="px-4 py-2">Minuti totali</th>
                <th className="px-4 py-2"/>
              </tr>
            </thead>
            <tbody>
              {tasks.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-gray-500">Nessuna attività aggiunta</td>
                </tr>
              )}
              {tasks.map(t => (
                <tr key={t.id} className="border-t border-gray-100">
                  <td className="px-4 py-2">{t.name}</td>
                  <td className="px-4 py-2">{t.minutes}</td>
                  <td className="px-4 py-2">{t.frequency}</td>
                  <td className="px-4 py-2 font-medium">{t.minutes * t.frequency}</td>
                  <td className="px-4 py-2 text-right">
                    <button onClick={() => onRemoveTask(t.id)} className="text-red-600 hover:underline">Rimuovi</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
