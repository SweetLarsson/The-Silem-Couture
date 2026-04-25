import { motion } from 'motion/react';
import { PageTransition } from '@/components/ui/PageTransition';

export default function Bespoke() {
  const images = [
    'https://i.imgur.com/FC145Zc.jpeg',
    'https://i.imgur.com/DBjXsBz.jpeg',
    'https://i.imgur.com/yb2cNBy.jpeg',
    'https://i.imgur.com/fK1nZUz.jpeg',
    'https://i.imgur.com/vvISSuZ.jpeg',
    'https://i.imgur.com/ltPPO0e.jpeg'
  ];

  const whatsappMessage = encodeURIComponent("Hello! I would like to order a bespoke outfit.");

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">Bespoke Tailoring</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Discover a gallery of breathtaking outfits we have crafted for our past clients, tailored perfectly to their unique measurements and style.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl group shadow-lg"
              >
                <img 
                  src={src} 
                  alt={`Bespoke outfit ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
             <a 
               href={`https://wa.me/message/TE4G3XZ3KAOMM1`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block px-12 py-5 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-wider hover:bg-peach-500 dark:hover:bg-peach-500 hover:text-white transition-all transform hover:-translate-y-1 rounded-full text-sm shadow-xl"
             >
               Order a Bespoke Outfit
             </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
