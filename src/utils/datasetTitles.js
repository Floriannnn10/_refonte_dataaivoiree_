// Fonction utilitaire pour générer les titres de jeux de données
export const getDatasetTitle = (id) => {  const titles = {
    '1': {      title: "Indice de Performance de la Corruption (IPC) en Côte d'Ivoire 2013-2023",
      category: "Économie",
      type: "Données brutes",
      description: "Données complètes sur l'évolution de l'Indice de Perception de la Corruption en Côte d'Ivoire, incluant les scores annuels, les classements et les analyses comparatives régionales.",
      source: "Transparency International / HABG",
      updatedAt: "2025-06-13T00:00:00.000Z",
      format: "CSV"
    },
    '2': {
      title: "Indicateurs Économiques Nationaux 2023",
      category: "Économie",
      type: "Données brutes",      description: "Compilation des principaux indicateurs économiques incluant le PIB, l'inflation, le taux de change, et les investissements directs étrangers.",
      source: "Ministère de l'Économie",
      updatedAt: "2025-06-13T00:00:00.000Z",
      format: "XLSX"
    },
    '3': {
      title: "Statistiques du Commerce Extérieur 2024",
      category: "Économie",
      type: "Données brutes",      description: "Données sur les importations, exportations, balance commerciale et principaux partenaires commerciaux.",
      source: "Direction Générale des Douanes",
      updatedAt: "2025-06-13T00:00:00.000Z",
      format: "CSV"
    },
    '4': {
      title: "Statistiques de Santé Publique 2024",
      category: "Santé",
      type: "Rapport",      description: "Indicateurs clés de santé publique incluant les taux de vaccination, la prévalence des maladies, et la couverture sanitaire.",
      source: "Ministère de la Santé",
      updatedAt: "2025-06-13T00:00:00.000Z",
      format: "PDF"
    },
    '5': {
      title: "Carte Sanitaire Nationale 2023",
      category: "Santé",
      type: "Cartographie",      description: "Cartographie complète des infrastructures de santé et leur répartition géographique sur le territoire national.",
      source: "Direction des Infrastructures de la Santé",
      updatedAt: "2025-06-13T00:00:00.000Z",
      format: "PDF"
    },
    '6': {
      title: "Rapport sur la Santé Maternelle et Infantile",
      category: "Santé",
      type: "Rapport",      description: "Données détaillées sur la santé maternelle, la mortalité infantile et les programmes de vaccination.",
      source: "UNICEF",
      updatedAt: "2025-06-13T00:00:00.000Z",
      format: "PDF"
    },
    '7': {
      title: "Statistiques de l'Éducation Nationale 2024-2025",
      category: "Éducation",
      type: "Statistiques",      description: "Données complètes sur les effectifs scolaires, les taux de réussite, et la répartition des établissements scolaires.",
      source: "Ministère de l'Éducation Nationale",
      updatedAt: "2025-06-13T00:00:00.000Z",
      format: "CSV"
    },
    '8': {
      title: "Indicateurs de Performance du Système Éducatif",
      category: "Éducation",
      type: "Rapport",      description: "Analyse des performances du système éducatif incluant les taux de scolarisation, d'abandon et de transition.",
      source: "Direction de la Planification",
      updatedAt: "2025-06-13T00:00:00.000Z",
      format: "PDF"
    },
    '9': {
      title: "Atlas de l'Éducation en Côte d'Ivoire",
      category: "Éducation",
      type: "Cartographie",      description: "Cartographie détaillée des infrastructures éducatives et des zones de couverture scolaire.",
      source: "Ministère de l'Éducation",
      updatedAt: "2025-06-13T00:00:00.000Z",
      format: "PDF"
    },
    '10': {
      title: "Production Agricole Nationale 2024",
      category: "Agriculture",
      type: "Données brutes",      description: "Statistiques détaillées sur la production des principales cultures, l'élevage et la pêche.",
      source: "Ministère de l'Agriculture",
      updatedAt: "2025-05-25T00:00:00.000Z",
      format: "CSV"
    },
    '11': {
      title: "Prix des Produits Agricoles 2023-2024",
      category: "Agriculture",
      type: "Données brutes",      description: "Évolution des prix des produits agricoles sur les principaux marchés du pays.",
      source: "OCPV",
      updatedAt: "2025-06-10T00:00:00.000Z",
      format: "CSV"
    },
    '12': {
      title: "Rapport sur la Sécurité Alimentaire",
      category: "Agriculture",
      type: "Rapport",      description: "Analyse de la situation alimentaire, stocks disponibles et projections.",
      source: "FAO",
      updatedAt: "2025-05-15T00:00:00.000Z",
      format: "PDF"
    },
    '13': {
      title: "Statistiques du Transport Routier 2024",
      category: "Transport",
      type: "Statistiques",      description: "Données sur le réseau routier, le parc automobile et les accidents de la route.",
      source: "Ministère des Transports",
      updatedAt: "2025-06-05T00:00:00.000Z",
      format: "CSV"
    },
    '14': {
      title: "Trafic Portuaire et Aéroportuaire",
      category: "Transport",
      type: "Statistiques",      description: "Statistiques sur les mouvements des marchandises et des passagers dans les ports et aéroports.",
      source: "Direction Générale des Transports",
      updatedAt: "2025-05-30T00:00:00.000Z",
      format: "CSV"
    },
    '15': {
      title: "Indicateurs Environnementaux 2024",
      category: "Environnement",
      type: "Rapport",      description: "Données sur la qualité de l'air, la déforestation, et la biodiversité.",
      source: "Ministère de l'Environnement",
      updatedAt: "2025-06-08T00:00:00.000Z",
      format: "PDF"
    },
    '16': {
      title: "Rapport sur le Changement Climatique",
      category: "Environnement",
      type: "Rapport",      description: "Analyse des impacts du changement climatique et des mesures d'adaptation.",
      source: "PNUE",
      updatedAt: "2025-06-12T00:00:00.000Z",
      format: "PDF"
    },
    '17': {
      title: "État des Forêts et Déforestation en Côte d'Ivoire 2022-2023",
      category: "Environnement",
      type: "Données brutes",
      description: "Analyse détaillée de l'état des forêts ivoiriennes, incluant la répartition des zones forestières, les taux de déforestation, et les efforts de reforestation. Comprend les données sur les forêts primaires, secondaires, les zones protégées et les initiatives de conservation.",
      source: "Ministère des Eaux et Forêts",
      updatedAt: "2025-06-15T00:00:00.000Z",
      format: "XLSX, CSV, PDF",
      downloads: {
        xlsx: "/data/forets_2023.xlsx",
        csv: "/data/forets_2023.csv",
        pdf: "/data/rapport_forets_2023.pdf"
      }
    }
  };
  return titles[id] || {
    title: "Jeu de Données Statistiques Côte d'Ivoire",
    category: "general",
    type: "Données",
    updatedAt: new Date().toISOString()
  };
};
