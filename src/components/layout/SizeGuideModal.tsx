import React from 'react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[80vh] rounded-3xl p-8 relative overflow-y-scroll scrollbar-hide" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="prose dark:prose-invert max-w-none text-sm">
          <h1 className="text-2xl font-bold mb-4">SIZE GUIDE</h1>
          <p className="mb-6">To ensure the perfect fit for your custom garment, please refer to our measurement guide below.</p>
          
          <h2 className="text-lg font-bold mt-4">HOW TO MEASURE</h2>
          <ul className="list-decimal pl-5 mb-6">
            <li><strong>Bust:</strong> Measure around the fullest part of your bust, keeping the measuring tape parallel to the floor.</li>
            <li><strong>Waist:</strong> Measure around your natural waistline, the narrowest part of your torso.</li>
            <li><strong>Hips:</strong> Measure around the fullest part of your hips, approximately 8 inches below your waist.</li>
          </ul>

          <h2 className="text-lg font-bold mt-4">Women’s Size Guide (UK Sizes)</h2>
          <table className="w-full text-left border-collapse mt-4 text-xs">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-2">UK Size</th>
                <th className="p-2">Label</th>
                <th className="p-2">Bust (in)</th>
                <th className="p-2">Waist (in)</th>
                <th className="p-2">Hips (in)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { uk: '6', label: 'XS', bust: '31–32', waist: '23–24', hips: '33–34' },
                { uk: '8', label: 'S', bust: '33–34', waist: '25–26', hips: '35–36' },
                { uk: '10', label: 'M', bust: '35–36', waist: '27–28', hips: '37–38' },
                { uk: '12', label: 'L', bust: '37–38', waist: '29–30', hips: '39–40' },
                { uk: '14', label: 'XL', bust: '39–40', waist: '31–32', hips: '41–42' },
                { uk: '16', label: 'XXL', bust: '41–42', waist: '33–34', hips: '43–44' },
              ].map((row) => (
                <tr key={row.uk} className="border-b">
                  <td className="p-2">{row.uk}</td>
                  <td className="p-2">{row.label}</td>
                  <td className="p-2">{row.bust}</td>
                  <td className="p-2">{row.waist}</td>
                  <td className="p-2">{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 className="text-lg font-bold mt-8">Women’s International Size Conversion</h2>
          <table className="w-full text-left border-collapse mt-4 text-xs">
            <thead>
              <tr className="border-b bg-gray-100">
                <th className="p-2">UK Size</th>
                <th className="p-2">Label</th>
                <th className="p-2">US</th>
                <th className="p-2">EU</th>
                <th className="p-2">AU</th>
                <th className="p-2">Bust (in)</th>
                <th className="p-2">Waist (in)</th>
                <th className="p-2">Hips (in)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { uk: '6', label: 'XS', us: '2', eu: '34', au: '6', bust: '31–32', waist: '23–24', hips: '33–34' },
                { uk: '8', label: 'S', us: '4', eu: '36', au: '8', bust: '33–34', waist: '25–26', hips: '35–36' },
                { uk: '10', label: 'M', us: '6', eu: '38', au: '10', bust: '35–36', waist: '27–28', hips: '37–38' },
                { uk: '12', label: 'L', us: '8', eu: '40', au: '12', bust: '37–38', waist: '29–30', hips: '39–40' },
                { uk: '14', label: 'XL', us: '10', eu: '42', au: '14', bust: '39–40', waist: '31–32', hips: '41–42' },
                { uk: '16', label: 'XXL', us: '12', eu: '44', au: '16', bust: '41–42', waist: '33–34', hips: '43–44' },
              ].map((row) => (
                <tr key={row.uk} className="border-b">
                  <td className="p-2">{row.uk}</td>
                  <td className="p-2">{row.label}</td>
                  <td className="p-2">{row.us}</td>
                  <td className="p-2">{row.eu}</td>
                  <td className="p-2">{row.au}</td>
                  <td className="p-2">{row.bust}</td>
                  <td className="p-2">{row.waist}</td>
                  <td className="p-2">{row.hips}</td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <p className="mt-6 italic text-xs text-center">Note: As our pieces are bespoke, we will adjust measurements based on the specific design and your personal preferences.</p>
        </div>
      </div>
    </div>
  );
};
