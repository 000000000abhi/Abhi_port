import Link from 'next/link';
import Header1 from '@/components/headers/Header1';
import Footer1 from '@/components/footers/Footer1';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <main className="flex-grow flex items-center justify-center">
        <section className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-semibold"
          >
            Go Back Home
          </Link>
        </section>
      </main>
      <Footer1 />
    </div>
  );
}
