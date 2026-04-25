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

          <h2 className="text-lg font-bold mt-4">STANDARD SIZE CHART (INCHES)</h2>
          <table className="w-full text-left border-collapse mt-4">
            <thead>
              <tr className="border-b">
                <th className="p-2">Size</th>
                <th className="p-2">Bust</th>
                <th className="p-2">Waist</th>
                <th className="p-2">Hips</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">XS</td>
                <td className="p-2">32</td>
                <td className="p-2">24</td>
                <td className="p-2">34</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">S</td>
                <td className="p-2">34</td>
                <td className="p-2">26</td>
                <td className="p-2">36</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">M</td>
                <td className="p-2">36</td>
                <td className="p-2">28</td>
                <td className="p-2">38</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">L</td>
                <td className="p-2">38</td>
                <td className="p-2">30</td>
                <td className="p-2">40</td>
              </tr>
              <tr className="border-b">
                <td className="p-2">XL</td>
                <td className="p-2">40</td>
                <td className="p-2">32</td>
                <td className="p-2">42</td>
              </tr>
            </tbody>
          </table>
          
          <p className="mt-6 italic text-xs text-center">Note: As our pieces are bespoke, we will adjust measurements based on the specific design and your personal preferences.</p>
        </div>
      </div>
    </div>
  );
};
