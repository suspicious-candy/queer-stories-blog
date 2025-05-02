import Layout from '../components/Layout';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';

export async function getStaticProps() {
  const mdxSource = fs.readFileSync(path.join(process.cwd(),'content/resources.mdx'),'utf8');
  const { data: meta, content } = matter(mdxSource);
  const mdx = await serialize(content);
  return { props: { meta, mdx } };
}

export default function Resources({ meta, mdx }) {
  return (
    <Layout title={meta.title || 'Resources'}>
      <h1 className="text-3xl font-bold mb-4">{meta.title || 'Resources'}</h1>
      <MDXRemote {...mdx} />
    </Layout>
  );
}
