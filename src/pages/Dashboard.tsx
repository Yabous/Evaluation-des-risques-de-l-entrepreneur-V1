import RatingCard from '@/components/dashboard/RatingCard';
import { BarChart, PieChart } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Dashboard() {
  const getRatingColor = (rating: string) => {
    if (rating.startsWith('A') || rating.startsWith('BBB')) return 'text-success-600';
    if (rating.startsWith('BB') || rating.startsWith('B+')) return 'text-warning-600';
    return 'text-danger-600';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">
        Tableau de Bord des Notations
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <RatingCard
          title="Note moyenne de l'entreprise"
          rating="B+"
          trend="stable"
          description="SARL Exemple - Commerce"
        />
        <RatingCard
          title="Note moyenne globale des entreprises"
          rating="BB-"
          trend="up"
          description="Moyenne de toutes les entreprises"
        />
        <RatingCard
          title="Niveau de risque du portefeuille"
          rating="Modéré"
          trend="stable"
          description="Basé sur la distribution des notes"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Notes moyennes par type d'emprunteur */}
        <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Notes moyennes par type d'emprunteur
            </h2>
            <PieChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Public marchand</span>
              <span className={cn("font-semibold", getRatingColor("BBB+"))}>BBB+</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Privé</span>
              <span className={cn("font-semibold", getRatingColor("BB+"))}>BB+</span>
            </div>
          </div>
        </div>

        {/* Notes moyennes par secteur */}
        <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Notes moyennes par secteur
            </h2>
            <BarChart className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Agriculture</span>
              <span className={cn("font-semibold", getRatingColor("BB"))}>BB</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Industrie</span>
              <span className={cn("font-semibold", getRatingColor("BBB-"))}>BBB-</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Services</span>
              <span className={cn("font-semibold", getRatingColor("BB+"))}>BB+</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-700 font-medium">Commerce</span>
              <span className={cn("font-semibold", getRatingColor("B+"))}>B+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}