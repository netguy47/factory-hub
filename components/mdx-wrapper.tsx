import { MDXRemote } from 'next-mdx-remote/rsc';

const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const href = props.href || '';
    
    // Regex to extract YouTube video ID
    const ytMatch = href.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i);
    const videoId = ytMatch ? ytMatch[1] : null;

    if (videoId) {
      return (
        <div className="my-8 w-full aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl ring-1 ring-white/5">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoId}`}
            title="Embedded Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          ></iframe>
        </div>
      );
    }
    
    // External links open in new tab securely
    const isExternal = href.startsWith('http');
    return (
      <a 
        {...props} 
        target={isExternal ? "_blank" : undefined} 
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {props.children}
      </a>
    );
  }
};

interface MdxWrapperProps {
  source: string;
}

export function MdxWrapper({ source }: MdxWrapperProps) {
  return <MDXRemote source={source} components={components} />;
}
