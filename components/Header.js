import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-4 mb-8">
      <div className="max-w-3xl mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link href="/">Queer Stories</Link>
        </h1>
        <nav className="space-x-4 flex items-center">
          <Link href="/">Home</Link>
          
          <Link href="/resources">Resources</Link>
          <Link href="/educators">Educators</Link>
          <Link href="/glossary">Glossary</Link>
          
        </nav>
      </div>
    </header>
  );
}
