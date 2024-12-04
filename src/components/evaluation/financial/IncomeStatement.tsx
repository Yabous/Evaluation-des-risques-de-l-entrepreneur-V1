import { Input } from '@/components/ui/Input';
import { Section } from './Section';

interface IncomeStatementProps {
  yearData: {
    year: number;
    data: {
      resultat: {
        chiffreAffaires: number;
        chargesExploitation: number;
        resultatExploitation: number;
        resultatFinancier: number;
        resultatNet: number;
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

export function IncomeStatement({ yearData, onInputChange }: IncomeStatementProps) {
  return (
    <Section title="Compte de Résultat">
      <div className="space-y-4">
        <Input
          label="Chiffre d'affaires"
          type="number"
          value={yearData.data.resultat.chiffreAffaires}
          onChange={(e) => onInputChange(yearData.year, 'resultat', '', 'chiffreAffaires', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Charges d'exploitation"
          type="number"
          value={yearData.data.resultat.chargesExploitation}
          onChange={(e) => onInputChange(yearData.year, 'resultat', '', 'chargesExploitation', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Résultat d'exploitation"
          type="number"
          value={yearData.data.resultat.resultatExploitation}
          onChange={(e) => onInputChange(yearData.year, 'resultat', '', 'resultatExploitation', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Résultat financier"
          type="number"
          value={yearData.data.resultat.resultatFinancier}
          onChange={(e) => onInputChange(yearData.year, 'resultat', '', 'resultatFinancier', e.target.value)}
          placeholder="Montant en FCFA"
        />
        <Input
          label="Résultat net"
          type="number"
          value={yearData.data.resultat.resultatNet}
          onChange={(e) => onInputChange(yearData.year, 'resultat', '', 'resultatNet', e.target.value)}
          placeholder="Montant en FCFA"
        />
      </div>
    </Section>
  );
}