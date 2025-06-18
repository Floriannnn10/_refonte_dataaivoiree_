import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon, AdjustmentsHorizontalIcon, CalendarIcon, ChartBarIcon, TagIcon } from '@heroicons/react/24/outline';

// Utilitaires pour les filtres
const getColorForCategory = (category) => {
  const colors = {
    'Économie': 'bg-[#FF6B00]/10 text-[#FF6B00]',
    'Social': 'bg-[#009B4D]/10 text-[#009B4D]',
    'Éducation': 'bg-[#009B4D]/10 text-[#009B4D]',
    'Santé': 'bg-[#FF6B00]/10 text-[#FF6B00]',
    'Agriculture': 'bg-[#009B4D]/10 text-[#009B4D]',
    'Transport': 'bg-[#FF6B00]/10 text-[#FF6B00]',
    'Environnement': 'bg-[#009B4D]/10 text-[#009B4D]'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

const DatasetFilters = ({ 
  onFilterChange = () => {}, 
  datasets = [],
  totalDatasets = 0, 
  activeFilters = {
    categories: [],
    years: [],
    format: [],
    tags: []
  }
}) => {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    period: true,
    sort: true,
    format: true,
    tags: true
  });

  // Calculer dynamiquement les catégories et leurs compteurs
  const categories = Object.entries(
    (datasets || []).reduce((acc, dataset) => {
      const category = dataset.category;
      if (!acc[category]) {
        acc[category] = { count: 0, color: getColorForCategory(category) };
      }
      acc[category].count++;
      return acc;
    }, {})
  ).map(([id, { count, color }]) => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
    count,
    color
  })).sort((a, b) => b.count - a.count);

  // Calculer dynamiquement les années disponibles
  const years = [...new Set(datasets.map(dataset => {
    try {
      return new Date(dataset.updatedAt).getFullYear();
    } catch (e) {
      console.warn('Date invalide:', dataset.updatedAt);
      return null;
    }
  }).filter(Boolean))].sort((a, b) => b - a);

  // Calculer dynamiquement les formats et leurs compteurs
  const formats = Object.entries(
    (datasets || []).reduce((acc, dataset) => {
      const format = dataset.format?.toLowerCase();
      if (format && !acc[format]) {
        acc[format] = 0;
      }
      if (format) {
        acc[format]++;
      }
      return acc;
    }, {})
  ).map(([id, count]) => ({
    id,
    name: id.toUpperCase(),
    count
  })).filter(format => format.id !== 'undefined')
    .sort((a, b) => b.count - a.count);

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Gérer les changements de filtres
  const handleFilterChange = (type, value, checked = null) => {
    let newFilters = { ...activeFilters };

    switch (type) {
      case 'category':
        if (checked !== null) {
          newFilters.categories = checked
            ? [...newFilters.categories, value]
            : newFilters.categories.filter(cat => cat !== value);
        }
        break;
      case 'year':
        if (checked !== null) {
          newFilters.years = checked
            ? [...newFilters.years, value]
            : newFilters.years.filter(year => year !== value);
        }
        break;
      case 'format':
        if (checked !== null) {
          newFilters.format = checked
            ? [...newFilters.format, value]
            : newFilters.format.filter(fmt => fmt !== value);
        }
        break;
      case 'reset':
        newFilters = {
          categories: [],
          years: [],
          format: [],
          tags: []
        };
        break;
    }

    onFilterChange(newFilters);
  };

  // Vérifier si un filtre est actif
  const isFilterActive = (type, value) => {
    switch (type) {
      case 'category':
        return activeFilters.categories.includes(value);
      case 'year':
        return activeFilters.years.includes(value);
      case 'format':
        return activeFilters.format.includes(value);
      default:
        return false;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6 w-full max-w-sm">
      {/* En-tête des filtres */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <AdjustmentsHorizontalIcon className="h-5 w-5 text-orange-500" />
          <h2 className="text-lg font-semibold text-gray-900">Filtres</h2>
        </div>
        <span className="text-sm text-gray-500">{totalDatasets} jeux de données</span>
      </div>

      {/* Section Catégories */}
      <div className="space-y-4">
        <button
          onClick={() => toggleSection('categories')}
          className="flex items-center justify-between w-full group"
        >
          <div className="flex items-center space-x-2">
            <TagIcon className="h-5 w-5 text-orange-500" />
            <span className="font-medium text-gray-900">Catégories</span>
          </div>
          <ChevronDownIcon 
            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
              expandedSections.categories ? 'transform rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {expandedSections.categories && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {categories.map(category => (
                <motion.label
                  key={category.id}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="category"
                      value={category.id}
                      checked={isFilterActive('category', category.id)}
                      onChange={(e) => handleFilterChange('category', category.id, e.target.checked)}
                      className="h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                    />
                    <span className="text-gray-700">{category.name}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${category.color}`}>
                    {category.count}
                  </span>
                </motion.label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Section Années */}
      <div className="space-y-4">
        <button
          onClick={() => toggleSection('period')}
          className="flex items-center justify-between w-full group"
        >
          <div className="flex items-center space-x-2">
            <CalendarIcon className="h-5 w-5 text-orange-500" />
            <span className="font-medium text-gray-900">Année</span>
          </div>
          <ChevronDownIcon 
            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
              expandedSections.period ? 'transform rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {expandedSections.period && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {years.map(year => (
                <motion.label
                  key={year}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="year"
                      value={year}
                      checked={isFilterActive('year', year.toString())}
                      onChange={(e) => handleFilterChange('year', year.toString(), e.target.checked)}
                      className="h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                    />
                    <span className="text-gray-700">{year}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {datasets.filter(d => new Date(d.updatedAt).getFullYear() === year).length}
                  </span>
                </motion.label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Section Format */}
      <div className="space-y-4">
        <button
          onClick={() => toggleSection('format')}
          className="flex items-center justify-between w-full group"
        >
          <div className="flex items-center space-x-2">
            <ChartBarIcon className="h-5 w-5 text-orange-500" />
            <span className="font-medium text-gray-900">Format</span>
          </div>
          <ChevronDownIcon 
            className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
              expandedSections.format ? 'transform rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {expandedSections.format && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="space-y-3"
            >
              {formats.map(format => (
                <motion.label
                  key={format.id}
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="format"
                      value={format.id}
                      checked={isFilterActive('format', format.id)}
                      onChange={(e) => handleFilterChange('format', format.id, e.target.checked)}
                      className="h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                    />
                    <span className="text-gray-700">{format.name}</span>
                  </div>
                  <span className="text-sm text-gray-500">{format.count}</span>
                </motion.label>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Boutons d'action */}
      <div className="pt-4 border-t border-gray-200 space-y-3">
        <motion.button
          onClick={() => handleFilterChange('reset')}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 
            rounded-lg hover:bg-gray-200 transition-colors duration-200 ${
            Object.values(activeFilters).some(arr => arr.length > 0)
              ? 'opacity-100'
              : 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!Object.values(activeFilters).some(arr => arr.length > 0)}
        >
          Réinitialiser les filtres
        </motion.button>
      </div>
    </div>
  );
};

DatasetFilters.propTypes = {
  onFilterChange: PropTypes.func,
  totalDatasets: PropTypes.number,
  activeFilters: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string),
    years: PropTypes.arrayOf(PropTypes.string),
    format: PropTypes.arrayOf(PropTypes.string)
  })
};

export default DatasetFilters;
