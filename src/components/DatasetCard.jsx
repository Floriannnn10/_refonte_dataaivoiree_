import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiDownload, FiBarChart2, FiEye, FiCalendar, FiFilePlus } from 'react-icons/fi';
import './DatasetCard.css';

const DatasetCard = ({ dataset }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleVisualizationClick = (e) => {
    e.preventDefault();
    // Mapper les catégories aux clés utilisées dans la visualisation
    const categoryMap = {
      'Économie': 'economic',
      'Éducation': 'education',
      'Santé': 'health',
      'Agriculture': 'agriculture',
      'Environnement': 'environnement',
      'Transport': 'transport'
    };
    
    const visualizationCategory = categoryMap[dataset.category] || dataset.category.toLowerCase();
    navigate('/visualization', { 
      state: { 
        category: visualizationCategory
      }
    });
  };

  const handleDetailsClick = (e) => {
    e.preventDefault();
    navigate(`/data/${dataset.id}`);
  };

  const {
    id,
    title,
    description,
    category,
    updatedAt,
    downloads,
    likes = 0,
    source = "Source non spécifiée",
    format
  } = dataset;

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 hover:border-orange-200 transition-all duration-300"
      whileHover={{ y: -5, scale: 1.01 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100/50 text-orange-600">
            {category}
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleVisualizationClick}
              className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              title="Voir la visualisation"
            >
              <FiBarChart2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <FiCalendar className="w-4 h-4" />
            <span>{new Date(updatedAt).getFullYear()}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiFilePlus className="w-4 h-4" />
            <span>{format}</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          className="flex justify-between items-center"
        >
          <button
            onClick={handleDetailsClick}
            className="text-orange-500 hover:text-orange-600 font-medium text-sm inline-flex items-center gap-1"
          >
            <FiEye className="w-4 h-4" />
            Voir les détails
          </button>
          <button className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center gap-1">
            <FiDownload className="w-4 h-4" />
            Télécharger
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

DatasetCard.propTypes = {
  dataset: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    downloads: PropTypes.number.isRequired,
    likes: PropTypes.number,
    source: PropTypes.string,
    format: PropTypes.string.isRequired,
  }).isRequired,
};

export default DatasetCard;
