export default function NotificationBar2() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-sm">
          <span className="mr-2">💼</span>
          <span>Available for freelance projects. Let's build something amazing together!</span>
          <a href="/hire-me" className="ml-4 underline hover:no-underline">Get in touch →</a>
        </div>
      </div>
    </div>
  );
}
