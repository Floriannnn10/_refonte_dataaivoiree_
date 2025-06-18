import React from 'react';
import { motion } from 'framer-motion';
import { ChartBarIcon, MapIcon, DocumentChartBarIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const projects = [
  {
    id: 1,
    title: 'Atlas des indicateurs sociaux',
    description: 'Une cartographie interactive des indicateurs sociaux par région en Côte d\'Ivoire.',
    status: 'En cours',
    progress: 75,
    image: '/projects/atlas.jpg',
    category: 'Cartographie',
    team: ['Jean Kouassi', 'Marie Ahou'],
  },
  {
    id: 2,
    title: 'Observatoire de l\'éducation',
    description: 'Plateforme de suivi des indicateurs de l\'éducation nationale.',
    status: 'Planifié',
    progress: 25,
    image: '/projects/education.jpg',
    category: 'Éducation',
    team: ['Paul Koffi', 'Sarah Bamba'],
  },
  {
    id: 3,
    title: 'Dashboard économique',
    description: 'Tableau de bord des indicateurs économiques clés de la Côte d\'Ivoire.',
    status: 'Terminé',
    progress: 100,
    image: '/projects/economy.jpg',
    category: 'Économie',
    team: ['Marc Yao', 'Luc Kone'],
  },
];

const categories = [
  { name: 'Tous', icon: DocumentChartBarIcon },
  { name: 'Cartographie', icon: MapIcon },
  { name: 'Éducation', icon: ChartBarIcon },
  { name: 'Économie', icon: DocumentChartBarIcon },
];

function Projects() {
  return (
    <div className="min-h-screen bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projets</h1>
          <p className="text-xl text-gray-600">
            Découvrez les projets utilisant nos données ouvertes
          </p>
        </div>
        
        {/* Contenu à venir */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-sm p-6">
          <p className="text-gray-600 text-center">
            Espace pour les projets collaboratifs lancés par les membres de la communauté
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects; 