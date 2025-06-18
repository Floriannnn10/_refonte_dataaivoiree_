import React from 'react';
import { motion } from 'framer-motion';

const PageTitle = ({ title, subtitle, icon: Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8 text-center"
    >
      {Icon && (
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-orange-100 rounded-full">
            <Icon className="w-8 h-8 text-orange-500" />
          </div>
        </div>
      )}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="flex justify-center mt-4">
        <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default PageTitle;