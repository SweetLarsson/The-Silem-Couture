import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Scissors, HeartHandshake, Palette, Video } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';

const ALL_SERVICES = [
  {
    title: 'Bespoke Tailoring',
    description: 'We craft exquisite, made-to-measure outfits tailored to fit you perfectly for any special event.',
    icon: Scissors,
    path: '/services/bespoke'
  },
  {
    title: 'Bridals',
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
    title: 'Tutorials',
    description: 'Bite-sized, practical YouTube tutorials focused on mastering specific sewing and design techniques.',
    icon: Video,
    path: '/services/tutorials'
  },
];

export default function Services() {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">Our Services</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Discover the range of professional fashion and tailoring services we offer.
          </p>
        </div>
      </section>

      <section className="py-24 bg-peach-100 dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
            {ALL_SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-black p-0 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden"
              >
                <Link to={service.path} className="flex flex-col h-full w-full p-10">
                  <div className="w-16 h-16 mx-auto bg-peach-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-6 group-hover:bg-peach-500 group-hover:text-white transition-colors">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
