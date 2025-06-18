// Fonction pour obtenir la méthodologie selon la catégorie
export const getDatasetMethodology = (category) => {
  const methodologies = {
    'Économie': "Les données économiques sont collectées mensuellement auprès des institutions financières, des entreprises et des ménages. Les indicateurs sont calculés selon les normes internationales du FMI et de la Banque Mondiale.",
    'Santé': "Les statistiques de santé sont compilées à partir des rapports des établissements de santé, des enquêtes nationales et des données de surveillance épidémiologique. La méthodologie suit les recommandations de l'OMS.",
    'Éducation': "Les données sont collectées auprès de tous les établissements scolaires du pays, avec des audits réguliers pour garantir leur fiabilité. Les indicateurs suivent les standards de l'UNESCO.",
    'Agriculture': "Les statistiques agricoles sont basées sur des enquêtes de terrain, des images satellitaires et des rapports des coopératives agricoles. La méthodologie est alignée avec les standards de la FAO.",
    'Transport': "Les données sont collectées via les systèmes de surveillance du trafic, les rapports des sociétés de transport et les enquêtes auprès des usagers.",
    'Environnement': "Les indicateurs environnementaux sont mesurés par un réseau de stations de surveillance, complété par des analyses en laboratoire et des études d'impact environnemental.",
    'default': "Les données sont collectées selon une méthodologie rigoureuse, avec des contrôles de qualité réguliers pour garantir leur fiabilité."
  };

  return methodologies[category] || methodologies.default;
};

// Fonction pour obtenir les variables selon la catégorie
export const getDatasetVariables = (category) => {
  const variablesByCategory = {
    'Économie': [
      {
        name: "PIB",
        description: "Produit Intérieur Brut en milliards de FCFA",
        type: "Nombre",
        format: "Décimal"
      },
      {
        name: "Taux de croissance",
        description: "Taux de croissance annuel du PIB",
        type: "Pourcentage",
        format: "Décimal"
      },
      {
        name: "Inflation",
        description: "Taux d'inflation annuel",
        type: "Pourcentage",
        format: "Décimal"
      },
      {
        name: "Dette publique",
        description: "Dette publique en pourcentage du PIB",
        type: "Pourcentage",
        format: "Décimal"
      }
    ],
    'Santé': [
      {
        name: "Taux de mortalité",
        description: "Taux de mortalité pour 1000 habitants",
        type: "Taux",
        format: "Décimal"
      },
      {
        name: "Couverture vaccinale",
        description: "Pourcentage de la population vaccinée",
        type: "Pourcentage",
        format: "Décimal"
      },
      {
        name: "Lits d'hôpitaux",
        description: "Nombre de lits pour 1000 habitants",
        type: "Ratio",
        format: "Décimal"
      }
    ],
    'Éducation': [
      {
        name: "Taux de scolarisation",
        description: "Taux net de scolarisation par niveau",
        type: "Pourcentage",
        format: "Décimal"
      },
      {
        name: "Ratio élèves/enseignant",
        description: "Nombre moyen d'élèves par enseignant",
        type: "Ratio",
        format: "Décimal"
      },
      {
        name: "Taux de réussite",
        description: "Taux de réussite aux examens nationaux",
        type: "Pourcentage",
        format: "Décimal"
      }
    ],
    'Agriculture': [
      {
        name: "Production agricole",
        description: "Production en tonnes par culture",
        type: "Nombre",
        format: "Décimal"
      },
      {
        name: "Superficie cultivée",
        description: "Surface en hectares par culture",
        type: "Nombre",
        format: "Décimal"
      },
      {
        name: "Rendement",
        description: "Rendement en tonnes par hectare",
        type: "Ratio",
        format: "Décimal"
      }
    ],
    'Transport': [
      {
        name: "Trafic routier",
        description: "Nombre de véhicules par jour",
        type: "Nombre",
        format: "Entier"
      },
      {
        name: "État des routes",
        description: "Pourcentage de routes en bon état",
        type: "Pourcentage",
        format: "Décimal"
      },
      {
        name: "Accidents",
        description: "Nombre d'accidents par mois",
        type: "Nombre",
        format: "Entier"
      }
    ],
    'Environnement': [
      {
        name: "Qualité de l'air",
        description: "Indice de qualité de l'air (IQA)",
        type: "Indice",
        format: "Entier"
      },
      {
        name: "Couverture forestière",
        description: "Surface forestière en hectares",
        type: "Nombre",
        format: "Décimal"
      },
      {
        name: "Émissions CO2",
        description: "Émissions en tonnes par an",
        type: "Nombre",
        format: "Décimal"
      }
    ]
  };

  return variablesByCategory[category] || [
    {
      name: "Année",
      description: "Année de référence des données",
      type: "Date",
      format: "YYYY"
    },
    {
      name: "Valeur",
      description: "Valeur de l'indicateur",
      type: "Nombre",
      format: "Décimal"
    }
  ];
};
