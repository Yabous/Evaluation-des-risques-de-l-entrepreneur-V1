import { Select } from '@/components/ui/Select';
import { Input } from '@/components/ui/Input';

export default function QualitativeAnalysis() {
  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-gray-900">
        Analyse Qualitative
      </h2>

      {/* Gouvernance et Management */}
      <section className="space-y-6">
        <h3 className="text-lg font-medium text-gray-800">Gouvernance et Management</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Qualité de la gouvernance"
            options={[
              { value: 'excellent', label: 'Excellente' },
              { value: 'good', label: 'Bonne' },
              { value: 'average', label: 'Moyenne' },
              { value: 'poor', label: 'Faible' },
            ]}
          />
          <Select
            label="Expérience de l'équipe dirigeante"
            options={[
              { value: 'very-experienced', label: 'Très expérimentée (>10 ans)' },
              { value: 'experienced', label: 'Expérimentée (5-10 ans)' },
              { value: 'moderate', label: 'Modérée (2-5 ans)' },
              { value: 'limited', label: 'Limitée (<2 ans)' },
            ]}
          />
          <Select
            label="Structure organisationnelle"
            options={[
              { value: 'hierarchical', label: 'Hiérarchique traditionnelle' },
              { value: 'matrix', label: 'Matricielle' },
              { value: 'flat', label: 'Horizontale' },
              { value: 'divisional', label: 'Divisionnelle' },
              { value: 'network', label: 'En réseau' },
            ]}
          />
        </div>
      </section>

      {/* Position Concurrentielle */}
      <section className="space-y-6">
        <h3 className="text-lg font-medium text-gray-800">Position Concurrentielle</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Part de marché"
            options={[
              { value: 'leader', label: 'Leader (>30%)' },
              { value: 'strong', label: 'Forte (15-30%)' },
              { value: 'moderate', label: 'Moyenne (5-15%)' },
              { value: 'weak', label: 'Faible (<5%)' },
            ]}
          />
          <Input
            label="Nombre de concurrents directs"
            type="number"
            placeholder="Entrez le nombre..."
          />
          <Select
            label="Avantages compétitifs"
            options={[
              { value: 'cost', label: 'Leadership en coûts' },
              { value: 'differentiation', label: 'Différenciation produit/service' },
              { value: 'technology', label: 'Avantage technologique' },
              { value: 'network', label: 'Réseau de distribution' },
              { value: 'brand', label: 'Force de la marque' },
              { value: 'patents', label: 'Brevets et licences' },
            ]}
          />
        </div>
      </section>

      {/* Qualité des Actionnaires */}
      <section className="space-y-6">
        <h3 className="text-lg font-medium text-gray-800">Qualité des Actionnaires</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Type d'actionnariat"
            options={[
              { value: 'institutional', label: 'Institutionnel' },
              { value: 'private', label: 'Privé' },
              { value: 'public', label: 'Public' },
              { value: 'mixed', label: 'Mixte' },
            ]}
          />
          <Input
            label="Nombre d'actionnaires principaux"
            type="number"
            placeholder="Entrez le nombre..."
          />
          <Select
            label="Capacité de soutien financier"
            options={[
              { value: 'very-strong', label: 'Très forte' },
              { value: 'strong', label: 'Forte' },
              { value: 'moderate', label: 'Modérée' },
              { value: 'limited', label: 'Limitée' },
              { value: 'weak', label: 'Faible' },
            ]}
          />
        </div>
      </section>
    </div>
  );
}