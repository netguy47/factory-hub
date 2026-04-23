export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 mt-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-slate-500 font-mono">
          © {new Date().getFullYear()} Sovereign Software Factory.
        </p>
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-slate-600 uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Systems Operational
        </div>
      </div>
    </footer>
  );
}
