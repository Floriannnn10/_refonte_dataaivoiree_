import { motion } from 'framer-motion';
import { FiTarget, FiUsers, FiSearch, FiTrendingUp, FiSend } from 'react-icons/fi';

const objectives = [
  {
    title: 'Notre Mission',
    description: 'Démocratiser l\'accès aux données statistiques de la Côte d\'Ivoire et faciliter leur utilisation pour le développement du pays.',
    icon: FiTarget,
  },
  {
    title: 'Notre Équipe',
    description: 'Une équipe passionnée d\'experts en données, statistiques et développement, dédiée à l\'amélioration de l\'accès à l\'information.',
    icon: FiUsers,
  },
  {
    title: 'Notre Méthodologie',
    description: 'Une approche rigoureuse de collecte, validation et standardisation des données pour garantir leur qualité et leur fiabilité.',
    icon: FiSearch,
  },
  {
    title: 'Notre Impact',
    description: 'Contribuer au développement durable de la Côte d\'Ivoire en facilitant la prise de décision basée sur les données.',
    icon: FiTrendingUp,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  },
};

export default function About() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="min-h-screen">
      {/* Section Présentation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              À Propos de DataIvoire
            </h1>            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              DataIvoire est une initiative citoyenne majeure en Côte d'Ivoire, 
              dédiée à la démocratisation des données statistiques nationales. 
              Notre plateforme rassemble, analyse et partage des données essentielles 
              pour éclairer la prise de décision et stimuler le développement du pays.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <motion.a
                href="/a-propos-details"
                className="inline-block px-6 py-3 text-white font-semibold bg-orange-500 rounded-lg 
                         hover:bg-green-600 transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                En savoir plus sur notre mission
                <motion.span
                  className="inline-block ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section Objectifs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos Objectifs
          </h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >            {objectives.map((objective, index) => (
              <motion.div
                key={objective.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7,
                  delay: index * 0.2,
                  ease: "easeOut"
                }}
                className="group bg-white/80 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="flex-shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      delay: index * 0.2 + 0.3,
                      type: "spring",
                      stiffness: 200
                    }}
                  >
                    <div className="p-3 rounded-lg bg-orange-50 group-hover:bg-orange-100 transition-colors">
                      <objective.icon className="w-6 h-6 text-orange-500" />
                    </div>
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                      className="text-xl font-semibold text-gray-900 mb-2"
                    >
                      {objective.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.5 }}
                      className="text-gray-600 mb-4"
                    >
                      {objective.description}                    </motion.p>
                    <motion.a
                      href={`/documentation/${objective.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group-hover:translate-x-1 transition-all"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.6 }}
                    >
                      En savoir plus
                      <motion.svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        whileHover={{ x: 3 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </motion.svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Méthodes de Travail */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Nos Méthodes de Travail
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >            {[
              {
                title: "Collecte de Données",
                description: "Nous travaillons en étroite collaboration avec les institutions nationales et les organismes de recherche pour collecter des données fiables et actualisées.",
                link: "/methodologie/collecte-donnees",
                linkText: "En savoir plus sur notre processus"
              },
              {
                title: "Traitement et Validation",
                description: "Chaque ensemble de données passe par un processus rigoureux de validation et de standardisation pour garantir leur qualité et leur utilisabilité.",
                link: "/methodologie/traitement-validation",
                linkText: "Explorer notre méthodologie"
              },
              {
                title: "Partage et Accessibilité",
                description: "Nous rendons les données accessibles à travers des formats standards et des visualisations interactives pour faciliter leur compréhension et leur utilisation.",
                link: "/methodologie/partage-accessibilite",
                linkText: "Découvrir nos outils et formats"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.2
                }}
                className="group bg-white/80 p-6 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-xl font-semibold text-black mb-3"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.3 }}
                  className="text-gray-600 mb-4"
                >
                  {item.description}
                </motion.p>
                <motion.a
                  href={item.link}
                  className="inline-flex items-center text-orange-500 hover:text-orange-600 font-medium group-hover:translate-x-1 transition-all"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.2 + 0.4 }}
                >
                  {item.linkText}
                  <motion.svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </motion.svg>
                </motion.a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Formulaire de Contact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-600">
              Nous sommes à votre écoute. N'hésitez pas à nous contacter pour toute question ou suggestion.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="Votre nom"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="votre@email.com"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition-colors"
                placeholder="Sujet de votre message"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                placeholder="Votre message"
              ></textarea>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center"
            >
              <motion.button
                type="submit"
                className="inline-flex items-center px-6 py-3 text-white font-semibold bg-orange-500 rounded-lg hover:bg-orange-600 transform transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiSend className="mr-2" />
                Envoyer le message
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}