// Utilitaires pour le calcul des ratios financiers
export function calculateFinancialRatios(data: {
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
}) {
  const { bilan: { actif, passif }, resultat, tresorerie } = data;
  
  const totalActif = Object.values(actif).reduce((sum, val) => sum + val, 0);
  const totalPassif = Object.values(passif).reduce((sum, val) => sum + val, 0);
  const actifCirculant = actif.stocks + actif.creancesClients + actif.tresorerieActive;
  const passifCirculant = passif.dettesFournisseurs + passif.autresDettes;

  // Calcul de la CAF
  const dotationsAmortissements = actif.immobilisations * 0.1; // Estimation 10% des immobilisations
  const caf = resultat.resultatNet + dotationsAmortissements;

  // Calcul du DSCR
  const serviceAnnuelDette = passif.dettesFinancieres * 0.2; // Estimation 20% de remboursement annuel
  const dscr = tresorerie.fluxExploitation / (serviceAnnuelDette || 1);

  // Ratios de liquidité
  const liquiditeGenerale = actifCirculant / (passifCirculant || 1);
  const liquiditeReduite = (actifCirculant - actif.stocks) / (passifCirculant || 1);
  const liquiditeImmediate = actif.tresorerieActive / (passifCirculant || 1);

  // Ratios de solvabilité
  const autonomieFinanciere = passif.capital / (totalPassif || 1);
  const endettement = passif.dettesFinancieres / (passif.capital || 1);

  // Ratios de rentabilité
  const rentabiliteEconomique = resultat.resultatExploitation / (totalActif || 1);
  const rentabiliteFinanciere = resultat.resultatNet / (passif.capital || 1);

  // Calcul du score financier et de la probabilité de défaut
  const scoreFinancier = 
    (liquiditeGenerale * 0.15) +
    (autonomieFinanciere * 0.20) +
    ((caf / totalPassif) * 0.25) +
    (dscr * 0.25) +
    (rentabiliteEconomique * 0.15);

  const probabiliteDefaut = Math.max(0, Math.min(100, (1 - scoreFinancier) * 100));

  return {
    liquidite: {
      generale: liquiditeGenerale,
      reduite: liquiditeReduite,
      immediate: liquiditeImmediate
    },
    solvabilite: {
      autonomieFinanciere,
      endettement,
      dscr
    },
    rentabilite: {
      economique: rentabiliteEconomique,
      financiere: rentabiliteFinanciere
    },
    capaciteAutofinancement: caf,
    probabiliteDefaut,
    scoreFinancier
  };
}

export function formatRatio(value: number): string {
  return (value * 100).toFixed(2) + '%';
}

export function formatMontant(value: number): string {
  return value.toLocaleString('fr-FR') + ' FCFA';
}

export function getRiskLevel(probabiliteDefaut: number): {
  level: 'Faible' | 'Modéré' | 'Élevé';
  color: 'green' | 'yellow' | 'red';
} {
  if (probabiliteDefaut < 30) {
    return { level: 'Faible', color: 'green' };
  } else if (probabiliteDefaut < 70) {
    return { level: 'Modéré', color: 'yellow' };
  } else {
    return { level: 'Élevé', color: 'red' };
  }
}