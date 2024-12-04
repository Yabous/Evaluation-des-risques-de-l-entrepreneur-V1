import { ProjectAnalysis } from './types';

export function analyzeProject(
  investissementInitial: number,
  fluxTresorerie: number[],
  tauxActualisation: number
): ProjectAnalysis {
  // Calcul de la VAN
  const van = calculateVAN(investissementInitial, fluxTresorerie, tauxActualisation);
  
  // Calcul du TRI
  const tri = calculateTRI(investissementInitial, fluxTresorerie);
  
  // Calcul du délai de récupération
  const delaiRecuperation = calculateDelaiRecuperation(investissementInitial, fluxTresorerie);
  
  // Calcul du taux de couverture de la dette
  const tauxCouverture = calculateTauxCouverture(fluxTresorerie[0], investissementInitial * 0.7); // Hypothèse: 70% dette

  return {
    van,
    tri,
    delaiRecuperation,
    tauxCouverture
  };
}

function calculateVAN(investissementInitial: number, fluxTresorerie: number[], tauxActualisation: number): number {
  const vanFlux = fluxTresorerie.reduce((acc, flux, index) => {
    return acc + (flux / Math.pow(1 + tauxActualisation, index + 1));
  }, 0);
  
  return -investissementInitial + vanFlux;
}

function calculateTRI(investissementInitial: number, fluxTresorerie: number[]): number {
  let tauxMin = -1;
  let tauxMax = 1;
  const precision = 0.0001;
  
  while (tauxMax - tauxMin > precision) {
    const tauxMoyen = (tauxMin + tauxMax) / 2;
    const van = calculateVAN(investissementInitial, fluxTresorerie, tauxMoyen);
    
    if (van > 0) {
      tauxMin = tauxMoyen;
    } else {
      tauxMax = tauxMoyen;
    }
  }
  
  return (tauxMin + tauxMax) / 2;
}

function calculateDelaiRecuperation(investissementInitial: number, fluxTresorerie: number[]): number {
  let cumul = -investissementInitial;
  let annees = 0;
  
  for (let i = 0; i < fluxTresorerie.length; i++) {
    cumul += fluxTresorerie[i];
    if (cumul >= 0) {
      annees = i + 1;
      break;
    }
  }
  
  return annees;
}

function calculateTauxCouverture(fluxAnnuel: number, dette: number): number {
  // Hypothèse: remboursement sur 5 ans
  const annuite = dette / 5;
  return fluxAnnuel / annuite;
}