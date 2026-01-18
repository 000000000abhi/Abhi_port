import Header1 from '@/components/headers/Header1';
import Footer1 from '@/components/footers/Footer1';
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js 14',
    excerpt: 'Learn the fundamentals of Next.js 14 and how to build modern web applications.',
    date: 'January 15, 2024',
    category: 'Web Development',
  },
  {
    id: 2,
    title: 'React Best Practices in 2024',
    excerpt: 'Explore the latest best practices for building React applications.',
    date: 'January 10, 2024',
    category: 'React',
  },
  {
    id: 3,
    title: 'TypeScript Tips for Better Code',
    excerpt: 'Improve your TypeScript skills with these practical tips and tricks.',
    date: 'January 5, 2024',
    category: 'TypeScript',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
            Blog
          </h1>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on web development
          </p>
          
          <div className="space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="block bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
}
