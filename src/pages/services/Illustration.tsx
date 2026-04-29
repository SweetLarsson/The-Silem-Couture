import { motion } from 'motion/react';
import { PageTransition } from '@/components/ui/PageTransition';

export default function Illustration() {
  const images = [
    'https://i.imgur.com/cZ7JBI1.jpeg',
    'https://i.imgur.com/AcbW9KM.png',
    'https://i.imgur.com/MadBMGS.jpeg',
    'https://i.imgur.com/H91VSBX.png',
    'https://i.imgur.com/Tos8WQt.jpeg',
    'https://i.imgur.com/4zLcarv.png',
    'https://i.imgur.com/mpXGxin.jpeg',
    'https://i.imgur.com/gNzCX4d.png',
    'https://i.imgur.com/V6AWkwQ.jpeg',
    'https://i.imgur.com/btXdzo8.png',
    'https://i.imgur.com/l4iXPy0.jpeg',
    'https://i.imgur.com/PQfZqHx.png'
  ];

  const whatsappMessage = encodeURIComponent("Hello! I would like to order a Fashion Illustration.");

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-white text-black text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">Fashion Illustration</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-10 rounded-full" />
          
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-800 font-light leading-relaxed">
            <p>
              Our Fashion Illustration service doesn’t just sketch beautiful designs; we help you visualize your vision from concept to creation. Whether you have a rough idea or a fully formed look, we bring it to life with detailed illustrations. Then we take it a step further by expertly sewing the final piece.
            </p>
            <p className="font-medium text-black italic">
              From sketch to stitch, we’ve got you covered.
            </p>
          </div>
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
                  alt={`Fashion Illustration ${index + 1}`} 
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
               Order a Fashion Illustration
             </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
