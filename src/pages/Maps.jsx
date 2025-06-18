import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagnifyingGlassIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import { FiDownload, FiSearch, FiMap } from 'react-icons/fi';

const maps = [
  {
    id: 1,
    title: "Carte administrative d'Abidjan",
    description: "Carte détaillée des communes d'Abidjan avec délimitations",
    category: "administrative",
    region: "Lagunes",
    format: "SHP, GeoJSON",
    lastUpdate: "2025-05-15",
    size: "2.4 MB",
    imageUrl: "/IMG/abidjan.png",
    mapUrl: "https://www.google.com/maps/place/Abidjan/@5.3484446,-4.0620668,12z/data=!3m1!4b1!4m6!3m5!1s0xfc1ea5311959121:0x3fe70ddce19221a6!8m2!3d5.3252258!4d-4.019603!16zL20vMGZteWQ?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 2,
    title: "Communes de Yamoussoukro",
    description: "Découpage administratif de Yamoussoukro",
    category: "administrative",
    region: "Lacs",
    format: "SHP, GeoJSON",
    lastUpdate: "2025-05-10",
    size: "1.8 MB",
    imageUrl: "/IMG/Yamoussoukro.8.jpg",
    mapUrl: "https://www.google.com/maps/place/Yamoussoukro/@6.81606,-5.3635377,12z/data=!3m1!4b1!4m6!3m5!1s0xfb8913a41c945f7:0x21701f1a1623eede!8m2!3d6.8162741!4d-5.2743629!16zL20vMDg4cDQ?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 3,
    title: "Carte des communes de Bouaké",
    description: "Limites administratives des communes de Bouaké",
    category: "administrative",
    region: "Vallée du Bandama",
    format: "SHP, GeoJSON",
    lastUpdate: "2025-05-08",
    size: "2.1 MB",
    imageUrl: "/IMG/bouake-communes.jpg",
    mapUrl: "https://www.google.com/maps/place/Bouak%C3%A9/@7.7003694,-5.0668229,13z/data=!4m15!1m8!3m7!1s0xfc7ff1047a1337b:0x6df480111e410feb!2zQm91YWvDqQ!3b1!8m2!3d7.690466!4d-5.0390536!16zL20vMDQ5MW05!3m5!1s0xfc7ff1047a1337b:0x6df480111e410feb!8m2!3d7.690466!4d-5.0390536!16zL20vMDQ5MW05?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 4,
    title: "Communes de San Pedro",
    description: "Carte administrative de San Pedro et ses environs",
    category: "administrative",
    region: "Bas-Sassandra",
    format: "SHP, GeoJSON",
    lastUpdate: "2025-05-20",
    size: "1.9 MB",
    imageUrl: "/IMG/San-Pedro.8.gif",
    mapUrl: "https://www.google.com/maps/place/San-P%C3%A9dro/@4.7588112,-6.6958888,13z/data=!3m1!4b1!4m6!3m5!1s0xf9613979c0479b5:0xb818c2a383cc2f8f!8m2!3d4.7483699!4d-6.6357778!16zL20vMDU2a3Jk?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 5,
    title: "Carte de Korhogo",
    description: "Délimitations des communes de Korhogo",
    category: "administrative",
    region: "Savanes",
    format: "SHP, GeoJSON",
    lastUpdate: "2025-05-18",
    size: "2.0 MB",
    imageUrl: "/IMG/Korhogo-1.12.gif",
    mapUrl: "https://www.google.com/maps/place/Korhogo/@9.4607982,-5.6660996,13z/data=!4m15!1m8!3m7!1s0xfb5c9793c52529b:0xbb96dae209dff69f!2sKorhogo!3b1!8m2!3d9.4669337!4d-5.6142558!16zL20vMDNrcjNk!3m5!1s0xfb5c9793c52529b:0xbb96dae209dff69f!8m2!3d9.4669337!4d-5.6142558!16zL20vMDNrcjNk?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 6,
    title: "Plan de Daloa",
    description: "Plan détaillé des communes de Daloa",
    category: "administrative",
    region: "Haut-Sassandra",
    format: "SHP, GeoJSON",
    lastUpdate: "2025-05-12",
    size: "1.7 MB",
    imageUrl: "/IMG/daloa.gif",
    mapUrl: "https://www.google.com/maps/place/Daloa/@6.8916968,-6.446924,5229m/data=!3m1!1e3!4m15!1m8!3m7!1s0xfbbd7814f6a06b5:0xc816ae3e3fc48bad!2sDaloa!3b1!8m2!3d6.8883341!4d-6.4396888!16zL20vMDZxX2Zn!3m5!1s0xfbbd7814f6a06b5:0xc816ae3e3fc48bad!8m2!3d6.8883341!4d-6.4396888!16zL20vMDZxX2Zn?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 7,
    title: "Carte de Man",
    description: "Carte administrative de la ville de Man",
    category: "administrative",
    region: "Montagnes",
    format: "SHP, GeoJSON",
    lastUpdate: "2025-05-14",
    size: "1.6 MB",
    imageUrl: "/IMG/Man.png",
    mapUrl: "https://www.google.com/maps/place/Man/@7.4080159,-7.5873176,14878m/data=!3m1!1e3!4m15!1m8!3m7!1s0xfbab8dd609712e7:0xfbe7f1da3440eef9!2sMan!3b1!8m2!3d7.4064275!4d-7.5572231!16zL20vMDIwaDl0!3m5!1s0xfbab8dd609712e7:0xfbe7f1da3440eef9!8m2!3d7.4064275!4d-7.5572231!16zL20vMDIwaDl0?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 8,
    title: "Communes de Divo",
    description: "Délimitations administratives de Divo",
    category: "administrative",
    region: "Sud-Bandama",
    format: "SHP, GeoJSON",
    lastUpdate: "2025-05-16",
    size: "1.5 MB",
    imageUrl: "/IMG/divo.png",
    mapUrl: "https://www.google.com/maps/place/Divo/@5.8425454,-5.3633773,624m/data=!3m1!1e3!4m15!1m8!3m7!1s0xfbf72edf418b185:0xda67199c325f86bb!2sDivo!3b1!8m2!3d5.8415399!4d-5.3625516!16s%2Fm%2F02pqmjz!3m5!1s0xfbf72edf418b185:0xda67199c325f86bb!8m2!3d5.8415399!4d-5.3625516!16s%2Fm%2F02pqmjz?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 9,
    title: "Plan de Gagnoa",
    description: "Plan détaillé des communes de Gagnoa",
    category: "administrative",
    region: "Fromager",
    format: "SHP, GeoJSON",
    lastUpdate: "2025-05-19",
    size: "1.8 MB",
    imageUrl: "/IMG/Gagnoa.10.gif",
    mapUrl: "https://www.google.com/maps/place/Gagnoa/@6.1442622,-5.9995233,14917m/data=!3m1!1e3!4m15!1m8!3m7!1s0xfbec47ce3ed7985:0xb05cc6b966366612!2sGagnoa!3b1!8m2!3d6.1514423!4d-5.9515399!16s%2Fm%2F012cf0bj!3m5!1s0xfbec47ce3ed7985:0xb05cc6b966366612!8m2!3d6.1514423!4d-5.9515399!16s%2Fm%2F012cf0bj?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    id: 10,
    title: "Carte d'Abengourou",
    description: "Carte administrative d'Abengourou",
    category: "administrative",
    region: "Moyen-Comoé",
    format: "SHP, GeoJSON",
    lastUpdate: "2025-05-17",
    size: "1.7 MB",
    imageUrl: "/IMG/Abengourou.10.gif",
    mapUrl: "https://www.google.com/maps/place/Abengourou/@6.7157775,-3.505635,6638m/data=!3m1!1e3!4m15!1m8!3m7!1s0xfc415f009b731bd:0xff9bbe06ed09677f!2sAbengourou!3b1!8m2!3d6.7156982!4d-3.4801349!16zL20vMDlncjk5!3m5!1s0xfc415f009b731bd:0xff9bbe06ed09677f!8m2!3d6.7156982!4d-3.4801349!16zL20vMDlncjk5?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
  }
];

