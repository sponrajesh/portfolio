import { Home, User, Boxes, Youtube, FileStack } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const MENU_ITEMS = [
  { path: '/', label: 'Home', icon: Home },
  // paths are intentionally *relative*; BrowserRouter's basename handles prefixing
  { path: 'react-projects', label: 'React Projects', icon: FileStack },
  { path: 'blender-projects', label: 'Blender Projects', icon: Boxes },
  { path: 'youtube', label: 'YouTube', icon: Youtube },
];

// Semicircle (off-circle): items along the top half only (flat edge at bottom)
const RADIUS = 64;
const SEMICIRCLE_START = 180; // left
const SEMICIRCLE_END = 360;   // right (through top)

function getSemicirclePosition(index) {
  const count = MENU_ITEMS.length;
  const angleDeg = SEMICIRCLE_START + (index / (count - 1)) * (SEMICIRCLE_END - SEMICIRCLE_START);
  const angleRad = (angleDeg * Math.PI) / 180;
  return {
    x: Math.cos(angleRad) * RADIUS,
    y: Math.sin(angleRad) * RADIUS,
  };
}

export default function FloatingMenu({ profileImageSrc, className = '' }) {

  return (
    <aside
      className={`flex items-center justify-end z-40 ${className}`}
      aria-label="Portfolio navigation"
    >
      <div className="relative w-[180px] h-[140px] flex items-end justify-center">
        {/* Teal semicircle (off-circle design) – curved top, flat bottom */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160px] h-[80px]
            bg-teal-500/20 dark:bg-teal-400/15 rounded-t-[80px] border-2 border-teal-500/40 dark:border-teal-400/30"
          aria-hidden
        />

        {/* Smaller circular icons in semicircle pattern */}
        {MENU_ITEMS.map((item, i) => {
          const { x, y } = getSemicirclePosition(i);
          const Icon = item.icon;

          return (
            <div
              key={item.path}
              className="absolute left-1/2 top-1/2 flex items-center justify-center group"
              style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
            >
              <NavLink
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `
                  flex items-center justify-center w-10 h-10 rounded-full
                  bg-white dark:bg-slate-800
                  border-2 border-teal-500 dark:border-teal-400
                  text-slate-600 dark:text-slate-300
                  hover:bg-teal-500 hover:text-white hover:border-teal-500 dark:hover:bg-teal-500 dark:hover:border-teal-500
                  focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900
                  transition-all duration-300 ease-out shadow-md
                  ${isActive ? 'bg-teal-500 text-white border-teal-500 dark:bg-teal-500 dark:border-teal-500' : ''}
                `}
                aria-label={item.label}
              >
                <Icon className="w-4 h-4" strokeWidth={2} />
              </NavLink>
              <span
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md
                  text-xs font-medium whitespace-nowrap
                  bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900
                  opacity-0 pointer-events-none group-hover:opacity-100
                  transition-opacity duration-200 shadow-lg"
              >
                {item.label}
              </span>
            </div>
          );
        })}

        {/* Center: profile image circle (main circle) */}
        <div
          className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2
            w-16 h-16 rounded-full overflow-hidden
            ring-4 ring-white dark:ring-slate-800 shadow-xl
            bg-slate-200 dark:bg-slate-600 border-2 border-teal-500/50 dark:border-teal-400/50"
        >
          {profileImageSrc ? (
            <img
              src={profileImageSrc}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <User className="w-7 h-7 text-slate-500 dark:text-slate-400" strokeWidth={2} />
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
