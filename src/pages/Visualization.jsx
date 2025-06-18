import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiShare2, FiArrowLeft } from 'react-icons/fi';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from 'recharts';

// Données simulées
const educationData = [
  { annee: '2018', primaire: 89.5, secondaire: 58.2, superieur: 12.8 },
  { annee: '2019', primaire: 90.2, secondaire: 59.5, superieur: 13.2 },
  { annee: '2020', primaire: 91.8, secondaire: 61.3, superieur: 13.9 },
  { annee: '2021', primaire: 92.5, secondaire: 63.7, superieur: 14.5 },
  { annee: '2022', primaire: 93.1, secondaire: 65.2, superieur: 15.1 },
];

const economicData = [
  { annee: '2018', pib: 7.4, inflation: 0.4, investissement: 20.8 },
  { annee: '2019', pib: 6.9, inflation: 0.8, investissement: 21.9 },
  { annee: '2020', pib: 2.0, inflation: 2.4, investissement: 19.5 },
  { annee: '2021', pib: 7.0, inflation: 4.2, investissement: 22.1 },
  { annee: '2022', pib: 6.7, inflation: 5.5, investissement: 23.4 },
];

const healthData = [
  { annee: '2018', esperanceVie: 56.4, mortaliteInfantile: 63.1 },
  { annee: '2019', esperanceVie: 57.1, mortaliteInfantile: 61.4 },
  { annee: '2020', esperanceVie: 57.8, mortaliteInfantile: 59.7 },
  { annee: '2021', esperanceVie: 58.3, mortaliteInfantile: 58.0 },
  { annee: '2022', esperanceVie: 59.0, mortaliteInfantile: 56.5 },
];

const agricultureData = [
  { annee: '2018', cacao: 1800, cafe: 300, coton: 400 },
  { annee: '2019', cacao: 1900, cafe: 320, coton: 420 },
  { annee: '2020', cacao: 2000, cafe: 340, coton: 430 },
  { annee: '2021', cacao: 2100, cafe: 360, coton: 440 },
  { annee: '2022', cacao: 2200, cafe: 380, coton: 450 },
];

const environnementData = [
  { annee: '2018', foret: 22.1, pollution: 40 },
  { annee: '2019', foret: 21.8, pollution: 42 },
  { annee: '2020', foret: 21.5, pollution: 44 },
  { annee: '2021', foret: 21.0, pollution: 45 },
  { annee: '2022', foret: 20.6, pollution: 47 },
];

const transportData = [
  { annee: '2018', routes: 72000, cheminsFer: 800 },
  { annee: '2019', routes: 74000, cheminsFer: 820 },
  { annee: '2020', routes: 76000, cheminsFer: 830 },
  { annee: '2021', routes: 78000, cheminsFer: 840 },
  { annee: '2022', routes: 80000, cheminsFer: 850 },
];

const datasets = {
  education: educationData,
  economic: economicData,
  health: healthData,
  agriculture: agricultureData,
  environnement: environnementData,
  transport: transportData,
};

const chartConfigs = {
  education: [
    { title: 'Taux de scolarisation par niveau', type: 'bar', keys: ['primaire', 'secondaire', 'superieur'] },
    { title: 'Évolution du taux de scolarisation', type: 'line', keys: ['primaire', 'secondaire', 'superieur'] },
  ],
  economic: [
    { title: 'Indicateurs économiques', type: 'bar', keys: ['pib', 'inflation', 'investissement'] },
    { title: 'Évolution des indicateurs économiques', type: 'line', keys: ['pib', 'inflation', 'investissement'] },
  ],
  health: [
    { title: "Espérance de vie & Mortalité infantile", type: 'bar', keys: ['esperanceVie', 'mortaliteInfantile'] },
    { title: 'Évolution sanitaire', type: 'line', keys: ['esperanceVie', 'mortaliteInfantile'] },
  ],
  agriculture: [
    { title: 'Production agricole (en milliers de tonnes)', type: 'bar', keys: ['cacao', 'cafe', 'coton'] },
    { title: 'Évolution des cultures', type: 'line', keys: ['cacao', 'cafe', 'coton'] },
  ],
  environnement: [
    { title: 'Surface forestière & Pollution', type: 'bar', keys: ['foret', 'pollution'] },
    { title: 'Tendance environnementale', type: 'line', keys: ['foret', 'pollution'] },
  ],
  transport: [
    { title: 'Infrastructure de transport', type: 'bar', keys: ['routes', 'cheminsFer'] },
    { title: 'Évolution des infrastructures', type: 'line', keys: ['routes', 'cheminsFer'] },
  ],
};

