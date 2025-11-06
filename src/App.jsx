import React, { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import TaskForm from './components/TaskForm';
import Summary from './components/Summary';
import ItemsTable from './components/ItemsTable';

export default function App() {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('cleaning_products');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('cleaning_tasks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cleaning_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('cleaning_tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddProduct = (p) => setProducts((prev) => [p, ...prev]);
  const handleAddTask = (t) => setTasks((prev) => [t, ...prev]);

  const handleRemoveProduct = (id) => setProducts((prev) => prev.filter(p => p.id !== id));
  const handleRemoveTask = (id) => setTasks((prev) => prev.filter(t => t.id !== id));

  const annualCost = useMemo(() => products.reduce((sum, p) => sum + p.price * p.frequency, 0), [products]);
  const annualMinutes = useMemo(() => tasks.reduce((sum, t) => sum + t.minutes * t.frequency, 0), [tasks]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        <Summary products={products} tasks={tasks} />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProductForm onAdd={handleAddProduct} />
          <TaskForm onAdd={handleAddTask} />
        </div>

        <ItemsTable
          products={products}
          tasks={tasks}
          onRemoveProduct={handleRemoveProduct}
          onRemoveTask={handleRemoveTask}
        />

        <section className="text-sm text-gray-500">
          <p>
            Stima annua basata sui dati inseriti. Salviamo gli elementi nel tuo browser in modo che li ritrovi alla prossima visita.
          </p>
        </section>
      </main>

      <footer className="max-w-5xl mx-auto px-6 py-10 text-center text-gray-400">
        &copy; {new Date().getFullYear()} Calcolatore Pulizie Casa
      </footer>
    </div>
  );
}
