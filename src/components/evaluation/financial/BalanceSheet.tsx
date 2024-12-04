import { Input } from '@/components/ui/Input';
import { Section } from './Section';

interface BalanceSheetProps {
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
    };
  };
  onInputChange: (
    year: number,
    section: string,
    subsection: string,
    field: string,
    value: string
  ) => void;
  calculateTotal: (year: number, section: 'actif' | 'passif') => number;
}

export function BalanceSheet({ yearData, onInputChange, calculateTotal }: BalanceSheetProps) {
  return (
    <Section title="Bilan">
      {/* Actif */}
      <div className="space-y-4">
        <h4 className="font-medium text-gray-700">Actif</h4>
        <Input
          label="Immobilisations"
          type="number"
          value={yearData.data.bilan.actif.immobilisations}
          onChange={(e) => onInputChange(yearData.year, 'bilan', 'actif', 'immobilisations', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Stocks"
          type="number"
          value={yearData.data.bilan.actif.stocks}
          onChange={(e) => onInputChange(yearData.year, 'bilan', 'actif', 'stocks', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Créances clients"
          type="number"
          value={yearData.data.bilan.actif.creancesClients}
          onChange={(e) => onInputChange(yearData.year, 'bilan', 'actif', 'creancesClients', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Trésorerie active"
          type="number"
          value={yearData.data.bilan.actif.tresorerieActive}
          onChange={(e) => onInputChange(yearData.year, 'bilan', 'actif', 'tresorerieActive', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <div className="pt-2 border-t">
          <p className="text-sm font-medium text-gray-900">
            Total Actif: {calculateTotal(yearData.year, 'actif').toLocaleString()} FCFA
          </p>
        </div>
      </div>

      {/* Passif */}
      <div className="space-y-4 mt-6">
        <h4 className="font-medium text-gray-700">Passif</h4>
        <Input
          label="Capital"
          type="number"
          value={yearData.data.bilan.passif.capital}
          onChange={(e) => onInputChange(yearData.year, 'bilan', 'passif', 'capital', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Dettes financières"
          type="number"
          value={yearData.data.bilan.passif.dettesFinancieres}
          onChange={(e) => onInputChange(yearData.year, 'bilan', 'passif', 'dettesFinancieres', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Dettes fournisseurs"
          type="number"
          value={yearData.data.bilan.passif.dettesFournisseurs}
          onChange={(e) => onInputChange(yearData.year, 'bilan', 'passif', 'dettesFournisseurs', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Autres dettes"
          type="number"
          value={yearData.data.bilan.passif.autresDettes}
          onChange={(e) => onInputChange(yearData.year, 'bilan', 'passif', 'autresDettes', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <div className="pt-2 border-t">
          <p className="text-sm font-medium text-gray-900">
            Total Passif: {calculateTotal(yearData.year, 'passif').toLocaleString()} FCFA
          </p>
        </div>
      </div>
    </Section>
  );
}