const regions = [...new Set(maps.map(map => map.region))].sort();

const getRegionColor = (region) => {
  const colors = {
    'Lagunes': 'bg-[#FF6B00]/10 text-[#FF6B00]',
    'Savanes': 'bg-[#009B4D]/10 text-[#009B4D]',
    'Vallée du Bandama': 'bg-[#FF6B00]/10 text-[#FF6B00]',
    'Montagnes': 'bg-[#009B4D]/10 text-[#009B4D]',
    'Lacs': 'bg-[#FF6B00]/10 text-[#FF6B00]',
    'Sud-Bandama': 'bg-[#009B4D]/10 text-[#009B4D]',
    'Fromager': 'bg-[#FF6B00]/10 text-[#FF6B00]',
    'Haut-Sassandra': 'bg-[#009B4D]/10 text-[#009B4D]',
    'Bas-Sassandra': 'bg-[#FF6B00]/10 text-[#FF6B00]',
    'Moyen-Comoé': 'bg-[#009B4D]/10 text-[#009B4D]'
  };
  return colors[region] || 'bg-gray-100 text-gray-800';
};

const handleDownload = async (map) => {
  // Déterminer l'extension du fichier à partir de l'URL de l'image
  const extension = map.imageUrl.split('.').pop();
  const sanitizedTitle = map.title.replace(/[^a-zA-Z0-9]/g, '_');
  const filename = `${sanitizedTitle}.${extension}`;

  // Créer un div pour le message de téléchargement
  const message = document.createElement('div');
  message.style.position = 'fixed';
  message.style.bottom = '20px';
  message.style.right = '20px';
  message.style.padding = '1rem';
  message.style.backgroundColor = 'rgba(255, 107, 0, 0.9)';
  message.style.color = 'white';
  message.style.borderRadius = '0.5rem';
  message.style.zIndex = '50';
  message.style.transition = 'opacity 0.3s ease-in-out';
  message.textContent = `Téléchargement de la carte ${map.title}...`;
  
  document.body.appendChild(message);

  try {
    // Utiliser l'URL complète de l'image
    const imgElement = document.querySelector(`img[src="${map.imageUrl}"]`);
    if (!imgElement) {
      throw new Error("Image non trouvée");
    }

    // Créer un canvas pour dessiner l'image
    const canvas = document.createElement('canvas');
    canvas.width = imgElement.naturalWidth;
    canvas.height = imgElement.naturalHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(imgElement, 0, 0);

    // Convertir le canvas en Blob
    canvas.toBlob(async (blob) => {
      if (!blob) {
        throw new Error("Impossible de créer le blob de l'image");
      }

      // Créer l'URL et le lien de téléchargement
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);

      // Message de succès
      message.textContent = `La carte ${map.title} a été téléchargée avec succès !`;
      message.style.backgroundColor = 'rgba(0, 155, 77, 0.9)';
    }, 'image/' + extension);

  } catch (error) {
    console.error('Erreur de téléchargement:', error);
    message.textContent = "Une erreur est survenue lors du téléchargement. Veuillez réessayer.";
    message.style.backgroundColor = 'rgba(220, 38, 38, 0.9)';
  }
  
  // Faire disparaître le message après 3 secondes
  setTimeout(() => {
    message.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(message);
    }, 300);
  }, 3000);
};

