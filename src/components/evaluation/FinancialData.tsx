import { useState } from 'react';
import { BalanceSheet } from './financial/BalanceSheet';
import { IncomeStatement } from './financial/IncomeStatement';
import { CashFlow } from './financial/CashFlow';
import { RatiosAnalysis } from './financial/RatiosAnalysis';
import { ProjectData } from './financial/ProjectData';
import { Forecasts } from './financial/Forecasts';
import { ProjectAnalysis } from './financial/ProjectAnalysis';
import { analyzeProject } from '@/lib/projectAnalysis';
import { Tabs } from './Tabs';
import { initialFinancialData, initialForecastData } from '@/lib/initialData';
import type { FinancialYear } from '@/lib/initialData';
import type { ForecastYear } from '@/lib/types';

export default function FinancialData() {
  const [activeTab, setActiveTab] = useState('historical');
  const [expandedSections, setExpandedSections] = useState({
    bilan: true,
    resultat: false,
    tresorerie: false,
    ratios: false
  });

  const [financialData, setFinancialData] = useState<FinancialYear[]>(initialFinancialData);
  const [projectData, setProjectData] = useState({
    nomProjet: '',
    montantTotal: 0,
    montantEmprunt: 0,
    tauxInteret: 0,
    tauxActualisation: 0,
    dureeEmprunt: 0,
    description: '',
    risquesNonFinanciers: ''
  });
  const [projectDuration, setProjectDuration] = useState(3);
  const [forecastData, setForecastData] = useState<ForecastYear[]>(initialForecastData);

  const handleProjectDurationChange = (duration: number) => {
    setProjectDuration(duration);
    // Ajuster le nombre d'années de prévision
    const newForecastData = [...forecastData];
    const currentYear = new Date().getFullYear();
    
    while (newForecastData.length < duration) {
      newForecastData.push({
        year: currentYear + newForecastData.length,
        investissements: { immobilisations: 0, besoinFondsRoulement: 0 },
        exploitation: { chiffreAffaires: 0, chargesExploitation: 0, dotationsAmortissements: 0 },
        financement: { apportsPropres: 0, emprunts: 0, subventions: 0 }
      });
    }
    
    setForecastData(newForecastData.slice(0, duration));
  };

  const handleForecastChange = (yearIndex: number, data: Partial<ForecastYear>) => {
    const newForecastData = [...forecastData];
    newForecastData[yearIndex] = { ...newForecastData[yearIndex], ...data };
    setForecastData(newForecastData);
  };

  const projectAnalysis = analyzeProject(
    projectData.montantTotal,
    forecastData.map(year => year.exploitation.chiffreAffaires - year.exploitation.chargesExploitation),
    projectData.tauxActualisation / 100
  );

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-900">
        Données Financières
      </h2>

      <Tabs
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={[
          { id: 'historical', label: 'Données Historiques' },
          { id: 'project', label: 'Données du Projet' },
          { id: 'forecasts', label: 'Prévisions' },
        ]}
      />

      {activeTab === 'historical' && (
        <div className="space-y-6">
          {financialData.map((yearData, index) => (
            <div key={yearData.year} className="space-y-6">
              <h3 className="font-medium text-gray-800">
                Année {yearData.year}
              </h3>
              <BalanceSheet
                yearData={yearData}
                onInputChange={() => {}}
                calculateTotal={() => 0}
              />
              <IncomeStatement
                yearData={yearData}
                onInputChange={() => {}}
              />
              <CashFlow
                yearData={yearData}
                onInputChange={() => {}}
              />
              <RatiosAnalysis yearData={yearData} />
            </div>
          ))}
        </div>
      )}

      {activeTab === 'project' && (
        <ProjectData
          projectData={projectData}
          onProjectDataChange={(newData) => setProjectData(prev => ({ ...prev, ...newData }))}
        />
      )}

      {activeTab === 'forecasts' && (
        <div className="space-y-6">
          <Forecasts
            projectDuration={projectDuration}
            onProjectDurationChange={handleProjectDurationChange}
            forecastData={forecastData}
            onForecastChange={handleForecastChange}
          />
          
          <ProjectAnalysis analysis={projectAnalysis} />
        </div>
      )}
    </div>
  );
}