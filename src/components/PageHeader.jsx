import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useLocation } from 'react-router-dom';

// Les données de visualisation pour les suggestions
const visualizationData = [
  {
    id: 'education-trends',
    title: "Évolution des Taux de Scolarisation en Côte d'Ivoire (2018-2022)",
    type: 'Graphique à barres',
    description: "Visualisation comparative des taux de scolarisation aux niveaux primaire, secondaire et supérieur sur 5 ans",
    category: 'Éducation',
    format: 'Interactif',
    updatedAt: '2024-02-15'
  },
  {
    id: 'regional-distribution',
    title: "Distribution Régionale des Infrastructures Sanitaires (2023)",
    type: 'Graphique circulaire',
    description: "Répartition des établissements de santé par région principale",
    category: 'Santé',
    format: 'Interactif',
    updatedAt: '2024-02-15'
  },
  {
    id: 'economic-growth',
    title: "Croissance du PIB de la Côte d'Ivoire (2018-2022)",
    type: 'Graphique linéaire',
    description: "Évolution du taux de croissance du PIB sur 5 ans",
    category: 'Économie',
    format: 'Interactif',
    updatedAt: '2024-02-15'
  }
];

const PageHeader = ({ title, description, onSearch }) => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  
  const fullPlaceholder = "Rechercher une visualisation...";
  
  // Vérifier si nous sommes sur une page de détails (data ou visualization)
  const isDetailsPage = location.pathname.match(/^\/(data|visualization)\/[^/]+$/);
  
  // Effet de remplissage automatique du placeholder
  useEffect(() => {
    if (!isDetailsPage) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= fullPlaceholder.length) {
          setPlaceholder(fullPlaceholder.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isDetailsPage]);

  // Filtrer les suggestions basées sur la recherche
  const filterSuggestions = useCallback((query) => {
    if (!query.trim()) {
      setSuggestions([]);
      return;
    }

    const filtered = visualizationData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );

    setSuggestions(filtered);
  }, []);

  // Gérer les changements dans la recherche
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    filterSuggestions(value);
    setShowSuggestions(true);
    setSelectedSuggestionIndex(-1);
    if (onSearch) onSearch(value);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            {description}
          </p>
        )}
      </div>

      {!isDetailsPage && onSearch && (
        <div className="mt-8 relative max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              className="w-full px-4 py-2 pl-10 pr-8 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder={placeholder}
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={() => setShowSuggestions(true)}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
          
          <AnimatePresence>
            {showSuggestions && suggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-10 w-full bg-white mt-1 rounded-lg shadow-lg border border-gray-200"
              >
                {suggestions.map((suggestion, index) => (
                  <div
                    key={suggestion.id}
                    className={`p-3 hover:bg-gray-100 cursor-pointer ${
                      index === selectedSuggestionIndex ? 'bg-gray-100' : ''
                    }`}
                    onClick={() => {
                      setSearchQuery(suggestion.title);
                      setShowSuggestions(false);
                      if (onSearch) onSearch(suggestion.title);
                    }}
                  >
                    <div className="font-medium text-gray-900">{suggestion.title}</div>
                    <div className="text-sm text-gray-500">{suggestion.category}</div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};

export default PageHeader;
