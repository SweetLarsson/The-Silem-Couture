import { motion } from 'motion/react';
import { PageTransition } from '@/components/ui/PageTransition';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-32 pb-16 bg-peach-100">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">{t('about.title')}</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative">
                <img 
                  src="https://i.imgur.com/yb2cNBy.jpeg" 
                  alt="The Silem Couture Studio" 
                  className="w-full h-auto object-cover shadow-2xl rounded-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-peach-200 -z-10 hidden md:block rounded-2xl" />
                <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-peach-500 -z-10 hidden md:block rounded-2xl" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <h2 className="text-3xl font-bold tracking-widest uppercase">{t('about.vision_title')}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.story_p1')}
              </p>
              
              <h2 className="text-3xl font-bold tracking-widest uppercase pt-6">{t('about.mission_title')}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.mission_desc')}
              </p>

              <h2 className="text-3xl font-bold tracking-widest uppercase pt-6">{t('about.story_title')}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {t('about.story_p2')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-widest uppercase mb-4">{t('about.values_title')}</h2>
            <div className="w-24 h-1 bg-peach-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-light text-peach-500 mb-6">01</div>
              <h3 className="text-xl font-bold uppercase tracking-wider">{t('about.val1_title')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('about.val1_desc')}</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-light text-peach-500 mb-6">02</div>
              <h3 className="text-xl font-bold uppercase tracking-wider">{t('about.val2_title')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('about.val2_desc')}</p>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-light text-peach-500 mb-6">03</div>
              <h3 className="text-xl font-bold uppercase tracking-wider">{t('about.val3_title')}</h3>
              <p className="text-gray-400 leading-relaxed">{t('about.val3_desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
