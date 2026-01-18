export default function NotificationBar3() {
  return (
    <div className="bg-gray-900 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <span className="mr-2">✨</span>
            <span>Check out my latest blog post on modern web development!</span>
          </div>
          <a href="/blog" className="underline hover:no-underline">Read more →</a>
        </div>
      </div>
    </div>
  );
}
