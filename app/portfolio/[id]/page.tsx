import Header1 from '@/components/headers/Header1';
import Footer1 from '@/components/footers/Footer1';
import Link from 'next/link';

interface PageProps {
  params: {
    id: string;
  };
}

export default function PortfolioSingle({ params }: PageProps) {
  const { id } = params;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header1 />
      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <Link 
            href="/portfolio"
            className="text-blue-600 hover:text-blue-700 mb-8 inline-block"
          >
            ← Back to Portfolio
          </Link>
          
          <div className="mt-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Project {id}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Detailed view of this portfolio project
            </p>
            
            <div className="bg-gray-200 aspect-video rounded-lg mb-8 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                This is a detailed description of the project. Here you can provide 
                information about the technologies used, challenges faced, and solutions implemented.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies Used</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                <li>React</li>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Responsive design</li>
                <li>Modern UI/UX</li>
                <li>Performance optimized</li>
                <li>Accessible components</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer1 />
    </div>
  );
}
