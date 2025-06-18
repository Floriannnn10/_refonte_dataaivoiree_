import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDatabase, FiExternalLink, FiCalendar, FiTag, FiDownload, FiShare2, FiChevronDown } from 'react-icons/fi';
import { getDatasetTitle } from '../utils/datasetTitles';

const VisualizationDetail = ({ visualization, onClose }) => {
  const [showDownloadMenu, setShowDownloadMenu] = useState(false);
  const downloadMenuRef = useRef(null);
  
  const downloadFormats = [
    { id: 'png', name: 'Image PNG', icon: '🖼️' },
    { id: 'svg', name: 'Vecteur SVG', icon: '📐' },
    { id: 'csv', name: 'Données CSV', icon: '📊' },
    { id: 'xlsx', name: 'Excel XLSX', icon: '📑' },
    { id: 'pdf', name: 'Document PDF', icon: '📄' }
  ];

  const associatedDatasets = (visualization.associatedDatasets || []).map(id => ({
    ...getDatasetTitle(id),
    id
  }));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (downloadMenuRef.current && !downloadMenuRef.current.contains(event.target)) {
        setShowDownloadMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Lien copié dans le presse-papiers !');
  };

  const handleDownload = (format) => {
    console.log('Téléchargement au format:', format);
    setShowDownloadMenu(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
      onClick={onClose}
    >
      <motion.div
        className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
        layoutId={`visualization-${visualization.id}`}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-900">{visualization.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="relative" ref={downloadMenuRef}>
              <button
                onClick={() => setShowDownloadMenu(!showDownloadMenu)}
                className="flex items-center gap-2 px-4 py-2 bg-[#FF6B00] text-white rounded-lg hover:bg-[#e66000] transition-colors"
              >
                <FiDownload className="w-5 h-5" />
                <span>Télécharger</span>
                <FiChevronDown className={`w-4 h-4 transition-transform ${showDownloadMenu ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showDownloadMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50"
                  >
                    <ul className="py-2">
                      {downloadFormats.map((format) => (
                        <li key={format.id}>
                          <button
                            onClick={() => handleDownload(format.id)}
                            className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-3"
                          >
                            <span className="text-xl">{format.icon}</span>
                            <span className="text-gray-700">{format.name}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={handleShare}
              className="flex items-center gap-2 px-4 py-2 bg-[#009B4D] text-white rounded-lg hover:bg-[#007a3d] transition-colors"
            >
              <FiShare2 className="w-5 h-5" />
              <span>Partager</span>
            </button>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <FiCalendar className="w-4 h-4" />
                  <span>Mise à jour : {new Date(visualization.updatedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <FiTag className="w-4 h-4" />
                  <span>Type : {visualization.type}</span>
                </div>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-gray-600">{visualization.description}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FiDatabase className="w-5 h-5" />
              Jeux de données associés
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {associatedDatasets.map(dataset => (
                <div 
                  key={dataset.id}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:border-[#009B4D] transition-colors"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-grow">
                      <h4 className="font-semibold text-lg mb-2 text-gray-900">{dataset.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{dataset.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-[#009B4D]/10 text-[#009B4D] rounded-md text-sm">
                          {dataset.category}
                        </span>
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md text-sm">
                          Format : {dataset.format}
                        </span>
                        <span className="px-2 py-1 bg-gray-50 text-gray-600 rounded-md text-sm">
                          Source : {dataset.source}
                        </span>
                      </div>
                    </div>
                    <Link
                      to={`/data/${dataset.id}`}
                      className="inline-flex items-center gap-1 px-4 py-2 bg-[#FF6B00]/10 text-[#FF6B00] rounded-lg hover:bg-[#FF6B00]/20 transition-colors"
                    >
                      <span>Voir les données</span>
                      <FiExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default VisualizationDetail;
