import React from 'react';
import { X } from 'lucide-react';

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-3xl p-8 relative overflow-y-scroll scrollbar-hide" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="prose max-w-none text-sm">
          <h1 className="text-2xl font-bold mb-4">SHIPPING & RETURNS POLICY</h1>
          <p className="text-xs mb-6">Last updated: [25 April, 2026]</p>
          
          <h2 className="text-lg font-bold mt-4">1. PRODUCTION</h2>
          <p>All bespoke outfits are made-to-order. Production begins only after 50% payment and confirmation of measurements.</p>
          <p>Production time is 7–21 business days (depending on design complexity).</p>
          <p>Full payment for the outfit and shipping fees must be completed before shipping. Orders will not be shipped without full payment confirmation.</p>

          <hr className="my-4 border-gray-200" />
          
          <h2 className="text-lg font-bold mt-4">2. FITTINGS</h2>
          <p>Fittings are an important part of achieving the perfect fit for bespoke pieces.</p>
          <ul className="list-disc pl-5">
            <li>Clients within our location (Lagos, Nigeria) may be invited for 1–2 scheduled fittings during the production process.</li>
            <li>Fitting dates will be communicated in advance and must be honored to avoid delays.</li>
            <li>Clients who are not within our location or are unable to attend fittings will have their outfits made strictly based on the measurements provided.</li>
          </ul>
          <p className="mt-2 text-xs">Please note: We are not responsible for fit issues if measurements provided are inaccurate or if fittings are missed. Additional fittings or major design changes after production has begun may attract extra charges.</p>
          
          <hr className="my-4 border-gray-200" />

          <h2 className="text-lg font-bold mt-4">3. SHIPPING</h2>
          <p>Shipping Time: 3–10 business days (location dependent)</p>
          <p>Once your order is completed, you will receive a shipping confirmation email/message with tracking details.</p>
          <p>Shipping fees are calculated based on your location and order size.</p>
          <p className="text-xs mt-2">Please note: International orders may be subject to customs duties or import taxes. These are the responsibility of the customer. We are not responsible for delays caused by courier services or customs clearance.</p>

          <hr className="my-4 border-gray-200" />

          <h2 className="text-lg font-bold mt-4">4. ORDER ACCURACY</h2>
          <p>Customers are responsible for providing accurate Measurements, Delivery address, Contact information. We are not liable for issues arising from incorrect details provided.</p>
          
          <hr className="my-4 border-gray-200" />

          <h2 className="text-lg font-bold mt-4">5. RETURNS & EXCHANGES</h2>
          <p>Due to the custom nature of our designs: All bespoke/custom orders are non-refundable and non-returnable.</p>
          <p>However, your satisfaction matters. If there is a fault on our end (e.g., incorrect design, major construction defect), please contact us within 48 hours of delivery with clear photos. We will assess the issue and offer Adjustments, or A suitable resolution at our discretion.</p>
          
          <hr className="my-4 border-gray-200" />

          <h2 className="text-lg font-bold mt-4">6. ALTERATIONS</h2>
          <p>Minor fit adjustments may be required for bespoke pieces. We recommend using a local tailor if needed.</p>
          
          <hr className="my-4 border-gray-200" />

          <h2 className="text-lg font-bold mt-4">7. DAMAGED OR DEFECTIVE ITEMS</h2>
          <p>If your order arrives damaged: Notify us within 48 hours of delivery, include photos and your order details. We will review and resolve the issue promptly.</p>
          
          <hr className="my-4 border-gray-200" />

          <h2 className="text-lg font-bold mt-4">8. DIGITAL PRODUCTS (COURSES & TUTORIALS)</h2>
          <p>All digital products, including sewing courses and downloadable content, are Non-refundable, Non-exchangeable. Once access has been granted, no cancellations or refunds will be issued.</p>
          
          <hr className="my-8 border-gray-300" />

          <h3 className="font-bold text-center">CONTACT US</h3>
          <p className="text-center">For any shipping or return inquiries, please contact: silem.couture@gmail.com</p>
          
          <hr className="my-8 border-gray-300" />

          <p className="text-center italic text-xs">By placing an order, you agree to the terms outlined in this policy.</p>
        </div>
      </div>
    </div>
  );
};
