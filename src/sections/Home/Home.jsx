export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 tracking-tight mb-4">
          Hi, I'm{' '}
          <span className="text-indigo-600 dark:text-indigo-400">Your Name</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Developer & creator. I build web apps with React, 3D work in Blender,
          and share tutorials on YouTube.
        </p>
        <p className="mt-6 text-sm text-slate-500 dark:text-slate-500">
          Use the menu on the right to explore React projects, Blender work, and
          my YouTube channel.
        </p>
      </div>
    </section>
  );
}
