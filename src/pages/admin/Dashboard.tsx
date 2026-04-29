import { ShoppingBag, Users, DollarSign, TrendingUp } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    { name: 'Total Revenue', value: '₦4,500,000', icon: DollarSign, change: '+12.5%' },
    { name: 'Orders', value: '156', icon: ShoppingBag, change: '+8.2%' },
    { name: 'Customers', value: '2,405', icon: Users, change: '+15.3%' },
    { name: 'Course Sales', value: '₦1,200,000', icon: TrendingUp, change: '+5.4%' },
  ];

  return (
    <div className="space-y-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 bg-peach-100 text-peach-600 rounded-full flex items-center justify-center">
                <stat.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{stat.name}</h3>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Recent Orders</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-500 border-b border-gray-200">
                <tr>
                  <th className="pb-3 font-medium">Order ID</th>
                  <th className="pb-3 font-medium">Customer</th>
                  <th className="pb-3 font-medium">Product</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr key={i}>
                    <td className="py-4 font-medium">#ORD-{1000 + i}</td>
                    <td className="py-4">Jane Doe</td>
                    <td className="py-4">Silk Draped Gown</td>
                    <td className="py-4">
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs font-medium">
                        Processing
                      </span>
                    </td>
                    <td className="py-4 font-medium">₦150,000</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Top Selling Courses</h3>
          <div className="space-y-4">
            {[
              { name: 'Corset Making', sales: 124, price: '₦75,000' },
              { name: 'Trouser Masterclass', sales: 98, price: '₦45,000' },
              { name: 'Draping Masterclass', sales: 85, price: '₦100,000' },
            ].map((course, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                <div>
                  <h4 className="font-medium text-sm">{course.name}</h4>
                  <p className="text-xs text-gray-500">{course.sales} sales</p>
                </div>
                <span className="font-bold text-sm text-peach-600">{course.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
