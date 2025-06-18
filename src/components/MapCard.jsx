import { motion } from 'framer-motion';
import { FiDownload, FiEye, FiMapPin } from 'react-icons/fi';
import Button from './Button';

const MapCard = ({ region, onPreview, onDownload }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-soft overflow-hidden"
    >
      <div className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <FiMapPin className="h-6 w-6 text-primary-500" aria-hidden="true" />
            <h3 className="ml-2 text-lg font-medium text-gray-900">{region.name}</h3>
          </div>
          <motion.span
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700"
          >
            {region.communes} communes
          </motion.span>
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 text-sm text-gray-500"
        >
          {region.description}
        </motion.p>
        
        <div className="mt-4">
          <p className="text-sm text-gray-500">
            Dernière mise à jour : {region.lastUpdate}
          </p>
        </div>
        
        <div className="mt-6 flex gap-4">
          <Button
            variant="primary"
            size="sm"
            icon={<FiDownload />}
            onClick={() => onDownload(region)}
          >
            Télécharger
          </Button>
          
          <Button
            variant="secondary"
            size="sm"
            icon={<FiEye />}
            onClick={() => onPreview(region)}
          >
            Aperçu
          </Button>
        </div>
      </div>
      
      {/* Overlay de survol */}
      <motion.div
        initial={false}
        whileHover={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300"
      />
    </motion.div>
  );
};

export default MapCard; 