const highlightText = (text, query) => {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={index} className="bg-[#FF6B00]/20 text-[#FF6B00]">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
};

const MapPreview = ({ imageUrl, title, onClick }) => {
  return (
    <div
      className="relative w-full h-[250px] bg-gray-100 rounded-t-xl overflow-hidden group cursor-pointer"
      onClick={onClick}
    >
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
          <p className="text-white text-sm font-medium">Cliquez pour explorer la carte</p>
        </div>
      </div>
    </div>
  );
};

function Maps() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFilter, setExpandedFilter] = useState(false);
  const [searchResults, setSearchResults] = useState(maps);

  useEffect(() => {
    const results = maps.filter(map => {
      const matchesRegion = selectedRegion === 'all' || map.region === selectedRegion;
      const matchesSearch =
        map.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        map.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        map.region.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
    setSearchResults(results);
  }, [selectedRegion, searchQuery]);

  return (
    <div className="min-h-screen bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cartes</h1>
          <p className="text-xl text-gray-600">
            Téléchargez les cartes des communes de Côte d'Ivoire
          </p>
        </div>

        {/* Barre de recherche améliorée */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une carte par ville ou région..."
              className="w-full pl-10 pr-12 py-3 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 transition-colors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setExpandedFilter(!expandedFilter)}
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5 text-gray-400 hover:text-[#FF6B00]" />
            </button>
          </div>
        </div>

        {/* Filtres par région */}
        <AnimatePresence>
          {expandedFilter && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-8"
            >
              <div className="flex flex-wrap gap-2 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-200">
                <button
                  onClick={() => setSelectedRegion('all')}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    selectedRegion === 'all'
                      ? 'bg-[#FF6B00] text-white'
                      : 'bg-white/50 text-gray-600 hover:bg-[#FF6B00]/10'
                  }`}
                >
                  Toutes les régions
                </button>
                {regions.map((region) => (
                  <button
                    key={region}
                    onClick={() => setSelectedRegion(region)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      selectedRegion === region
                        ? 'bg-[#FF6B00] text-white'
                        : 'bg-white/50 text-gray-600 hover:bg-[#FF6B00]/10'
                    }`}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grille des cartes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {searchResults.map((map) => (
            <motion.div
              key={map.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/50 backdrop-blur-sm rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-[#FF6B00] transition-colors"
            >
              <MapPreview
                imageUrl={map.imageUrl}
                title={map.title}
                onClick={() => window.open(map.mapUrl, '_blank')}
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">
                  {highlightText(map.title, searchQuery)}
                </h3>
                <p className="text-gray-600 mb-4">
                  {highlightText(map.description, searchQuery)}
                </p>
                <div className="flex items-center gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-lg text-sm ${getRegionColor(map.region)}`}>
                    {highlightText(map.region, searchQuery)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <p>Format : {map.format}</p>
                    <p>Taille : {map.size}</p>
                  </div>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(map);
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B00] text-white rounded-lg hover:bg-[#009B4D] transition-colors"
                  >
                    <FiDownload />
                    <span>Télécharger</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message si aucun résultat */}
        {searchResults.length === 0 && (
          <div className="text-center py-12">
            <FiMap className="w-12 h-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Aucune carte trouvée</h3>
            <p className="text-gray-600">
              Essayez de modifier vos critères de recherche ou de sélectionner une autre région.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Maps;
