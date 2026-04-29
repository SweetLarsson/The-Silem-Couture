import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Scissors, BookOpen, Video, Star, Youtube, PenTool, Palette } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { useTranslation } from 'react-i18next';

import { HeartHandshake } from 'lucide-react';

const SERVICES = [
  {
    title: 'Bespoke Tailoring',
    description: 'We craft exquisite, made-to-measure outfits tailored to fit you perfectly for any special event.',
    icon: Scissors,
    path: '/services/bespoke'
  },
  {
    title: 'Bridal Wear',
    description: 'Stunning, custom-made wedding dresses crafted to make your special day truly unforgettable.',
    icon: HeartHandshake,
    path: '/services/bridals'
  },
  {
    title: 'Fashion Illustration',
    description: 'From sketch to stitch, we bring your vision to life through detailed, professional illustrations.',
    icon: Palette,
    path: '/services/illustration'
  },
  {
    title: 'Online Courses',
    description: 'Comprehensive fashion education covering basic to advanced tailoring techniques and designs.',
    icon: BookOpen,
    path: '/courses'
  },
  {
    title: 'Sewing Tutorials',
    description: 'Bite-sized, practical YouTube tutorials focused on mastering specific sewing and design techniques.',
    icon: Video,
    path: '/services/tutorials'
  },
];

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Fashion Student',
    content: 'The Silem Couture courses completely transformed my understanding of pattern making. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Amina Bello',
    role: 'Client',
    content: 'My bespoke dress was absolutely stunning. The attention to detail and craftsmanship is unmatched.',
    rating: 5,
  },
  {
    name: 'Grace O.',
    role: 'Designer',
    content: 'Learning draping from The Silem Couture gave me the confidence to start my own brand.',
    rating: 4,
  },
  {
    name: 'Jessica Williams',
    role: 'Bride',
    content: 'They made my dream wedding dress a reality! It fit perfectly and the details were impeccable.',
    rating: 5,
  },
  {
    name: 'David Okeke',
    role: 'Fashion Enthusiast',
    content: 'Their YouTube tutorials are pure gold. Clear, concise, and incredibly helpful for beginners.',
    rating: 4,
  },
  {
    name: 'Chioma Adebayo',
    role: 'Boutique Owner',
    content: 'The ready-to-wear collection is always a hit at my store. True luxury and elegance.',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Fashion Illustrator',
    content: 'The illustration guides opened up a whole new world of creativity for me to express my designs.',
    rating: 4,
  },
];

export default function Home() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center md:justify-start pt-20 md:pt-24 items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.imgur.com/DBjXsBz.jpeg"
            alt="The Silem Couture Luxury Fashion"
            className="w-full h-full object-cover object-center blur-sm scale-110 no-fx"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto flex flex-col items-center">
          <Link to="/" className="inline-block -mt-12 md:-mt-24 mb-4 md:mb-2 text-white">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="https://i.imgur.com/qa5gS0Z.png"
              alt="The Silem Couture"
              className="w-80 md:w-[35rem] lg:w-[45rem] mx-auto brightness-0 invert object-contain scale-[1.2] md:scale-[1.3] origin-top no-fx"
              referrerPolicy="no-referrer"
            />
          </Link>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto mt-6 md:mt-8"
          >
            {t('hero.subtitle')}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-16 md:pb-24"
          >
            <Link to="/designs" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-medium uppercase tracking-wider hover:bg-peach-200 transition-colors rounded-full text-center">
              View Designs
            </Link>
            <Link to="/sewing" className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white font-medium uppercase tracking-wider hover:bg-white hover:text-black transition-colors rounded-full text-center">
              Learn Sewing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-peach-100" id="designs">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4">{t('services.title')}</h2>
            <div className="w-24 h-1 bg-peach-500 mx-auto rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-0 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden"
              >
                <Link to={service.path} className="flex flex-col h-full w-full p-10">
                  <div className="w-16 h-16 mx-auto bg-peach-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-peach-500 group-hover:text-white transition-colors">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fashion Design Preview */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4">{t('home.featured_collection')}</h2>
              <div className="w-24 h-1 bg-peach-500 rounded-full" />
            </div>
            <div className="hidden md:flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-gray-400 cursor-not-allowed">
              <span>{t('home.view_all')}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'https://i.imgur.com/OzR0jYt.jpeg',
              'https://i.imgur.com/CYd3QYF.jpeg',
              'https://i.imgur.com/PV8Vg7T.jpeg',
              'https://i.imgur.com/gyoqSbn.jpeg',
              'https://i.imgur.com/qm4UqiX.jpeg',
              'https://i.imgur.com/nyvqwX3.jpeg',
            ].map((src, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4 rounded-2xl">
                  <img 
                    src={src} 
                    alt="Fashion Design" 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-6 py-3 bg-white text-black text-sm font-bold uppercase tracking-wider rounded-full">{t('home.quick_view')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden text-gray-400 cursor-not-allowed">
            <span className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider">
              <span>{t('home.view_all_collection')}</span>
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2">
              <img 
                src="https://i.imgur.com/yb2cNBy.jpeg" 
                alt="About The Silem Couture" 
                className="w-full h-auto object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4">{t('home.brand_story')}</h2>
                <div className="w-24 h-1 bg-peach-500 rounded-full" />
              </div>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                {t('home.brand_story_p1')}
              </p>
              <p className="text-gray-300 leading-relaxed text-lg font-light">
                {t('home.brand_story_p2')}
              </p>
              <Link to="/about" className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-peach-400 hover:text-white transition-colors">
                <span>{t('home.discover_world')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Highlights */}
      <section className="py-24" id="sewing">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4">{t('home.watch_learn')}</h2>
            <div className="w-24 h-1 bg-peach-500 mx-auto mb-6 rounded-full" />
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t('home.watch_learn_desc')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aspect-video bg-gray-100 relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/3XHVFw5Kqnw" 
                title="YouTube video player 1" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-100 relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/w2SIQoY9YB4" 
                title="YouTube video player 2" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-100 relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/gFdiSyaXLtY" 
                title="YouTube video player 3" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-100 relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/S9na7fQlrGU" 
                title="YouTube video player 4" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-100 relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/RrOGqchHZPE" 
                title="YouTube video player 5" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <div className="aspect-video bg-gray-100 relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/1K_fdKJKKk0" 
                title="YouTube video player 6" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://youtube.com/@thesilem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-red-600 text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors rounded-full"
            >
              <Youtube className="w-5 h-5" />
              <span>{t('home.subscribe_channel')}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-peach-100" id="testimonials">
        <div className="w-full">
          <div className="text-center mb-16 px-4 md:px-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-widest uppercase mb-4">{t('home.client_voices')}</h2>
            <div className="w-24 h-1 bg-peach-500 mx-auto rounded-full" />
          </div>
          
          <div className="relative overflow-hidden w-full group py-8 -my-8">
            <div className="transition-transform duration-500 ease-out group-hover:scale-[1.02]">
              <div className="flex w-max animate-marquee">
                {[...Array(2)].map((_, arrayIndex) => (
                  <div key={arrayIndex} className="flex gap-8 px-4">
                    {TESTIMONIALS.map((testimonial, index) => (
                      <div
                        key={index}
                        className="bg-white p-8 text-center shadow-sm rounded-2xl w-80 md:w-96 flex-shrink-0 flex flex-col justify-between"
                      >
                        <div className="flex justify-center space-x-1 mb-6 text-peach-500">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-6 leading-relaxed flex-grow">
                          "{testimonial.content}"
                        </p>
                        <div>
                          <h4 className="font-bold uppercase tracking-wider text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{testimonial.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
