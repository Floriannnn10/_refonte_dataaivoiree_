import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import DatasetFilters from '../components/DatasetFilters';
import DatasetCard from '../components/DatasetCard';
import Pagination from '../components/Pagination';

// Données réelles par catégorie
import { getDatasetTitle } from '../utils/datasetTitles';

// Liste des catégories disponibles
const availableCategories = [
  'Économie',
  'Santé',
  'Éducation',
  'Environnement',
  'Agriculture',
  'Transport',
  'Social'
];

const generateTestData = () => {
  const datasetsByCategory = {
    'Économie': [
      {
        ...getDatasetTitle('1'),
        id: '1'
      },
      {
        ...getDatasetTitle('2'),
        id: '2'
      },
      {
        ...getDatasetTitle('3'),
        id: '3'
      }
    ],
    'Santé': [
      {
        ...getDatasetTitle('4'),
        id: '4'
      },
      {
        ...getDatasetTitle('5'),
        id: '5'
      },
      {
        ...getDatasetTitle('6'),
        id: '6'
      }
    ],
    'Éducation': [
      {
        ...getDatasetTitle('7'),
        id: '7'
      },
      {
        ...getDatasetTitle('8'),
        id: '8'
      },
      {
        ...getDatasetTitle('9'),
        id: '9'
      }
    ],
    'Agriculture': [
      {
        ...getDatasetTitle('10'),
        id: '10'
      },
      {
        ...getDatasetTitle('11'),
        id: '11'
      },
      {
        ...getDatasetTitle('12'),
        id: '12'
      }
    ],
    'Transport': [
      {
        ...getDatasetTitle('13'),
        id: '13'
      },
      {
        ...getDatasetTitle('14'),
        id: '14'
      }
    ],
    'Environnement': [
      {
        ...getDatasetTitle('15'),
        id: '15'
      },
      {
        ...getDatasetTitle('16'),
        id: '16'
      },
      {
        ...getDatasetTitle('17'),
        id: '17',
        title: "État des Forêts et Déforestation en Côte d'Ivoire 2022-2023",
        category: "Environnement",
        type: "Données brutes",
        description: "Analyse détaillée de l'état des forêts ivoiriennes, incluant la répartition des zones forestières, les taux de déforestation, et les efforts de reforestation.",
        source: "Ministère des Eaux et Forêts",
        updatedAt: "2025-06-15T00:00:00.000Z",
        format: "XLSX"
      }
    ]
  };

  // Générer les données avec des identifiants uniques
  let id = 1;
  return Object.entries(datasetsByCategory).flatMap(([category, datasets]) =>
    datasets.map(dataset => ({
      id: id++,
      ...dataset,
      category,
      year: new Date(dataset.updatedAt).getFullYear(),
      updatedAt: dataset.updatedAt,
      downloads: Math.floor(Math.random() * 1000),
      likes: Math.floor(Math.random() * 500),
      format: ['CSV', 'Excel', 'PDF'][Math.floor(Math.random() * 3)]
    }))
  );
};

