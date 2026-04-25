import { motion } from 'motion/react';
import { PageTransition } from '@/components/ui/PageTransition';

export default function Bridals() {
  const images = [
    'https://i.imgur.com/xsW9m87.jpeg',
    'https://i.imgur.com/gjeALsw.jpeg',
    'https://i.imgur.com/nGxZ2Wg.jpeg',
    'https://i.imgur.com/1nwJ6De.jpeg',
    'https://i.imgur.com/RFBCOZP.jpeg',
    'https://i.imgur.com/FHXTQf0.jpeg'
  ];

  const whatsappMessage = encodeURIComponent("Hello! I would like to order a Custom Made Wedding Dress.");

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">Bridals</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            A beautiful gallery of wedding dresses we have crafted for our past brides to make their special day unforgettable.
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
                  alt={`Bridal dress ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
             <a 
               href={`https://wa.me/2348060901607?text=${whatsappMessage}`} 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-block px-12 py-5 bg-black text-white dark:bg-white dark:text-black font-bold uppercase tracking-wider hover:bg-peach-500 dark:hover:bg-peach-500 hover:text-white transition-all transform hover:-translate-y-1 rounded-full text-sm shadow-xl"
             >
               Order a Custom Made Wedding Dress
             </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
