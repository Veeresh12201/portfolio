export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800/60 py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400 dark:text-zinc-600">
        <p>
          <span className="text-zinc-500 dark:text-zinc-500">~/veeresh</span>
          {" "}·{" "}
          <span>&copy; {year}</span>
        </p>
        <p>
          Built with{" "}
          <span className="text-zinc-600 dark:text-zinc-400">Next.js</span>
          {" & "}
          <span className="text-zinc-600 dark:text-zinc-400">TypeScript</span>
        </p>
      </div>
    </footer>
  );
}
