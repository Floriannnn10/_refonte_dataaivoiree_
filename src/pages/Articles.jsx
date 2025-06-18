import React from 'react';

function Articles() {
  return (
    <div className="min-h-screen bg-transparent py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Articles</h1>
          <p className="text-xl text-gray-600">
            Découvrez les analyses basées sur nos données ouvertes
          </p>
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-sm p-6">
          <p className="text-gray-600 text-center">
            Espace dédié aux publications d'analyses thématiques, de sondages et
            d'études.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Articles;