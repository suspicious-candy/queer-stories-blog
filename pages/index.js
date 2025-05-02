import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import Link from 'next/link';
import { format } from 'date-fns';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('content/stories'));
  const posts = files
    .map(fn => {
      const slug = fn.replace('.mdx','');
      const source = fs.readFileSync(path.join('content/stories', fn), 'utf8');
      const { data: meta } = matter(source);
      return { slug, meta };
    })
    .sort((a,b) => new Date(b.meta.date) - new Date(a.meta.date)); // newest first

  return { props: { posts } };
}

export default function Home({ posts }) {
  return (
    <Layout>
      {/* Hero */}
      <section className="text-center py-16 bg-gradient-to-b from-purple-50 to-white">
        <h1 className="text-5xl font-extrabold mb-4">Queer Journeys</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-700">
          Personal coming-of-age stories, resources, and community guidance—all in one place.
        </p>
      </section>

      {/* Latest Stories */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6">Latest Stories</h2>
        <div className="space-y-10">
          {posts.map(({ slug, meta }) => (
            <article key={slug} className="border-b pb-8">
              <h3 className="text-2xl font-semibold">
                <Link href={`/stories/${slug}`} className="hover:text-purple-600">
                  {meta.title}
                </Link>
              </h3>
              <time className="text-sm text-gray-500">
                {format(new Date(meta.date), 'MMMM d, yyyy')}
              </time>
              <p className="mt-2 text-gray-700">{meta.excerpt}</p>
              <Link href={`/stories/${slug}`} className="mt-4 inline-block font-medium text-purple-600 hover:underline">
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Resources Teaser */}
      <section className="bg-purple-50 py-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Support?</h2>
          <p className="mb-6 text-gray-700">Hotlines, guides, and emergency resources for LGBTQ+ folks.</p>
          <Link href="/resources" className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            View Resources
          </Link>
        </div>
      </section>
    </Layout>
  );
}

