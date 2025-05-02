import Head from 'next/head';
import Header from './Header';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} – Queer Stories` : 'Queer Stories'}</title>
        <meta name="description" content="Coming-of-age stories & resources for LGBTQ+ youth" />
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto px-4 py-8">{children}</main>
      <footer className="text-center text-sm py-4">
        © {new Date().getFullYear()} Queer Stories Project
      </footer>
    </>
  );
}
