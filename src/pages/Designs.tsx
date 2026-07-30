import { motion } from 'motion/react';
import { PageTransition } from '@/components/ui/PageTransition';
import { Link } from 'react-router-dom';

export default function Designs() {
  const images = [
    'https://i.imgur.com/NUnjDqI.jpeg',
    'https://i.imgur.com/jpBn3DW.jpeg',
    'https://i.imgur.com/tpj5DhY.jpeg',
    'https://i.imgur.com/mL7GS8D.jpeg',
    'https://i.imgur.com/MFUrU5T.jpeg',
    'https://i.imgur.com/VvabSjD.jpeg',
    'https://i.imgur.com/EbVtobn.jpeg',
    'https://i.imgur.com/YUI55fU.jpeg',
    'https://i.imgur.com/nBZdrwX.jpeg',
    'https://i.imgur.com/DZejhKa.jpeg',
    'https://i.imgur.com/esqLmo0.jpeg',
    'https://i.imgur.com/0MKiqY2.jpeg',
    'https://i.imgur.com/CYd3QYF.jpeg',
    'https://i.imgur.com/PV8Vg7T.jpeg',
    'https://i.imgur.com/gyoqSbn.jpeg',
    'https://i.imgur.com/qm4UqiX.jpeg',
    'https://i.imgur.com/nyvqwX3.jpeg'
  ];

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">Our Designs</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            A curated collection of our bespoke and bridal masterpieces.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
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
                  alt={`Design ${index + 1}`} 
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
               className="inline-block px-12 py-5 bg-black text-white font-bold uppercase tracking-wider hover:bg-peach-500 hover:text-white transition-all transform hover:-translate-y-1 rounded-full text-sm shadow-xl"
             >
               Order a Custom Made Outfit
             </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
