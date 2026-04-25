import { useState } from 'react';
import { motion } from 'motion/react';
import { Filter } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { useTranslation } from 'react-i18next';

const PRODUCTS = [
  {
    id: 1,
    name: 'Silk Draped Gown',
    price: '₦150,000',
    image: 'https://i.imgur.com/FC145Zc.jpeg',
    category: 'Gowns'
  },
  {
    id: 2,
    name: 'Tailored Two-Piece Suit',
    price: '₦120,000',
    image: 'https://i.imgur.com/DBjXsBz.jpeg',
    category: 'Suits'
  },
  {
    id: 3,
    name: 'Embellished Corset Dress',
    price: '₦180,000',
    image: 'https://i.imgur.com/yb2cNBy.jpeg',
    category: 'Dresses'
  },
  {
    id: 4,
    name: 'Structured Blazer',
    price: '₦85,000',
    image: 'https://i.imgur.com/fK1nZUz.jpeg',
    category: 'Outerwear'
  },
  {
    id: 5,
    name: 'Pleated Midi Skirt',
    price: '₦45,000',
    image: 'https://i.imgur.com/vvISSuZ.jpeg',
    category: 'Skirts'
  },
  {
    id: 6,
    name: 'Asymmetric Top',
    price: '₦35,000',
    image: 'https://i.imgur.com/ltPPO0e.jpeg',
    category: 'Tops'
  }
];

const CATEGORIES = ['All', 'Gowns', 'Dresses', 'Suits', 'Outerwear', 'Skirts', 'Tops'];

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { t } = useTranslation();

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 bg-peach-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">{t('shop.title')}</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('shop.subtitle')}
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          {/* Filters & Sorting */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 text-sm font-medium uppercase tracking-wider whitespace-nowrap transition-colors ${
                    activeCategory === category 
                      ? 'bg-black text-white dark:bg-white dark:text-black' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <button className="flex items-center space-x-2 text-sm font-medium uppercase tracking-wider text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              <Filter className="w-4 h-4" />
              <span>{t('shop.filter_sort')}</span>
            </button>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="group"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-2xl">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Hover Actions */}
                  <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between items-center translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                    <button className="w-full py-3 bg-black text-white text-sm font-bold uppercase tracking-wider hover:bg-peach-500 transition-colors shadow-lg flex items-center justify-center space-x-2 rounded-full">
                      <span>{t('shop.view_details')}</span>
                    </button>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-bold uppercase tracking-wider mb-2">{product.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
