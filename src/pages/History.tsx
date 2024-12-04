import { useState } from 'react';
import { Table } from '@/components/ui/Table';
import { Select } from '@/components/ui/Select';

export default function History() {
  const [filter, setFilter] = useState('all');

  const evaluations = [
    {
      id: 1,
      entreprise: 'SARL Exemple',
      type: 'privé',
      secteur: 'Commerce',
      note: 'B+',
      dateEvaluation: '15/03/2024',
      statut: 'Approuvé'
    },
    {
      id: 2,
      entreprise: 'Société Nationale',
      type: 'public marchand',
      secteur: 'Industrie',
      note: 'BBB-',
      dateEvaluation: '10/03/2024',
      statut: 'En révision'
    }
  ];

  const filteredEvaluations = filter === 'all' 
    ? evaluations 
    : evaluations.filter(e => e.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Historique des Évaluations
        </h1>
        <Select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          options={[
            { value: 'all', label: 'Tous les types' },
            { value: 'public marchand', label: 'Public marchand' },
            { value: 'privé', label: 'Privé' }
          ]}
          className="w-48"
        />
      </div>

      <Table
        columns={[
          { header: 'Entreprise', accessor: 'entreprise' },
          { header: 'Type', accessor: 'type' },
          { header: 'Secteur', accessor: 'secteur' },
          { header: 'Note', accessor: 'note' },
          { header: 'Date d\'évaluation', accessor: 'dateEvaluation' },
          { header: 'Statut', accessor: 'statut' }
        ]}
        data={filteredEvaluations}
      />
    </div>
  );
}