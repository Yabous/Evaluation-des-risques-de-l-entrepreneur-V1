import { Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Dashboard from '@/pages/Dashboard';
import EvaluationForm from '@/pages/EvaluationForm';
import History from '@/pages/History';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/evaluation" element={<EvaluationForm />} />
          <Route path="/historique" element={<History />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;