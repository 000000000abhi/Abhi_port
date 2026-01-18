import Header1 from '@/components/headers/Header1';
import Footer1 from '@/components/footers/Footer1';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default function BlogPost({ params }: PageProps) {
  const { id } = params;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link 
            href="/blog"
            className="text-blue-600 hover:text-blue-700 mb-8 inline-block"
          >
            ← Back to Blog
          </Link>
          
          <article className="mt-8">
            <div className="mb-8">
              <span className="text-sm text-blue-600 font-semibold">Category</span>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-4">
                Blog Post {id}
              </h1>
              <p className="text-gray-500">January 15, 2024</p>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                This is the introduction paragraph of the blog post. It provides a brief 
                overview of what readers can expect to learn.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Heading 2</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Here is the main content of your blog post. You can write about various 
                topics related to web development, programming, or technology.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Subheading</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Continue writing your blog post content here. Add code examples, 
                images, or other relevant information.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conclusion</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Wrap up your blog post with key takeaways and conclusions.
              </p>
            </div>
          </article>
        </section>
      </main>
      <Footer1 />
    </div>
  );
}
