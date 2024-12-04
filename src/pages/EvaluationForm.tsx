import { useState } from 'react';
import { Tabs } from '@/components/evaluation/Tabs';
import CompanyInfo from '@/components/evaluation/CompanyInfo';
import FinancialData from '@/components/evaluation/FinancialData';
import QualitativeAnalysis from '@/components/evaluation/QualitativeAnalysis';
import ContextualFactors from '@/components/evaluation/ContextualFactors';
import Button from '@/components/ui/Button';

export default function EvaluationForm() {
  const [activeTab, setActiveTab] = useState('company');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-semibold text-gray-900 mb-8">
        Nouvelle Évaluation
      </h1>

      <Tabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={[
          { id: 'company', label: 'Information Entreprise' },
          { id: 'financial', label: 'Données Financières' },
          { id: 'qualitative', label: 'Analyse Qualitative' },
          { id: 'contextual', label: 'Facteurs Contextuels' },
        ]}
      />

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        {activeTab === 'company' && <CompanyInfo />}
        {activeTab === 'financial' && <FinancialData />}
        {activeTab === 'qualitative' && <QualitativeAnalysis />}
        {activeTab === 'contextual' && <ContextualFactors />}

        <div className="mt-8 flex justify-between">
          <Button
            variant="outline"
            onClick={() => {
              const tabs = ['company', 'financial', 'qualitative', 'contextual'];
              const currentIndex = tabs.indexOf(activeTab);
              if (currentIndex > 0) {
                setActiveTab(tabs[currentIndex - 1]);
              }
            }}
            disabled={activeTab === 'company'}
          >
            Précédent
          </Button>
          <Button
            onClick={() => {
              const tabs = ['company', 'financial', 'qualitative', 'contextual'];
              const currentIndex = tabs.indexOf(activeTab);
              if (currentIndex < tabs.length - 1) {
                setActiveTab(tabs[currentIndex + 1]);
              }
            }}
            disabled={activeTab === 'contextual'}
          >
            Suivant
          </Button>
        </div>
      </div>
    </div>
  );
}