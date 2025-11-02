import React from 'react';
import Header from './Header';
import { Sparkles } from 'lucide-react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1">{children}</main>
      
      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-aurora-500 via-aurora-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
                <Sparkles className="text-white" size={16} />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-aurora-600 to-purple-600 bg-clip-text text-transparent">
                Aurora
              </span>
            </div>
            <div className="text-gray-500 dark:text-gray-400 text-sm">
              © 2024 Aurora. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;