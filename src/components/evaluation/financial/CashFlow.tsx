import { Input } from '@/components/ui/Input';
import { Section } from './Section';

interface CashFlowProps {
  yearData: {
    year: number;
    data: {
      tresorerie: {
        fluxExploitation: number;
        fluxInvestissement: number;
        fluxFinancement: number;
        variationTresorerie: number;
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
}

export function CashFlow({ yearData, onInputChange }: CashFlowProps) {
  return (
    <Section title="Tableau de Flux de Trésorerie">
      <div className="space-y-4">
        <Input
          label="Flux de trésorerie d'exploitation"
          type="number"
          value={yearData.data.tresorerie.fluxExploitation}
          onChange={(e) => onInputChange(yearData.year, 'tresorerie', '', 'fluxExploitation', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Flux de trésorerie d'investissement"
          type="number"
          value={yearData.data.tresorerie.fluxInvestissement}
          onChange={(e) => onInputChange(yearData.year, 'tresorerie', '', 'fluxInvestissement', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Flux de trésorerie de financement"
          type="number"
          value={yearData.data.tresorerie.fluxFinancement}
          onChange={(e) => onInputChange(yearData.year, 'tresorerie', '', 'fluxFinancement', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Variation de trésorerie"
          type="number"
          value={yearData.data.tresorerie.variationTresorerie}
          onChange={(e) => onInputChange(yearData.year, 'tresorerie', '', 'variationTresorerie', e.target.value)}
          placeholder="Montant en FCFA"
        />
      </div>
    </Section>
  );
}