const Data = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [datasets, setDatasets] = useState([]);
  const [filteredDatasets, setFilteredDatasets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [activeFilters, setActiveFilters] = useState({
    categories: [],
    years: [],
    format: []
  });

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    // Simuler le chargement des données
    const testData = generateTestData();
    setDatasets(testData);
    setFilteredDatasets(testData);
  }, []);

  const handleFilterChange = (newFilters) => {
    setActiveFilters(newFilters);
    setCurrentPage(1); // Réinitialiser la pagination lors du filtrage

    let filtered = datasets;

    // Appliquer les filtres
    if (newFilters.categories.length > 0) {
      filtered = filtered.filter(dataset => newFilters.categories.includes(dataset.category));
    }
    if (newFilters.years.length > 0) {
      filtered = filtered.filter(dataset => newFilters.years.includes(dataset.year.toString()));
    }
    if (newFilters.format.length > 0) {
      filtered = filtered.filter(dataset => newFilters.format.includes(dataset.format));
    }

    // Appliquer la recherche
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(dataset =>
        dataset.title.toLowerCase().includes(query) ||
        dataset.description.toLowerCase().includes(query)
      );
    }

    setFilteredDatasets(filtered);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setCurrentPage(1); // Réinitialiser la pagination lors de la recherche

    // Générer les suggestions
    if (query.length > 0) {
      const suggestions = datasets
        .filter(dataset =>
          dataset.title.toLowerCase().includes(query.toLowerCase()) ||
          dataset.description.toLowerCase().includes(query.toLowerCase()) ||
          dataset.category.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5) // Limiter à 5 suggestions
        .map(dataset => ({
          id: dataset.id,
          title: dataset.title,
          category: dataset.category
        }));
      setSearchSuggestions(suggestions);
      setShowSuggestions(true);
    } else {
      setSearchSuggestions([]);
      setShowSuggestions(false);
    }

    handleFilterChange(activeFilters);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.title);
    setShowSuggestions(false);
    const filtered = datasets.filter(dataset =>
      dataset.title.toLowerCase().includes(suggestion.title.toLowerCase())
    );
    setFilteredDatasets(filtered);
  };

  // Fonction pour mettre en surbrillance le texte correspondant
  const highlightMatch = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ?
        <span key={index} className="bg-orange-100">{part}</span> : part
    );
  };

  // Gestion des touches du clavier pour la navigation
  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedSuggestionIndex(prev =>
          prev < searchSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedSuggestionIndex >= 0) {
          handleSuggestionClick(searchSuggestions[selectedSuggestionIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedSuggestionIndex(-1);
        break;
      default:
        break;
    }
  };

  // Fermer les suggestions quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.search-container')) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  // Calculer les éléments de la page courante
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredDatasets.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredDatasets.length / itemsPerPage);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // État de chargement
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const testData = generateTestData();
        setDatasets(testData);
        setFilteredDatasets(testData);
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des données...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        {/* En-tête et barre de recherche */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl mb-4 sm:mb-6">
            Explorez nos jeux de données
          </h1>
          <div className="max-w-xl sm:max-w-2xl mx-auto relative search-container">
            <input
              type="text"
              placeholder="Rechercher un jeu de données..."
              value={searchQuery}
              onChange={handleSearch}
              onKeyDown={handleKeyDown}
              onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
              className="w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              role="combobox"
              aria-expanded={showSuggestions}
              aria-controls="search-suggestions"
              aria-activedescendant={selectedSuggestionIndex >= 0 ? `suggestion-${selectedSuggestionIndex}` : undefined}
            />
            <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />

            {/* Liste des suggestions avec surbrillance et navigation au clavier */}
            {showSuggestions && searchSuggestions.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute z-50 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200"
                id="search-suggestions"
                role="listbox"
              >
                <ul className="py-2">
                  {searchSuggestions.map((suggestion, index) => (
                    <motion.li
                      key={suggestion.id}
                      id={`suggestion-${index}`}
                      role="option"
                      aria-selected={index === selectedSuggestionIndex}
                      whileHover={{ backgroundColor: "#f3f4f6" }}
                      className={`px-4 py-2 cursor-pointer ${index === selectedSuggestionIndex ? 'bg-gray-100' : 'hover:bg-gray-50'
                        }`}
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">
                          {highlightMatch(suggestion.title, searchQuery)}
                        </span>
                        <span className="text-sm text-gray-500">
                          {highlightMatch(suggestion.category, searchQuery)}
                        </span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar avec filtres */}
          <motion.div
            variants={itemVariants}
            className="relative w-full lg:w-80"
          >
            <motion.aside
              variants={itemVariants}
              className={`lg:sticky lg:top-24 transition-all duration-300 ease-in-out ${showFilters ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full lg:translate-x-0 lg:opacity-100'
                }`}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold text-gray-900">Filtres</h2>
                  <button
                    onClick={toggleFilters}
                    className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                    title={showFilters ? "Masquer les filtres" : "Afficher les filtres"}
                  >
                    <AdjustmentsHorizontalIcon className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${showFilters ? '' : 'transform rotate-90'
                      }`} />
                  </button>
                </div>
                <DatasetFilters
                  onFilterChange={handleFilterChange}
                  datasets={datasets}
                  totalDatasets={datasets.length}
                  activeFilters={activeFilters}
                />
              </div>
            </motion.aside>

            {/* Bouton pour réafficher les filtres sur mobile */}
            {!showFilters && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleFilters}
                className="lg:hidden fixed left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-r-lg p-3 hover:bg-gray-50 transition-colors duration-200 z-10"
                title="Afficher les filtres"
              >
                <AdjustmentsHorizontalIcon className="h-6 w-6 text-gray-500" />
              </motion.button>
            )}
          </motion.div>

          {/* Grille de données */}
          <div className="flex-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
            >
              {currentItems.map((dataset) => (
                <motion.div key={dataset.id} variants={itemVariants}>
                  <DatasetCard dataset={dataset} />
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                  totalItems={filteredDatasets.length}
                />
              </div>
            )}

            {/* Message si aucun résultat */}
            {filteredDatasets.length === 0 && (
              <motion.div
                variants={itemVariants}
                className="text-center py-12"
              >
                <p className="text-gray-500 text-lg">
                  Aucun jeu de données ne correspond à vos critères de recherche.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