const COLORS = ['#ea580c', '#16a34a', '#2563eb', '#9333ea', '#be123c'];

export default function Visualization() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('education');

  useEffect(() => {
    if (location.state?.category) {
      // Valider que la catégorie existe dans nos données
      const validCategories = Object.keys(datasets);
      const category = location.state.category.toLowerCase();
      if (validCategories.includes(category)) {
        setActiveTab(category);
      }
    }
  }, [location.state]);

  const categories = [
    { key: 'all', label: 'Tous' },
    { key: 'education', label: 'Éducation' },
    { key: 'economic', label: 'Économie' },
    { key: 'health', label: 'Santé' },
    { key: 'agriculture', label: 'Agriculture' },
    { key: 'environnement', label: 'Environnement' },
    { key: 'transport', label: 'Transport' },
  ];

  const renderChart = (data, config, domainName) => {
    const ChartComponent = config.type === 'bar' ? BarChart : LineChart;
    const ChartElement = config.type === 'bar' ? Bar : Line;

    return (
      <motion.div
        key={config.title + Math.random()}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-lg"
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="inline-block px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-2">
              {domainName.charAt(0).toUpperCase() + domainName.slice(1)}
            </span>
            <h3 className="text-lg font-semibold">{config.title}</h3>
          </div>
          <button 
            onClick={() => handleDatasetClick(domainName)}
            className="text-green-600 hover:text-green-700 font-medium text-sm"
          >
            Voir les données
          </button>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ChartComponent data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="annee" />
              <YAxis />
              <Tooltip />
              <Legend />
              {config.keys.map((key, i) => (
                <ChartElement
                  key={key}
                  type="monotone"
                  dataKey={key}
                  stroke={COLORS[i % COLORS.length]}
                  fill={COLORS[i % COLORS.length]}
                  name={key.charAt(0).toUpperCase() + key.slice(1)}
                />
              ))}
            </ChartComponent>
          </ResponsiveContainer>
        </div>
      </motion.div>
    );
  };

  const handleDatasetClick = (category) => {
    // Ici, vous devrez adapter l'ID en fonction de votre logique de données
    const categoryToIdMap = {
      education: '7',
      economic: '1',
      health: '4',
      agriculture: '10',
      environnement: '15',
      transport: '13'
    };
    
    const datasetId = categoryToIdMap[category];
    if (datasetId) {
      navigate(`/data/${datasetId}`);
    }
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.button
        onClick={handleGoBack}
        whileHover={{ x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-orange-500 hover:text-orange-600 mb-6 transition-colors"
      >
        <FiArrowLeft className="w-5 h-5" />
        <span className="font-medium">Retour</span>
      </motion.button>

      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Tableau de bord interactif</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Explorez les données de la Côte d'Ivoire à travers des visualisations interactives.
          Analysez les tendances et téléchargez les graphiques pour vos rapports.
        </p>
      </motion.div>

      {/* Onglets */}
      <div className="mb-10 flex flex-wrap justify-center gap-3">
        {categories.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm
              ${
                activeTab === key
                  ? 'bg-orange-500 text-white shadow-lg scale-105'
                  : 'bg-orange-100 text-orange-700 hover:bg-green-600 hover:text-white'
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Graphiques */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {activeTab === 'all'
          ? Object.keys(datasets).flatMap((key) =>
              chartConfigs[key].map((config) => renderChart(datasets[key], config, key))
            )
          : chartConfigs[activeTab].map((config) =>
              renderChart(datasets[activeTab], config, activeTab)
            )}
      </motion.div>

      {/* Boutons d'action */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-10 flex justify-end space-x-4"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-green-600"
        >
          <FiDownload className="h-5 w-5 mr-2" /> Télécharger
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-orange-500"
        >
          <FiShare2 className="h-5 w-5 mr-2" /> Partager
        </motion.button>
      </motion.div>
    </div>
  );
}
