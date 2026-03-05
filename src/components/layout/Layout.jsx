import { Outlet } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import FloatingMenu from '../layout/FloatingMenu';

const PROFILE_IMAGE = '/profile.jpg'; // Place your image in public/profile.jpg

export default function Layout() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Theme toggle - top left */}
      <button
        type="button"
        onClick={toggleTheme}
        className="fixed left-6 top-6 z-50 p-2.5 rounded-full
          bg-white dark:bg-slate-800 shadow-md border border-slate-200 dark:border-slate-700
          text-slate-600 dark:text-slate-300
          hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500
          transition-all duration-200"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
      </button>

      {/* Main content: max-w-4xl container; menu is sticky at bottom */}
      <main className="max-w-4xl mx-auto px-6 min-h-screen pb-36">
        <Outlet />
        <div className="sticky bottom-8 flex justify-end pt-4">
          <FloatingMenu profileImageSrc={PROFILE_IMAGE} />
        </div>
      </main>
    </div>
  );
}
