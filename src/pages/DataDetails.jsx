import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiDownload, FiShare, FiCalendar, FiBook, FiFileText, 
  FiBarChart2, FiMap, FiDatabase, FiFilePlus, FiArrowLeft
} from 'react-icons/fi';
import PageHeader from '../components/PageHeader';
import { getDatasetTitle } from '../utils/datasetTitles';

// Fonction pour obtenir les fichiers associés au dataset
const getDatasetFiles = (category, title) => {
  return [
    {
      name: "Données principales",
      files: [
        {
          name: `${title}.csv`,
          type: "CSV",
          size: "2.3 MB"
        },
        {
          name: `${title}.xlsx`,
          type: "Excel",
          size: "3.1 MB"
        }
      ]
    },
    {
      name: "Fichiers annexes",
      files: [
        {
          name: "Métadonnées.pdf",
          type: "PDF",
          size: "256 KB"
        },
        {
          name: "Guide d'utilisation.pdf",
          type: "PDF",
          size: "512 KB"
        }
      ]
    }
  ];
};

// Fonction pour obtenir la documentation du dataset
const getDatasetDocumentation = (category, title) => {
  return {
    methodology: "Cette base de données a été constituée en suivant une méthodologie rigoureuse de collecte et de validation des données. Les informations sont mises à jour régulièrement selon un protocole établi.",
    updates: "Les données sont mises à jour trimestriellement. La dernière mise à jour a été effectuée le trimestre précédent. Les mises à jour incluent de nouvelles données ainsi que des corrections éventuelles.",
    quality: "Toutes les données subissent un processus de validation en plusieurs étapes, incluant des vérifications automatisées et des revues manuelles par des experts. Les anomalies sont systématiquement identifiées et corrigées.",
    sources: [
      "Institut National de la Statistique de Côte d'Ivoire",
      "Ministères et organismes gouvernementaux",
      "Organisations internationales partenaires",
      "Collecte de données sur le terrain"
    ]
  };
};

const DataDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [datasetDetails, setDatasetDetails] = useState(null);
  const [activeTab, setActiveTab] = useState('files');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDataset = async () => {
      try {
        const dataset = getDatasetTitle(id);
        if (dataset) {
          setDatasetDetails({
            ...dataset,
            files: getDatasetFiles(dataset.category, dataset.title),
            documentation: getDatasetDocumentation(dataset.category, dataset.title)
          });
        }
      } catch (error) {
        console.error('Erreur lors du chargement des données:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadDataset();
  }, [id]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleVisualizationClick = () => {
    navigate('/visualization', { 
      state: { 
        category: datasetDetails?.category.toLowerCase()
      }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#FF6B00] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des données...</p>
        </div>
      </div>
    );
  }

  if (!datasetDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Jeu de données non trouvé</h2>
          <p className="text-gray-600">Le jeu de données demandé n'existe pas ou n'est plus disponible.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      <div className="container mx-auto px-2 sm:px-4 py-4">
        <motion.button
          onClick={handleGoBack}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-[#FF6B00] hover:text-[#FF6B00]/80 mb-6 transition-colors"
        >
          <FiArrowLeft className="w-5 h-5" />
          <span className="font-medium">Retour</span>
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/50 backdrop-blur-sm rounded-xl shadow-sm p-4 sm:p-6 mb-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2 text-center md:text-left">{datasetDetails?.title}</h1>
              <p className="text-gray-600 text-center md:text-left">{datasetDetails?.description}</p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto md:flex-row md:items-center md:gap-4">
              <button 
                onClick={handleVisualizationClick}
                className="inline-flex items-center justify-center w-full md:w-auto px-4 py-2 bg-[#009B4D] text-white rounded-lg hover:bg-[#FF6B00] transition-colors"
              >
                <FiBarChart2 className="mr-2" />
                Voir la visualisation
              </button>
              <button className="inline-flex items-center justify-center w-full md:w-auto px-4 py-2 bg-[#FF6B00] text-white rounded-lg hover:bg-[#009B4D] transition-colors">
                <FiDownload className="mr-2" />
                Télécharger
              </button>
              <button className="inline-flex items-center justify-center w-full md:w-auto px-4 py-2 border-2 border-[#009B4D] text-[#009B4D] rounded-lg hover:bg-[#009B4D] hover:text-white transition-colors">
                <FiShare className="mr-2" />
                Partager
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3 text-gray-600 justify-center sm:justify-start">
              <FiCalendar className="w-5 h-5 text-[#FF6B00]" />
              <span>Mis à jour le {new Date(datasetDetails.updatedAt).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 justify-center sm:justify-start">
              <FiDatabase className="w-5 h-5 text-[#009B4D]" />
              <span>{datasetDetails.category}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 justify-center sm:justify-start">
              <FiFileText className="w-5 h-5 text-[#FF6B00]" />
              <span>{datasetDetails.format}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 justify-center sm:justify-start">
              <FiBarChart2 className="w-5 h-5 text-[#009B4D]" />
              <span>{datasetDetails.type}</span>
            </div>
          </div>
        </motion.div>

        {/* Onglets */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('files')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'files'
                ? 'bg-[#FF6B00] text-white shadow-lg'
                : 'bg-white/50 backdrop-blur-sm text-gray-600 hover:bg-[#FF6B00]/10'
            }`}
          >
            <div className="flex items-center gap-2">
              <FiFileText className="w-5 h-5" />
              Fichiers
            </div>
          </button>
          <button
            onClick={() => setActiveTab('documentation')}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              activeTab === 'documentation'
                ? 'bg-[#009B4D] text-white shadow-lg'
                : 'bg-white/50 backdrop-blur-sm text-gray-600 hover:bg-[#009B4D]/10'
            }`}
          >
            <div className="flex items-center gap-2">
              <FiBook className="w-5 h-5" />
              Documentation
            </div>
          </button>
        </div>

        {/* Contenu des onglets */}
        <AnimatePresence mode="wait">
          {activeTab === 'files' ? (
            <motion.div
              key="files"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid gap-8"
            >
              {datasetDetails.files?.map((section, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.name}</h2>
                  <div className="grid gap-4">
                    {section.files.map((file, fileIndex) => (
                      <motion.div
                        key={fileIndex}
                        whileHover={{ y: -2 }}
                        className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:border-[#FF6B00]/20 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <FiFileText className="w-5 h-5 text-[#FF6B00]" />
                          <div>
                            <p className="font-medium text-gray-900">{file.name}</p>
                            <p className="text-sm text-gray-500">{file.type} • {file.size}</p>
                          </div>
                        </div>
                        <button className="p-2 text-[#FF6B00] hover:bg-[#FF6B00]/10 rounded-lg transition-colors">
                          <FiDownload className="w-5 h-5" />
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="documentation"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white/50 backdrop-blur-sm rounded-xl shadow-sm p-6"
            >
              <div className="space-y-8">
                {datasetDetails.documentation && (
                  <>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <FiBook className="w-5 h-5 text-[#009B4D]" />
                        Méthodologie
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {datasetDetails.documentation.methodology}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <FiCalendar className="w-5 h-5 text-[#009B4D]" />
                        Mises à jour
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {datasetDetails.documentation.updates}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <FiBarChart2 className="w-5 h-5 text-[#009B4D]" />
                        Contrôle qualité
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {datasetDetails.documentation.quality}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <FiDatabase className="w-5 h-5 text-[#009B4D]" />
                        Sources
                      </h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-600">
                        {datasetDetails.documentation.sources.map((source, index) => (
                          <li key={index} className="leading-relaxed">{source}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DataDetails;