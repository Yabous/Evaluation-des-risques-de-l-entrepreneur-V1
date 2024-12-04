import { useMemo } from 'react';
import { Section } from './Section';
import { calculateFinancialRatios, formatRatio, formatMontant, getRiskLevel } from '@/lib/ratios';

interface RatiosAnalysisProps {
  yearData: {
    year: number;
    data: {
      bilan: {
        actif: {
          immobilisations: number;
          stocks: number;
          creancesClients: number;
          tresorerieActive: number;
        };
        passif: {
          capital: number;
          dettesFinancieres: number;
          dettesFournisseurs: number;
          autresDettes: number;
        };
      };
      resultat: {
        chiffreAffaires: number;
        chargesExploitation: number;
        resultatExploitation: number;
        resultatFinancier: number;
        resultatNet: number;
      };
      tresorerie: {
        fluxExploitation: number;
        fluxInvestissement: number;
        fluxFinancement: number;
        variationTresorerie: number;
      };
    };
  };
}

export function RatiosAnalysis({ yearData }: RatiosAnalysisProps) {
  const ratios = useMemo(() => calculateFinancialRatios(yearData.data), [yearData]);
  const riskLevel = getRiskLevel(ratios.probabiliteDefaut);

  return (
    <Section title="Analyse des Ratios">
      <div className="space-y-6">
        {/* Ratios de liquidité */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Ratios de liquidité</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Liquidité générale</span>
              <span className="text-sm font-medium">{ratios.liquidite.generale.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Liquidité réduite</span>
              <span className="text-sm font-medium">{ratios.liquidite.reduite.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Liquidité immédiate</span>
              <span className="text-sm font-medium">{ratios.liquidite.immediate.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Ratios de solvabilité */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Ratios de solvabilité</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Autonomie financière</span>
              <span className="text-sm font-medium">{formatRatio(ratios.solvabilite.autonomieFinanciere)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Taux d'endettement</span>
              <span className="text-sm font-medium">{formatRatio(ratios.solvabilite.endettement)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">DSCR</span>
              <span className="text-sm font-medium">{ratios.solvabilite.dscr.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Ratios de rentabilité */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Ratios de rentabilité</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Rentabilité économique</span>
              <span className="text-sm font-medium">{formatRatio(ratios.rentabilite.economique)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Rentabilité financière</span>
              <span className="text-sm font-medium">{formatRatio(ratios.rentabilite.financiere)}</span>
            </div>
          </div>
        </div>

        {/* Capacité d'autofinancement */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Capacité d'autofinancement</h4>
          <div className="flex justify-between">
            <span className="text-sm text-gray-600">CAF</span>
            <span className="text-sm font-medium">{formatMontant(ratios.capaciteAutofinancement)}</span>
          </div>
        </div>

        {/* Analyse du risque */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Analyse du risque</h4>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Probabilité de défaut</span>
            <div className="flex items-center">
              <div className="w-32 h-2 bg-gray-200 rounded-full mr-2">
                <div 
                  className={`h-full rounded-full ${
                    riskLevel.color === 'green' 
                      ? 'bg-green-500' 
                      : riskLevel.color === 'yellow'
                        ? 'bg-yellow-500' 
                        : 'bg-red-500'
                  }`}
                  style={{ width: `${ratios.probabiliteDefaut}%` }}
                />
              </div>
              <span className="text-sm font-medium">{formatRatio(ratios.probabiliteDefaut / 100)}</span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-600">Niveau de risque</span>
            <span className={`text-sm font-medium ${
              riskLevel.color === 'green' 
                ? 'text-green-600' 
                : riskLevel.color === 'yellow'
                  ? 'text-yellow-600' 
                  : 'text-red-600'
            }`}>
              {riskLevel.level}
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}