import { motion } from 'motion/react';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { useTranslation } from 'react-i18next';

const POSTS = [
  {
    id: 1,
    title: 'The Evolution of the Modern Corset',
    excerpt: 'Explore how the corset has transformed from a restrictive undergarment to a symbol of empowerment and high fashion.',
    image: 'https://i.imgur.com/3C75nKm.jpeg',
    date: 'Oct 15, 2023',
    author: 'Silem Team',
    category: 'Fashion History'
  },
  {
    id: 2,
    title: 'Mastering the Art of Draping',
    excerpt: 'Tips and techniques for creating fluid, sculptural designs directly on the dress form without flat patterns.',
    image: 'https://i.imgur.com/lTzK3u5.jpeg',
    date: 'Nov 02, 2023',
    author: 'Silem Team',
    category: 'Techniques'
  },
  {
    id: 3,
    title: 'Building a Sustainable Wardrobe',
    excerpt: 'Why investing in bespoke, high-quality pieces is the ultimate step towards sustainable fashion.',
    image: 'https://i.imgur.com/DBjXsBz.jpeg',
    date: 'Nov 28, 2023',
    author: 'Silem Team',
    category: 'Sustainability'
  }
];

export default function Blog() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 bg-peach-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">{t('blog.title')}</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="relative h-[60vh] min-h-[400px] overflow-hidden group cursor-pointer rounded-2xl">
            <img 
              src="https://i.imgur.com/FC145Zc.jpeg" 
              alt="Featured Post" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-16">
              <span className="text-peach-400 font-bold uppercase tracking-widest text-sm mb-4">{t('blog.featured')}</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight">
                Defining Luxury: The Craftsmanship Behind Our Latest Collection
              </h2>
              <p className="text-gray-300 max-w-2xl mb-8 line-clamp-2 text-lg">
                Step into our atelier and discover the meticulous process of creating our most ambitious collection to date, from initial sketches to final fittings.
              </p>
              <div className="flex items-center text-white space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Dec 10, 2023</span>
                </div>
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Silem Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-2xl font-bold tracking-widest uppercase mb-12">{t('blog.recent')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, index) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden mb-6 rounded-2xl">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white text-black px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full">
                    {post.category}
                  </div>
                </div>
                
                <div className="flex-grow flex flex-col">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 space-x-4 text-xs uppercase tracking-widest mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 group-hover:text-peach-500 transition-colors leading-tight">
                    {post.title}
                  </h4>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto flex items-center space-x-2 text-sm font-bold uppercase tracking-wider text-black dark:text-white group-hover:text-peach-500 transition-colors">
                    <span>{t('blog.read_more')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
