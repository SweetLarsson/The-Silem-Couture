import { motion } from 'motion/react';
import { PageTransition } from '@/components/ui/PageTransition';

export default function Illustration() {
  const images = [
    'https://i.imgur.com/gjeALsw.jpeg',
    'https://i.imgur.com/xsW9m87.jpeg',
    'https://i.imgur.com/nGxZ2Wg.jpeg',
    'https://i.imgur.com/aVG4kjH.jpeg',
    'https://i.imgur.com/idSpVoy.jpeg',
    'https://i.imgur.com/FHXTQf0.jpeg'
  ];

  const whatsappMessage = encodeURIComponent("Hello! I would like to order a Fashion Illustration.");

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">Fashion Illustration</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-10 rounded-full" />
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p>
              Our Fashion Illustration service doesn’t just sketch beautiful designs; we help you visualize your vision from concept to creation. Whether you have a rough idea or a fully formed look, we bring it to life with detailed illustrations. Then we take it a step further by expertly sewing the final piece.
            </p>
            <p className="font-medium text-white italic">
              From sketch to stitch, we’ve got you covered.
            </p>
          </div>
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
                  alt={`Fashion Illustration ${index + 1}`} 
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
               Order a Fashion Illustration
             </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
