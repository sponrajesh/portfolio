export default function ReactProjects() {
  const projects = [
    { title: 'Project One', description: 'A React app with modern tooling.', href: '#' },
    { title: 'Project Two', description: 'Another project using hooks and context.', href: '#' },
    { title: 'Project Three', description: 'Full-stack or UI showcase.', href: '#' },
  ];

  return (
    <section
      id="react-projects"
      className="min-h-screen px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-2">
          React Projects
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Web applications and UI experiments built with React.
        </p>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.title}>
              <a
                href={p.href}
                className="block p-5 rounded-xl bg-white dark:bg-slate-800/80 shadow-sm
                  border border-slate-200 dark:border-slate-700
                  hover:border-indigo-300 dark:hover:border-indigo-600 hover:shadow-md
                  transition-all duration-200"
              >
                <h3 className="font-semibold text-slate-800 dark:text-slate-100">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                  {p.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
