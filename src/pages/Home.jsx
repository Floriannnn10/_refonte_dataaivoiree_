import { motion } from 'framer-motion';
import {
  FiDatabase,
  FiShare2,
  FiUsers,
  FiBarChart2,
  FiMap,
  FiGrid,
  FiBookOpen,
  FiTrendingUp
} from 'react-icons/fi';
import Button from '../components/Button';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const features = [
  {
    name: 'Données Ouvertes',
    description: 'Accédez à des milliers de jeux de données sur la Côte d\'Ivoire : statistiques, indicateurs, données géographiques.',
    icon: FiDatabase,
    link: '/donnees'
  },
  {
    name: 'Partage Communautaire',
    description: 'Partagez vos analyses, collaborez sur des projets et enrichissez la base de données nationale.',
    icon: FiShare2,
    link: '/communaute'
  },
  {
    name: 'Visualisations',
    description: 'Créez et partagez des tableaux de bord interactifs pour mieux comprendre les données.',
    icon: FiBarChart2,
    link: '/visualisation'
  },
  {
    name: 'Cartographie',
    description: 'Explorez les données géographiques et les cartes des communes de Côte d\'Ivoire.',
    icon: FiMap,
    link: '/cartographie'
  },
];

const categories = [
  {
    title: "Données Socio-économiques",
    description: "Statistiques démographiques, économiques et sociales",
    icon: FiGrid,
    count: "500+ jeux de données",
    link: "/donnees/socio-economique"
  },
  {
    title: "Éducation",
    description: "Données sur l'éducation et la formation",
    icon: FiBookOpen,
    count: "200+ jeux de données",
    link: "/donnees/education"
  },
  {
    title: "Développement",
    description: "Indicateurs de développement et projets",
    icon: FiTrendingUp,
    count: "300+ jeux de données",
    link: "/donnees/developpement"
  },
  {
    title: "Communauté",
    description: "Analyses et visualisations partagées",
    icon: FiUsers,
    count: "1000+ contributions",
    link: "/communaute"
  }
];

const stats = [
  {
    id: 1,
    name: 'Utilisateurs Internet',
    value: '12.94M',
    detail: '45.4% de la population'
  },
  {
    id: 2,
    name: 'Connexions Mobile',
    value: '41.41M',
    detail: '145.2% de pénétration'
  },
  {
    id: 3,
    name: 'Utilisateurs Réseaux Sociaux',
    value: '5.10M',
    detail: '17.9% de la population'
  },
  {
    id: 4,
    name: 'Population Totale',
    value: '28.51M',
    detail: '+2.5% par an'
  },
];

const news = [
  {
    id: 1,
    title: 'Nouvelles données démographiques',
    date: '15 Mars 2024',
    description: "Publication des dernières statistiques démographiques par région.",
    category: 'Données',
    href: '/actualites/demo-2024'
  },
  {
    id: 2,
    title: 'Innovation numérique en Côte d\'Ivoire',
    date: '10 Mars 2024',
    description: 'Les startups ivoiriennes transforment les données en solutions innovantes.',
    category: 'Innovation',
    href: '/actualites/innovation-ci'
  },
  {
    id: 3,
    title: "Forum Open Data Abidjan 2024",
    date: '5 Mars 2024',
    description: "Rencontre des acteurs de l'écosystème des données ouvertes.",
    category: 'Événement',
    href: '/actualites/forum-opendata'
  }, 
];

