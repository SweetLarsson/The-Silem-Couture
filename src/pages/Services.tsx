import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Scissors, HeartHandshake, Palette, Video, BookOpen } from 'lucide-react';
import { PageTransition } from '@/components/ui/PageTransition';
import { cn } from '@/lib/utils';

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
    title: 'Online Courses',
    description: 'Master the art of fashion design with our comprehensive online courses, from beginners to master class.',
    icon: BookOpen,
    path: '/courses'
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
      <section className="pt-32 pb-16 bg-white text-black text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">Our Services</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-800 max-w-2xl mx-auto font-light">
            Discover the range of professional fashion and tailoring services we offer.
          </p>
        </div>
      </section>

      <section className="py-24 bg-peach-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
            {ALL_SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "bg-white p-0 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl rounded-2xl overflow-hidden flex flex-col h-full",
                  index >= 3 && ALL_SERVICES.length === 5 ? "lg:col-span-1 lg:first:col-start-1" : ""
                )}
              >
                <Link to={service.path} className="flex flex-col h-full w-full p-10">
                  <div className="w-16 h-16 mx-auto bg-peach-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-peach-500 group-hover:text-white transition-colors">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
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
