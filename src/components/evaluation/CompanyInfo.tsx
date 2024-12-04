import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

export default function CompanyInfo() {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900">
        Informations de l'Entreprise
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Type d'évaluation"
          options={[
            { value: 'new', label: 'Nouvelle entreprise' },
            { value: 'existing', label: 'Entreprise existante' },
          ]}
        />
        <Input
          label="Nom de l'entreprise"
          placeholder="Entrez le nom de l'entreprise"
        />
        <Input
          label="Numéro d'identification fiscale"
          placeholder="Entrez le NIF"
        />
        <Select
          label="Type d'entreprise"
          options={[
            { value: 'public', label: 'Entreprise publique' },
            { value: 'private', label: 'Entreprise privée' },
          ]}
        />
        <Select
          label="Secteur d'activité"
          options={[
            { value: 'agriculture', label: 'Agriculture' },
            { value: 'industrie', label: 'Industrie' },
            { value: 'services', label: 'Services' },
            { value: 'commerce', label: 'Commerce' },
          ]}
        />
        <Input
          label="Date de création"
          type="date"
        />
        <Input
          label="Chiffre d'affaires annuel"
          type="number"
          placeholder="Entrez le CA en FCFA"
        />
        <Input
          label="Nombre d'employés"
          type="number"
          placeholder="Entrez le nombre d'employés"
        />
      </div>
    </div>
  );
}