export default function Home() {
  return ( 
    <div className="bg-gradient-to-b from-orange-50 to-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:pt-8"
          >
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-4 mb-8"
            >
              <img
                src="/IMG/LOGO_SITE.png"
                alt="DataIvoire Logo"
                className="h-12 w-auto"
              />

              <span className="rounded-full bg-[#FF6B00] bg-opacity-10 px-4 py-1 text-sm font-semibold leading-6 text-[#FF6B00]">
                La communauté des données ouvertes de Côte d'Ivoire
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
            >
              Partageons les <span className="text-[#FF6B00]">données ouvertes</span> pour développer la Côte d'Ivoire
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-6 text-lg leading-8 text-gray-600"
            >
              Une plateforme moderne et communautaire pour accéder, analyser et partager les données statistiques de notre pays. Rejoignez-nous pour contribuer à la transparence et à l'innovation.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-10 flex items-center gap-x-6"
            >
              <Button
                variant="primary"
                size="lg"
                href="/donnees"
                className="text-orange-600 border-2 border-orange-600 hover:bg-[#009B4D] hover:text-white hover:border-[#009B4D]"
              >
                Explorer les données
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/communaute"
                className="text-orange-600 border-2 border-orange-600 hover:bg-[#009B4D] hover:text-white hover:border-[#009B4D]"
              >
                Rejoindre la communauté
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block lg:flex-1 lg:ml-16"
          >
            <div className="relative aspect-[4/3] bg-orange-100 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent" />
              <img
                src="/IMG/LOGO_SITE.png"
                alt="DataIvoire Illustration"
                className="absolute inset-0 w-full h-full object-contain p-8"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto max-w-7xl px-6 sm:mt-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Une plateforme, de multiples possibilités
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez tout ce que vous pouvez faire avec les données ouvertes de la Côte d'Ivoire
          </p>
        </motion.div>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <motion.dl
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                variants={itemVariants}
                className="relative bg-white rounded-xl p-8 shadow-soft hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
              >
                <dt className="inline-flex items-center text-xl font-semibold text-gray-900">
                  <feature.icon className="h-8 w-8 text-orange-500 mr-4" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 text-base text-gray-600">{feature.description}</dd>
                <a
                  href={feature.link}
                  className="mt-6 inline-flex items-center text-sm font-medium text-orange-600 hover:text-white hover:bg-[#009B4D] px-4 py-2 rounded-lg border-2 border-orange-600 hover:border-[#009B4D] transition-all"
                >
                  En savoir plus
                  <span aria-hidden="true" className="ml-1">→</span>
                </a>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="mx-auto max-w-7xl px-6 mt-32 sm:mt-40 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explorez nos catégories de données
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Des données variées pour comprendre et analyser tous les aspects de la Côte d'Ivoire
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="flex flex-col bg-white rounded-xl p-8 shadow-soft hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
            >
              <category.icon className="h-8 w-8 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              <p className="mt-4 flex-1 text-base text-gray-600">{category.description}</p>
              <p className="mt-6 text-sm font-medium text-orange-600">{category.count}</p>
              <a
                href={category.link}
                className="mt-6 inline-flex items-center text-sm font-medium text-orange-600 hover:text-white hover:bg-[#009B4D] px-4 py-2 rounded-lg border-2 border-orange-600 hover:border-[#009B4D] transition-all"
              >
                Explorer
                <span aria-hidden="true" className="ml-1">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* News Section */}
      <div className="mx-auto max-w-7xl px-6 mt-32 sm:mt-40 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Actualités du numérique
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Les dernières nouvelles de l'écosystème des données en Côte d'Ivoire
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 border-t border-gray-200 pt-10 sm:mt-20 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {news.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="flex flex-col bg-white rounded-xl p-6 shadow-soft hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-orange-50 px-3 py-1.5 font-medium text-orange-600">
                  {post.category}
                </span>
              </div>
              <div className="group relative mt-3">
                <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-orange-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
                  {post.description}
                </p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <a
                  href={post.href}
                  className="text-sm font-medium text-orange-600 hover:text-white hover:bg-[#009B4D] px-4 py-2 rounded-lg border-2 border-orange-600 hover:border-[#009B4D] transition-all"
                >
                  Lire la suite
                  <span aria-hidden="true"> →</span>
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outline"
              size="lg"
              href="/actualites"
              className="text-orange-600 border-2 border-orange-600 hover:bg-[#009B4D] hover:text-white hover:border-[#009B4D]"
            >
              Voir toutes les actualités
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Stats section */}
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl lg:mx-0"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Le numérique en Côte d'Ivoire
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Les chiffres clés du secteur numérique ivoirien
          </p>
        </motion.div>

        <motion.dl
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              variants={itemVariants}
              className="bg-orange-600 rounded-xl p-8 text-center text-white shadow-soft"
              whileHover={{ scale: 1.05 }}
            >
              <dt className="text-sm font-medium leading-6 opacity-80">{stat.name}</dt>
              <dd className="mt-2 text-3xl font-bold tracking-tight">{stat.value}</dd>
              <p className="mt-1 text-xs opacity-70">{stat.detail}</p>
            </motion.div>
          ))}
        </motion.dl>
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-24 sm:pb-32"
      >
        <div className="relative isolate overflow-hidden bg-orange-600 rounded-3xl px-6 py-24 text-center shadow-2xl sm:px-24">
          <div className="mx-auto mb-8">
            <img
              src="/IMG/LOGO_SITE.png"
              alt="DataIvoire Logo"
              className="h-16 w-auto mx-auto"
            />
          </div>
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Rejoignez la communauté des données ouvertes
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-orange-100">
            Contribuez à la transparence et à l'innovation en Côte d'Ivoire en partageant et analysant les données.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              variant="primary"
              size="lg"
              href="/inscription"
              className="bg-transparent text-orange-600 border-2 border-orange-600 ring-2 ring-white hover:bg-[#009B4D] hover:text-white hover:border-[#009B4D] hover:ring-0"
            >
              Commencer maintenant
            </Button>
            <Button
              variant="outline"
              size="lg"
              href="/a-propos"
              className="text-white border-white hover:bg-[#009B4D] hover:text-white hover:border-[#009B4D]"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 