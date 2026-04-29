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
    price: '6,000 Naira',
    venue: 'Telegram',
    timeline: 'You have access to all the course videos when registration is completed. This allows you to learn and practice at your own pace',
    format: 'Detailed videos are sent. This course is NOT live',
    description: 'A comprehensive starter course for fashion design.',
    learnings: [
      'How to take accurate body measurements for blouse, skirt and dress',
      'How to draft a basic bodice',
      'How to draft a basic sleeve',
      'How to cut and sew a blouse with waist darts and sleeves',
      'How to draft, cut and sew a pencil skirt',
      'How to draft, cut and sew a fitted dress with half length',
      'How to draft, cut and sew an A-line dress',
      'How to insert a zipper into a garment',
      'How to insert pockets into a skirt or dress'
    ],
    duration: '4 Weeks',
    level: 'Beginner',
    rating: 4.9,
    reviews: 124,
    selarLink: 'https://selar.com/m/thesilem?lang=en'
  },
  {
    id: 2,
    title: 'Intermediate course',
    image: 'https://i.imgur.com/68ZBljU.jpeg',
    price: '6,000 Naira',
    venue: 'Telegram',
    timeline: 'You have access to all the course videos when registration is completed. This allows you to learn and practice at your own pace',
    format: 'Detailed videos are sent. This course is NOT live',
    description: 'Elevate your skills with advanced techniques.',
    learnings: [
      'How to take accurate body measurements',
      'How to draft a basic bodice & basic sleeve',
      'How to make a blouse & pencil skirt with lining',
      'How to cut & sew a 180 degree circle skirt',
      'How to cut & sew a 360 degree circle skirt',
      'How to cut & sew a 720 degree peplum top with perfect padding',
      'How to create box pleats, knife pleats & inverted pleats',
      'How to cut & sew a gathers skirt',
      'How to draft, cut & sew a mermaid skirt',
      'How to draft, cut & sew different types of sleeves including puff/balloon sleeve, flare sleeve & gathers sleeve'
    ],
    duration: '4 Weeks',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 98,
    selarLink: 'https://selar.com/m/thesilem?lang=en'
  },
  {
    id: 3,
    title: 'Trouser Course',
    image: 'https://i.imgur.com/G9S1QWm.jpeg',
    price: '5,000 Naira',
    venue: 'Telegram',
    timeline: 'You have access to all the course videos when registration is completed. This allows you to learn and practice at your own pace',
    format: 'Detailed videos are sent. This course is NOT live',
    description: 'Master drafting and sewing trousers and jumpsuits.',
    learnings: [
      'How to take accurate body measurements for trouser and jumpsuit',
      'How to draft a palazzo trouser pattern',
      'How to sew a palazzo trouser with side pockets and back zipper',
      'How to draft a pencil trouser pattern',
      'How to sew a pencil trouser with side pockets and a zipper fly',
      'How to draft a shorts pattern',
      'How to sew shorts with side pockets',
      'How to draft a basic bodice and basic sleeve pattern',
      'How to sew a simple blouse with waist darts and long sleeves for a jumpsuit',
      'How to draft a trouser specifically for a jumpsuit',
      'How to sew a perfect fitting jumpsuit'
    ],
    duration: '4 Weeks',
    level: 'Intermediate',
    rating: 5.0,
    reviews: 215,
    selarLink: 'https://selar.com/m/thesilem?lang=en'
  },
  {
    id: 4,
    title: 'Bustier Course',
    image: 'https://i.imgur.com/wvnGp4j.jpeg',
    price: '7,000 Naira',
    venue: 'Telegram',
    timeline: 'You have access to all the course videos when registration is completed. This allows you to learn and practice at your own pace',
    format: 'Detailed videos are sent. This course is NOT live',
    description: 'Draft and construct flawless bustiers.',
    learnings: [
      'How to take accurate body measurements for bustier',
      'How to draft & sew an armhole princess dart bustier',
      'How to draft & sew a tube armhole princess dart bustier dress',
      'How to draft & sew a six pieces top with shoulder princess dart bustier',
      'How to draft & sew an off shoulder bustier peplum top with sleeves',
      'How to draft & sew a straight dart bustier dress with yoke',
      'How to draft & sew a straight dart bustier top with bust caging and under bust corset',
      'How to perfectly pad and iron your bustier for the best fit',
      'Tips and tricks for making bustiers for plus'
    ],
    duration: '4 Weeks',
    level: 'Intermediate',
    rating: 4.8,
    reviews: 178,
    selarLink: 'https://selar.com/m/thesilem?lang=en'
  },
  {
    id: 5,
    title: 'Corset Course',
    image: 'https://i.imgur.com/3C75nKm.jpeg',
    price: '5,000 Naira',
    venue: 'Telegram',
    timeline: 'You have access to all the course videos when registration is completed. This allows you to learn and practice at your own pace',
    format: 'Detailed videos are sent. This course is NOT live',
    description: 'Master intricate corset making structure and boning.',
    learnings: [
      'How to take accurate body measurements',
      'How to draft a basic bodice',
      'How to draft, cut and sew a cupped corset using ready made bra cups',
      'How to draft, cut and sew a cupped corset by creating your own bra cups',
      'How to draft, cut and sew a Victorian corset',
      'How to insert bonings, loops & eyelets',
      'How to create a basque waistline and join it to a skirt to create a dress',
      'How to insert yoke into your corset',
      'Boning and waist snatching techniques'
    ],
    duration: '4 Weeks',
    level: 'Advanced',
    rating: 5.0,
    reviews: 342,
    selarLink: 'https://selar.com/m/thesilem?lang=en'
  },
  {
    id: 6,
    title: 'Draping Course',
    image: 'https://i.imgur.com/lTzK3u5.jpeg',
    price: '8,000 Naira',
    venue: 'Telegram',
    timeline: 'You have access to all the course videos when registration is completed. This allows you to learn and practice at your own pace',
    format: 'Detailed videos are sent. This course is NOT live',
    description: 'Art of draping for unique, fluid designs.',
    learnings: [
      'How to drape a basic bodice with underbust dart and side dart using two methods',
      'How to drape a cowl neckline top',
      'How to drape a bustier with & without a yoke',
      'How to drape a cupped corset with & without a yoke',
      'How to create patterns from a draped piece',
      'How to neatly finish a draped piece without turning it into a pattern',
      'How to drape using a masking tape',
      'How to pad a dress form to any size and shape you want',
      'Bonus Class: How to drape wrapper illusion fabric (3 methods)'
    ],
    duration: '4 Weeks',
    level: 'Advanced',
    rating: 4.9,
    reviews: 89,
    selarLink: 'https://selar.com/m/thesilem?lang=en'
  },
  {
    id: 7,
    title: 'Size Chart Course',
    image: 'https://i.imgur.com/z8FvD96.jpeg',
    price: '4,000 Naira',
    venue: 'Telegram',
    timeline: 'You have access to all the course videos when registration is completed. This allows you to learn and practice at your own pace',
    format: 'Detailed videos are sent. This course is NOT live',
    description: 'Create professional and accurate size charts.',
    learnings: [
      'How to carry out the research required to develop your size chart',
      'How to determine the right measurement system to use for your brand',
      'How to determine your target audience and the measurements required for them',
      'How to determine the measurements to include in your size chart',
      'How to get the exact measurement values to include in your size chart'
    ],
    duration: '4 Weeks',
    level: 'Beginner',
    rating: 5.0,
    reviews: 42,
    selarLink: 'https://selar.com/m/thesilem?lang=en'
  },
  {
    id: 8,
    title: 'Hip & Butt Padding Course',
    image: 'https://i.imgur.com/YrwoUhG.jpeg',
    price: '6,000 Naira',
    venue: 'Telegram',
    timeline: 'You have access to all the course videos when registration is completed. This allows you to learn and practice at your own pace',
    format: 'Detailed videos are sent. This course is NOT live',
    description: 'Techniques for natural-looking enhancements.',
    learnings: [
      'Accurate measurements for hip & butt padding',
      'How to draft a pencil skirt for hip & butt padding',
      'How to draft hip & butt padding',
      'How to create hip & butt padding using foam, fiber & warden (breast pad)',
      'How to attach foam padding to a skirt',
      'How to attach fiber padding to a skirt',
      'How to attach warden padding to a skirt',
      'How to create different padding width (medium padding & heavy padding)',
      'How to sew & finish up your pencil skirt with hip & butt padding (in-seam finishing).'
    ],
    duration: '4 Weeks',
    level: 'Advanced',
    rating: 4.9,
    reviews: 156,
    selarLink: 'https://selar.com/m/thesilem?lang=en'
  }
];

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState<typeof COURSES[0] | null>(null);
  const { t } = useTranslation();

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 bg-peach-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">{t('courses.title')}</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
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
                className="bg-white shadow-lg cursor-pointer group overflow-hidden rounded-2xl"
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
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
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
                      <span className="font-medium text-black">{course.rating}</span>
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
      <section className="py-24 bg-peach-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4">Made by Our Students</h2>
            <div className="w-24 h-1 bg-peach-500 mx-auto rounded-full mb-6" />
            <p className="text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
              Take a look at the stunning outfits our online students have crafted after taking our courses.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[ 
              'https://i.imgur.com/AlbjtGg.jpeg',
              'https://i.imgur.com/NJMhJ76.jpeg',
              'https://i.imgur.com/sIMTrIY.jpeg',
              'https://i.imgur.com/gZn4lpT.jpeg',
              'https://i.imgur.com/8iU5Qcx.jpeg',
              'https://i.imgur.com/ygoR7XY.jpeg',
              'https://i.imgur.com/r1ZE2Qc.jpeg',
              'https://i.imgur.com/qOs4ICT.jpeg',
              'https://i.imgur.com/htozf6G.jpeg',
              'https://i.imgur.com/Lo5wOWO.jpeg',
              'https://i.imgur.com/ZLYo70b.jpeg',
              'https://i.imgur.com/p9JTOuz.jpeg',
              'https://i.imgur.com/rsq88Ys.jpeg',
              'https://i.imgur.com/ZSyZEJV.jpeg',
              'https://i.imgur.com/1UmegXn.jpeg',
              'https://i.imgur.com/ceY789f.jpeg',
              'https://i.imgur.com/jLCb8fL.jpeg',
              'https://i.imgur.com/gPG9Yzh.jpeg'
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
                className="bg-white w-full max-w-5xl h-[80vh] flex relative shadow-2xl rounded-2xl overflow-hidden"
              >
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white/50 hover:bg-white text-black rounded-full transition-colors backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Fixed Image Left */}
                <div className="w-1/3 h-full flex-shrink-0">
                  <img 
                    src={selectedCourse.image} 
                    alt={selectedCourse.title} 
                    className="w-full h-full object-cover rounded-none"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Scrollable Details Right */}
                <div className="w-2/3 h-full overflow-y-auto p-12">
                  <h2 className="text-3xl font-bold uppercase tracking-wider mb-6">{selectedCourse.title}</h2>
                  
                  <div className="space-y-4 text-sm text-gray-600 mb-6">
                    <p><strong>Timeline:</strong> {selectedCourse.timeline}</p>
                    <p><strong>Duration:</strong> {selectedCourse.duration}</p>
                    <p><strong>Level:</strong> {selectedCourse.level}</p>
                    <p><strong>Rating:</strong> {selectedCourse.rating} ({selectedCourse.reviews} reviews)</p>
                    <p><strong>Venue:</strong> {selectedCourse.venue}</p>
                  </div>
                  
                  <div className="h-px bg-gray-200 my-6" />

                  <h3 className="font-bold uppercase tracking-wider mb-3">About the course</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedCourse.description}
                  </p>

                  <h3 className="font-bold uppercase tracking-wider mb-3">What You'll Learn</h3>
                  <ul className="space-y-2 mb-6">
                    {selectedCourse.learnings.map((learning, index) => (
                      <li key={index} className="flex items-start space-x-3 text-gray-600">
                        <span className="text-peach-500 font-bold mt-1">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="h-px bg-gray-200 my-6" />
                  
                  <div className="flex items-center justify-between mt-8">
                    <div>
                      <p className="text-sm text-gray-500 uppercase tracking-widest mb-1">Course Fee</p>
                      <p className="text-3xl font-bold">{selectedCourse.price}</p>
                    </div>
                    <a 
                      href={selectedCourse.selarLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 bg-black text-white font-bold uppercase tracking-wider hover:bg-peach-500 hover:text-white transition-colors"
                    >
                      Buy on Selar
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
