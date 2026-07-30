import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { useTranslation } from 'react-i18next';

const GALLERY_IMAGES = [
  'https://i.imgur.com/fK1nZUz.jpeg',
  'https://i.imgur.com/vvISSuZ.jpeg',
  'https://i.imgur.com/ltPPO0e.jpeg',
  'https://i.imgur.com/xsW9m87.jpeg',
  'https://i.imgur.com/gjeALsw.jpeg',
  'https://i.imgur.com/nGxZ2Wg.jpeg',
  'https://i.imgur.com/1nwJ6De.jpeg',
  'https://i.imgur.com/RFBCOZP.jpeg',
  'https://i.imgur.com/FHXTQf0.jpeg',
  'https://i.imgur.com/idSpVoy.jpeg',
  'https://i.imgur.com/aVG4kjH.jpeg',
  'https://i.imgur.com/oZxUBMM.jpeg',
  'https://i.imgur.com/bgLhKMT.jpeg',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { t } = useTranslation();

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">{t('gallery.title')}</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            {t('gallery.subtitle')}
          </p>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {GALLERY_IMAGES.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-2xl"
                onClick={() => setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium uppercase tracking-widest text-sm border border-white px-6 py-2 rounded-full">{t('gallery.view')}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded gallery image"
              className="max-w-full max-h-[90vh] object-contain rounded-3xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
