import { ForecastYear } from './types';

export interface FinancialYear {
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
  };
}

export const initialFinancialData: FinancialYear[] = [
  {
    year: new Date().getFullYear() - 1,
    data: {
      bilan: {
        actif: {
          immobilisations: 0,
          stocks: 0,
          creancesClients: 0,
          tresorerieActive: 0
        },
        passif: {
          capital: 0,
          dettesFinancieres: 0,
          dettesFournisseurs: 0,
          autresDettes: 0
        }
      },
      resultat: {
        chiffreAffaires: 0,
        chargesExploitation: 0,
        resultatExploitation: 0,
        resultatFinancier: 0,
        resultatNet: 0
      },
      tresorerie: {
        fluxExploitation: 0,
        fluxInvestissement: 0,
        fluxFinancement: 0,
        variationTresorerie: 0
      }
    }
  },
  {
    year: new Date().getFullYear() - 2,
    data: {
      bilan: {
        actif: {
          immobilisations: 0,
          stocks: 0,
          creancesClients: 0,
          tresorerieActive: 0
        },
        passif: {
          capital: 0,
          dettesFinancieres: 0,
          dettesFournisseurs: 0,
          autresDettes: 0
        }
      },
      resultat: {
        chiffreAffaires: 0,
        chargesExploitation: 0,
        resultatExploitation: 0,
        resultatFinancier: 0,
        resultatNet: 0
      },
      tresorerie: {
        fluxExploitation: 0,
        fluxInvestissement: 0,
        fluxFinancement: 0,
        variationTresorerie: 0
      }
    }
  }
];

export const initialForecastData: ForecastYear[] = [
  {
    year: new Date().getFullYear(),
    investissements: {
      immobilisations: 0,
      besoinFondsRoulement: 0
    },
    exploitation: {
      chiffreAffaires: 0,
      chargesExploitation: 0,
      dotationsAmortissements: 0
    },
    financement: {
      apportsPropres: 0,
      emprunts: 0,
      subventions: 0
    }
  },
  {
    year: new Date().getFullYear() + 1,
    investissements: {
      immobilisations: 0,
      besoinFondsRoulement: 0
    },
    exploitation: {
      chiffreAffaires: 0,
      chargesExploitation: 0,
      dotationsAmortissements: 0
    },
    financement: {
      apportsPropres: 0,
      emprunts: 0,
      subventions: 0
    }
  },
  {
    year: new Date().getFullYear() + 2,
    investissements: {
      immobilisations: 0,
      besoinFondsRoulement: 0
    },
    exploitation: {
      chiffreAffaires: 0,
      chargesExploitation: 0,
      dotationsAmortissements: 0
    },
    financement: {
      apportsPropres: 0,
      emprunts: 0,
      subventions: 0
    }
  }
];