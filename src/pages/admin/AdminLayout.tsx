import { Outlet, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, ShoppingBag, Users, BookOpen, FileText, BarChart, LogOut, Settings } from 'lucide-react';

const ADMIN_LINKS = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Products', path: '/admin/products', icon: ShoppingBag },
  { name: 'Orders', path: '/admin/orders', icon: ShoppingBag },
  { name: 'Customers', path: '/admin/customers', icon: Users },
  { name: 'Courses', path: '/admin/courses', icon: BookOpen },
  { name: 'Blog', path: '/admin/blog', icon: FileText },
  { name: 'Analytics', path: '/admin/analytics', icon: BarChart },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export function AdminLayout() {
  const location = useLocation();

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 flex flex-col">
        <div className="p-6 border-b border-gray-200 dark:border-gray-800">
          <Link to="/" className="text-xl font-bold tracking-widest uppercase text-black dark:text-white">
            The Silem
          </Link>
          <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Admin Panel</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {ADMIN_LINKS.map((link) => {
              const isActive = location.pathname === link.path || (link.path !== '/admin' && location.pathname.startsWith(link.path));
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                      isActive 
                        ? 'bg-peach-100 text-peach-700 dark:bg-peach-900/30 dark:text-peach-400 font-medium' 
                        : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        
        <div className="p-4 border-t border-gray-200 dark:border-gray-800">
          <button className="flex items-center space-x-3 px-3 py-2 w-full text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 flex items-center justify-between px-8">
          <h2 className="text-lg font-medium">Dashboard</h2>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-peach-500 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </header>
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
