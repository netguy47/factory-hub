import { MDXRemote } from 'next-mdx-remote/rsc';

interface MdxWrapperProps {
  source: string;
}

export function MdxWrapper({ source }: MdxWrapperProps) {
  // To add interactive elements later, this component can be converted to 'use client'
  // or customized with custom components passed to MDXRemote.
  return <MDXRemote source={source} />;
}
