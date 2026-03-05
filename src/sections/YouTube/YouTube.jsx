export default function YouTube() {
  const links = [
    { title: 'Channel', description: 'Tutorials and demos.', href: 'https://youtube.com' },
    { title: 'Playlist', description: 'React or Blender series.', href: '#' },
  ];

  return (
    <section
      id="youtube"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          YouTube
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Tutorials, walkthroughs, and video content.
        </p>
        <ul className="grid gap-6 sm:grid-cols-2">
          {links.map((l) => (
            <li key={l.title}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-5 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 shadow-sm
                  border border-slate-200/80 dark:border-slate-700
                  hover:border-slate-300 dark:hover:border-slate-600 hover:shadow-md
                  transition-all duration-200"
              >
                <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                  {l.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {l.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
