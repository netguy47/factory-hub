import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { MdxWrapper } from '@/components/mdx-wrapper';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const postData = getPostData(slug);

  const jsonLd = postData.structured_data || {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": postData.title,
    "datePublished": postData.date,
    "description": postData.description
  };

  return (
    <article className="max-w-3xl mx-auto py-12 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mb-8">
        <Link href="/" className="text-emerald-500 hover:text-emerald-400 font-mono text-sm uppercase tracking-wider transition-colors">
          &larr; Back to Command Center
        </Link>
      </div>
      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-100 mb-4">{postData.title}</h1>
        <div className="flex items-center text-slate-400 font-mono text-sm">
          <time dateTime={postData.date}>{postData.date}</time>
        </div>
      </header>
      <div className="prose prose-invert prose-emerald max-w-none prose-headings:font-bold prose-a:text-emerald-400">
        <MdxWrapper source={postData.content} />
      </div>
    </article>
  );
}
