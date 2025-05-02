import Link from 'next/link';

export default function PostList({ posts }) {
  return (
    <ul className="space-y-6">
      {posts.map(({ slug, meta }) => (
        <li key={slug} className="border-b pb-4">
          <Link
            href={`/stories/${slug}`}
            className="text-xl font-semibold hover:text-purple-700"
          >
            {meta.title}
          </Link>
          <p className="text-gray-600">{meta.excerpt}</p>
        </li>
      ))}
    </ul>
  );
}