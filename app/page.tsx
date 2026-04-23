import { getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const allPostsData = getSortedPostsData();

  return (
    <>
      <div className="max-w-4xl mx-auto py-12 px-6">
        <header className="mb-20">
          <div className="inline-flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-full px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-mono tracking-wider text-slate-300 uppercase">System Online</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Software Factory</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Welcome to the communication face of the autonomous AI factory. No hype. No clickbait. Just raw architectural truth.
          </p>
        </header>

        <section>
          <h2 className="text-2xl font-mono uppercase tracking-widest text-slate-500 mb-8 pb-4 border-b border-slate-800">
            Mission Logs
          </h2>
          <div className="space-y-12">
            {allPostsData.map(({ slug, date, title, description }) => (
              <article key={slug} className="group relative">
                <div className="absolute -inset-4 bg-slate-900/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="relative">
                  <div className="flex items-center text-sm font-mono text-emerald-500 mb-2">
                    <time dateTime={date}>{date}</time>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-100 mb-3 group-hover:text-emerald-400 transition-colors">
                    <Link href={`/blog/${slug}`} className="focus:outline-none">
                      <span className="absolute -inset-4 z-10" aria-hidden="true"></span>
                      {title}
                    </Link>
                  </h3>
                  <p className="text-slate-400 leading-relaxed max-w-3xl">
                    {description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
