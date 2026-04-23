import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md z-50">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
            <div className="w-2 h-2 rounded-sm bg-emerald-400 animate-pulse" />
          </div>
          <span className="font-semibold text-slate-200 tracking-tight">
            Sovereign <span className="text-slate-500">Factory</span>
          </span>
        </Link>
        <nav className="flex gap-6 text-sm font-mono text-slate-400 uppercase tracking-widest">
          <Link href="/" className="hover:text-emerald-400 transition-colors">Logs</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-200 transition-colors">GitHub</a>
        </nav>
      </div>
    </header>
  );
}
