export interface ProjectAnalysis {
  van: number;
  tri: number;
  delaiRecuperation: number;
  tauxCouverture: number;
}

export interface ForecastYear {
  year: number;
  investissements: {
    immobilisations: number;
    besoinFondsRoulement: number;
  };
  exploitation: {
    chiffreAffaires: number;
    chargesExploitation: number;
    dotationsAmortissements: number;
  };
  financement: {
    apportsPropres: number;
    emprunts: number;
    subventions: number;
  };
}