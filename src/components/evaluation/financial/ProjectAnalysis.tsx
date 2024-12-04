import { Section } from './Section';
import { ProjectAnalysis as IProjectAnalysis } from '@/lib/types';
import { formatMontant, formatRatio } from '@/lib/ratios';

interface ProjectAnalysisProps {
  analysis: IProjectAnalysis;
}

export function ProjectAnalysis({ analysis }: ProjectAnalysisProps) {
  return (
    <Section title="Analyse du Projet">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Indicateurs de rentabilité</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">VAN</span>
                <span className="text-sm font-medium">{formatMontant(analysis.van)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">TRI</span>
                <span className="text-sm font-medium">{formatRatio(analysis.tri)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Délai de récupération</span>
                <span className="text-sm font-medium">{analysis.delaiRecuperation} ans</span>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Analyse du risque</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Taux de couverture de la dette</span>
                <span className="text-sm font-medium">{analysis.tauxCouverture.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Évaluation</span>
                <span className={`text-sm font-medium ${
                  analysis.van > 0 && analysis.tri > 0.1
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}>
                  {analysis.van > 0 && analysis.tri > 0.1 ? 'Projet viable' : 'Projet risqué'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProjectAnalysis;