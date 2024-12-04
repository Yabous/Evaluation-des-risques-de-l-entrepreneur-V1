import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Section } from './Section';
import { Select } from '@/components/ui/Select';

interface ForecastsProps {
  projectDuration: number;
  onProjectDurationChange: (duration: number) => void;
  forecastData: ForecastYear[];
  onForecastChange: (yearIndex: number, data: Partial<ForecastYear>) => void;
}

interface ForecastYear {
  year: number;
  investissements: {
    immobilisations: number;
    besoinFondsRoulement: number;
  };
  exploitation: {
    chiffreAffaires: number;
    chargesExploitation: number;
    dotationsAmortissements: number;
  };
  financement: {
    apportsPropres: number;
    emprunts: number;
    subventions: number;
  };
}

export function Forecasts({ 
  projectDuration, 
  onProjectDurationChange,
  forecastData,
  onForecastChange
}: ForecastsProps) {
  const [expandedSection, setExpandedSection] = useState<string>('investissements');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900">
          États Financiers Prévisionnels
        </h3>
        <Select
          value={projectDuration.toString()}
          onChange={(e) => onProjectDurationChange(parseInt(e.target.value))}
          options={[
            { value: "3", label: "3 ans" },
            { value: "5", label: "5 ans" },
            { value: "7", label: "7 ans" },
            { value: "10", label: "10 ans" }
          ]}
          className="w-32"
        />
      </div>

      {forecastData.map((yearData, index) => (
        <div key={yearData.year} className="space-y-4">
          <h4 className="font-medium text-gray-800">
            Année {index + 1} ({yearData.year})
          </h4>

          {/* Plan d'investissement */}
          <Section 
            title="Plan d'investissement"
            isExpanded={expandedSection === 'investissements'}
            onToggle={() => setExpandedSection('investissements')}
          >
            <div className="space-y-4">
              <Input
                label="Immobilisations"
                type="number"
                value={yearData.investissements.immobilisations}
                onChange={(e) => onForecastChange(index, {
                  investissements: {
                    ...yearData.investissements,
                    immobilisations: parseFloat(e.target.value)
                  }
                })}
                placeholder="Montant en FCFA"
              />
              <Input
                label="Besoin en fonds de roulement"
                type="number"
                value={yearData.investissements.besoinFondsRoulement}
                onChange={(e) => onForecastChange(index, {
                  investissements: {
                    ...yearData.investissements,
                    besoinFondsRoulement: parseFloat(e.target.value)
                  }
                })}
                placeholder="Montant en FCFA"
              />
            </div>
          </Section>

          {/* Compte d'exploitation prévisionnel */}
          <Section
            title="Compte d'exploitation prévisionnel"
            isExpanded={expandedSection === 'exploitation'}
            onToggle={() => setExpandedSection('exploitation')}
          >
            <div className="space-y-4">
              <Input
                label="Chiffre d'affaires prévisionnel"
                type="number"
                value={yearData.exploitation.chiffreAffaires}
                onChange={(e) => onForecastChange(index, {
                  exploitation: {
                    ...yearData.exploitation,
                    chiffreAffaires: parseFloat(e.target.value)
                  }
                })}
                placeholder="Montant en FCFA"
              />
              <Input
                label="Charges d'exploitation prévisionnelles"
                type="number"
                value={yearData.exploitation.chargesExploitation}
                onChange={(e) => onForecastChange(index, {
                  exploitation: {
                    ...yearData.exploitation,
                    chargesExploitation: parseFloat(e.target.value)
                  }
                })}
                placeholder="Montant en FCFA"
              />
              <Input
                label="Dotations aux amortissements"
                type="number"
                value={yearData.exploitation.dotationsAmortissements}
                onChange={(e) => onForecastChange(index, {
                  exploitation: {
                    ...yearData.exploitation,
                    dotationsAmortissements: parseFloat(e.target.value)
                  }
                })}
                placeholder="Montant en FCFA"
              />
            </div>
          </Section>

          {/* Plan de financement */}
          <Section
            title="Plan de financement"
            isExpanded={expandedSection === 'financement'}
            onToggle={() => setExpandedSection('financement')}
          >
            <div className="space-y-4">
              <Input
                label="Apports propres"
                type="number"
                value={yearData.financement.apportsPropres}
                onChange={(e) => onForecastChange(index, {
                  financement: {
                    ...yearData.financement,
                    apportsPropres: parseFloat(e.target.value)
                  }
                })}
                placeholder="Montant en FCFA"
              />
              <Input
                label="Emprunts"
                type="number"
                value={yearData.financement.emprunts}
                onChange={(e) => onForecastChange(index, {
                  financement: {
                    ...yearData.financement,
                    emprunts: parseFloat(e.target.value)
                  }
                })}
                placeholder="Montant en FCFA"
              />
              <Input
                label="Subventions"
                type="number"
                value={yearData.financement.subventions}
                onChange={(e) => onForecastChange(index, {
                  financement: {
                    ...yearData.financement,
                    subventions: parseFloat(e.target.value)
                  }
                })}
                placeholder="Montant en FCFA"
              />
            </div>
          </Section>
        </div>
      ))}
    </div>
  );
}