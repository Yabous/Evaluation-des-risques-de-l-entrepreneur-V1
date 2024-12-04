import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';

export default function ContextualFactors() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-900">
        Facteurs Contextuels
      </h2>

      {/* Environnement Sectoriel */}
      <section className="space-y-6">
        <h3 className="text-lg font-medium text-gray-800">Environnement Sectoriel</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Cycle économique du secteur"
            options={[
              { value: 'growth', label: 'Croissance' },
              { value: 'mature', label: 'Mature' },
              { value: 'decline', label: 'Déclin' },
              { value: 'emerging', label: 'Émergent' },
            ]}
          />
          <Select
            label="Intensité de la régulation"
            options={[
              { value: 'high', label: 'Forte' },
              { value: 'moderate', label: 'Modérée' },
              { value: 'low', label: 'Faible' },
            ]}
          />
          <Select
            label="Tendances sectorielles"
            options={[
              { value: 'very-favorable', label: 'Très favorables' },
              { value: 'favorable', label: 'Favorables' },
              { value: 'stable', label: 'Stables' },
              { value: 'unfavorable', label: 'Défavorables' },
              { value: 'very-unfavorable', label: 'Très défavorables' },
            ]}
          />
        </div>
      </section>

      {/* Risques Pays */}
      <section className="space-y-6">
        <h3 className="text-lg font-medium text-gray-800">Risques Pays</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Stabilité politique"
            options={[
              { value: 'very-stable', label: 'Très stable' },
              { value: 'stable', label: 'Stable' },
              { value: 'unstable', label: 'Instable' },
              { value: 'very-unstable', label: 'Très instable' },
            ]}
          />
          <Select
            label="Environnement des affaires"
            options={[
              { value: 'favorable', label: 'Favorable' },
              { value: 'moderate', label: 'Modéré' },
              { value: 'challenging', label: 'Difficile' },
            ]}
          />
          <Input
            label="Note souveraine du pays"
            placeholder="Ex: B+, BB-, etc."
          />
        </div>
      </section>

      {/* Impact Environnemental et Social */}
      <section className="space-y-6">
        <h3 className="text-lg font-medium text-gray-800">Impact Environnemental et Social</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Conformité environnementale"
            options={[
              { value: 'full', label: 'Totalement conforme' },
              { value: 'partial', label: 'Partiellement conforme' },
              { value: 'non-compliant', label: 'Non conforme' },
            ]}
          />
          <Select
            label="Impact social"
            options={[
              { value: 'positive', label: 'Positif' },
              { value: 'neutral', label: 'Neutre' },
              { value: 'negative', label: 'Négatif' },
            ]}
          />
          <Select
            label="Initiatives ESG"
            options={[
              { value: 'advanced', label: 'Avancées' },
              { value: 'developing', label: 'En développement' },
              { value: 'basic', label: 'Basiques' },
              { value: 'minimal', label: 'Minimales' },
              { value: 'none', label: 'Aucune' },
            ]}
          />
        </div>
      </section>
    </div>
  );
}