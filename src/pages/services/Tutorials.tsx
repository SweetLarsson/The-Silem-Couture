import { motion } from 'motion/react';
import { PageTransition } from '@/components/ui/PageTransition';

export default function Tutorials() {
  const videos = [
    "https://www.youtube.com/embed/3XHVFw5Kqnw",
    "https://www.youtube.com/embed/w2SIQoY9YB4",
    "https://www.youtube.com/embed/gFdiSyaXLtY",
  ];

  const whatsappMessage = encodeURIComponent("Hello! I would like to make a Tutorial Request.");

  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">Tutorials</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            A selection of practical, bite-sized YouTube tutorial videos focused on mastering specific sewing and design techniques.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {videos.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="aspect-video bg-gray-100 dark:bg-gray-900 relative group cursor-pointer rounded-3xl overflow-hidden shadow-lg"
              >
                <iframe 
                  className="w-full h-full border-0" 
                  src={src} 
                  title={`YouTube tutorial ${index + 1}`} 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
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
               Make a Tutorial Request
             </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
