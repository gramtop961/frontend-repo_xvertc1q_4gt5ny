import React, { useState } from 'react';

export default function TaskForm({ onAdd }) {
  const [name, setName] = useState('');
  const [minutes, setMinutes] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !minutes || !frequency) return;

    const minNum = parseInt(minutes, 10);
    const freqNum = parseInt(frequency, 10);
    if (Number.isNaN(minNum) || Number.isNaN(freqNum) || minNum < 0 || freqNum < 0) return;

    onAdd({ id: crypto.randomUUID(), name, minutes: minNum, frequency: freqNum });
    setName('');
    setMinutes('');
    setFrequency('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow p-4 space-y-3">
      <h3 className="font-semibold text-gray-800">Aggiungi Attività</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Attività (es. Lavare i pavimenti)"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          min="0"
          step="1"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
          placeholder="Minuti per volta"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="number"
          min="0"
          step="1"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
          placeholder="Frequenza/anno"
          className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 hover:bg-indigo-700 transition">
          Aggiungi
        </button>
      </div>
    </form>
  );
}
