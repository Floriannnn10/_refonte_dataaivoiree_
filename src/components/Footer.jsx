import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiYoutube } from 'react-icons/fi';

const navigation = {
  main: [
    { name: 'Accueil', href: '/' },
    { name: 'Données', href: '/data' },
    { name: 'Visualisation', href: '/visualization' },
    { name: 'Réutilisation', href: '/reuse' },
    { name: 'Cartes', href: '/maps' },
    { name: 'Projets', href: '/projects' },
    { name: 'Articles', href: '/articles' },
    { name: 'À propos', href: '/about' },
    { name: 'À propos', href: '/about' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61571763057487&locale=fr_FR',
      icon: FiFacebook,
    },
    {
      name: 'X (Twitter)',
      href: 'https://x.com/Gouvciofficiel',
      icon: FiTwitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/data-ivoire-dai/posts/?feedView=all',
      icon: FiLinkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/gouvci.officiel/',
      icon: FiInstagram,
    },
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@gouvciofficiel',
      icon: FiYoutube,
    },
  ],
};

const contactInfo = [
  {
    icon: FiMapPin,
    text: 'Cocody Riviera 3, Cité COPRACI villa 89, Abidjan, Côte d\'Ivoire',
  },
  {
    icon: FiPhone,
    text: '+33 6 66 52 91 03',
  },
  {
    icon: FiMail,
    text: 'info@dataivoire.org / infos@dataivoire.ci',
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <Link to="/" className="hover:opacity-75 transition-opacity">
              <img
                className="h-10"
                src="/IMG/LOGO_SITE.png"
                alt="DataIvoire"
              />
            </Link>

            <p className="text-gray-500 text-sm">
              DataIvoire est une initiative citoyenne visant à rendre accessibles les données
              statistiques de la Côte d'Ivoire.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-[#FF6B00]"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Liens rapides */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12 md:mt-0"
          >
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Liens rapides
            </h3>
            <ul className="mt-4 space-y-4">
              {navigation.main.slice(0, 8).map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    to={item.href}
                    className="text-base text-gray-500 hover:text-[#FF6B00]"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 md:mt-0"
          >
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              {contactInfo.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center text-gray-500"
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <item.icon className="h-5 w-5 mr-2 text-[#FF6B00]" />
                  {item.text}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 md:mt-0"
          >
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Newsletter
            </h3>
            <p className="mt-4 text-base text-gray-500">
              Restez informé des dernières mises à jour et nouveautés.
            </p>
            <form className="mt-4">
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="min-w-0 flex-1 rounded-md border border-gray-300 bg-white py-1.5 px-3 text-base text-gray-900 placeholder:text-gray-400 focus:border-[#FF6B00] focus:ring-1 focus:ring-[#FF6B00]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="flex-none rounded-md bg-[#FF6B00] py-1.5 px-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#009B4D] transition-colors duration-300"
                >
                  S'abonner
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-t border-gray-200 pt-8"
        >
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} DataIvoire. Tous droits réservés.
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 