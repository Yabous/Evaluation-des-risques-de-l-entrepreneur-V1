import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Section } from './Section';

interface ProjectDataProps {
  projectData: {
    nomProjet: string;
    montantTotal: number;
    montantEmprunt: number;
    tauxInteret: number;
    tauxActualisation: number;
    dureeEmprunt: number;
    description: string;
    risquesNonFinanciers: string;
  };
  onProjectDataChange: (data: Partial<ProjectDataProps['projectData']>) => void;
}

export function ProjectData({ projectData, onProjectDataChange }: ProjectDataProps) {
  return (
    <Section title="Données du projet à financer">
      <div className="space-y-6">
        <Input
          label="Nom du projet"
          value={projectData.nomProjet}
          onChange={(e) => onProjectDataChange({ nomProjet: e.target.value })}
          placeholder="Entrez le nom du projet"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Montant total du projet (FCFA)"
            type="number"
            value={projectData.montantTotal}
            onChange={(e) => onProjectDataChange({ montantTotal: parseFloat(e.target.value) })}
            placeholder="Entrez le montant total"
          />
          
          <Input
            label="Montant de l'emprunt (FCFA)"
            type="number"
            value={projectData.montantEmprunt}
            onChange={(e) => onProjectDataChange({ montantEmprunt: parseFloat(e.target.value) })}
            placeholder="Entrez le montant de l'emprunt"
          />
          
          <Input
            label="Taux d'intérêt (%)"
            type="number"
            step="0.01"
            value={projectData.tauxInteret}
            onChange={(e) => onProjectDataChange({ tauxInteret: parseFloat(e.target.value) })}
            placeholder="Entrez le taux d'intérêt"
          />
          
          <Input
            label="Taux d'actualisation (%)"
            type="number"
            step="0.01"
            value={projectData.tauxActualisation}
            onChange={(e) => onProjectDataChange({ tauxActualisation: parseFloat(e.target.value) })}
            placeholder="Entrez le taux d'actualisation"
          />
          
          <Input
            label="Durée du prêt (années)"
            type="number"
            value={projectData.dureeEmprunt}
            onChange={(e) => onProjectDataChange({ dureeEmprunt: parseInt(e.target.value) })}
            placeholder="Entrez la durée du prêt"
          />
        </div>

        <Textarea
          label="Description du projet"
          value={projectData.description}
          onChange={(e) => onProjectDataChange({ description: e.target.value })}
          placeholder="Décrivez brièvement le projet..."
        />

        <Textarea
          label="Principaux risques non financiers identifiés"
          value={projectData.risquesNonFinanciers}
          onChange={(e) => onProjectDataChange({ risquesNonFinanciers: e.target.value })}
          placeholder="Listez les principaux risques non financiers..."
        />
      </div>
    </Section>
  );
}