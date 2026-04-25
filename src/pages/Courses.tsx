import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Clock, BarChart } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { useTranslation } from 'react-i18next';

const COURSES = [
  {
    id: 1,
    title: 'Beginners Course',
    image: 'https://i.imgur.com/JWQO9Iv.jpeg',
    description: 'Start your fashion journey with our comprehensive beginners course. Learn the fundamentals of sewing, fabric selection, and basic pattern making.',
    learnings: [
      'Introduction to sewing machines',
      'Basic stitches and seams',
      'Understanding fabrics',
      'Taking accurate measurements',
      'Creating simple garments'
    ],
    duration: '4 Weeks',
    level: 'Beginner',
    price: '₦50,000',
    selarLink: 'https://selar.com/m/thesilem?lang=en',
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    title: 'Intermediate Course',
    image: 'https://i.imgur.com/68ZBljU.jpeg',
    description: 'Elevate your skills with advanced techniques. Perfect for those who have mastered the basics and want to create more complex designs.',
    learnings: [
      'Advanced pattern drafting',
      'Complex garment construction',
      'Working with delicate fabrics',
      'Professional finishing techniques',
      'Fitting and alterations'
    ],
    duration: '6 Weeks',
    level: 'Intermediate',
    price: '₦80,000',
    selarLink: 'https://selar.com/m/thesilem?lang=en',
    rating: 4.8,
    reviews: 98
  },
  {
    id: 3,
    title: 'Trouser & Jumpsuit Masterclass',
    image: 'https://i.imgur.com/G9S1QWm.jpeg',
    description: 'Master the art of drafting and sewing perfect-fitting trousers and jumpsuits for various body types.',
    learnings: [
      'Trouser block drafting',
      'Jumpsuit pattern manipulation',
      'Crotch curve perfection',
      'Pockets and fly zippers',
      'Styling variations'
    ],
    duration: '3 Weeks',
    level: 'Intermediate/Advanced',
    price: '₦45,000',
    selarLink: 'https://selar.com/m/thesilem?lang=en',
    rating: 5.0,
    reviews: 215
  },
  {
    id: 4,
    title: 'Hip & Butt Padding',
    image: 'https://i.imgur.com/YrwoUhG.jpeg',
    description: 'Learn the secret techniques to creating natural-looking hip and butt padding for enhanced silhouettes.',
    learnings: [
      'Anatomy of padding',
      'Material selection',
      'Drafting padding patterns',
      'Seamless integration',
      'Creating the perfect illusion'
    ],
    duration: '2 Weeks',
    level: 'Advanced',
    price: '₦60,000',
    selarLink: 'https://selar.com/m/thesilem?lang=en',
    rating: 4.9,
    reviews: 156
  },
  {
    id: 5,
    title: 'Draping Masterclass',
    image: 'https://i.imgur.com/lTzK3u5.jpeg',
    description: 'Discover the art of draping directly on the dress form to create unique, fluid, and sculptural designs.',
    learnings: [
      'Preparing the dress form',
      'Basic draping principles',
      'Creating cowls and twists',
      'Transferring drape to paper',
      'Avant-garde techniques'
    ],
    duration: '5 Weeks',
    level: 'Advanced',
    price: '₦100,000',
    selarLink: 'https://selar.com/m/thesilem?lang=en',
    rating: 4.9,
    reviews: 89
  },
  {
    id: 6,
    title: 'Corset Making',
    image: 'https://i.imgur.com/3C75nKm.jpeg',
    description: 'Master the intricate art of corset making. Learn structure, boning, and creating the perfect hourglass silhouette.',
    learnings: [
      'Corset pattern drafting',
      'Types of boning and application',
      'Inserting busks and eyelets',
      'Lining and finishing',
      'Overbust vs Underbust'
    ],
    duration: '4 Weeks',
    level: 'Advanced',
    price: '₦75,000',
    selarLink: 'https://selar.com/m/thesilem?lang=en',
    rating: 5.0,
    reviews: 342
  },
  {
    id: 7,
    title: 'Bustier Construction',
    image: 'https://i.imgur.com/wvnGp4j.jpeg',
    description: 'Learn to draft and construct flawless bustiers with built-in cups and impeccable support.',
    learnings: [
      'Bustier pattern drafting',
      'Cup sizing and foam application',
      'Underwire insertion',
      'Creating sheer panels',
      'Attaching to skirts/trousers'
    ],
    duration: '3 Weeks',
    level: 'Intermediate',
    price: '₦55,000',
    selarLink: 'https://selar.com/m/thesilem?lang=en',
    rating: 4.8,
    reviews: 178
  }
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<typeof COURSES[0] | null>(null);
  const { t } = useTranslation();

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 bg-peach-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">{t('courses.title')}</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('courses.subtitle')}
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((course) => (
              <motion.div
                key={course.id}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-black shadow-lg cursor-pointer group overflow-hidden rounded-2xl"
                onClick={() => setSelectedCourse(course)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-3 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-full">{t('courses.view_details')}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold uppercase tracking-wider leading-tight">{course.title}</h3>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BarChart className="w-4 h-4" />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-peach-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-medium text-black dark:text-white">{course.rating}</span>
                      <span className="text-gray-400 text-xs">({course.reviews})</span>
                    </div>
                    <span className="font-bold text-lg">{course.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Outfits Gallery */}
      <section className="py-24 bg-peach-50 dark:bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4">Made by Our Students</h2>
            <div className="w-24 h-1 bg-peach-500 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
              Take a look at the stunning outfits our online students have crafted after taking our courses.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[ 
              'https://i.imgur.com/gjeALsw.jpeg', 
              'https://i.imgur.com/vvISSuZ.jpeg',
              'https://i.imgur.com/DBjXsBz.jpeg',
              'https://i.imgur.com/FC145Zc.jpeg' 
            ].map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl group shadow-sm hover:shadow-lg transition-shadow"
              >
                <img 
                  src={src} 
                  alt={`Student Outfit ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
              onClick={() => setSelectedCourse(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row relative shadow-2xl rounded-2xl"
              >
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white text-black rounded-full transition-colors backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="w-full md:w-1/2 h-64 md:h-auto">
                  <img 
                    src={selectedCourse.image} 
                    alt={selectedCourse.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-3xl font-bold uppercase tracking-wider">{selectedCourse.title}</h2>
                  </div>
                  
                  <div className="flex items-center space-x-6 mb-8 text-sm border-b border-gray-200 dark:border-gray-800 pb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-peach-500" />
                      <span className="text-gray-600 dark:text-gray-400">{selectedCourse.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BarChart className="w-5 h-5 text-peach-500" />
                      <span className="text-gray-600 dark:text-gray-400">{selectedCourse.level}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star className="w-5 h-5 text-peach-500 fill-current" />
                      <span className="font-bold">{selectedCourse.rating}</span>
                    </div>
                  </div>

                  <div className="mb-8 flex-grow">
                    <h3 className="font-bold uppercase tracking-wider mb-3">{t('courses.about')}</h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                      {selectedCourse.description}
                    </p>

                    <h3 className="font-bold uppercase tracking-wider mb-3">{t('courses.learn')}</h3>
                    <ul className="space-y-2">
                      {selectedCourse.learnings.map((learning, index) => (
                        <li key={index} className="flex items-start space-x-3 text-gray-600 dark:text-gray-400">
                          <span className="text-peach-500 font-bold mt-1">•</span>
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">{t('courses.fee')}</p>
                      <p className="text-3xl font-bold">{selectedCourse.price}</p>
                    </div>
                    <a 
                      href={selectedCourse.selarLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black font-bold uppercase tracking-wider hover:bg-peach-500 dark:hover:bg-peach-500 hover:text-white transition-colors"
                    >
                      {t('courses.buy')}
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
