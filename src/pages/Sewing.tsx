import { motion } from 'motion/react';
import { PageTransition } from '@/components/ui/PageTransition';
import { Link } from 'react-router-dom';
import Courses from './Courses';
import Tutorials from './services/Tutorials';

export default function Sewing() {
  return (
    <PageTransition>
      <section className="pt-32 pb-16 bg-black text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-widest uppercase mb-6">Learn Sewing</h1>
          <div className="w-24 h-1 bg-peach-500 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
            Master the art of fashion design with our expert-led courses and tutorials.
          </p>
        </div>
      </section>
      <div className="py-24">
        <Courses />
      </div>
      <div className="py-24 bg-gray-50">
        <Tutorials />
      </div>
    </PageTransition>
  );
}
