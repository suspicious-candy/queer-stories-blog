// pages/stories/[slug].js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/stories'));
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(/\.mdx?$/, '')
    }
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), 'content/stories', `${params.slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { data: meta, content } = matter(source);
  const mdx = await serialize(content);
  return { props: { meta, mdx } };
}

export default function StoryPage({ meta, mdx }) {
  return (
    <Layout title={meta.title}>
      <article className="prose max-w-none mx-auto py-8">
        <h1>{meta.title}</h1>
        <p className="text-gray-500">{new Date(meta.date).toLocaleDateString()}</p>
        <MDXRemote {...mdx} />
      </article>
    </Layout>
  );
}
